/* =====================================================
   RASTRO DE ESTRELAS E BRILHOS — FLORES
   Criado por: Com Mãos de Seda
   Site: https://www.commaosdesedaoficial.com
   © 2026 Com Mãos de Seda
   ===================================================== */

(function () {
  'use strict';

  if (window.cmsRastroFloresAtivo) return;

  if (
    window.matchMedia &&
    window.matchMedia('(hover: none)').matches
  ) {
    return;
  }

  window.cmsRastroFloresAtivo = true;

  // ================================================
  // CONFIGURAÇÕES DO EFEITO FLORES
  // ================================================

  var floresLimiteParticulas = 180;
  var floresParticulasPorMovimento = 5;
  var floresIntervaloMinimo = 8;

  var floresComprimentoRastro = 35;
  var floresLarguraRastro = 16;
  var floresIntensidadeBrilho = 18;

  var floresDecaimentoMinimo = 0.012;
  var floresDecaimentoMaximo = 0.025;

  var floresUltimaParticula = 0;
  var floresParticulas = [];
  var floresCaminhoMouse = [];

  var floresLarguraTela = window.innerWidth;
  var floresAlturaTela = window.innerHeight;

  var floresMovimentoReduzido =
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  var floresCamada = document.createElement('canvas');
  floresCamada.id = 'cms-rastro-flores-douradas';
  floresCamada.setAttribute('aria-hidden', 'true');

  floresCamada.style.cssText = [
    'position:fixed',
    'inset:0',
    'width:100%',
    'height:100%',
    'pointer-events:none',
    'z-index:2147483647',
    'display:block'
  ].join(';');

  var floresContexto = floresCamada.getContext('2d');

  if (!floresContexto) {
    window.cmsRastroFloresAtivo = false;
    return;
  }

  // ================================================
  // AJUSTE DA TELA
  // ================================================

  function floresAjustarTela() {
    floresLarguraTela = window.innerWidth;
    floresAlturaTela = window.innerHeight;

    var floresEscala = Math.min(
      window.devicePixelRatio || 1,
      2
    );

    floresCamada.width = Math.round(
      floresLarguraTela * floresEscala
    );

    floresCamada.height = Math.round(
      floresAlturaTela * floresEscala
    );

    floresContexto.setTransform(
      floresEscala,
      0,
      0,
      floresEscala,
      0,
      0
    );
  }

  function floresAleatorio(min, max) {
    return Math.random() * (max - min) + min;
  }

  // ================================================
  // CRIAÇÃO DAS PARTÍCULAS
  // ================================================

  function floresCriarParticula(x, y) {
    if (
      floresParticulas.length >= floresLimiteParticulas
    ) {
      return;
    }

    var floresSorteio = Math.random();

    var floresTipo =
      floresSorteio < 0.62
        ? 'estrela'
        : floresSorteio < 0.91
          ? 'ponto'
          : 'brilho';

    var floresDispersao = floresLarguraRastro * 0.65;

    floresParticulas.push({
      x: x + floresAleatorio(
        -floresDispersao,
        floresDispersao
      ),

      y: y + floresAleatorio(
        -floresDispersao,
        floresDispersao
      ),

      vx: floresAleatorio(-1.2, 1.2),
      vy: floresAleatorio(-1.5, 0.7),

      tamanho:
        floresTipo === 'estrela'
          ? floresAleatorio(4, 11)
          : floresTipo === 'ponto'
            ? floresAleatorio(1, 2.8)
            : floresAleatorio(3, 6),

      tipo: floresTipo,
      vida: 1,

      decaimento: floresAleatorio(
        floresDecaimentoMinimo,
        floresDecaimentoMaximo
      ),

      rotacao: floresAleatorio(0, Math.PI * 2),
      giro: floresAleatorio(-0.035, 0.035),
      fase: floresAleatorio(0, Math.PI * 2)
    });
  }

  // ================================================
  // DESENHO DAS ESTRELAS
  // ================================================

  function floresDesenharEstrela(
    x,
    y,
    raio,
    rotacao
  ) {
    floresContexto.save();

    floresContexto.translate(x, y);
    floresContexto.rotate(rotacao);
    floresContexto.beginPath();

    for (var i = 0; i < 8; i++) {
      var floresAngulo =
        i * Math.PI / 4 - Math.PI / 2;

      var floresRaio =
        i % 2 === 0 ? raio : raio * 0.25;

      var floresPx =
        Math.cos(floresAngulo) * floresRaio;

      var floresPy =
        Math.sin(floresAngulo) * floresRaio;

      if (i === 0) {
        floresContexto.moveTo(
          floresPx,
          floresPy
        );
      } else {
        floresContexto.lineTo(
          floresPx,
          floresPy
        );
      }
    }

    floresContexto.closePath();
    floresContexto.fill();
    floresContexto.restore();
  }

  // ================================================
  // DESENHO DAS PARTÍCULAS
  // ================================================

  function floresDesenharParticula(p, tempo) {
    floresContexto.save();

    floresContexto.globalAlpha = Math.max(0, p.vida);
    floresContexto.fillStyle = '#FFF4B0';
    floresContexto.shadowColor = '#FFB900';
    floresContexto.shadowBlur = floresIntensidadeBrilho;

    if (p.tipo === 'estrela') {
      floresDesenharEstrela(
        p.x,
        p.y,
        p.tamanho,
        p.rotacao
      );

    } else if (p.tipo === 'ponto') {
      floresContexto.beginPath();

      floresContexto.arc(
        p.x,
        p.y,
        p.tamanho,
        0,
        Math.PI * 2
      );

      floresContexto.fill();

    } else {
      var floresPulso =
        0.65 +
        Math.sin(tempo / 100 + p.fase) * 0.35;

      var floresRaio = p.tamanho * floresPulso;

      floresContexto.fillRect(
        p.x - floresRaio * 0.25,
        p.y - floresRaio * 2,
        floresRaio * 0.5,
        floresRaio * 4
      );

      floresContexto.fillRect(
        p.x - floresRaio * 2,
        p.y - floresRaio * 0.25,
        floresRaio * 4,
        floresRaio * 0.5
      );
    }

    floresContexto.restore();
  }

  // ================================================
  // CAUDA LUMINOSA
  // ================================================

  function floresDesenharCauda() {
    if (floresCaminhoMouse.length < 2) return;

    floresContexto.save();

    for (
      var i = 1;
      i < floresCaminhoMouse.length;
      i++
    ) {
      var floresAnterior = floresCaminhoMouse[i - 1];
      var floresAtual = floresCaminhoMouse[i];

      var floresProgresso =
        i / (floresCaminhoMouse.length - 1);

      var floresLargura = Math.max(
        0.5,
        floresLarguraRastro * floresProgresso
      );

      var floresOpacidade =
        0.08 + floresProgresso * 0.55;

      // Halo exterior
      floresContexto.beginPath();

      floresContexto.moveTo(
        floresAnterior.x,
        floresAnterior.y
      );

      floresContexto.lineTo(
        floresAtual.x,
        floresAtual.y
      );

      floresContexto.lineWidth = floresLargura * 2;
      floresContexto.lineCap = 'round';
      floresContexto.lineJoin = 'round';

      floresContexto.strokeStyle =
        'rgba(255, 174, 0, ' +
        floresOpacidade * 0.35 +
        ')';

      floresContexto.shadowColor = '#FFB900';
      floresContexto.shadowBlur =
        floresIntensidadeBrilho;

      floresContexto.stroke();

      // Faixa principal
      floresContexto.beginPath();

      floresContexto.moveTo(
        floresAnterior.x,
        floresAnterior.y
      );

      floresContexto.lineTo(
        floresAtual.x,
        floresAtual.y
      );

      floresContexto.lineWidth = floresLargura;

      floresContexto.strokeStyle =
        'rgba(255, 205, 65, ' +
        floresOpacidade +
        ')';

      floresContexto.shadowBlur =
        floresIntensidadeBrilho * 0.65;

      floresContexto.stroke();

      // Núcleo claro
      floresContexto.beginPath();

      floresContexto.moveTo(
        floresAnterior.x,
        floresAnterior.y
      );

      floresContexto.lineTo(
        floresAtual.x,
        floresAtual.y
      );

      floresContexto.lineWidth = Math.max(
        0.6,
        floresLargura * 0.16
      );

      floresContexto.strokeStyle =
        'rgba(255, 255, 215, ' +
        floresOpacidade * 0.9 +
        ')';

      floresContexto.shadowBlur =
        floresIntensidadeBrilho * 0.4;

      floresContexto.stroke();
    }

    floresContexto.restore();
  }

  // ================================================
  // ANIMAÇÃO
  // ================================================

  var floresQuadroPendente = false;

  function floresAnimar(tempo) {
    floresQuadroPendente = false;

    floresContexto.clearRect(
      0,
      0,
      floresLarguraTela,
      floresAlturaTela
    );

    floresDesenharCauda();

    for (
      var i = floresParticulas.length - 1;
      i >= 0;
      i--
    ) {
      var p = floresParticulas[i];

      p.x += p.vx;
      p.y += p.vy;

      p.vy -= 0.006;
      p.rotacao += p.giro;
      p.vida -= p.decaimento;

      if (p.vida <= 0) {
        floresParticulas.splice(i, 1);
        continue;
      }

      floresDesenharParticula(p, tempo);
    }

    for (
      var j = floresCaminhoMouse.length - 1;
      j >= 0;
      j--
    ) {
      floresCaminhoMouse[j].vida -= 0.012;

      if (floresCaminhoMouse[j].vida <= 0) {
        floresCaminhoMouse.splice(j, 1);
      }
    }

    if (
      floresParticulas.length > 0 ||
      floresCaminhoMouse.length > 1
    ) {
      floresSolicitarQuadro();
    }
  }

  function floresSolicitarQuadro() {
    if (!floresQuadroPendente) {
      floresQuadroPendente = true;

      requestAnimationFrame(floresAnimar);
    }
  }

  // ================================================
  // MOVIMENTO DO MOUSE
  // ================================================

  function floresAoMoverMouse(evento) {
    if (floresMovimentoReduzido || document.hidden) {
      return;
    }

    var floresAgora = performance.now();

    floresCaminhoMouse.push({
      x: evento.clientX,
      y: evento.clientY,
      vida: 1
    });

    while (
      floresCaminhoMouse.length >
      floresComprimentoRastro
    ) {
      floresCaminhoMouse.shift();
    }

    if (
      floresAgora - floresUltimaParticula >=
      floresIntervaloMinimo
    ) {
      floresUltimaParticula = floresAgora;

      for (
        var i = 0;
        i < floresParticulasPorMovimento;
        i++
      ) {
        floresCriarParticula(
          evento.clientX,
          evento.clientY
        );
      }
    }

    floresSolicitarQuadro();
  }

  // ================================================
  // INICIALIZAÇÃO
  // ================================================

  function floresIniciar() {
    if (!document.body || floresCamada.isConnected) {
      return;
    }

    document.body.appendChild(floresCamada);

    floresAjustarTela();

    document.addEventListener(
      'mousemove',
      floresAoMoverMouse,
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
          floresCaminhoMouse.length = 0;

          floresContexto.clearRect(
            0,
            0,
            floresLarguraTela,
            floresAlturaTela
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
