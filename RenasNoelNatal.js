
/*
==================================================
NOEL VOADORA — EFEITO EXTERNO PARA SITES E BLOGS

Criadora: Com Mãos de Seda
Site oficial: https://www.commaosdesedaoficial.com

© 2026 Com Mãos de Seda.
Todos os direitos reservados.
==================================================
*/

(function () {
  'use strict';

  /* EVITA INSTALAÇÃO DUPLICADA */
  if (window.cmslNoelVoadoraIniciada) return;

  /* =========================================
     HTML DO EFEITO
  ========================================= */

  var html = `
    <div id="noel-blogger" aria-hidden="true">
      <div id="noel-personagem">

        <span class="noel-arvore">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg1R4vjVxFt1hg5u7cqmedcIfZ5sNhr0VCAHlnUMBHvt3I-RoKUYRiNu8Yj_eEr11i3X5MdiA79Z2PEEEjs_gBHdIyOIH9DPhR5nlxav_l_viXpOi_sSxh33irH3UMyeVk8eYrwz2H7Eiri4CS0GSgb9zNtlqsL60BG58qXgh78ldfDMWtblVnDo19xHR1W/s200/arvore.gif"
            alt=""
            class="imagem-arvore">
        </span>

        <span class="noel-emoji">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgcYRDftLooZZFJnBqAltPJbCCBK4u5ZwDn0L_9IE4EvFM-9YxGbcTH7j0p41HIhbBNGnW3-IYDV3XmOyipgrLV6fFjZaiPNM728UjNbpPpfef5Kgruzfqgv1dUUqoPUhvlA15hnM8IiuwqiRNg1gmYlYccL-aGWaaF0wbFiXKHSRyNa4uTGPa5LSu-vZdG/s800/Noel%20peequeno.gif"
            alt="Noel voando"
            class="imagem-noel">
        </span>

        <span class="noel-brilho">
          <img
            src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgLwLmiJ62pUMRrY8S9Wj8ISfI0X-x1csoEEbGW-tJWyTWM-d0KS8Fd7XZVtiYwyuNamRjti_79v9QpHf2aa4ydMmwjEQD9M9xBlMx8ygtatM9HdTJKruY0QJZXagDQue5Z4EHnxt0cHrgXWVq1Hj0xOsf-1Ad0ozZVfHdczIrp7ceS-PzSVU89Jf_YG3f0/s200/estrela.gif"
            alt=""
            class="imagem-brilho">
        </span>

        <span class="noel-Hohoho">Ho Ho Ho Ho!</span>

      </div>
    </div>

    <audio id="audio-Hohoho-noel" preload="none">
      <source
        src="https://cdn.pixabay.com/download/audio/2026/08/29/audio_49a955a5f3.mp3"
        type="audio/mpeg">
    </audio>

    <div id="noel-controle">

      <div id="noel-botao-caixa">

        <button
          id="noel-som"
          type="button"
          aria-label="Ativar ou desativar a Hohoho do Papai Noel">
          🔊 Ativar Hohoho!
        </button>

        <a
          id="credito-noel"
          href="https://wa.me/5521979356412?text=Midian%20que%20quero%20essa%20noel%20para%20o%20meu%20blog!"
          target="_blank"
          rel="noopener noreferrer"
          title="Efeito criado por Com Mãos de Seda">
          © Com Mãos de Seda
        </a>

      </div>

      <button
        id="noel-fechar"
        type="button"
        aria-label="Suspender a Noel por 24 horas"
        title="Suspender por 24 horas">
        ✕
      </button>

    </div>
  `;

  /* =========================================
     CSS COMPLETO DO EFEITO
  ========================================= */

  var css = `

  #noel-blogger {
    position: fixed;
    inset: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    pointer-events: none;
    z-index: 999990;
  }

  #noel-personagem {
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

  #noel-personagem.voando {
    animation: noel-voo 9s linear forwards;
  }

  .noel-emoji {
    display: inline-block;
    line-height: 1;
    filter: drop-shadow(2px 5px 3px #555);
    animation: noel-balanco .3s ease-in-out infinite alternate;
  }

  .imagem-noel {
    display: block;
    width: 300px;
    height: auto;
    object-fit: contain;
  }

  .imagem-arvore {
    display: block;
    width: 200px;
    height: auto;
  }

  .noel-arvore {
    position: absolute;
    left: -45px;
    top: -65px;
    animation: noel-magica .7s ease-in-out infinite alternate;
  }

  .noel-brilho {
    display: inline-block;
    margin-left: -50px;
    transform: rotate(-15deg);
    width: 80px;
    flex: 0 0 auto;
  }

  .imagem-brilho {
    display: block;
    width: 80px;
    height: auto;
    object-fit: contain;
  }

  .noel-Hohoho {
    position: absolute;
    top: -25px;
    left: 45px;
    padding: 7px 10px;
    border-radius: 12px;
    color: white;
    background: red;
    border: 2px solid green;
    font-size: 18px;
    font-family: Arial, cursive;
    font-weight: bold;
    transform: rotate(-8deg);
    animation: noel-riso .35s ease-in-out infinite alternate;
  }

  /* CONTROLE FIXO */

  #noel-controle {
    position: fixed !important;
    right: 12px !important;
    bottom: 200px !important;
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

  #noel-botao-caixa {
    position: relative !important;
    display: block !important;
    width: max-content !important;
    max-width: calc(100vw - 24px) !important;
    box-sizing: border-box !important;
    margin: 0 !important;
    padding: 0 0 5px !important;
    background: red !important;
    border: 1px solid #ffffff !important;
    border-radius: 15px !important;
    box-shadow: 0 2px 10px #0003 !important;
    overflow: visible !important;
  }

  #noel-botao-caixa > #noel-som {
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

  #noel-botao-caixa > #noel-som:hover {
    background: green !important;
  }

  #noel-botao-caixa > #credito-noel {
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
    color: #d8a5ff !important;
    font: 10px/1.4 Arial, sans-serif !important;
    text-align: center !important;
    text-decoration: none !important;
    opacity: .95 !important;
    visibility: visible !important;
    pointer-events: auto !important;
  }

  #noel-botao-caixa > #credito-noel:hover {
    color: #fff !important;
    text-decoration: underline !important;
    opacity: 1 !important;
  }

  #noel-controle > #noel-fechar {
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
    background: #9b3d3d !important;
    color: #fff !important;
    font: bold 13px Arial, sans-serif !important;
    line-height: 1 !important;
    cursor: pointer !important;
    box-shadow: 0 2px 5px #0003 !important;
    opacity: 1 !important;
    visibility: visible !important;
  }

  #noel-controle > #noel-fechar:hover {
    background: #762b2b !important;
  }

  #noel-som:focus-visible,
  #noel-fechar:focus-visible {
    outline: 3px solid #d8a5ff !important;
    outline-offset: 3px !important;
  }

  /* TRAJETO */

  @keyframes noel-voo {
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

  @keyframes noel-balanco {
    from {
      transform: translateY(-5px) rotate(-5deg);
    }
    to {
      transform: translateY(5px) rotate(5deg);
    }
  }

  @keyframes noel-magica {
    from {
      opacity: .45;
      transform: scale(.8) rotate(-10deg);
    }
    to {
      opacity: 1;
      transform: scale(1.2) rotate(10deg);
    }
  }

  @keyframes noel-riso {
    from {
      transform: rotate(-8deg) scale(1);
    }
    to {
      transform: rotate(5deg) scale(1.08);
    }
  }

  /* CELULAR */

  @media (max-width: 600px) {

    #noel-personagem {
      top: 22%;
    }

    .imagem-noel {
      width: 68px;
    }

    .imagem-arvore {
      width: 35px;
    }

    .noel-brilho {
      font-size: 34px;
    }

    .noel-Hohoho {
      top: -28px;
      left: 28px;
      font-size: 12px;
      padding: 5px 7px;
    }

    .noel-arvore {
      top: 45px;
    }

    #noel-controle {
      right: 8px !important;
      bottom: 150px !important;
      max-width: calc(100vw - 16px) !important;
    }

    #noel-botao-caixa {
      max-width: calc(100vw - 16px) !important;
    }

    #noel-botao-caixa > #noel-som {
      font-size: 12px !important;
      padding: 9px 11px !important;
    }

    #noel-botao-caixa > #credito-noel {
      font-size: 10px !important;
    }
  }

  /* MOVIMENTO REDUZIDO */

  @media (prefers-reduced-motion: reduce) {

    #noel-personagem.voando {
      animation-duration: 1ms;
    }

    .noel-emoji,
    .noel-arvore,
    .noel-Hohoho {
      animation: none;
    }
  }

  `;

  /* =========================================
     INSERE HTML E CSS NA PÁGINA
  ========================================= */

  function instalarNoel() {

    if (!document.body) return false;

    if (
      document.getElementById('noel-blogger') ||
      document.getElementById('cmsl-noel-container')
    ) {
      window.cmslNoelVoadoraIniciada = true;
      return true;
    }

    try {

      var container = document.createElement('div');
      container.id = 'cmsl-noel-container';
      container.innerHTML = html;

      var estilo = document.createElement('style');
      estilo.id = 'cmsl-noel-estilo';
      estilo.textContent = css;

      document.body.appendChild(container);
      document.head.appendChild(estilo);

      iniciarNoel();

      window.cmslNoelVoadoraIniciada = true;

      return true;

    } catch (erro) {

      console.error(
        '[Com Mãos de Seda] Erro ao instalar a Noel:',
        erro
      );

      var containerExistente = document.getElementById(
        'cmsl-noel-container'
      );

      if (containerExistente) {
        containerExistente.remove();
      }

      var estiloExistente = document.getElementById(
        'cmsl-noel-estilo'
      );

      if (estiloExistente) {
        estiloExistente.remove();
      }

      return false;
    }
  }

  /* =========================================
     FUNCIONAMENTO DO EFEITO
  ========================================= */

  function iniciarNoel() {

    var personagem = document.getElementById('noel-personagem');
    var botao = document.getElementById('noel-som');
    var audio = document.getElementById('audio-Hohoho-noel');
    var controle = document.getElementById('noel-controle');
    var fechar = document.getElementById('noel-fechar');

    if (!personagem || !botao || !audio || !controle || !fechar) {
      throw new Error('Não foi possível localizar os elementos da Noel.');
    }

    var somAtivado = false;
    var temporizador = null;
    var vooAtual = null;
    var vooInicial = null;
    var temporizadorSuspensao = null;
    var voandoAgora = false;
    var suspensa = false;

    var chaveSuspensao = 'noelSuspensaAte';
    var duracaoSuspensao = 24 * 60 * 60 * 1000;

    /* PARA O VOO E O ÁUDIO */

    function pararNoel() {

      clearTimeout(temporizador);
      clearTimeout(vooAtual);
      clearTimeout(vooInicial);

      personagem.classList.remove('voando');
      voandoAgora = false;

      audio.pause();

      try {
        audio.currentTime = 0;
      } catch (e) {}
    }

    /* REPRODUZ A GARGALHADA */

    function rir() {

      if (!somAtivado || suspensa) return;

      audio.currentTime = 0;
      audio.volume = 0.50;

      var reproducao = audio.play();

      if (reproducao && reproducao.catch) {
        reproducao.catch(function () {
          /* O navegador pode bloquear o áudio. */
        });
      }
    }

    /* AGENDA O PRÓXIMO VOO */

    function agendarProximo() {

      clearTimeout(temporizador);

      if (suspensa) return;

      temporizador = setTimeout(
        voar,
        35000 + Math.random() * 20000
      );
    }

    /* FAZ A NOEL VOAR */

    function voar() {

      if (suspensa || document.hidden) {
        if (!suspensa) agendarProximo();
        return;
      }

      if (voandoAgora) return;

      voandoAgora = true;

      clearTimeout(vooAtual);

      personagem.classList.remove('voando');

      void personagem.offsetWidth;

      personagem.classList.add('voando');

      rir();

      vooAtual = setTimeout(function () {

        personagem.classList.remove('voando');

        voandoAgora = false;

      }, 9200);

      agendarProximo();
    }

    /* ATIVA OU DESATIVA */

    botao.addEventListener('click', function () {

      if (suspensa) return;

      somAtivado = !somAtivado;

      if (somAtivado) {

        botao.textContent = '🔊 Hohoho ativado';

        voar();

      } else {

        botao.textContent = '🔇 Ativar Hohoho!';

        audio.pause();

        try {
          audio.currentTime = 0;
        } catch (e) {}

      }

    });

    /* RESTAURA O CONTROLE APÓS 24 HORAS */

    function restaurarControle() {

      suspensa = false;

      try {
        localStorage.removeItem(chaveSuspensao);
      } catch (e) {}

      controle.style.setProperty('display', 'block', 'important');

      if (!somAtivado) {
        botao.textContent = '🔊 Ativar Hohoho!';
      }

      agendarProximo();
    }

    /* VERIFICA A SUSPENSÃO */

    function aplicarSuspensaoRestante() {

      var suspensaoAte = 0;

      try {
        suspensaoAte = Number(
          localStorage.getItem(chaveSuspensao) || 0
        );
      } catch (e) {}

      var restante = suspensaoAte - Date.now();

      if (restante > 0) {

        suspensa = true;

        controle.style.setProperty('display', 'none', 'important');

        temporizadorSuspensao = setTimeout(
          restaurarControle,
          restante
        );

        return true;
      }

      if (suspensaoAte) {

        try {
          localStorage.removeItem(chaveSuspensao);
        } catch (e) {}

      }

      return false;
    }

    /* BOTÃO X — SUSPENDE POR 24 HORAS */

    fechar.addEventListener('click', function () {

      suspensa = true;
      somAtivado = false;

      pararNoel();

      botao.textContent = '🔊 Ativar Hohoho!';

      try {

        localStorage.setItem(
          chaveSuspensao,
          String(Date.now() + duracaoSuspensao)
        );

      } catch (e) {}

      controle.style.setProperty('display', 'none', 'important');

      clearTimeout(temporizadorSuspensao);

      temporizadorSuspensao = setTimeout(
        restaurarControle,
        duracaoSuspensao
      );

    });

    /* PRIMEIRA APARIÇÃO APÓS 5 SEGUNDOS */

    if (!aplicarSuspensaoRestante()) {

      vooInicial = setTimeout(voar, 5000);

    }

  }

  /* =========================================
     INICIALIZAÇÃO SEGURA
  ========================================= */

  function iniciarInstalacao() {

    if (window.cmslNoelVoadoraIniciada) return;

    if (instalarNoel()) return;

    /* TENTA NOVAMENTE QUANDO O BODY ESTIVER DISPONÍVEL */

    if (!document.body) {

      document.addEventListener(
        'DOMContentLoaded',
        iniciarInstalacao,
        { once: true }
      );

    }

  }

  iniciarInstalacao();

})();
