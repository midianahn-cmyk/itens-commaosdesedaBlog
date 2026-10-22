
/* =====================================================
   RASTRO DE FLORES DE CEREJEIRA
   Criado por: Com Mãos de Seda
   Site: https://www.commaosdesedaoficial.com
   © 2026 Com Mãos de Seda
   ===================================================== */

(function () {
  'use strict';

  if (window.cmsRastroCerejeirasAtivo) return;

  if (
    window.matchMedia &&
    window.matchMedia('(hover: none)').matches
  ) {
    return;
  }

  window.cmsRastroCerejeirasAtivo = true;

  // CONFIGURAÇÕES
  var MAX_FLORES = 45;
  var INTERVALO = 28;
  var TAMANHO_MIN = 8;
  var TAMANHO_MAX = 17;
  var DURACAO = 1500;

  var flores = [];
  var ultimoTempo = 0;
  var quadroAtivo = false;
  var mouseX = null;
  var mouseY = null;

  var coresFlores = [
    '#FFDCE8',
    '#FFC0D5',
    '#F8A9C5',
    '#FFFFFF',
    '#FCE8EF',
    '#F4B6CE'
  ];

  // CAMADA DO EFEITO
  var tela = document.createElement('canvas');
  tela.id = 'cms-rastro-cerejeiras';

  tela.setAttribute('aria-hidden', 'true');

  tela.style.cssText =
    'position:fixed;' +
    'inset:0;' +
    'width:100%;' +
    'height:100%;' +
    'pointer-events:none;' +
    'z-index:2147483647;' +
    'display:block;';

  var ctx = tela.getContext('2d');

  if (!ctx) {
    window.cmsRastroCerejeirasAtivo = false;
    return;
  }

  var largura = window.innerWidth;
  var altura = window.innerHeight;

  function ajustarTela() {
    largura = window.innerWidth;
    altura = window.innerHeight;

    var escala = Math.min(
      window.devicePixelRatio || 1,
      2
    );

    tela.width = Math.round(largura * escala);
    tela.height = Math.round(altura * escala);

    ctx.setTransform(escala, 0, 0, escala, 0, 0);
  }

  // DESENHO DA FLOR DE CEREJEIRA
  function desenharFlor(flor) {
    ctx.save();

    ctx.translate(flor.x, flor.y);
    ctx.rotate(flor.rotacao);

    // Nenhum brilho ou sombra
    ctx.shadowBlur = 0;
    ctx.globalAlpha = flor.opacidade;

    // Cinco pétalas arredondadas
    for (var i = 0; i < 5; i++) {
      ctx.save();

      ctx.rotate(i * Math.PI * 2 / 5);

      ctx.beginPath();

      ctx.ellipse(
        0,
        -flor.tamanho * 0.34,
        flor.tamanho * 0.25,
        flor.tamanho * 0.40,
        0,
        0,
        Math.PI * 2
      );

      ctx.fillStyle = flor.cor;
      ctx.fill();

      // Contorno sutil para definir as pétalas
      ctx.strokeStyle = '#E9A0BB';
      ctx.lineWidth = 0.45;
      ctx.stroke();

      ctx.restore();
    }

    // Centro natural da flor
    ctx.beginPath();

    ctx.arc(
      0,
      0,
      flor.tamanho * 0.10,
      0,
      Math.PI * 2
    );

    ctx.fillStyle = '#D98A46';
    ctx.fill();

    // Pequenos estames desenhados, sem luminosidade
    ctx.strokeStyle = '#C77A42';
    ctx.lineWidth = 0.65;

    for (var j = 0; j < 5; j++) {
      var angulo = j * Math.PI * 2 / 5;

      ctx.beginPath();
      ctx.moveTo(
        Math.cos(angulo) * flor.tamanho * 0.08,
        Math.sin(angulo) * flor.tamanho * 0.08
      );

      ctx.lineTo(
        Math.cos(angulo) * flor.tamanho * 0.18,
        Math.sin(angulo) * flor.tamanho * 0.18
      );

      ctx.stroke();
    }

    ctx.restore();
  }

  // CRIA FLORES E PÉTALAS SOLTAS
  function criarParticula(x, y) {
    if (flores.length >= MAX_FLORES) {
      flores.shift();
    }

    var eFlor = Math.random() < 0.78;

    flores.push({
      x: x + (Math.random() - 0.5) * 18,
      y: y + (Math.random() - 0.5) * 18,

      tipo: eFlor ? 'flor' : 'petala',

      tamanho: eFlor
        ? TAMANHO_MIN +
          Math.random() * (TAMANHO_MAX - TAMANHO_MIN)
        : 4 + Math.random() * 6,

      cor: coresFlores[
        Math.floor(Math.random() * coresFlores.length)
      ],

      rotacao: Math.random() * Math.PI * 2,

      giro: (Math.random() - 0.5) * 0.035,

      vx: (Math.random() - 0.5) * 0.8,
      vy: -0.25 - Math.random() * 0.55,

      inicio: performance.now(),

      duracao: DURACAO *
        (0.75 + Math.random() * 0.5),

      opacidade: 1
    });
  }

  // DESENHO DE UMA PÉTALA SOLTA
  function desenharPetala(flor) {
    ctx.save();

    ctx.translate(flor.x, flor.y);
    ctx.rotate(flor.rotacao);

    ctx.globalAlpha = flor.opacidade;
    ctx.shadowBlur = 0;
    ctx.fillStyle = flor.cor;

    ctx.beginPath();

    ctx.ellipse(
      0,
      0,
      flor.tamanho * 0.45,
      flor.tamanho,
      0,
      0,
      Math.PI * 2
    );

    ctx.fill();

    ctx.restore();
  }

  // ANIMAÇÃO
  function animar(tempo) {
    quadroAtivo = false;

    ctx.clearRect(0, 0, largura, altura);

    for (var i = flores.length - 1; i >= 0; i--) {
      var flor = flores[i];

      var decorrido = tempo - flor.inicio;
      var progresso = decorrido / flor.duracao;

      if (progresso >= 1) {
        flores.splice(i, 1);
        continue;
      }

      flor.x += flor.vx;
      flor.y += flor.vy;
      flor.rotacao += flor.giro;

      // Desaparece suavemente, sem brilho
      flor.opacidade = 1 - progresso;

      if (flor.tipo === 'flor') {
        desenharFlor(flor);
      } else {
        desenharPetala(flor);
      }
    }

    if (flores.length > 0) {
      solicitarAnimacao();
    }
  }

  function solicitarAnimacao() {
    if (!quadroAtivo) {
      quadroAtivo = true;
      requestAnimationFrame(animar);
    }
  }

  // MOVIMENTO DO CURSOR
  function moverCursor(evento) {
    if (document.hidden) return;

    mouseX = evento.clientX;
    mouseY = evento.clientY;

    var agora = performance.now();

    if (agora - ultimoTempo < INTERVALO) return;

    ultimoTempo = agora;

    criarParticula(mouseX, mouseY);

    solicitarAnimacao();
  }

  // INICIALIZAÇÃO
  function iniciar() {
    if (!document.body || tela.isConnected) return;

    document.body.appendChild(tela);

    ajustarTela();

    document.addEventListener(
      'mousemove',
      moverCursor,
      { passive: true }
    );

    window.addEventListener(
      'resize',
      ajustarTela,
      { passive: true }
    );

    document.addEventListener(
      'visibilitychange',
      function () {
        if (document.hidden) {
          flores.length = 0;

          ctx.clearRect(0, 0, largura, altura);
        }
      }
    );
  }

  if (document.readyState === 'loading') {
    document.addEventListener(
      'DOMContentLoaded',
      iniciar,
      { once: true }
    );
  } else {
    iniciar();
  }
})();
