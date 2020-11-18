let botao = document.getElementById("btn_inicio");

botao.addEventListener('click', criarForm);

function criarForm() {

    botao.remove(); //remove o botao clicado
    let texto_corpo = document.getElementById("texto_corpo");
    texto_corpo.innerText = "Escolha o seu Personagem.";
    

    let formulario = document.createElement('div'); //cria uma div para receber os 3 personagens
    formulario.setAttribute("id","div_personagem"); // cria uma id para os 3 personagens

        formulario.innerHTML = 
        `
        <div id = "personagem">
            <ul class = "nome">Alfredo</ul>
            <img class = "avatar" src = homem-de-negocios.png>
            <li class = "descricao" >Vendedor de meias</li>
            <li class = "frase" >"Meia ou inteira?"</li>
            <button id = "btn_alfredo"> Escolher </button>
        </div>
        <div id = "personagem">
            <ul class = "nome">Aisha</ul>
            <img class = "avatar" src = muculmano.png>
            <li class = "descricao" >Dona de si</li>
            <li class = "frase" >"Segura essa rapaz"</li>
            <button id = "btn_aisha"> Escolher </button>
        </div> 
        <div id = "personagem">
            <ul class = "nome">Rael</ul>
            <img class = "avatar" src = pastor.png>
            <li class = "descricao" >Filosofo</li>
            <li class = "frase" >"Programo logo existo"</li>
            <button id = "btn_rael"> Escolher </button>
        </div>     
        ` 

        document.body.appendChild( formulario )

        let selecionar = document.getElementById("btn_alfredo"); //adc um escutador para selecionar o personagem

        selecionar.addEventListener('click', fase1_alfredo);

        let selecionar1 = document.getElementById("btn_aisha"); //adc um escutador para selecionar o personagem

        selecionar1.addEventListener('click', fase1_aisha);

        let selecionar2 = document.getElementById("btn_rael"); //adc um escutador para selecionar o personagem

        selecionar2.addEventListener('click', fase1_rael);
   
}

function fase1_alfredo (){

    console.log("estou aqui");

    let corpo = document.getElementById("corpo");
    corpo.innerHTML = 
    `

    <div id = "jogo_alfredo">
        <h1 class = "texto_cumprimento">Ola, Alfredo</h1>
        <img class = "avatar2" src = homem-de-negocios.png>
        <p class = "texto_jogo" >Voce esta em casa, arrumando as suas meias, quando voce ouve a campainha tocando</p>
        <img class = "avatar2" src = porta.png>
        <li class = "frase" >"Hum, quem sera..."</li>
    </div>
    <div id = "botoes_alfredo"> 
        <button id = "btn_abrir"> Abrir a porta? </button>
        <button id = "btn_ignorar"> Ignorar ?</button>
    </div>
      
    `

    let abrir = document.getElementById("btn_abrir");
    abrir.addEventListener('click', game_over);

    let ignorar = document.getElementById("btn_ignorar");
    ignorar.addEventListener('click', fase2);

}

function fase1_aisha (){

    console.log("estou aqui");

    let corpo = document.getElementById("corpo");
    corpo.innerHTML = 
    `

    <div id = "jogo_alfredo">
        <h1 class = "texto_cumprimento">Ola, aisha</h1>
        <img class = "avatar2" src = muculmano.png>
        <p class = "texto_jogo" >Voce esta em casa, lutando contra o sistema, quando voce ouve a campainha tocando</p>
        <img class = "avatar2" src = porta.png>
        <li class = "frase" >"Hum, quem sera..."</li>
    </div>
    <div id = "botoes_alfredo"> 
        <button id = "btn_abrir"> Abrir a porta? </button>
        <button id = "btn_ignorar"> Ignorar ?</button>
    </div>
      
    `

    let abrir = document.getElementById("btn_abrir");
    abrir.addEventListener('click', game_over);

    let ignorar = document.getElementById("btn_ignorar");
    ignorar.addEventListener('click', fase2);

}

