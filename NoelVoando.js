<!--==================================================
HANUKKAH VOADOR — EFEITO PARA SITES E BLOGS

Criadora: Com Mãos de Seda
Site oficial: https://www.commaosdesedaoficial.com

© 2026 Com Mãos de Seda.
Todos os direitos reservados.
==================================================-->


<!--==================================================
ANIMAÇÃO HANUKKAH
==================================================-->

<div aria-hidden="true" id="cms-hanukkah-animacao">

  <div id="cms-hanukkah-personagem">

    <!-- IMAGEM DECORATIVA / FUMAÇA -->
    <span class="cms-hanukkah-fumaca">

      <img
        alt=""
        class="cms-hanukkah-imagem-fumaca"
        src="https://cdn.pixabay.com/animation/2025/12/04/03/37/03-37-06-948_512.gif"
      />

    </span>


    <!-- PERSONAGEM PRINCIPAL -->
    <span class="cms-hanukkah-figura">

      <img
        alt="Personagem da animação de Hanukkah"
        class="cms-hanukkah-imagem"
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgdDzeM9H5CNf6BCWcab_7NGh-ne4vOtQSXARvjR8890HRm0g6GQmp0yOSHahDWwgb5-UinjqDZU_mWirKiTmSP2z2PZQSEB9o_q5h4P_yxcxaIEu9NUximKkhO_XDwwxqNQApyy8pGdAHLO16qnidwa2e-zwhnFhBZCFcja2oKS5OsNby5XGXtRtRvoJpY/s233/baixados%20%281%29.gif"
      />

    </span>


    <!-- IMAGEM DECORATIVA -->
    <span class="cms-hanukkah-decoracao">

      <img
        alt=""
        class="cms-hanukkah-imagem-decoracao"
        src="https://www.imagensanimadas.com/data/media/196/morcego-imagem-animada-0096.gif"
      />

    </span>


    <!-- MENSAGEM DE HANUKKAH -->
    <span class="cms-hanukkah-mensagem">
      ✨ Chag Hanukkah Sameach! ✨
    </span>

  </div>

</div>



<!--==================================================
ÁUDIO ORIGINAL — MANTIDO PARA SUBSTITUIÇÃO FUTURA
==================================================-->

<audio id="cms-hanukkah-audio" preload="none">

  <source
    src="https://cdn.pixabay.com/download/audio/2022/03/10/audio_6f422dd969.mp3"
    type="audio/mpeg"
  />

</audio>



<!--==================================================
CONTROLE COMPLETO
==================================================-->

<div id="cms-hanukkah-controle">


  <!-- CAIXA AZUL: BOTÃO + CRÉDITO -->

  <div id="cms-hanukkah-caixa">


    <!-- BOTÃO DE ATIVAÇÃO -->

    <button
      aria-label="Ativar ou desativar o som de Hanukkah"
      id="cms-hanukkah-som"
      type="button"
    >
      🔊 Ativar Som!

    </button>


    <!-- CRÉDITO -->

    <a
      href="https://wa.me/5521979356412?text=Midian%20que%20quero%20esse%20efeito%20de%20Hanukkah%20para%20o%20meu%20blog!"
      id="cms-hanukkah-credito"
      rel="noopener noreferrer"
      target="_blank"
      title="Efeito criado por Com Mãos de Seda"
    >
      © Com Mãos de Seda
    </a>


  </div>


  <!-- X PARA SUSPENDER POR 24 HORAS -->

  <button
    aria-label="Suspender a animação por 24 horas"
    id="cms-hanukkah-fechar"
    title="Suspender por 24 horas"
    type="button"
  >
    ✕
  </button>


</div>



<style>

/*==================================================
ÁREA DA ANIMAÇÃO
==================================================*/

#cms-hanukkah-animacao {

  position: fixed;
  inset: 0;

  width: 100%;
  height: 100%;

  overflow: hidden;
  pointer-events: none;

  z-index: 999990;

}


/*==================================================
PERSONAGEM
==================================================*/

#cms-hanukkah-personagem {

  position: absolute;

  left: -300px;
  top: 18%;

  display: flex;
  align-items: center;

  white-space: nowrap;
  opacity: 0;

  font-family: Arial, sans-serif;

  will-change: left, top, transform;

}


/* ANIMAÇÃO DO VOO */

#cms-hanukkah-personagem.voando {

  animation: cms-hanukkah-voo 9s linear forwards;

}


/*==================================================
IMAGEM PRINCIPAL
==================================================*/

