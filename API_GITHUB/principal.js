
class Model {
    constructor() 
    {
        console.log('Model chamada')
        
        

        this.input = fname.value; //this.date = chama.value;
        this.usuario = '';
        this.image = '';
        this.nome_repositorio = '';
        this.link_repositorio = '';
    }

    buscaImagem() // foi chamada pelo controlador
    {
        console.log('procurando...')

        let request = new XMLHttpRequest();

        request.open( 'GET', 'https://api.github.com/users/' + this.input, false);

        request.addEventListener('load', () =>
        {
            if ( request.status == 200 )
            {
               let dados = this.processar( request.responseText ); //chama o processamento e recebe os dados da API tratados

               this.atualiza( dados ); //recebe os dados em formato de objeto e pede para atualizar o site
               
            }
        })

        request.send();
    }

    processar( String ) // adapta os dados para que eu possa usar no codigo
    {
        console.log( 'Model está pensando' );

        let response = JSON.parse ( String );
        console.log(response);

        return response; // joga os dados em forma de objeto para a let dados

    }

    atualiza ( dados ) //os dados tratados sao enviados para as variaveis de visualizacao da pagina
    {
        console.log('Model atualizando as variveis do view');

        this.usuario = dados.login;
        this.image = dados.avatar_url;
    
        //this.nome_repositorio = dados.title; ainda nao ta certo
        this.link_repositorio = dados.html_url;
 
        /* this.date = dados.date;
        this.title = dados.title;
        this.image = dados.url;
        this.explanation = dados.explanation; */
    }

    getUsuario()
    {
        return this.usuario;
    }

    getLink()
    {
        return this.link_repositorio;
    }

    getImage()
    {
        return this.image;
    }

    /*getExplanation()
    {
        return this.explanation;
    } */
}

class View
{
    constructor() { console.log('View ativada')}

    alteraView ( model )
    {
        console.log('View recebendo tudo e alterando tudo')


        let sinistro = document.createElement('div'); //cria uma div sinistra para receber as variaveis atualizadas do API
        sinistro.setAttribute("id","conteudo");

        sinistro.innerHTML = 
        `
            <p >${model.getUsuario()}</p>
            <img src = ${model.getImage()} class = "avatar">
            <a href ="${model.getLink()}">${model.getLink()}</a>
        ` //crio para cada vez que aperta o botao elementos na div que recebem os dados da API

        document.body.appendChild( sinistro ); //ultima parte, adiciono a div sinistra no body da pagina mostrando para o usuario
    }
}



class Controller
{
    constructor(){ console.log( 'Controller aguardando...')} //vai falar isso assim que a let controlador for criada.

    pedeImagem() //executou a clicar no botao enviar
    {


        console.log('Controller enviando o pedido...')

        let pagina = new Model(); //cria um classe model
        pagina.buscaImagem(); //chama a funcao do API

        let view = new View(); // cria uma classe view
        view.alteraView( pagina ); //chama a funcao view
    }
}

//ativa o controlador
let controlador = new Controller();
//envia ao ser clicado

let btn_enviar = document.getElementById("enviar"); //trago o botao para o JS
btn_enviar.addEventListener('click', controlador.pedeImagem); // add um escutador ao botao para chamar os metodos
