
/* =========================================================
   CURSOR COM RASTRO DE BALÕES DE FESTA
   Criado por: Com Mãos de Seda
   Site: https://www.commaosdesedaoficial.com
   © 2026 Com Mãos de Seda. Todos os direitos reservados.
   
   Compatível com Blogger, WordPress e sites com JavaScript.
   ========================================================= */

(function () {
  'use strict';

  /* Evita instalar o efeito duas vezes */
  if (window.CMSLBaloesFestaInstalado) return;
  window.CMSLBaloesFestaInstalado = true;

  /* Não executa em dispositivos sem mouse */
  if (!window.matchMedia('(pointer: fine)').matches) return;

  /* Respeita a preferência por movimento reduzido */
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    return;
  }

  var ID_CAMADA = 'cmsl-cursor-baloes-festa';
  var ID_ESTILO = 'cmsl-cursor-baloes-estilo';

  /* Paleta de cores dos balões */
  var CORES = [
    ['#ff8fbd', '#ff2f83', '#bd1454'],
    ['#9ddcff', '#3998ff', '#1554ba'],
    ['#fff0a0', '#ffca28', '#d88b00'],
    ['#e3b1ff', '#a94be8', '#7022a5'],
    ['#a5f4c6', '#36c987', '#128253'],
    ['#ffc0a0', '#ff713d', '#c83a1c']
  ];

  var MAX_BALOES = 45;
  var INTERVALO = 45;
  var DISTANCIA = 9;
  var ativos = 0;
  var ultimoX = null;
  var ultimoY = null;
  var ultimoTempo = 0;

  /* Estilos isolados do restante do site */
  var css = document.createElement('style');
  css.id = ID_ESTILO;

  css.textContent = `
    #${ID_CAMADA} {
      position: fixed !important;
      inset: 0 !important;
      width: 100% !important;
      height: 100% !important;
      overflow: hidden !important;
      pointer-events: none !important;
      z-index: 2147483647 !important;
      contain: strict !important;
      isolation: isolate !important;
    }

    #${ID_CAMADA} .cmsl-balao-festa {
      position: absolute !important;
      display: block !important;
      box-sizing: border-box !important;
      width: var(--largura) !important;
      height: calc(var(--largura) * 1.24) !important;
      left: 0 !important;
      top: 0 !important;
      margin: 0 !important;
      padding: 0 !important;
      border: 1px solid rgba(255,255,255,.85) !important;
      border-radius: 50% 50% 46% 46% / 43% 43% 57% 57% !important;

      background:
        radial-gradient(
          ellipse at 29% 19%,
          rgba(255,255,255,.98) 0 5%,
          rgba(255,255,255,.65) 7%,
          transparent 22%
        ),
        radial-gradient(
          ellipse at 35% 28%,
          rgba(255,255,255,.4),
          transparent 40%
        ),
        linear-gradient(
          115deg,
          var(--claro),
          var(--cor) 54%,
          var(--escuro)
        ) !important;

      box-shadow:
        inset -3px -4px 5px rgba(0,0,0,.14),
        inset 2px 2px 4px rgba(255,255,255,.45),
        0 2px 5px rgba(0,0,0,.10) !important;

      opacity: 0 !important;
      transform: translate3d(0,0,0) scale(.7) !important;
      animation: cmsl-baloes-subir var(--duracao) ease-out forwards !important;
      will-change: transform, opacity !important;
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
        to bottom,
        rgba(100,100,100,.72),
        rgba(100,100,100,.08)
      ) !important;
      transform: translateX(-50%) !important;
    }

    @keyframes cmsl-baloes-subir {
      0% {
        opacity: 0;
        transform:
          translate3d(0, 7px, 0)
          rotate(var(--rotacao))
          scale(.65);
      }
      12% {
        opacity: .98;
      }
      65% {
        opacity: .88;
      }
      100% {
        opacity: 0;
        transform:
          translate3d(var(--desvio), var(--subida), 0)
          rotate(var(--rotacao-final))
          scale(.92);
      }
    }

    @media (prefers-reduced-motion: reduce) {
      #${ID_CAMADA} {
        display: none !important;
      }
    }
  `;

  (document.head || document.documentElement).appendChild(css);

  /* Cria uma camada que não bloqueia cliques */
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
    camada.setAttribute('role', 'presentation');

    document.body.appendChild(camada);

    /* Cria cada balão de forma independente */
    function criarBalao(x, y) {
      if (ativos >= MAX_BALOES) return;

      var paleta = CORES[
        Math.floor(Math.random() * CORES.length)
      ];

      var largura = Math.round(aleatorio(12, 20));
      var duracao = Math.round(aleatorio(1300, 2100));
      var balao = document.createElement('span');

      balao.className = 'cmsl-balao-festa';

      balao.style.setProperty('--largura', largura + 'px');
      balao.style.setProperty('--claro', paleta[0]);
      balao.style.setProperty('--cor', paleta[1]);
      balao.style.setProperty('--escuro', paleta[2]);
      balao.style.setProperty('--duracao', duracao + 'ms');
      balao.style.setProperty(
        '--rotacao',
        Math.round(aleatorio(-20, 20)) + 'deg'
      );
      balao.style.setProperty(
        '--rotacao-final',
        Math.round(aleatorio(-35, 35)) + 'deg'
      );
      balao.style.setProperty(
        '--desvio',
        Math.round(aleatorio(-38, 38)) + 'px'
      );
      balao.style.setProperty(
        '--subida',
        '-' + Math.round(aleatorio(55, 105)) + 'px'
      );
      balao.style.setProperty(
        '--corda',
        Math.round(aleatorio(9, 16)) + 'px'
      );

      balao.style.left = (x - largura / 2) + 'px';
      balao.style.top = (y - largura / 2) + 'px';

      ativos++;
      camada.appendChild(balao);

      function remover() {
        if (balao.parentNode) {
          balao.parentNode.removeChild(balao);
          ativos = Math.max(0, ativos - 1);
        }
      }

      balao.addEventListener('animationend', remover, {
        once: true
      });

      /* Segurança para casos em que a animação é interrompida */
      window.setTimeout(remover, duracao + 500);
    }

    function aleatorio(min, max) {
      return Math.random() * (max - min) + min;
    }

    /* Distribui balões pelo trajeto do mouse */
    function mover(evento) {
      if (evento.pointerType && evento.pointerType !== 'mouse') {
        return;
      }

      var x = evento.clientX;
      var y = evento.clientY;
      var agora = Date.now();

      if (ultimoX === null || ultimoY === null) {
        criarBalao(x, y);
        ultimoX = x;
        ultimoY = y;
        ultimoTempo = agora;
        return;
      }

      var dx = x - ultimoX;
      var dy = y - ultimoY;
      var distancia = Math.sqrt(dx * dx + dy * dy);

      if (
        agora - ultimoTempo >= INTERVALO &&
        distancia >= DISTANCIA
      ) {
        criarBalao(x, y);
        ultimoTempo = agora;
      }

      ultimoX = x;
      ultimoY = y;
    }

    document.addEventListener('pointermove', mover, {
      passive: true
    });

    /* Limpa o rastro quando a página fica oculta */
    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        camada.textContent = '';
        ativos = 0;
        ultimoX = null;
        ultimoY = null;
        ultimoTempo = 0;
      }
    });
  }

  iniciar();
})();