.cms-hanukkah-figura {

  display: inline-block;

  line-height: 1;

  filter: drop-shadow(2px 5px 3px #555);

  animation: cms-hanukkah-balanco .3s ease-in-out infinite alternate;

}


.cms-hanukkah-imagem {

  display: block;

  width: 250px;
  height: auto;

  object-fit: contain;

}


/*==================================================
FUMAÇA / EFEITO DECORATIVO
==================================================*/

.cms-hanukkah-imagem-fumaca {

  display: block;

  width: 200px;
  height: auto;

}


.cms-hanukkah-fumaca {

  position: absolute;

  left: -45px;
  top: 65px;

  animation: cms-hanukkah-magica .7s ease-in-out infinite alternate;

}


/*==================================================
IMAGEM DECORATIVA
==================================================*/

.cms-hanukkah-decoracao {

  font-size: 48px;

  margin-left: -50px;

  transform: rotate(-15deg);

  width: 50px;

}


.cms-hanukkah-imagem-decoracao {

  display: block;

  width: 100%;
  height: auto;

  object-fit: contain;

}


/*==================================================
MENSAGEM DE HANUKKAH
==================================================*/

.cms-hanukkah-mensagem {

  position: absolute;

  top: -35px;
  left: 45px;

  padding: 7px 10px;

  border-radius: 12px;

  color: #fff;

  background: #123d70;

  border: 2px solid #e7c66a;

  font-size: 18px;

  font-family: Georgia, serif;

  font-weight: bold;

  transform: rotate(-8deg);

  animation: cms-hanukkah-mensagem  .35s ease-in-out infinite alternate;

  text-shadow: 1px 1px 2px #0005;

}



/*==================================================
CONTROLE FIXO
==================================================*/

#cms-hanukkah-controle {

  position: fixed !important;

  right: 12px !important;
  bottom: 110px !important;

  top: auto !important;
  left: auto !important;

  z-index: 2147483647 !important;

  isolation: isolate !important;

  display: block !important;

  width: max-content !important;

  max-width: calc(100vw - 24px) !important;

  height: auto !important;

  overflow: visible !important;

  margin: 0 !important;
  padding: 0 !important;

  box-sizing: border-box !important;

  visibility: visible !important;

}



/*==================================================
CAIXA AZUL ÚNICA
BOTÃO + CRÉDITO
==================================================*/

#cms-hanukkah-caixa {

  position: relative !important;

  display: block !important;

  width: max-content !important;

  max-width: calc(100vw - 24px) !important;

  box-sizing: border-box !important;

  margin: 0 !important;

  padding: 0 0 5px !important;

  background: #12345b !important;

  border: 1px solid #d9b65c !important;

  border-radius: 15px !important;

  box-shadow: 0 2px 10px #0003 !important;

  overflow: visible !important;

}



/*==================================================
BOTÃO DE ATIVAÇÃO
==================================================*/

#cms-hanukkah-caixa > #cms-hanukkah-som {

  position: relative !important;

  z-index: 1 !important;

  display: block !important;

  width: 100% !important;

  height: auto !important;

  box-sizing: border-box !important;

  margin: 0 !important;

  padding: 5px 8px !important;

  border: 0 !important;

  border-radius: 13px 13px 0 0 !important;

  background: transparent !important;

  color: #fff !important;

  font: bold 13px Arial, sans-serif !important;

  text-align: center !important;

  white-space: nowrap !important;

  cursor: pointer !important;

  box-shadow: none !important;

  transform: none !important;

  opacity: 1 !important;

  visibility: visible !important;

}


/* EFEITO DO BOTÃO */

#cms-hanukkah-caixa > #cms-hanukkah-som:hover {

  background: #1e4b7c !important;

}



/*==================================================
CRÉDITO
==================================================*/

#cms-hanukkah-caixa > #cms-hanukkah-credito {

  position: static !important;

  z-index: auto !important;

  display: block !important;

  width: 100% !important;

  height: auto !important;

  min-height: 13px !important;

  box-sizing: border-box !important;

  margin: 0 !important;

  padding: 0 5px !important;

  background: transparent !important;

  color: #e7c66a !important;

  font: 10px/1.4 Arial, sans-serif !important;

  text-align: center !important;

  text-decoration: none !important;

  opacity: .95 !important;

  visibility: visible !important;

  pointer-events: auto !important;

}


/* HOVER DO CRÉDITO */

#cms-hanukkah-caixa > #cms-hanukkah-credito:hover {

  color: #fff !important;

  text-decoration: underline !important;

  opacity: 1 !important;

}



/*==================================================
BOTÃO X
==================================================*/

