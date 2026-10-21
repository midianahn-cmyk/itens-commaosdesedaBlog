
(function () {
  'use strict';

  // Evita instalar esta versão mais de uma vez.
  if (window.efeitoArcoIrisPostBody) return;
  window.efeitoArcoIrisPostBody = true;

  var estilo = document.createElement('style');

  estilo.textContent = `
    .post-body img.efeito-arco-iris {
      transition: filter 0.35s ease;
    }

    .post-body img.efeito-arco-iris:hover {
      filter: hue-rotate(140deg) saturate(2) brightness(1.08);
    }
  `;

  document.head.appendChild(estilo);

  function prepararImagens() {
    document.querySelectorAll('.post-body img').forEach(function (img) {
      img.classList.add('efeito-arco-iris');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', prepararImagens);
  } else {
    prepararImagens();
  }
})();
