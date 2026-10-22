
/* =========================================================
   CURSOR MÁGICO DE CEREJEIRAS
   Criadora: Com Mãos de Seda
   Site: https://www.commaosdesedaoficial.com
   © 2026 Com Mãos de Seda

   Efeito independente:
   - Cursor personalizado com flor de cerejeira
   - Rastro longo de flores e pétalas
   - Pequenos brilhos rosados
   - Canvas transparente
   - Compatível com Blogger
   ========================================================= */

(function () {
  "use strict";

  // Evita duplicação deste efeito específico.
  if (window.cmsSakuraCursor2026) return;
  window.cmsSakuraCursor2026 = true;

  // O efeito é destinado a dispositivos com mouse.
  if (window.matchMedia("(hover: none)").matches) return;

  function iniciarSakura() {
    if (!document.body) {
      window.addEventListener("DOMContentLoaded", iniciarSakura, {
        once: true
      });
      return;
    }

    const canvas = document.createElement("canvas");
    canvas.id = "cms-sakura-cursor-2026";

    Object.assign(canvas.style, {
      position: "fixed",
      inset: "0",
      width: "100%",
      height: "100%",
      pointerEvents: "none",
      zIndex: "2147483646"
    });

    document.body.appendChild(canvas);

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let dpr = 1;
    let mouseX = -100;
    let mouseY = -100;
    let lastX = -100;
    let lastY = -100;
    let ultimoRastro = 0;
    let tempo = 0;

    const flores = [];
    const petalas = [];
    const brilhos = [];

    const MAX_FLORES = 50;
    const MAX_PETALAS = 80;
    const MAX_BRILHOS = 50;

    function redimensionar() {
      dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = window.innerWidth;
      h = window.innerHeight;

      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    window.addEventListener("resize", redimensionar);
    redimensionar();

    function flor(x, y, tamanho) {
      if (flores.length >= MAX_FLORES) flores.shift();

      flores.push({
        x: x,
        y: y,
        tamanho: tamanho || (7 + Math.random() * 8),
        rotacao: Math.random() * Math.PI * 2,
        giro: (Math.random() - 0.5) * 0.025,
        vida: 1,
        decaimento: 0.004 + Math.random() * 0.004
      });
    }

    function petala(x, y) {
      if (petalas.length >= MAX_PETALAS) petalas.shift();

      const cores = [
        "#ffc5dc",
        "#ff9fc8",
        "#ffe6f0",
        "#f477ac",
        "#fff3f8"
      ];

      petalas.push({
        x: x + (Math.random() - 0.5) * 24,
        y: y + (Math.random() - 0.5) * 24,
        tamanho: 2.5 + Math.random() * 5,
        rotacao: Math.random() * Math.PI * 2,
        vx: (Math.random() - 0.5) * 1.5,
        vy: 0.3 + Math.random() * 1.4,
        giro: (Math.random() - 0.5) * 0.08,
        vida: 1,
        decaimento: 0.004 + Math.random() * 0.007,
        cor: cores[Math.floor(Math.random() * cores.length)]
      });
    }

    function brilho(x, y) {
      if (brilhos.length >= MAX_BRILHOS) brilhos.shift();

      brilhos.push({
        x: x + (Math.random() - 0.5) * 20,
        y: y + (Math.random() - 0.5) * 20,
        tamanho: 1 + Math.random() * 2.2,
        vida: 1,
        decaimento: 0.025 + Math.random() * 0.025
      });
    }

    function desenharFlor(f) {
      ctx.save();
      ctx.translate(f.x, f.y);
      ctx.rotate(f.rotacao);
      ctx.globalAlpha = Math.max(0, f.vida);

      const escala = f.tamanho / 10;
      ctx.scale(escala, escala);

      for (let i = 0; i < 5; i++) {
        ctx.save();
        ctx.rotate(i * Math.PI * 2 / 5);

        ctx.beginPath();
        ctx.ellipse(0, -5, 3.3, 5.2, 0, 0, Math.PI * 2);

        const grad = ctx.createLinearGradient(0, -10, 0, 1);
        grad.addColorStop(0, "#fff5fa");
        grad.addColorStop(0.45, "#ffb8d4");
        grad.addColorStop(1, "#f477ab");

        ctx.fillStyle = grad;
        ctx.fill();

        ctx.strokeStyle = "rgba(218, 81, 143, 0.35)";
        ctx.lineWidth = 0.45;
        ctx.stroke();

        ctx.restore();
      }

      // Miolo da flor.
      ctx.beginPath();
      ctx.arc(0, 0, 1.4, 0, Math.PI * 2);
      ctx.fillStyle = "#ffd36b";
      ctx.fill();

      for (let i = 0; i < 5; i++) {
        const a = i * Math.PI * 2 / 5;
        ctx.beginPath();
        ctx.arc(Math.cos(a) * 2, Math.sin(a) * 2, 0.45, 0, Math.PI * 2);
        ctx.fillStyle = "#fff9d9";
        ctx.fill();
      }

      ctx.restore();
    }

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

    function desenharBrilho(b) {
      ctx.save();
      ctx.globalAlpha = Math.max(0, b.vida);
      ctx.shadowBlur = 8;
      ctx.shadowColor = "#ff9fc8";
      ctx.fillStyle = "#fff2f8";

      ctx.beginPath();
      ctx.arc(b.x, b.y, b.tamanho, 0, Math.PI * 2);
      ctx.fill();

      ctx.restore();
    }

    // Cursor personalizado: uma pequena flor junto à ponta.
    function desenharCursor() {
      if (mouseX < 0 || mouseY < 0) return;

      ctx.save();
      ctx.translate(mouseX, mouseY);

      // Ponteiro fino.
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(2, 19);
      ctx.lineTo(7, 14);
      ctx.lineTo(12, 22);
      ctx.lineTo(15, 20);
      ctx.lineTo(10, 12);
      ctx.lineTo(17, 11);
      ctx.closePath();

      ctx.fillStyle = "rgba(255, 239, 247, 0.95)";
      ctx.strokeStyle = "#e96ba5";
      ctx.lineWidth = 1;
      ctx.fill();
      ctx.stroke();

      ctx.restore();

      // Flor ao lado da ponta do cursor.
      desenharFlor({
        x: mouseX + 9,
        y: mouseY - 5,
        tamanho: 10,
        rotacao: tempo * 0.0005,
        vida: 1
      });
    }

    window.addEventListener("mousemove", function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;

      if (lastX < 0) {
        lastX = mouseX;
        lastY = mouseY;
        flor(mouseX, mouseY, 12);
        return;
      }

      const dx = mouseX - lastX;
      const dy = mouseY - lastY;
      const distancia = Math.hypot(dx, dy);

      // Distribui partículas por todo o caminho percorrido.
      const passos = Math.min(12, Math.floor(distancia / 4));

      for (let i = 1; i <= passos; i++) {
        const t = i / Math.max(1, passos);
        const x = lastX + dx * t;
        const y = lastY + dy * t;

        petala(x, y);

        if (Math.random() < 0.24) {
          petala(x + Math.random() * 10, y + Math.random() * 10);
        }

        if (Math.random() < 0.045) {
          flor(x, y, 7 + Math.random() * 8);
        }

        if (Math.random() < 0.45) {
          brilho(x, y);
        }
      }

      const agora = performance.now();

      // Flores extras ao mover o cursor rapidamente.
      if (distancia > 20 && agora - ultimoRastro > 35) {
        flor(mouseX, mouseY, 9 + Math.random() * 7);
        ultimoRastro = agora;
      }

      lastX = mouseX;
      lastY = mouseY;
    });

    window.addEventListener("mouseout", function (e) {
      if (!e.relatedTarget) {
        mouseX = -100;
        mouseY = -100;
        lastX = -100;
        lastY = -100;
      }
    });

    function animar(timestamp) {
      tempo = timestamp;
      ctx.clearRect(0, 0, w, h);

      for (let i = flores.length - 1; i >= 0; i--) {
        const f = flores[i];
        f.rotacao += f.giro;
        f.vida -= f.decaimento;
        f.y += 0.12;

        desenharFlor(f);

        if (f.vida <= 0) flores.splice(i, 1);
      }

      for (let i = petalas.length - 1; i >= 0; i--) {
        const p = petalas[i];

        p.x += p.vx;
        p.y += p.vy;
        p.rotacao += p.giro;
        p.vx += Math.sin(timestamp * 0.001 + i) * 0.008;
        p.vida -= p.decaimento;

        desenharPetala(p);

        if (p.vida <= 0 || p.y > h + 30) {
          petalas.splice(i, 1);
        }
      }

      for (let i = brilhos.length - 1; i >= 0; i--) {
        const b = brilhos[i];
        b.vida -= b.decaimento;

        desenharBrilho(b);

        if (b.vida <= 0) brilhos.splice(i, 1);
      }

      desenharCursor();
      window.requestAnimationFrame(animar);
    }

    window.requestAnimationFrame(animar);
  }

  iniciarSakura();
})();
