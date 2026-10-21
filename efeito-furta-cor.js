
(function () {
  'use strict';

  if (window.efeitoArcoIrisGradualPostBody) return;
  window.efeitoArcoIrisGradualPostBody = true;

  var estilo = document.createElement('style');

  estilo.textContent = `
    .post-body img.efeito-arco-iris-gradual {
      transition: filter 0.4s ease;
    }

    .abovepost img.efeito-arco-iris-gradual:hover {
      filter: hue-rotate(120deg) saturate(1.8);
    }
  `;

  document.head.appendChild(estilo);

  function prepararImagens() {
    document.querySelectorAll('.post-body img').forEach(function (img) {
      img.classList.add('efeito-arco-iris-gradual');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', prepararImagens);
  } else {
    prepararImagens();
  }
})();
