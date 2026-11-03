
/*
==================================================
NEVE MÁGICA — EFEITO EXTERNO PARA SITES E BLOGS

Criadora da adaptação: Com Mãos de Seda
Site oficial: https://www.commaosdesedaoficial.com

Motor de partículas: Sparticles
Autor: SimeyDotMe
Licença do motor: MPL-2.0
https://github.com/simeydotme/sparticles

© 2026 Com Mãos de Seda.
Todos os direitos reservados à adaptação.
==================================================
*/

(function () {

  'use strict';

  /* EVITA INSTALAÇÃO DUPLICADA */

  if (window.cmslNeveVoadoraIniciada) return;

  window.cmslNeveVoadoraIniciada = true;

  var ID_CONTAINER = 'cmsl-neve-container';
  var ID_ESTILO = 'cmsl-neve-estilo';

  var URL_BIBLIOTECA =
    'https://cdn.jsdelivr.net/npm/sparticles@2.2.0/dist/sparticles.min.js';

  var instanciaNeve = null;
  var carregandoBiblioteca = false;
  var scriptBiblioteca = null;

  /* IMAGENS DOS FLOCOS */

  var imagensNeve = [
    'https://assets.codepen.io/13471/snowflake.png',
    'https://assets.codepen.io/13471/snowflake(1).png',
    'https://assets.codepen.io/13471/snowflake(2).png',
    'https://assets.codepen.io/13471/snowflake(3).png',
    'https://assets.codepen.io/13471/snowflake(4).png',
    'https://assets.codepen.io/13471/snowflake(5).png',
    'https://assets.codepen.io/13471/snowflake(6).png',
    'https://assets.codepen.io/13471/snowflake(7).png',
    'https://assets.codepen.io/13471/snowflake(8).png'
  ];

  /* CORES DOS FLOCOS */

  var coresNeve = [
    'rgba(255,255,255,1)',
    'rgba(233,239,250,1)',
    'rgba(222,241,250,1)',
    'rgba(178,209,219,1)'
  ];

  /* CONFIGURAÇÃO DA ANIMAÇÃO */

  function obterOpcoes() {

    var celular = window.matchMedia(
      '(max-width: 600px)'
    ).matches;

    return {

      count: celular ? 65 : 120,

      shape: ['image'],

      style: 'fill',

      imageUrl: imagensNeve,

      color: coresNeve,

      composition: 'source-over',

      direction: 160,

      speed: 2.5,

      drift: 2,

      parallax: 6,

      rotation: 0.5,

      minSize: 3,

      maxSize: 24,

      minAlpha: -0.2,

      maxAlpha: 2,

      alphaSpeed: 2,

      alphaVariance: 1,

      glow: 0,

      twinkle: false,

      xVariance: 20,

      yVariance: 20

    };

  }

  /* CSS ISOLADO */

  var css = `

    #${ID_CONTAINER} {

      position: fixed !important;
      inset: 0 !important;

      width: 100vw !important;
      height: 100vh !important;

      overflow: hidden !important;

      margin: 0 !important;
      padding: 0 !important;

      pointer-events: none !important;

      z-index: 999990 !important;

      background: transparent !important;

      visibility: visible !important;

    }

    #${ID_CONTAINER} canvas {

      position: absolute !important;

      top: 0 !important;
      left: 0 !important;

      width: 100% !important;
      height: 100% !important;

      display: block !important;

      pointer-events: none !important;

      mix-blend-mode: overlay;

    }

    html.cmsl-ocultar-neve #${ID_CONTAINER} {

      display: none !important;

      visibility: hidden !important;

      opacity: 0 !important;

    }

    @media (prefers-reduced-motion: reduce) {

      #${ID_CONTAINER} {

        display: none !important;

      }

    }

  `;

  /* VERIFICA SE A NEVE DEVE FICAR OCULTA */

  function neveOcultada() {

    return document.documentElement.classList.contains(
      'cmsl-ocultar-neve'
    );

  }

  /* REMOVE A ANIMAÇÃO */

  function destruirNeve() {

    if (instanciaNeve) {

      try {
        instanciaNeve.destroy();
      } catch (e) {}

      instanciaNeve = null;

    }

    var container = document.getElementById(ID_CONTAINER);

    if (container) {
      container.remove();
    }

  }

  /* CRIA O CONTAINER E O CSS */

  function prepararEstrutura() {

    if (!document.body) return null;

    var container = document.getElementById(ID_CONTAINER);

    if (!container) {

      container = document.createElement('div');

      container.id = ID_CONTAINER;

      container.setAttribute(
        'aria-hidden',
        'true'
      );

      document.body.appendChild(container);

    }

    if (!document.getElementById(ID_ESTILO)) {

      var estilo = document.createElement('style');

      estilo.id = ID_ESTILO;

      estilo.textContent = css;

      document.head.appendChild(estilo);

    }

    return container;

  }

  /* INICIA A ANIMAÇÃO */

  function iniciarNeve() {

    if (neveOcultada()) {

      destruirNeve();

      return;

    }

    if (instanciaNeve) return;

    var container = prepararEstrutura();

    if (!container) return;

    if (typeof window.Sparticles !== 'function') {

      carregarBiblioteca();

      return;

    }

    try {

      instanciaNeve = new window.Sparticles(
        container,
        obterOpcoes()
      );

    } catch (erro) {

      console.error(
        '[Com Mãos de Seda] Erro ao iniciar a neve:',
        erro
      );

      destruirNeve();

    }

  }

  /* CARREGA O MOTOR SPARTICLES */

  function carregarBiblioteca() {

    if (typeof window.Sparticles === 'function') {

      iniciarNeve();

      return;

    }

    if (carregandoBiblioteca) return;

    carregandoBiblioteca = true;

    scriptBiblioteca = document.createElement('script');

    scriptBiblioteca.src = URL_BIBLIOTECA;

    scriptBiblioteca.async = true;

    scriptBiblioteca.onload = function () {

      carregandoBiblioteca = false;

      iniciarNeve();

    };

    scriptBiblioteca.onerror = function () {

      carregandoBiblioteca = false;

      console.error(
        '[Com Mãos de Seda] Não foi possível carregar o Sparticles.'
      );

    };

    document.head.appendChild(scriptBiblioteca);

  }

  /* PERMITE OCULTAR E REATIVAR A NEVE */

  var observador = new MutationObserver(function () {

    if (neveOcultada()) {

      destruirNeve();

    } else {

      iniciarNeve();

    }

  });

  observador.observe(
    document.documentElement,
    {
      attributes: true,
      attributeFilter: ['class']
    }
  );

  /* INICIALIZAÇÃO */

  function inicializar() {

    if (neveOcultada()) return;

    iniciarNeve();

  }

  if (document.readyState === 'loading') {

    document.addEventListener(
      'DOMContentLoaded',
      inicializar,
      { once: true }
    );

  } else {

    inicializar();

  }

})();