#cms-hanukkah-controle > #cms-hanukkah-fechar {

  position: absolute !important;

  top: -10px !important;
  right: -10px !important;

  z-index: 2147483647 !important;

  isolation: isolate !important;

  display: flex !important;

  align-items: center !important;
  justify-content: center !important;

  width: 25px !important;
  height: 25px !important;

  box-sizing: border-box !important;

  margin: 0 !important;
  padding: 0 !important;

  border: 1px solid #fff !important;

  border-radius: 50% !important;

  background: #a47a24 !important;

  color: #fff !important;

  font: bold 13px Arial, sans-serif !important;

  line-height: 1 !important;

  cursor: pointer !important;

  box-shadow: 0 2px 5px #0003 !important;

  opacity: 1 !important;

  visibility: visible !important;

}


#cms-hanukkah-controle > #cms-hanukkah-fechar:hover {

  background: #795a19 !important;

}



/* FOCO DE ACESSIBILIDADE */

#cms-hanukkah-som:focus-visible,
#cms-hanukkah-fechar:focus-visible {

  outline: 3px solid #e7c66a !important;

  outline-offset: 3px !important;

}



/*==================================================
TRAJETO DO VOO
==================================================*/

@keyframes cms-hanukkah-voo {

  0% {

    left: -300px;

    top: 18%;

    opacity: 0;

    transform: rotate(-8deg) scale(.8);

  }

  8% {

    opacity: 1;

  }

  25% {

    top: 27%;

    transform: rotate(5deg) scale(.95);

  }

  50% {

    top: 15%;

    transform: rotate(-4deg) scale(1);

  }

  75% {

    top: 29%;

    transform: rotate(5deg) scale(.95);

  }

  92% {

    opacity: 1;

  }

  100% {

    left: calc(100vw + 300px);

    top: 18%;

    opacity: 0;

    transform: rotate(-5deg) scale(.8);

  }

}



/*==================================================
BALANÇO
==================================================*/

@keyframes cms-hanukkah-balanco {

  from {

    transform: translateY(-5px) rotate(-5deg);

  }

  to {

    transform: translateY(5px) rotate(5deg);

  }

}



/*==================================================
EFEITO MÁGICO
==================================================*/

@keyframes cms-hanukkah-magica {

  from {

    opacity: .45;

    transform: scale(.8) rotate(-10deg);

  }

  to {

    opacity: 1;

    transform: scale(1.2) rotate(10deg);

  }

}



/*==================================================
ANIMAÇÃO DA MENSAGEM
==================================================*/

@keyframes cms-hanukkah-mensagem {

  from {

    transform: rotate(-8deg) scale(1);

  }

  to {

    transform: rotate(5deg) scale(1.08);

  }

}



/*==================================================
AJUSTES PARA CELULAR
==================================================*/

@media (max-width: 600px) {

  #cms-hanukkah-personagem {

    top: 22%;

  }


  .cms-hanukkah-imagem {

    width: 68px;

  }


  .cms-hanukkah-imagem-fumaca {

    width: 35px;

  }


  .cms-hanukkah-decoracao {

    font-size: 34px;

  }


  .cms-hanukkah-imagem-decoracao {

    width: 100%;

  }


  .cms-hanukkah-mensagem {

    top: -28px;

    left: 28px;

    font-size: 12px;

    padding: 5px 7px;

  }


  .cms-hanukkah-fumaca {

    top: 45px;

  }


  #cms-hanukkah-controle {

    right: 8px !important;

    bottom: 150px !important;

    max-width: calc(100vw - 16px) !important;

  }


  #cms-hanukkah-caixa {

    max-width: calc(100vw - 16px) !important;

  }


  #cms-hanukkah-caixa > #cms-hanukkah-som {

    font-size: 12px !important;

    padding: 9px 11px !important;

  }


  #cms-hanukkah-caixa > #cms-hanukkah-credito {

    font-size: 10px !important;

  }

}



/*==================================================
ACESSIBILIDADE
==================================================*/

@media (prefers-reduced-motion: reduce) {

  #cms-hanukkah-personagem.voando {

    animation-duration: 1ms;

  }


  .cms-hanukkah-figura,
  .cms-hanukkah-fumaca,
  .cms-hanukkah-mensagem {

    animation: none;

  }

}

</style>



<script>

