
(function () {
  'use strict';

  if (window.__CMS_FURTA_COR_POST_BODY_V7__) return;
  window.__CMS_FURTA_COR_POST_BODY_V7__ = true;

  var seletorConteudo = '.henry.post .post-body';
  var classeEfeito = 'cms-furta-cor-post-body-v7';
  var classeAtiva = 'cms-furta-cor-ativo-v7';

  var estilo = document.createElement('style');

  estilo.textContent = `
    img.${classeEfeito} {
      transition: filter 0.3s ease;
    }

    img.${classeEfeito}.${classeAtiva} {
      filter: hue-rotate(100deg) saturate(2.3) brightness(1.08);
    }
  `;

  document.head.appendChild(estilo);

  function imagemPermitida(img) {
    if (!img || img.tagName !== 'IMG') return false;

    // Permite somente imagens dentro do corpo das postagens.
    if (!img.closest(seletorConteudo)) return false;

    // Exclui barras de compartilhamento.
    if (img.closest('.share-bar')) return false;

    // Exclui widgets HTML e seus descendentes.
    if (img.closest(
      '.widget, .widget-content, .HTML, .html'
    )) return false;

    // Exclui o rodapé e seus descendentes.
    if (img.closest(
      'footer, .footer, #footer, #footer-wrapper, .footer-outer'
    )) return false;

    // Exclui controles interativos.
    if (img.closest(
      'button, input, select, textarea, ' +
      '[role="button"], [role="slider"]'
    )) return false;

    // Permite excluir manualmente uma imagem específica.
    if (img.hasAttribute('data-sem-furta-cor')) return false;

    return true;
  }

  // Aplica o efeito ao passar o mouse sobre uma imagem permitida.
  document.addEventListener('mouseover', function (event) {
    var img = event.target;

    if (!imagemPermitida(img)) return;

    img.classList.add(classeEfeito, classeAtiva);
  }, true);

  // Remove o efeito quando o mouse sai da imagem.
  document.addEventListener('mouseout', function (event) {
    var img = event.target;

    if (!img || img.tagName !== 'IMG') return;

    img.classList.remove(classeAtiva, classeEfeito);
  }, true);
})();
