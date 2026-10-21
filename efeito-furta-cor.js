
/* =====================================================
   EFEITO FURTA-COR ARCO-ÍRIS
   Criado por: Com Mãos de Seda
   Compatível com Blogger, sites e páginas HTML
   © 2026 Com Mãos de Seda
===================================================== */

(function () {
  'use strict';

  var classeImagem = 'efeito-furta-cor';
  var classeCaixa = 'efeito-furta-cor-caixa';

  // Não instalar o mesmo efeito duas vezes
  if (window.cmsEfeitoFurtaCorAtivo) return;
  window.cmsEfeitoFurtaCorAtivo = true;

  // Criar os estilos automaticamente
  var estilo = document.createElement('style');

  estilo.textContent = `
    img.${classeImagem} {
      transition: filter .4s ease;
    }

    .${classeCaixa} {
      position: relative !important;
      display: inline-block;
      overflow: hidden;
      isolation: isolate;
      max-width: 100%;
      vertical-align: middle;
    }

    .${classeCaixa} > img {
      display: block;
      max-width: 100%;
      height: auto;
    }

    .${classeCaixa}::after {
      content: "";
      position: absolute;
      inset: 0;
      pointer-events: none;
      opacity: 0;
      background: linear-gradient(
        115deg,
        transparent 0%,
        rgba(255, 70, 180, .38) 20%,
        rgba(170, 90, 255, .38) 35%,
        rgba(60, 220, 255, .38) 50%,
        rgba(255, 235, 100, .40) 65%,
        rgba(255, 100, 190, .38) 80%,
        transparent 100%
      );
      background-size: 250% 250%;
      background-position: 100% 50%;
      mix-blend-mode: color;
      transition: opacity .35s ease;
    }

    .${classeCaixa}:hover::after {
      opacity: 1;
      animation: cmsFurtaCorMovimento 2.5s linear infinite;
    }

    @keyframes cmsFurtaCorMovimento {
      from { background-position: 100% 50%; }
      to   { background-position: 0% 50%; }
    }

    @media (prefers-reduced-motion: reduce) {
      .${classeCaixa}::after {
        animation: none !important;
        transition: none !important;
      }

      img.${classeImagem} {
        transition: none !important;
      }
    }
  `;

  document.head.appendChild(estilo);

  // Identificar as imagens que devem receber o efeito
  function aplicarEfeito() {
    var imagens = document.querySelectorAll(
      'img:not([data-sem-furta-cor]):not(.sem-efeito-furta-cor)'
    );

    imagens.forEach(function (img) {
      if (img.classList.contains(classeImagem)) return;

      // Ignorar ícones e imagens muito pequenas
      if (img.width && img.height &&
          (img.width < 40 || img.height < 40)) return;

      // Não interferir em imagens que ainda não foram carregadas
      if (!img.complete || !img.naturalWidth) {
        img.addEventListener('load', aplicarEfeito, { once: true });
        return;
      }

      // Evitar elementos de interface e imagens especiais
      if (img.closest(
        'svg, picture, video, canvas, .no-furta-cor, ' +
        '[data-sem-furta-cor]'
      )) return;

      // Não envolver imagens que não podem ser movidas
      if (!img.parentNode) return;

      var pai = img.parentNode;
      var caixa = document.createElement('span');

      caixa.className = classeCaixa;

      // Preservar o tamanho exibido da imagem
      var largura = img.getBoundingClientRect().width;
      var altura = img.getBoundingClientRect().height;

      if (largura) caixa.style.width = largura + 'px';
      if (altura) caixa.style.height = altura + 'px';

      caixa.style.maxWidth = '100%';

      // Manter as imagens responsivas
      if (getComputedStyle(img).width === '100%') {
        caixa.style.width = '100%';
      }

      pai.insertBefore(caixa, img);
      caixa.appendChild(img);

      img.classList.add(classeImagem);
    });
  }

  // Inicialização
  function iniciar() {
    aplicarEfeito();

    // Observar novas imagens adicionadas à página
    var observador = new MutationObserver(function (mutacoes) {
      var precisaAtualizar = mutacoes.some(function (mutacao) {
        return Array.from(mutacao.addedNodes).some(function (no) {
          return no.nodeType === 1 &&
            (no.tagName === 'IMG' || no.querySelector('img'));
        });
      });

      if (precisaAtualizar) aplicarEfeito();
    });

    observador.observe(document.body, {
      childList: true,
      subtree: true
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciar);
  } else {
    iniciar();
  }
})();
