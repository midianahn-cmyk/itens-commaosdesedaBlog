
/* =====================================================
   RASTRO DE ESTRELAS E BRILHOS — DOURADO MÁGICO
   Criado por: Com Mãos de Seda
   Site: https://www.commaosdesedaoficial.com
   © 2026 Com Mãos de Seda
   ===================================================== */

(function () {
  'use strict';

  if (window.cmsRastroDouradoAtivo) return;

  if (
    window.matchMedia &&
    window.matchMedia('(hover: none)').matches
  ) {
    return;
  }

  window.cmsRastroDouradoAtivo = true;

  // CONFIGURAÇÕES DO EFEITO
  var limiteParticulas = 650;       // Antes: 180
  var intervaloMinimo = 2;          // Antes: 5
  var particulasPorMovimento = 8;    // Antes: 3
  var ultimaParticula = 0;
  var particulas = [];
  var larguraTela = window.innerWidth;
  var alturaTela = window.innerHeight;

  var movimentoReduzido =
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var camada = document.createElement('canvas');
  camada.id = 'cms-rastro-estrelas-douradas';
  camada.setAttribute('aria-hidden', 'true');

  camada.style.cssText = [
    'position:fixed',
    'inset:0',
    'width:100%',
    'height:100%',
    'pointer-events:none',
    'z-index:2147483647',
    'display:block'
  ].join(';');

  var contexto = camada.getContext('2d');

  if (!contexto) {
    window.cmsRastroDouradoAtivo = false;
    return;
  }

  function ajustarTela() {
    larguraTela = window.innerWidth;
    alturaTela = window.innerHeight;

    var escala = Math.min(window.devicePixelRatio || 1, 2);

    camada.width = Math.round(larguraTela * escala);
    camada.height = Math.round(alturaTela * escala);

    contexto.setTransform(escala, 0, 0, escala, 0, 0);
  }

  function numeroAleatorio(min, max) {
    return Math.random() * (max - min) + min;
  }

  function criarParticula(x, y) {
    if (particulas.length >= limiteParticulas) return;

    var sorteio = Math.random();

    // Mais estrelas grandes e pontos cintilantes
    var tipo = sorteio < 0.68
      ? 'estrela'
      : sorteio < 0.90
        ? 'ponto'
        : 'brilho';

    particulas.push({
      x: x + numeroAleatorio(-22, 22),
      y: y + numeroAleatorio(-22, 22),

      vx: numeroAleatorio(-1.8, 1.8),
      vy: numeroAleatorio(-2.0, 0.8),

      tamanho: tipo === 'estrela'
        ? numeroAleatorio(7, 17)
        : tipo === 'ponto'
          ? numeroAleatorio(1.5, 4.5)
          : numeroAleatorio(4, 9),

      tipo: tipo,
      vida: 1,

      // Maior duração para alongar o rastro
      decaimento: numeroAleatorio(0.0025, 0.006),

      rotacao: numeroAleatorio(0, Math.PI),
      giro: numeroAleatorio(-0.035, 0.035),
      fase: numeroAleatorio(0, Math.PI * 2)
    });
  }

  function desenharEstrela(x, y, raio, rotacao) {
    contexto.save();
    contexto.translate(x, y);
    contexto.rotate(rotacao);
    contexto.beginPath();

    for (var i = 0; i < 8; i++) {
      var angulo = i * Math.PI / 4 - Math.PI / 2;
      var r = i % 2 === 0 ? raio : raio * 0.28;

      var px = Math.cos(angulo) * r;
      var py = Math.sin(angulo) * r;

      if (i === 0) {
        contexto.moveTo(px, py);
      } else {
        contexto.lineTo(px, py);
      }
    }

    contexto.closePath();
    contexto.fill();
    contexto.restore();
  }

  function desenharParticula(p, tempo) {
    contexto.save();

    contexto.globalAlpha = Math.max(0, p.vida);

    // Dourado mais luminoso
    contexto.fillStyle = '#FFF2A6';
    contexto.shadowColor = '#FFB800';
    contexto.shadowBlur = 22;

    if (p.tipo === 'estrela') {
      desenharEstrela(p.x, p.y, p.tamanho, p.rotacao);

    } else if (p.tipo === 'ponto') {
      contexto.beginPath();
      contexto.arc(p.x, p.y, p.tamanho, 0, Math.PI * 2);
      contexto.fill();

    } else {
      var pulso =
        0.65 + Math.sin(tempo / 100 + p.fase) * 0.35;

      var r = p.tamanho * pulso;

      contexto.fillRect(
        p.x - r * 0.25,
        p.y - r * 2,
        r * 0.5,
        r * 4
      );

      contexto.fillRect(
        p.x - r * 2,
        p.y - r * 0.25,
        r * 4,
        r * 0.5
      );
    }

    contexto.restore();
  }

  var quadroPendente = false;

  function animar(tempo) {
    quadroPendente = false;

    contexto.clearRect(0, 0, larguraTela, alturaTela);

    for (var i = particulas.length - 1; i >= 0; i--) {
      var p = particulas[i];

      p.x += p.vx;
      p.y += p.vy;

      p.vy -= 0.006;
      p.rotacao += p.giro;
      p.vida -= p.decaimento;

      if (p.vida <= 0) {
        particulas.splice(i, 1);
        continue;
      }

      desenharParticula(p, tempo);
    }

    if (particulas.length > 0) {
      solicitarQuadro();
    }
  }

  function solicitarQuadro() {
    if (!quadroPendente) {
      quadroPendente = true;
      requestAnimationFrame(animar);
    }
  }

  function aoMoverMouse(evento) {
    if (movimentoReduzido || document.hidden) return;

    var agora = performance.now();

    if (agora - ultimaParticula < intervaloMinimo) return;

    ultimaParticula = agora;

    for (var i = 0; i < particulasPorMovimento; i++) {
      criarParticula(evento.clientX, evento.clientY);
    }

    solicitarQuadro();
  }

  function iniciar() {
    if (!document.body || camada.isConnected) return;

    document.body.appendChild(camada);

    ajustarTela();

    document.addEventListener('mousemove', aoMoverMouse, {
      passive: true
    });

    window.addEventListener('resize', ajustarTela, {
      passive: true
    });

    document.addEventListener('visibilitychange', function () {
      if (document.hidden) {
        particulas.length = 0;
        contexto.clearRect(0, 0, larguraTela, alturaTela);
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciar, {
      once: true
    });
  } else {
    iniciar();
  }
})();
