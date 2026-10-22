
/* =========================================================
   CURSOR COM RASTRO DE BALÕES DE FESTA
   Criado por: Com Mãos de Seda
   Site: https://www.commaosdesedaoficial.com
   © 2026 Com Mãos de Seda. Todos os direitos reservados.
   ========================================================= */
(function () {
  'use strict';

  var ID_STYLE = 'cmsl-rastro-baloes-style';
  var ID_CAMADA = 'cmsl-rastro-baloes-camada';

  if (document.getElementById(ID_STYLE) ||
      document.getElementById(ID_CAMADA)) return;

  var mouse = window.matchMedia('(pointer: fine)');
  var movimento = window.matchMedia('(prefers-reduced-motion: reduce)');

  if (!mouse.matches || movimento.matches) return;

  var estilo = document.createElement('style');

  estilo.id = ID_STYLE;
  estilo.textContent = `
    @media (pointer: fine) {
      html, body, a, button, input, textarea, select,
      label, [role="button"], summary {
        cursor: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='38' height='46' viewBox='0 0 38 46'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0' y1='0' x2='1' y2='1'%3E%3Cstop stop-color='%23ff9acb'/%3E%3Cstop offset='.48' stop-color='%23ff267d'/%3E%3Cstop offset='1' stop-color='%23bd0751'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cpath d='M4 3 Q3 2 3 7 L4 34 Q4 39 8 35 L14 28 L21 40 Q23 44 26 41 L30 39 Q32 38 30 34 L23 22 L32 20 Q37 19 32 16 Z' fill='url(%23g)' stroke='%23ffffff' stroke-width='2.5' stroke-linejoin='round'/%3E%3Cpath d='M8 8 L9 23' stroke='%23ffffff' stroke-width='3' stroke-linecap='round' opacity='.9'/%3E%3C/svg%3E") 4 3, auto;
      }
    }

    #cmsl-rastro-baloes-camada {
      position: fixed !important;
      inset: 0 !important;
      width: 100% !important;
      height: 100% !important;
      overflow: hidden !important;
      pointer-events: none !important;
      z-index: 2147483000 !important;
      contain: strict !important;
      isolation: isolate !important;
    }

    #cmsl-rastro-baloes-camada .cmsl-balao {
      position: absolute !important;
      display: block !important;
      width: var(--cmsl-largura, 17px) !important;
      height: calc(var(--cmsl-largura, 17px) * 1.23) !important;
      left: 0 !important;
      top: 0 !important;
      margin: 0 !important;
      padding: 0 !important;
      border: 1px solid rgba(255,255,255,.75) !important;
      border-radius: 52% 48% 48% 52% / 43% 43% 57% 57% !important;

      background:
        radial-gradient(ellipse at 29% 20%,
          rgba(255,255,255,.98) 0 5%,
          rgba(255,255,255,.55) 7%, transparent 22%),
        radial-gradient(ellipse at 34% 28%,
          rgba(255,255,255,.45), transparent 38%),
        linear-gradient(115deg,
          var(--cmsl-claro),
          var(--cmsl-cor) 52%,
          var(--cmsl-escuro)) !important;

      box-shadow:
        inset -3px -4px 5px rgba(0,0,0,.15),
        inset 2px 2px 4px rgba(255,255,255,.35),
        0 2px 5px rgba(0,0,0,.12) !important;

      opacity: 0 !important;
      transform: translate3d(0,0,0)
        rotate(var(--cmsl-rotacao, 0deg)) scale(.7) !important;

      animation: cmsl-balao-subir
        var(--cmsl-duracao, 1500ms) ease-out forwards !important;

      will-change: transform, opacity !important;
    }

    #cmsl-rastro-baloes-camada .cmsl-balao::before {
      content: "" !important;
      position: absolute !important;
      left: 50% !important;
      bottom: -4px !important;
      width: 0 !important;
      height: 0 !important;
      transform: translateX(-50%) !important;
      border-left: 3px solid transparent !important;
      border-right: 3px solid transparent !important;
      border-top: 5px solid var(--cmsl-cor) !important;
    }

    #cmsl-rastro-baloes-camada .cmsl-balao::after {
      content: "" !important;
      position: absolute !important;
      left: 50% !important;
      top: calc(100% + 1px) !important;
      width: 1px !important;
      height: var(--cmsl-corda, 13px) !important;
      background: linear-gradient(
        to bottom,
        rgba(100,100,100,.7),
        rgba(100,100,100,.12)
      ) !important;
      transform: translateX(-50%) !important;
    }

    @keyframes cmsl-balao-subir {
      0% {
        opacity: 0;
        transform: translate3d(0,8px,0)
          rotate(var(--cmsl-rotacao, 0deg)) scale(.65);
      }
      12% { opacity: .98; }
      65% { opacity: .88; }
      100% {
        opacity: 0;
        transform: translate3d(
          var(--cmsl-desvio, 14px),
          var(--cmsl-subida, -75px),
          0
        ) rotate(var(--cmsl-rotacao-final, 18deg)) scale(.9);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      #cmsl-rastro-baloes-camada {
        display: none !important;
      }
    }
  `;

  (document.head || document.documentElement).appendChild(estilo);

  var camada = document.createElement('div');
  camada.id = ID_CAMADA;
  camada.setAttribute('aria-hidden', 'true');
  camada.setAttribute('role', 'presentation');
  document.body.appendChild(camada);

  var cores = [
    { cor: '#ff4f91', claro: '#ffb3d0', escuro: '#c9185b' },
    { cor: '#398cff', claro: '#a9d7ff', escuro: '#1450b8' },
    { cor: '#ffc928', claro: '#fff0a1', escuro: '#e69a00' },
    { cor: '#a94bdf', claro: '#e3b5ff', escuro: '#7020a9' },
    { cor: '#36c987', claro: '#a9f6ce', escuro: '#128653' },
    { cor: '#ff713d', claro: '#ffc0a5', escuro: '#d33d20' }
  ];

  var ultimoX = 0;
  var ultimoY = 0;
  var ultimoBalao = 0;
  var quantidade = 0;

  var MAX_BALOES = 38;
  var INTERVALO = 58;
  var DISTANCIA = 17;

  function aleatorio(min, max) {
    return Math.random() * (max - min) + min;
  }

  function criarBalao(x, y) {
    if (quantidade >= MAX_BALOES) return;

    var cor = cores[Math.floor(Math.random() * cores.length)];
    var largura = Math.round(aleatorio(10, 19));
    var duracao = Math.round(aleatorio(1150, 1850));

    var balao = document.createElement('span');
    balao.className = 'cmsl-balao';

    balao.style.setProperty('--cmsl-largura', largura + 'px');
    balao.style.setProperty('--cmsl-cor', cor.cor);
    balao.style.setProperty('--cmsl-claro', cor.claro);
    balao.style.setProperty('--cmsl-escuro', cor.escuro);
    balao.style.setProperty('--cmsl-duracao', duracao + 'ms');

    balao.style.setProperty(
      '--cmsl-rotacao',
      Math.round(aleatorio(-22, 22)) + 'deg'
    );

    balao.style.setProperty(
      '--cmsl-rotacao-final',
      Math.round(aleatorio(-40, 40)) + 'deg'
    );

    balao.style.setProperty(
      '--cmsl-desvio',
      Math.round(aleatorio(-38, 38)) + 'px'
    );

    balao.style.setProperty(
      '--cmsl-subida',
      '-' + Math.round(aleatorio(48, 95)) + 'px'
    );

    balao.style.setProperty(
      '--cmsl-corda',
      Math.round(aleatorio(8, 15)) + 'px'
    );

    balao.style.left = Math.round(x - largura / 2) + 'px';
    balao.style.top = Math.round(y - largura / 2) + 'px';

    quantidade++;
    camada.appendChild(balao);

    balao.addEventListener('animationend', function () {
      if (balao.parentNode) {
        balao.parentNode.removeChild(balao);
      }
      quantidade = Math.max(0, quantidade - 1);
    }, { once: true });
  }

  function aoMover(evento) {
    if (evento.pointerType && evento.pointerType !== 'mouse') return;

    var agora = Date.now();
    var x = evento.clientX;
    var y = evento.clientY;

    var dx = x - ultimoX;
    var dy = y - ultimoY;
    var distancia = Math.sqrt(dx * dx + dy * dy);

    if (agora - ultimoBalao >= INTERVALO &&
        distancia >= DISTANCIA) {
      criarBalao(x, y);
      ultimoBalao = agora;
    }

    ultimoX = x;
    ultimoY = y;
  }

  document.addEventListener('pointermove', aoMover, {
    passive: true
  });

  document.addEventListener('visibilitychange', function () {
    if (document.hidden) {
      camada.textContent = '';
      quantidade = 0;
    }
  });

})();