(function () {

  function iniciarHanukkah() {

    var personagem = document.getElementById(
      'cms-hanukkah-personagem'
    );

    var botao = document.getElementById(
      'cms-hanukkah-som'
    );

    var audio = document.getElementById(
      'cms-hanukkah-audio'
    );

    var credito = document.getElementById(
      'cms-hanukkah-credito'
    );

    var controle = document.getElementById(
      'cms-hanukkah-controle'
    );

    var caixa = document.getElementById(
      'cms-hanukkah-caixa'
    );

    var fechar = document.getElementById(
      'cms-hanukkah-fechar'
    );


    /* VERIFICA OS ELEMENTOS */

    if (
      !personagem ||
      !botao ||
      !audio ||
      !credito ||
      !controle ||
      !caixa ||
      !fechar ||
      botao.dataset.iniciado
    ) {

      return;

    }


    /*
     * MOVE SOMENTE O CONTROLE COMPLETO
     * PARA DENTRO DO BODY.
     */

    if (controle.parentElement !== document.body) {

      document.body.appendChild(controle);

    }


    /*
     * GARANTE QUE O BOTÃO E O CRÉDITO
     * FIQUEM DENTRO DA MESMA CAIXA.
     */

    if (botao.parentElement !== caixa) {

      caixa.appendChild(botao);

    }


    if (credito.parentElement !== caixa) {

      caixa.appendChild(credito);

    }


    if (fechar.parentElement !== controle) {

      controle.appendChild(fechar);

    }


    botao.dataset.iniciado = 'sim';


    /* VARIÁVEIS */

    var somAtivado = false;

    var temporizador = null;

    var vooAtual = null;

    var vooInicial = null;

    var temporizadorSuspensao = null;

    var voandoAgora = false;

    var suspensa = false;



    /*==================================================
    PARA A ANIMAÇÃO E O ÁUDIO
    ==================================================*/

    function pararHanukkah() {

      clearTimeout(temporizador);

      clearTimeout(vooAtual);

      clearTimeout(vooInicial);

      personagem.classList.remove('voando');

      voandoAgora = false;

      audio.pause();

      audio.currentTime = 0;

    }



    /*==================================================
    REPRODUZ O ÁUDIO ORIGINAL
    ==================================================*/

    function reproduzirSom() {

      if (!somAtivado || suspensa) return;

      audio.currentTime = 0;

      var reproducao = audio.play();

      if (reproducao && reproducao.catch) {

        reproducao.catch(function () {

          /* O navegador pode bloquear o áudio. */

        });

      }

    }



    /*==================================================
    AGENDA O PRÓXIMO VOO
    ==================================================*/

    function agendarProximo() {

      clearTimeout(temporizador);

      if (suspensa) return;

      temporizador = setTimeout(

        voar,

        35000 + Math.random() * 20000

      );

    }



    /*==================================================
    ANIMAÇÃO DO VOO
    ==================================================*/

    function voar() {

      if (suspensa) return;

      if (document.hidden) {

        agendarProximo();

        return;

      }

      if (voandoAgora) return;

      voandoAgora = true;

      clearTimeout(vooAtual);

      personagem.classList.remove('voando');

      void personagem.offsetWidth;

      personagem.classList.add('voando');

      reproduzirSom();


      vooAtual = setTimeout(function () {

        personagem.classList.remove('voando');

        voandoAgora = false;

      }, 9200);


      agendarProximo();

    }



    /*==================================================
    ATIVA OU DESATIVA O SOM
    ==================================================*/

    botao.addEventListener('click', function () {

      if (suspensa) return;

      somAtivado = !somAtivado;


      if (somAtivado) {

        botao.textContent = '🔊 Som ativado!';

        voar();

      } else {

        botao.textContent = '🔊 Ativar Som!';

        audio.pause();

        audio.currentTime = 0;

      }

    });



    /*==================================================
    SUSPENDE POR 24 HORAS
    ==================================================*/

    fechar.addEventListener('click', function () {

      suspensa = true;

      somAtivado = false;

      pararHanukkah();


      botao.textContent = '🔊 Ativar Som!';


      /* ESCONDE O CONTROLE COMPLETO */

      controle.style.setProperty(

        'display',

        'none',

        'important'

      );


      clearTimeout(temporizadorSuspensao);


      temporizadorSuspensao = setTimeout(function () {

        suspensa = false;


        /* RESTAURA A CAIXA E O CRÉDITO */

        controle.style.setProperty(

          'display',

          'block',

          'important'

        );


        agendarProximo();

      }, 24 * 60 * 60 * 1000);

    });



    /*==================================================
    PRIMEIRA APARIÇÃO AUTOMÁTICA
    ==================================================*/

    vooInicial = setTimeout(voar, 5000);

  }



  /*==================================================
  INICIALIZAÇÃO
  ==================================================*/

  if (document.readyState === 'loading') {

    document.addEventListener(

      'DOMContentLoaded',

      iniciarHanukkah

    );

  } else {

    iniciarHanukkah();

  }

})();

</script>


<!--==================================================
FIM DO EFEITO HANUKKAH
COM MÃOS DE SEDA
==================================================-->
