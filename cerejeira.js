
/* =====================================================
   RASTRO DE FLORES DE CEREJEIRA — COM MÃOS DE SEDA
   Criadora: Com Mãos de Seda
   Site: https://www.commaosdesedaoficial.com
   © 2026 Com Mãos de Seda

   EFEITO:
   • Flores de cerejeira cor-de-rosa
   • Pétalas soltas acompanhando o movimento do mouse
   • Rastro suave e contínuo
   • Sem estrelas douradas 
   • Fundo transparente
   ===================================================== */

(function () {
  "use strict";

  // Evita iniciar o efeito duas vezes.
  if (window.cmsRastroCerejeirasAtivo) return;

  // Não executa em dispositivos sem mouse.
  if (window.matchMedia("(hover: none)").matches) return;

  window.cmsRastroCerejeirasAtivo = true;

  const ID_CANVAS = "cms-rastro-cerejeiras";

  // Remove somente uma tela antiga deste mesmo efeito.
  const canvasAntigo = document.getElementById(ID_CANVAS);
  if (canvasAntigo) canvasAntigo.remove();

  const canvas = document.createElement("canvas");
  canvas.id = ID_CANVAS;

  Object.assign(canvas.style, {
    position: "fixed",
    top: "0",
    left: "0",
    width: "100%",
    height: "100%",
    pointerEvents: "none",
    zIndex: "2147483646"
  });

  document.body.appendChild(canvas);

  const ctx = canvas.getContext("2d");

  if (!ctx) {
    canvas.remove();
    window.cmsRastroCerejeirasAtivo = false;
    return;
  }

  let largura = 0;
  let altura = 0;
  let escala = 1;

  const flores = [];
  const petalas = [];

  const MAX_FLORES = 65;
  const MAX_PETALAS = 100;

  let ultimoX = null;
  let ultimoY = null;
  let ultimoTempo = 0;

  function ajustarCanvas() {
    escala = Math.min(window.devicePixelRatio || 1, 2);

    largura = window.innerWidth;
    altura = window.innerHeight;

    canvas.width = Math.round(largura * escala);
    canvas.height = Math.round(altura * escala);

    ctx.setTransform(escala, 0, 0, escala, 0, 0);
  }

  window.addEventListener("resize", ajustarCanvas);
  ajustarCanvas();

  // Desenha uma flor com cinco pétalas.
  function desenharFlor(flor) {
    ctx.save();

    ctx.translate(flor.x, flor.y);
    ctx.rotate(flor.rotacao);
    ctx.scale(flor.tamanho / 10, flor.tamanho / 10);
    ctx.globalAlpha = flor.opacidade;

    for (let i = 0; i < 5; i++) {
      ctx.save();
      ctx.rotate((Math.PI * 2 * i) / 5);

      ctx.beginPath();
      ctx.ellipse(0, -5, 3.2, 5.2, 0, 0, Math.PI * 2);

      const gradiente = ctx.createLinearGradient(0, -10, 0, 0);
      gradiente.addColorStop(0, "#fff4fa");
      gradiente.addColorStop(0.45, "#ffb7d5");
      gradiente.addColorStop(1, "#f47eaf");

      ctx.fillStyle = gradiente;
      ctx.fill();

      ctx.strokeStyle = "rgba(220, 83, 143, 0.30)";
      ctx.lineWidth = 0.45;
      ctx.stroke();

      ctx.restore();
    }

    // Miolo delicado da flor.
    ctx.beginPath();
    ctx.arc(0, 0, 1.7, 0, Math.PI * 2);
    ctx.fillStyle = "#d99537";
    ctx.fill();

    ctx.restore();
  }

  // Desenha uma pétala individual.
  function desenharPetala(p) {
    ctx.save();

    ctx.translate(p.x, p.y);
    ctx.rotate(p.rotacao);
    ctx.globalAlpha = Math.max(0, p.vida);

    ctx.beginPath();
    ctx.ellipse(0, 0, p.tamanho * 0.55, p.tamanho, 0, 0, Math.PI * 2);

    ctx.fillStyle = p.cor;
    ctx.fill();

    ctx.restore();
  }

  function criarFlor(x, y) {
    if (flores.length >= MAX_FLORES) flores.shift();

    flores.push({
      x: x,
      y: y,
      tamanho: 5 + Math.random() * 10,
      rotacao: Math.random() * Math.PI * 2,
      opacidade: 0.65 + Math.random() * 0.35,
      vida: 1,
      velocidade: 0.15 + Math.random() * 0.35,
      giro: (Math.random() - 0.5) * 0.025
    });
  }

  function criarPetala(x, y) {
    if (petalas.length >= MAX_PETALAS) petalas.shift();

    const cores = [
      "#ffc0da",
      "#ff9fc7",
      "#ffe0ed",
      "#f58db8",
      "#fff0f6"
    ];

    petalas.push({
      x: x + (Math.random() - 0.5) * 22,
      y: y + (Math.random() - 0.5) * 22,
      tamanho: 2 + Math.random() * 4,
      rotacao: Math.random() * Math.PI * 2,
      velocidadeX: (Math.random() - 0.5) * 1.5,
      velocidadeY: 0.4 + Math.random() * 1.4,
      giro: (Math.random() - 0.5) * 0.08,
      vida: 1,
      desaparecimento: 0.006 + Math.random() * 0.012,
      cor: cores[Math.floor(Math.random() * cores.length)]
    });
  }

  // Cria o rastro ao mover o mouse.
  window.addEventListener("mousemove", function (evento) {
    const x = evento.clientX;
    const y = evento.clientY;
    const agora = performance.now();

    if (ultimoX === null) {
      ultimoX = x;
      ultimoY = y;
      criarFlor(x, y);
      criarPetala(x, y);
      return;
    }

    const distancia = Math.hypot(x - ultimoX, y - ultimoY);

    // Distribui as flores pelo caminho do mouse.
    if (distancia > 5) {
      const quantidade = Math.min(5, Math.floor(distancia / 7) + 1);

      for (let i = 1; i <= quantidade; i++) {
        const proporcao = i / quantidade;
        const px = ultimoX + (x - ultimoX) * proporcao;
        const py = ultimoY + (y - ultimoY) * proporcao;

        criarFlor(
          px + (Math.random() - 0.5) * 12,
          py + (Math.random() - 0.5) * 12
        );

        if (Math.random() < 0.8) {
          criarPetala(px, py);
        }
      }

      ultimoX = x;
      ultimoY = y;
      ultimoTempo = agora;
    } else if (agora - ultimoTempo > 100) {
      criarPetala(x, y);
      ultimoTempo = agora;
    }
  });

  function animar() {
    ctx.clearRect(0, 0, largura, altura);

    for (let i = flores.length - 1; i >= 0; i--) {
      const flor = flores[i];

      flor.y += flor.velocidade;
      flor.rotacao += flor.giro;
      flor.vida -= 0.003;
      flor.opacidade = Math.min(flor.opacidade, flor.vida);

      desenharFlor(flor);

      if (flor.vida <= 0 || flor.y > altura + 30) {
        flores.splice(i, 1);
      }
    }

    for (let i = petalas.length - 1; i >= 0; i--) {
      const p = petalas[i];

      p.x += p.velocidadeX;
      p.y += p.velocidadeY;
      p.rotacao += p.giro;
      p.velocidadeX += (Math.random() - 0.5) * 0.025;
      p.vida -= p.desaparecimento;

      desenharPetala(p);

      if (p.vida <= 0 || p.y > altura + 30) {
        petalas.splice(i, 1);
      }
    }

    window.requestAnimationFrame(animar);
  }

  animar();

})();