function fase1_rael (){


    let corpo = document.getElementById("corpo");
    corpo.innerHTML = 
    `

    <div id = "jogo_alfredo">
        <h1 class = "texto_cumprimento">Ola, Rael</h1>
        <img class = "avatar2" src = pastor.png>
        <p class = "texto_jogo" >Voce esta em casa, cogitando sobre a existencia do ser, quando voce ouve a campainha tocando</p>
        <img class = "avatar2" src = porta.png>
        <li class = "frase" >"Hum, quem sera..."</li>
    </div>
    <div id = "botoes_alfredo"> 
        <button id = "btn_abrir"> Abrir a porta? </button>
        <button id = "btn_ignorar"> Ignorar ?</button>
    </div>
      
    `

    let abrir = document.getElementById("btn_abrir");
    abrir.addEventListener('click', game_over);

    let ignorar = document.getElementById("btn_ignorar");
    ignorar.addEventListener('click', fase2);

}

function fase2 (){

    let corpo = document.getElementById("corpo");
    corpo.innerHTML = 
    `

    <div id = "jogo_alfredo">
        <h1 class = "texto_cumprimento">Ainda bem que voce ignorou...</h1>
        <img class = "avatar2" src = escolha.png>
        <p class = "texto_jogo" >Agora podemos escolher o que fazer</p>  
        <li class = "frase" >"Estou com sono e fome..."</li>
    </div>
    <div id = "botoes_alfredo"> 
        <button id = "btn_abrir"> Dormir e codar? </button>
        <button id = "btn_ignorar"> Codar e dormir? </button>
    </div>
      
    `

    let abrir = document.getElementById("btn_abrir");
    abrir.addEventListener('click', fase3);

    let ignorar = document.getElementById("btn_ignorar");
    ignorar.addEventListener('click', venceu);

}

function fase3 (){

    let corpo = document.getElementById("corpo");
    corpo.innerHTML = 
    `

    <div id = "jogo_alfredo">
        <h1 class = "texto_cumprimento">Você dormiu por 20 horas...<br> e esqueceu o computador ligado!</h1>
        <img class = "avatar2" src = computador.png>
        <p class = "texto_jogo" >O computador esta em chamas!</p>  
    </div>
    <div id = "botoes_alfredo"> 
        <button id = "btn_abrir"> Ligar para o bombeiro? </button>
        <button id = "btn_ignorar"> Codar em chamas? </button>
    </div>
      
    `

    let abrir = document.getElementById("btn_abrir");
    abrir.addEventListener('click', game_over2);

    let ignorar = document.getElementById("btn_ignorar");
    ignorar.addEventListener('click', venceu);
}

function venceu (){

    document.body.style.backgroundImage = "url('vitoria.jpg')";

    let corpo = document.getElementById("corpo");
    corpo.innerHTML =
    `

    <div id = "fim_jogo">
        <h1 class = "texto_cumprimento">MEU DEUS!!</h1>
        <img class = "avatar2" src = meditar.png>
        <p class = "texto_jogo" >Você transcendeu esse plano com o seu codigo. <br> Diga adeus ao Coronga World.</p>
    </div>
    <div id = "botoes_alfredo"> 
        <button id = "btn_abrir"> Gostaria de reencarnar? </button>
    </div>
      
    `
    let voltar = document.getElementById("btn_abrir");
    voltar.addEventListener('click', reloadThePage);

}

function game_over() {

    document.body.style.backgroundImage = "url('game-over.jpg')";

    let corpo = document.getElementById("corpo");
    corpo.innerHTML =
    `

    <div id = "fim_jogo">
        <h1 class = "texto_cumprimento">MEU DEUS!!</h1>
        <img class = "avatar2" src = fim-de-jogo.png>
        <p class = "texto_jogo" >Voce está com Coronga! Deveria ter trancado a porta...</p>
    </div>
    <div id = "botoes_alfredo"> 
        <button id = "btn_abrir"> Gostaria de tentar novamente? </button>
    </div>
      
    `
    let voltar = document.getElementById("btn_abrir");
    voltar.addEventListener('click', reloadThePage);

}

function game_over2() {

    document.body.style.backgroundImage = "url('game-over.jpg')";

    let corpo = document.getElementById("corpo");
    corpo.innerHTML =
    `

    <div id = "fim_jogo">
        <h1 class = "texto_cumprimento">MEU DEUS!!</h1>
        <img class = "avatar2" src = fim-de-jogo.png>
        <p class = "texto_jogo" >Voce nao entregou as tarefas! Deveria ter codado...</p>
    </div>
    <div id = "botoes_alfredo"> 
        <button id = "btn_abrir"> Gostaria de tentar novamente? </button>
    </div>
      
    `
    let voltar = document.getElementById("btn_abrir");
    voltar.addEventListener('click', reloadThePage);

}

function reloadThePage() {
    window.location.reload();
} 


