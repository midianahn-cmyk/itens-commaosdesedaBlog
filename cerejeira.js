
/* =====================================================
   RASTRO DE FLORES DELICADAS
   Criado por: Com Mãos de Seda
   Site: https://www.commaosdesedaoficial.com
   © 2026 Com Mãos de Seda
   ===================================================== */

(function () {
  'use strict';

  // Evita duplicar o efeito
  if (window.cmsRastroFloresAtivo) return;

  // Não executa em dispositivos sem mouse
  if (
    window.matchMedia &&
    window.matchMedia('(hover: none)').matches
  ) {
    return;
  }

  window.cmsRastroFloresAtivo = true;

  // ================================================
  // CONFIGURAÇÕES DO RASTRO
  // ================================================

  var floresMaximo = 30;
  var floresPorMovimento = 1;
  var floresIntervalo = 35;
  var floresDuracao = 0.025;

  var floresParticulas = [];
  var floresUltimoMovimento = 0;
  var floresQuadro = false;

  var floresMovimentoReduzido =
    window.matchMedia &&
    window.matchMedia(
      '(prefers-reduced-motion: reduce)'
    ).matches;

  // Cores das flores
  var floresCores = [
    '#F49AB8', // Rosa
    '#FFC0D4', // Rosa-claro
    '#DDA5E8', // Lilás
    '#FFF0C2', // Creme
    '#FFFFFF', // Branco
    '#E8C98A', // Champanhe
    '#F6B8A8'  // Pêssego
  ];

  // ================================================
  // CRIAÇÃO DA CAMADA
  // ================================================

  var floresTela = document.createElement('canvas');

  floresTela.id = 'cms-rastro-flores-douradas';

  floresTela.setAttribute('aria-hidden', 'true');

  floresTela.style.cssText = [
    'position:fixed',
    'inset:0',
    'width:100%',
    'height:100%',
    'pointer-events:none',
    'z-index:2147483647',
    'display:block'
  ].join(';');

  var floresCtx = floresTela.getContext('2d');

  if (!floresCtx) {
    window.cmsRastroFloresAtivo = false;
    return;
  }

  var floresLargura = window.innerWidth;
  var floresAltura = window.innerHeight;

  // ================================================
  // AJUSTE DA TELA
  // ================================================

  function floresAjustarTela() {
    floresLargura = window.innerWidth;
    floresAltura = window.innerHeight;

    var escala = Math.min(
      window.devicePixelRatio || 1,
      2
    );

    floresTela.width = Math.round(
      floresLargura * escala
    );

    floresTela.height = Math.round(
      floresAltura * escala
    );

    floresCtx.setTransform(
      escala,
      0,
      0,
      escala,
      0,
      0
    );

    // Garante que não haja sombras ou brilho
    floresCtx.shadowBlur = 0;
    floresCtx.shadowColor = 'transparent';
  }

  // ================================================
  // DESENHO DE UMA FLOR DE CINCO PÉTALAS
  // SEM BRILHO OU LUMINOSIDADE
  // ================================================

  function floresDesenharFlor(
    x,
    y,
    tamanho,
    cor,
    rotacao
  ) {
    floresCtx.save();

    // Elimina qualquer sombra
    floresCtx.shadowBlur = 0;
    floresCtx.shadowColor = 'transparent';

    floresCtx.translate(x, y);
    floresCtx.rotate(rotacao);

    // Pétalas coloridas e bem definidas
    floresCtx.fillStyle = cor;

    for (var i = 0; i < 5; i++) {
      floresCtx.save();

      floresCtx.rotate(
        i * (Math.PI * 2 / 5)
      );

      floresCtx.beginPath();

      floresCtx.ellipse(
        0,
        -tamanho * 0.43,
        tamanho * 0.34,
        tamanho * 0.49,
        0,
        0,
        Math.PI * 2
      );

      floresCtx.fill();

      floresCtx.restore();
    }

    // Miolo dourado sólido
    floresCtx.beginPath();

    floresCtx.arc(
      0,
      0,
      tamanho * 0.22,
      0,
      Math.PI * 2
    );

    floresCtx.fillStyle = '#D9A52E';
    floresCtx.fill();

    floresCtx.restore();
  }

  // ================================================
  // CRIAÇÃO DAS FLORES DO RASTRO
  // ================================================

  function floresCriar(x, y) {
    if (floresParticulas.length >= floresMaximo) {
      floresParticulas.shift();
    }

    var floresCor = floresCores[
      Math.floor(
        Math.random() * floresCores.length
      )
    ];

    floresParticulas.push({
      x: x + (Math.random() - 0.5) * 10,
      y: y + (Math.random() - 0.5) * 10,

      // Flores entre 9 e 15 pixels
      tamanho: 9 + Math.random() * 6,

      cor: floresCor,

      rotacao: Math.random() * Math.PI * 2,

      giro: (Math.random() - 0.5) * 0.035,

      // Movimento suave das flores
      vx: (Math.random() - 0.5) * 0.6,
      vy: -0.2 - Math.random() * 0.4,

      vida: 1,

      decaimento: floresDuracao *
        (0.75 + Math.random() * 0.5)
    });
  }

  // ================================================
  // ANIMAÇÃO DAS FLORES
  // ================================================

  function floresAnimar() {
    floresQuadro = false;

    floresCtx.clearRect(
      0,
      0,
      floresLargura,
      floresAltura
    );

    for (
      var i = floresParticulas.length - 1;
      i >= 0;
      i--
    ) {
      var flor = floresParticulas[i];

      flor.x += flor.vx;
      flor.y += flor.vy;
      flor.rotacao += flor.giro;
      flor.vida -= flor.decaimento;

      if (flor.vida <= 0) {
        floresParticulas.splice(i, 1);
        continue;
      }

      floresCtx.save();

      // Desaparecimento gradual, sem brilho
      floresCtx.globalAlpha = Math.min(
        1,
        flor.vida
      );

      floresDesenharFlor(
        flor.x,
        flor.y,
        flor.tamanho,
        flor.cor,
        flor.rotacao
      );

      floresCtx.restore();
    }

    if (floresParticulas.length > 0) {
      floresSolicitarAnimacao();
    }
  }

  // ================================================
  // CONTROLE DA ANIMAÇÃO
  // ================================================

  function floresSolicitarAnimacao() {
    if (!floresQuadro) {
      floresQuadro = true;

      requestAnimationFrame(floresAnimar);
    }
  }

  // ================================================
  // MOVIMENTO DO MOUSE
  // ================================================

  function floresMoverMouse(evento) {
    if (
      floresMovimentoReduzido ||
      document.hidden
    ) {
      return;
    }

    var agora = performance.now();

    if (
      agora - floresUltimoMovimento <
      floresIntervalo
    ) {
      return;
    }

    floresUltimoMovimento = agora;

    for (
      var i = 0;
      i < floresPorMovimento;
      i++
    ) {
      floresCriar(
        evento.clientX,
        evento.clientY
      );
    }

    floresSolicitarAnimacao();
  }

  // ================================================
  // INICIALIZAÇÃO
  // ================================================

  function floresIniciar() {
    if (
      !document.body ||
      floresTela.isConnected
    ) {
      return;
    }

    document.body.appendChild(floresTela);

    floresAjustarTela();

    document.addEventListener(
      'mousemove',
      floresMoverMouse,
      { passive: true }
    );

    window.addEventListener(
      'resize',
      floresAjustarTela,
      { passive: true }
    );

    document.addEventListener(
      'visibilitychange',
      function () {
        if (document.hidden) {
          floresParticulas.length = 0;

          floresCtx.clearRect(
            0,
            0,
            floresLargura,
            floresAltura
          );
        }
      }
    );
  }

  if (document.readyState === 'loading') {
    document.addEventListener(
      'DOMContentLoaded',
      floresIniciar,
      { once: true }
    );
  } else {
    floresIniciar();
  }
})();
