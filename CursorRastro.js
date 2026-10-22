
/* =====================================================
   RASTRO DE ESTRELAS E BRILHOS — CAUDA DE COMETA DOURADA
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

  // ================================================
  // CONFIGURAÇÕES — INTENSIDADE DO EFEITO
  // ================================================

  var limiteParticulas = 100;
  var particulasPorMovimento = 12;
  var intervaloMinimo = 1;

  // Aumente para uma cauda mais comprida
  var comprimentoRastro = 65;

  // Aumente para uma cauda mais larga
  var larguraRastro = 30;

  // Intensidade do brilho dourado
  var intensidadeBrilho = 32;

  // Duração das partículas
  var decaimentoMinimo = 0.002;
  var decaimentoMaximo = 0.005;

  var ultimaParticula = 0;
  var particulas = [];
  var caminhoMouse = [];

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

  function aleatorio(min, max) {
    return Math.random() * (max - min) + min;
  }

  // ================================================
  // CRIAÇÃO DAS PARTÍCULAS
  // ================================================

  function criarParticula(x, y) {
    if (particulas.length >= limiteParticulas) return;

    var sorteio = Math.random();

    var tipo = sorteio < 0.62
      ? 'estrela'
      : sorteio < 0.91
        ? 'ponto'
        : 'brilho';

    // Dispersão lateral para alargar a cauda
    var dispersao = larguraRastro * 0.65;

    particulas.push({
      x: x + aleatorio(-dispersao, dispersao),
      y: y + aleatorio(-dispersao, dispersao),

      vx: aleatorio(-1.5, 1.5),
      vy: aleatorio(-1.8, 0.8),

      tamanho: tipo === 'estrela'
        ? aleatorio(5, 15)
        : tipo === 'ponto'
          ? aleatorio(1, 3.5)
          : aleatorio(3, 8),

      tipo: tipo,
      vida: 1,

      decaimento: aleatorio(
        decaimentoMinimo,
        decaimentoMaximo
      ),

      rotacao: aleatorio(0, Math.PI * 2),
      giro: aleatorio(-0.035, 0.035),
      fase: aleatorio(0, Math.PI * 2)
    });
  }

  // ================================================
  // DESENHO DAS ESTRELAS
  // ================================================

  function desenharEstrela(x, y, raio, rotacao) {
    contexto.save();

    contexto.translate(x, y);
    contexto.rotate(rotacao);
    contexto.beginPath();

    for (var i = 0; i < 8; i++) {
      var angulo = i * Math.PI / 4 - Math.PI / 2;
      var r = i % 2 === 0 ? raio : raio * 0.25;

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
    contexto.fillStyle = '#FFF4B0';
    contexto.shadowColor = '#FFB900';
    contexto.shadowBlur = intensidadeBrilho;

    if (p.tipo === 'estrela') {
      desenharEstrela(
        p.x,
        p.y,
        p.tamanho,
        p.rotacao
      );

    } else if (p.tipo === 'ponto') {
      contexto.beginPath();
      contexto.arc(
        p.x,
        p.y,
        p.tamanho,
        0,
        Math.PI * 2
      );
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

  // ================================================
  // CAUDA LUMINOSA CONTÍNUA
  // ================================================

  function desenharCauda() {
    if (caminhoMouse.length < 2) return;

    contexto.save();

    // A cauda começa fina e se alarga perto do cursor
    for (var i = 1; i < caminhoMouse.length; i++) {
      var anterior = caminhoMouse[i - 1];
      var atual = caminhoMouse[i];

      var progresso = i / (caminhoMouse.length - 1);

      var largura =
        Math.max(0.5, larguraRastro * progresso);

      var opacidade = 0.08 + progresso * 0.55;

      // Halo exterior dourado
      contexto.beginPath();
      contexto.moveTo(anterior.x, anterior.y);
      contexto.lineTo(atual.x, atual.y);

      contexto.lineWidth = largura * 2;
      contexto.lineCap = 'round';
      contexto.lineJoin = 'round';
      contexto.strokeStyle =
        'rgba(255, 174, 0, ' + (opacidade * 0.35) + ')';

      contexto.shadowColor = '#FFB900';
      contexto.shadowBlur = intensidadeBrilho;

      contexto.stroke();

      // Faixa principal de luz
      contexto.beginPath();
      contexto.moveTo(anterior.x, anterior.y);
      contexto.lineTo(atual.x, atual.y);

      contexto.lineWidth = largura;
      contexto.strokeStyle =
        'rgba(255, 205, 65, ' + opacidade + ')';

      contexto.shadowBlur = intensidadeBrilho * 0.65;
      contexto.stroke();

      // Núcleo fino e claro
      contexto.beginPath();
      contexto.moveTo(anterior.x, anterior.y);
      contexto.lineTo(atual.x, atual.y);

      contexto.lineWidth = Math.max(0.6, largura * 0.16);
      contexto.strokeStyle =
        'rgba(255, 255, 215, ' + (opacidade * 0.9) + ')';

      contexto.shadowBlur = intensidadeBrilho * 0.4;
      contexto.stroke();
    }

    contexto.restore();
  }

  // ================================================
  // ANIMAÇÃO
  // ================================================

  var quadroPendente = false;

  function animar(tempo) {
    quadroPendente = false;

    contexto.clearRect(0, 0, larguraTela, alturaTela);

    desenharCauda();

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

    // Encurta a cauda gradualmente, preservando os trechos recentes
    for (var j = caminhoMouse.length - 1; j >= 0; j--) {
      caminhoMouse[j].vida -= 0.012;

      if (caminhoMouse[j].vida <= 0) {
        caminhoMouse.splice(j, 1);
      }
    }

    if (particulas.length > 0 || caminhoMouse.length > 1) {
      solicitarQuadro();
    }
  }

  function solicitarQuadro() {
    if (!quadroPendente) {
      quadroPendente = true;
      requestAnimationFrame(animar);
    }
  }

  // ================================================
  // MOVIMENTO DO MOUSE
  // ================================================

  function aoMoverMouse(evento) {
    if (movimentoReduzido || document.hidden) return;

    var agora = performance.now();

    // Registra a trajetória do cursor
    caminhoMouse.push({
      x: evento.clientX,
      y: evento.clientY,
      vida: 1
    });

    while (caminhoMouse.length > comprimentoRastro) {
      caminhoMouse.shift();
    }

    if (agora - ultimaParticula >= intervaloMinimo) {
      ultimaParticula = agora;

      for (var i = 0; i < particulasPorMovimento; i++) {
        criarParticula(evento.clientX, evento.clientY);
      }
    }

    solicitarQuadro();
  }

  // ================================================
  // INICIALIZAÇÃO
  // ================================================

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
        caminhoMouse.length = 0;

        contexto.clearRect(
          0,
          0,
          larguraTela,
          alturaTela
        );
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
