
(function () {
  'use strict';

  function iniciarFaixaCMSL() {
    const conteudos = document.querySelectorAll(
      '.cmsl-redes-sociais.cmsl-botao-unico'
    );

    if (!conteudos.length) return;

    // CSS da animação
    if (!document.getElementById('cmsl-faixa-movimento-css')) {
      const estilo = document.createElement('style');
      estilo.id = 'cmsl-faixa-movimento-css';

      estilo.textContent = `
        .cmsl-faixa-movimento {
          width: 100% !important;
          overflow: hidden !important;
          box-sizing: border-box !important;
        }

        .cmsl-faixa-movimento .cmsl-redes-sociais {
          display: flex !important;
          flex-wrap: nowrap !important;
          justify-content: flex-start !important;
          align-items: center !important;
          width: max-content !important;
          max-width: none !important;
          white-space: nowrap !important;
          animation: cmsl-movimento-lateral 12s ease-in-out 2s infinite alternate !important;
          will-change: transform;
        }

        .cmsl-faixa-movimento .cmsl-redes-sociais > div {
          flex: 0 0 auto !important;
        }

        @keyframes cmsl-movimento-lateral {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(var(--cmsl-distancia, 0px));
          }
        }
      `;

      document.head.appendChild(estilo);
    }

    conteudos.forEach(function (conteudo) {
      // Evita criar o contêiner mais de uma vez
      if (!conteudo.parentElement.classList.contains('cmsl-faixa-movimento')) {
        const faixa = document.createElement('div');
        faixa.className = 'cmsl-faixa-movimento';

        conteudo.parentNode.insertBefore(faixa, conteudo);
        faixa.appendChild(conteudo);
      }

      const faixa = conteudo.parentElement;

      function calcularMovimento() {
        const distancia = faixa.clientWidth - conteudo.scrollWidth;

        conteudo.style.setProperty(
          '--cmsl-distancia',
          Math.min(0, distancia) + 'px'
        );
      }

      calcularMovimento();

      // Recalcula quando a largura da tela mudar
      if (window.ResizeObserver) {
        if (!conteudo.__cmslObserver) {
          conteudo.__cmslObserver = new ResizeObserver(calcularMovimento);
          conteudo.__cmslObserver.observe(faixa);
          conteudo.__cmslObserver.observe(conteudo);
        }
      }
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciarFaixaCMSL);
  } else {
    iniciarFaixaCMSL();
  }

  window.addEventListener('load', iniciarFaixaCMSL);
  window.addEventListener('resize', iniciarFaixaCMSL);

})();
