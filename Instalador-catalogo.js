
/* =====================================================
   INSTALADOR DO CATÁLOGO — COM MÃOS DE SEDA
   Repositório: itens-commaosdesedaBlog
   Criadora: Com Mãos de Seda
   © 2026 Com Mãos de Seda
   ===================================================== */

(function () {
  'use strict';

  if (window.__catalogoComMaosDeSedaInstalado) return;
  window.__catalogoComMaosDeSedaInstalado = true;

  var base =
    'https://cdn.jsdelivr.net/gh/midianahn-cmyk/itens-commaosdesedaBlog@main/';

  function carregarCSS() {
    if (document.getElementById('catalogo-com-maos-de-seda-css')) return;

    var link = document.createElement('link');
    link.id = 'catalogo-com-maos-de-seda-css';
    link.rel = 'stylesheet';
    link.href = base + 'catalogo.css';
    document.head.appendChild(link);
  }

  function carregarHTML() {
    if (document.getElementById('catalogo-com-maos-de-seda')) return;

    fetch(base + 'catalogo.html')
      .then(function (resposta) {
        if (!resposta.ok) throw new Error('Erro ao carregar catalogo.html');
        return resposta.text();
      })
      .then(function (html) {
        var container = document.createElement('div');
        container.id = 'catalogo-com-maos-de-seda';
        container.innerHTML = html;
        document.body.appendChild(container);

        carregarJS();
      })
      .catch(function (erro) {
        console.error('Com Mãos de Seda:', erro);
        window.__catalogoComMaosDeSedaInstalado = false;
      });
  }

  function carregarJS() {
    if (document.getElementById('catalogo-com-maos-de-seda-js')) return;

    var script = document.createElement('script');
    script.id = 'catalogo-com-maos-de-seda-js';
    script.src = base + 'catalogo.js';
    script.async = true;

    script.onerror = function () {
      console.error('Com Mãos de Seda: erro ao carregar catalogo.js.');
      window.__catalogoComMaosDeSedaInstalado = false;
    };

    document.body.appendChild(script);
  }

  function iniciar() {
    carregarCSS();
    carregarHTML();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciar);
  } else {
    iniciar();
  }
})();
