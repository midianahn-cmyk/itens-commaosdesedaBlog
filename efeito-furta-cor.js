
/* ==========================================
   EFEITO FURTA-COR ARCO-ÍRIS
   Com Mãos de Seda - 2026 www.commaosdesedaoficial.com
   Não altera dimensões, bordas ou estrutura.
========================================== */

(function () {
  'use strict';

  if (window.cmsFurtaCorInstalado) return;
  window.cmsFurtaCorInstalado = true;

  var estilo = document.createElement('style');

  estilo.textContent = `
    img.cms-furta-cor {
      transition: filter 0.35s ease !important;
    }

    img.cms-furta-cor:hover {
      filter:
        hue-rotate(35deg)
        saturate(2.5)
        brightness(1.12) !important;
    }

    @media (prefers-reduced-motion: reduce) {
      img.cms-furta-cor {
        transition: none !important;
      }
    }
  `;

  document.head.appendChild(estilo);

  function aplicarEfeito() {
    document.querySelectorAll('img').forEach(function (img) {
      // Não alterar imagens dentro de botões ou controles
      if (img.closest(
        'button, input, select, textarea, ' +
        '[role="button"], .no-furta-cor'
      )) return;

      // Ignorar imagens explicitamente excluídas
      if (img.hasAttribute('data-sem-furta-cor')) return;

      // Não alterar imagens de rastreamento
      if (img.width < 40 || img.height < 40) return;

      img.classList.add('cms-furta-cor');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', aplicarEfeito);
  } else {
    aplicarEfeito();
  }

  // Detectar imagens adicionadas dinamicamente
  var observador = new MutationObserver(function (mutacoes) {
    if (mutacoes.some(function (m) {
      return Array.from(m.addedNodes).some(function (no) {
        return no.nodeType === 1 &&
          (no.tagName === 'IMG' || no.querySelector('img'));
      });
    })) {
      aplicarEfeito();
    }
  });

  observador.observe(document.documentElement, {
    childList: true,
    subtree: true
  });
})();
