javascript
/* =====================================================
   EFEITO FURTA-COR ARCO-ÍRIS
   Criado por: Com Mãos de Seda
   Site: https://www.commaosdesedaoficial.com
   © 2026 Com Mãos de Seda

   APLICAÇÃO EXCLUSIVA:
   Imagens dentro de .post-body
===================================================== */

(function () {
  'use strict';

  // Evita instalar o efeito duas vezes
  if (window.cmsEfeitoFurtaCorPostBodyAtivo) return;
  window.cmsEfeitoFurtaCorPostBodyAtivo = true;

  var classeImagem = 'efeito-furta-cor';
  var classeCaixa = 'efeito-furta-cor-caixa';
  var seletorPostagem = '.post-body';

  // Estilos exclusivos deste efeito
  var estilo = document.createElement('style');

  estilo.id = 'cms-estilo-furta-cor-post-body';

  estilo.textContent = `
    .post-body .${classeCaixa} {
      position: relative;
      display: inline-block;
      overflow: hidden;
      isolation: isolate;
      max-width: 100%;
      vertical-align: middle;
    }

    .post-body .${classeCaixa} > img.${classeImagem} {
      display: block;
      max-width: 100%;
      height: auto;
      transition: filter .4s ease;
    }

    .post-body .${classeCaixa}::after {
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

    .post-body .${classeCaixa}:hover::after {
      opacity: 1;
      animation: cmsFurtaCorMovimentoPostBody 2.5s linear infinite;
    }

    @keyframes cmsFurtaCorMovimentoPostBody {
      from { background-position: 100% 50%; }
      to   { background-position: 0% 50%; }
    }

    @media (prefers-reduced-motion: reduce) {
      .post-body .${classeCaixa}::after {
        animation: none !important;
        transition: none !important;
      }

      .post-body .${classeCaixa} > img.${classeImagem} {
        transition: none !important;
      }
    }
  `;

  document.head.appendChild(estilo);

  // Verifica se a imagem está realmente dentro da postagem
  function estaNaPostagem(img) {
    return !!img.closest(seletorPostagem);
  }

  // Aplica o efeito somente às imagens das postagens
  function aplicarEfeito() {
    var imagens = document.querySelectorAll(
      '.post-body img:not([data-sem-furta-cor]):not(.sem-efeito-furta-cor)'
    );

    imagens.forEach(function (img) {
      if (!estaNaPostagem(img)) return;

      // Ignora imagens especiais ou explicitamente excluídas
      if (img.closest(
        'svg, picture, video, canvas, ' +
        '.no-furta-cor, [data-sem-furta-cor]'
      )) return;

      // Evita envolver novamente uma imagem já processada
      if (
        img.classList.contains(classeImagem) &&
        img.parentElement &&
        img.parentElement.classList.contains(classeCaixa)
      ) return;

      // Aguarda a imagem carregar
      if (!img.complete || !img.naturalWidth) {
        if (!img.dataset.cmsFurtaCorAguardando) {
          img.dataset.cmsFurtaCorAguardando = 'true';

          img.addEventListener('load', function () {
            delete img.dataset.cmsFurtaCorAguardando;
            aplicarEfeito();
          }, { once: true });

          img.addEventListener('error', function () {
            delete img.dataset.cmsFurtaCorAguardando;
          }, { once: true });
        }

        return;
      }

      // Ignora imagens pequenas, como ícones
      if (img.naturalWidth < 40 || img.naturalHeight < 40) return;

      // Não processa imagens que não podem ser movidas
      if (!img.parentNode) return;

      // Se já está dentro de uma caixa do efeito,
      // apenas mantém a classe na imagem
      if (
        img.parentElement &&
        img.parentElement.classList.contains(classeCaixa)
      ) {
        img.classList.add(classeImagem);
        return;
      }

      var largura = img.getBoundingClientRect().width;
      var altura = img.getBoundingClientRect().height;

      var caixa = document.createElement('span');
      caixa.className = classeCaixa;

      if (largura) caixa.style.width = largura + 'px';
      if (altura) caixa.style.height = altura + 'px';

      caixa.style.maxWidth = '100%';

      // Mantém imagens responsivas
      var estiloImg = getComputedStyle(img);

      if (estiloImg.width === '100%') {
        caixa.style.width = '100%';
      }

      // Preserva a imagem e seu lugar no conteúdo
      img.parentNode.insertBefore(caixa, img);
      caixa.appendChild(img);

      img.classList.add(classeImagem);
    });
  }

  function iniciar() {
    aplicarEfeito();

    // Observa imagens novas, mas só processa .post-body
    var observador = new MutationObserver(function (mutacoes) {
      var precisaAtualizar = mutacoes.some(function (mutacao) {
        return Array.from(mutacao.addedNodes).some(function (no) {
          return no.nodeType === 1 &&
            (
              no.tagName === 'IMG' ||
              (no.querySelector && no.querySelector('img'))
            );
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
