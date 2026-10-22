
/* =========================================================
   CURSOR COM RASTRO DE BALÕES DE FESTA
   Criado por: Com Mãos de Seda
   https://www.commaosdesedaoficial.com
   © 2026 Com Mãos de Seda. Todos os direitos reservados.
   ========================================================= */

(function () {
  'use strict';

  if (window.CMSLBaloesFestaInstalado) return;
  window.CMSLBaloesFestaInstalado = true;

  var ID_CAMADA = 'cmsl-cursor-baloes-festa';
  var ID_ESTILO = 'cmsl-cursor-baloes-estilo';

  var CORES = [
    ['#ffb3d1', '#ff2f83', '#bd1454'],
    ['#bce8ff', '#3998ff', '#1554ba'],
    ['#fff4ad', '#ffca28', '#d88b00'],
    ['#edc7ff', '#a94be8', '#7022a5'],
    ['#b8f7d2', '#36c987', '#128253'],
    ['#ffd0b8', '#ff713d', '#c83a1c']
  ];

  var css = document.createElement('style');
  css.id = ID_ESTILO;

  css.textContent = `
    #${ID_CAMADA} {
      position: fixed !important;
      inset: 0 !important;
      width: 100vw !important;
      height: 100vh !important;
      overflow: hidden !important;
      pointer-events: none !important;
      z-index: 2147483647 !important;
    }

    #${ID_CAMADA} .cmsl-balao-festa {
      position: fixed !important;
      display: block !important;
      width: var(--largura) !important;
      height: calc(var(--largura) * 1.24) !important;
      box-sizing: border-box !important;
      border: 1px solid rgba(255,255,255,.9) !important;
      border-radius: 50% 50% 46% 46% / 43% 43% 57% 57% !important;

      background:
        radial-gradient(ellipse at 28% 20%,
          white 0%, rgba(255,255,255,.65) 7%,
          transparent 23%),
        linear-gradient(115deg,
          var(--claro), var(--cor) 55%, var(--escuro)) !important;

      box-shadow:
        inset -3px -4px 5px rgba(0,0,0,.13),
        inset 2px 2px 4px rgba(255,255,255,.45),
        0 2px 5px rgba(0,0,0,.12) !important;

      opacity: 0;
      animation: cmslBalaoSubir var(--duracao) ease-out forwards !important;
      will-change: transform, opacity;
    }

    #${ID_CAMADA} .cmsl-balao-festa::before {
      content: "" !important;
      position: absolute !important;
      left: 50% !important;
      bottom: -4px !important;
      transform: translateX(-50%) !important;
      border-left: 3px solid transparent !important;
      border-right: 3px solid transparent !important;
      border-top: 5px solid var(--cor) !important;
    }

    #${ID_CAMADA} .cmsl-balao-festa::after {
      content: "" !important;
      position: absolute !important;
      left: 50% !important;
      top: calc(100% + 1px) !important;
      width: 1px !important;
      height: var(--corda) !important;
      background: linear-gradient(
        to bottom, #777, rgba(100,100,100,.08)
      ) !important;
    }

    @keyframes cmslBalaoSubir {
      0% {
        opacity: 0;
        transform: translate3d(0, 7px, 0)
          rotate(var(--rotacao)) scale(.65);
      }
      15% { opacity: 1; }
      65% { opacity: .9; }
      100% {
        opacity: 0;
        transform: translate3d(var(--desvio), var(--subida), 0)
          rotate(var(--rotacao-final)) scale(.92);
      }
    }
  `;

  (document.head || document.documentElement).appendChild(css);

  function aleatorio(min, max) {
    return Math.random() * (max - min) + min;
  }

  function iniciar() {
    if (!document.body) {
      document.addEventListener('DOMContentLoaded', iniciar, {
        once: true
      });
      return;
    }

    if (document.getElementById(ID_CAMADA)) return;

    var camada = document.createElement('div');
    camada.id = ID_CAMADA;
    camada.setAttribute('aria-hidden', 'true');
    document.body.appendChild(camada);

    var ultimoX = null;
    var ultimoY = null;
    var acumulada = 0;
    var MAX_BALOES = 50;
    var ativos = 0;

    function criarBalao(x, y) {
      if (ativos >= MAX_BALOES) return;

      var paleta = CORES[
        Math.floor(Math.random() * CORES.length)
      ];

      var largura = Math.round(aleatorio(16, 23));
      var duracao = Math.round(aleatorio(1400, 2200));
      var balao = document.createElement('span');

      balao.className = 'cmsl-balao-festa';
      balao.style.setProperty('--largura', largura + 'px');
      balao.style.setProperty('--claro', paleta[0]);
      balao.style.setProperty('--cor', paleta[1]);
      balao.style.setProperty('--escuro', paleta[2]);
      balao.style.setProperty('--duracao', duracao + 'ms');
      balao.style.setProperty('--rotacao',
        Math.round(aleatorio(-18, 18)) + 'deg');
      balao.style.setProperty('--rotacao-final',
        Math.round(aleatorio(-35, 35)) + 'deg');
      balao.style.setProperty('--desvio',
        Math.round(aleatorio(-35, 35)) + 'px');
      balao.style.setProperty('--subida',
        '-' + Math.round(aleatorio(60, 110)) + 'px');
      balao.style.setProperty('--corda',
        Math.round(aleatorio(10, 16)) + 'px');

      balao.style.left = (x - largura / 2) + 'px';
      balao.style.top = (y - largura / 2) + 'px';

      camada.appendChild(balao);
      ativos++;

      var removido = false;

      function remover() {
        if (removido) return;
        removido = true;
        if (balao.parentNode) balao.parentNode.removeChild(balao);
        ativos = Math.max(0, ativos - 1);
      }

      balao.addEventListener('animationend', remover, { once: true });
      window.setTimeout(remover, duracao + 400);
    }

    function mover(evento) {
      if (evento.pointerType && evento.pointerType !== 'mouse') return;

      var x = evento.clientX;
      var y = evento.clientY;

      if (ultimoX === null) {
        criarBalao(x, y);
        ultimoX = x;
        ultimoY = y;
        return;
      }

      var dx = x - ultimoX;
      var dy = y - ultimoY;
      var distancia = Math.sqrt(dx * dx + dy * dy);

      acumulada += distancia;

      while (acumulada >= 18) {
        criarBalao(x, y);
        acumulada -= 18;
      }

      ultimoX = x;
      ultimoY = y;
    }

    document.addEventListener('pointermove', mover, { passive: true });
    document.addEventListener('mousemove', mover, { passive: true });

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        camada.textContent = '';
        ativos = 0;
        ultimoX = null;
        ultimoY = null;
        acumulada = 0;
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciar, { once: true });
  } else {
    iniciar();
  }
})();
