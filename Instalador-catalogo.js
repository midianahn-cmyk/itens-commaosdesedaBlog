
/* =====================================================
   INSTALADOR DO CATÁLOGO — COM MÃOS DE SEDA
   Repositório: itens-commaosdesedaBlog
   Criadora: Com Mãos de Seda
   © 2026 Com Mãos de Seda
   ===================================================== */

(function () {
  'use strict';

  var ID_SCRIPT = 'cms-instalador-catalogo-2026';
  var ID_CARROSSEL = 'cms-carrossel-isolado-2026';

  // Impede a instalação duplicada
  if (
    document.getElementById(ID_SCRIPT) ||
    document.getElementById(ID_CARROSSEL)
  ) {
    return;
  }

  var script = document.createElement('script');

  script.id = ID_SCRIPT;
  script.src =
    'https://cdn.jsdelivr.net/gh/midianahn-cmyk/itens-commaosdesedaBlog@main/catalogo.js';

  script.async = false;

  script.onerror = function () {
    console.error(
      'Com Mãos de Seda: não foi possível carregar catalogo.js. ' +
      'Confira o nome do arquivo e a branch main no GitHub.'
    );

    script.remove();
  };

  (document.head || document.documentElement).appendChild(script);

})();
