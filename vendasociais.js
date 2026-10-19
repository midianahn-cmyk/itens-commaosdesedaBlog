
/*!
 * NOTIFICAÇÃO FLUTUANTE — EFEITO EXTERNO PARA SITES E BLOGS
 * Versão convertida do código original.
 * Mensagens demonstrativas, sem consulta a visitantes reais.
 */
(function () {
  'use strict';

  if (window.__notificacaoCustom2Iniciada) return;
  window.__notificacaoCustom2Iniciada = true;

  var notificacoesGIF2 = [
    '<b>+6 </b>Pessoas estão aqui como você!',
    '<b>+2 </b>Pessoas estão aqui como você!',
    '<b>+1 pessoa </b>se inscreveu aqui:',
    '<b>+3 </b>Pessoas estão aqui como você agora!',
    '<b>+4 </b>Pessoas estão aqui como você agora!',
    '<b>+2 </b>Pessoas estão aqui como você agora!',
    '<b>+9 </b>Pessoas estão aqui como você agora!',
    '<b>+7 </b>Pessoas estão aqui como você agora!',
    '<b>+1 pessoa </b>se inscreveu aqui:'
  ];

  function iniciarNotificacaoGIF2() {
    if (!document.body ||
        document.getElementById('notificacao-custom2-estilo')) {
      return;
    }

    var estilo = document.createElement('style');
    estilo.id = 'notificacao-custom2-estilo';

    estilo.textContent = `
      .notificacao-custom2 {
        position: fixed;
        top: 215px;
        right: 20px;
        width: auto;
        padding: 10px 15px 0 10px;
        background-color: #bcf5ff;
        color: #000;
        border-radius: 8px;
        border: 2px dotted #008080;
        box-shadow: 0 4px 10px rgba(0,0,0,0.2);
        display: flex;
        align-items: center;
        z-index: 9999;
        font-family: Arial, sans-serif;
        animation: notificacaoCustom2SlideIn 0.5s ease-out;
        box-sizing: border-box;
      }

      .notificacao-custom2 img {
        width: 40px;
        height: 40px;
        margin: 0 10px 10px;
        object-fit: contain;
      }

      .notificacao-custom2 .mensagem2 {
        flex: 1;
      }

      .notificacao-custom2 .fechar2 {
        cursor: pointer;
        font-weight: bold;
        margin-left: 10px;
        align-self: flex-start;
      }

      @keyframes notificacaoCustom2SlideIn {
        from {
          opacity: 0;
          transform: translateX(100%);
        }
        to {
          opacity: 1;
          transform: translateX(0);
        }
      }

      @media (max-width: 768px) {
        .notificacao-custom2 {
          width: 80%;
          right: 10px;
          left: 10px;
          font-size: 14px;
        }

        .notificacao-custom2 img {
          width: 30px;
          height: 30px;
        }
      }

      @media (max-width: 480px) {
        .notificacao-custom2 {
          width: 90%;
          top: 220px;
          padding: 8px 10px;
          font-size: 13px;
        }

        .notificacao-custom2 img {
          width: 25px;
          height: 25px;
        }
      }
    `;

    document.head.appendChild(estilo);

    function exibirNotificacaoGIF2() {
      var ultimaFechadaGIF2 = null;

      try {
        ultimaFechadaGIF2 = localStorage.getItem(
          'notificacaoFechadaGIF2'
        );
      } catch (erro) {
        // Continua funcionando se o armazenamento estiver bloqueado.
      }

      var bloqueioGIF2 = 5 * 60 * 1000;
      var agoraGIF2 = Date.now();

      if (
        !ultimaFechadaGIF2 ||
        (agoraGIF2 - Number(ultimaFechadaGIF2) > bloqueioGIF2)
      ) {
        var notif2 = document.createElement('div');
        notif2.className = 'notificacao-custom2';

        var img2 = document.createElement('img');
        img2.src = 'https://i.giphy.com/z9WAlV4MUvpU4.webp';
        img2.alt = '';
        img2.setAttribute('aria-hidden', 'true');
        notif2.appendChild(img2);

        var msg2 = document.createElement('div');
        msg2.className = 'mensagem2';
        msg2.innerHTML =
          notificacoesGIF2[
            Math.floor(Math.random() * notificacoesGIF2.length)
          ];
        notif2.appendChild(msg2);

        var fechar2 = document.createElement('button');
        fechar2.className = 'fechar2';
        fechar2.type = 'button';
        fechar2.setAttribute('aria-label', 'Fechar notificação');
        fechar2.title = 'Fechar';
        fechar2.textContent = '✖';

        fechar2.style.cssText =
          'border:0;background:transparent;color:inherit;' +
          'font:inherit;padding:0;';

        fechar2.addEventListener('click', function () {
          notif2.remove();

          try {
            localStorage.setItem(
              'notificacaoFechadaGIF2',
              String(Date.now())
            );
          } catch (erro) {
            // A notificação fecha mesmo sem armazenamento.
          }
        });

        notif2.appendChild(fechar2);
        document.body.appendChild(notif2);

        var tempoExibicao = 20000;
        var pausa = 3000;

        window.setTimeout(function () {
          if (notif2.parentNode) {
            notif2.remove();
          }

          window.setTimeout(exibirNotificacaoGIF2, pausa);
        }, tempoExibicao);

      } else {
        window.setTimeout(exibirNotificacaoGIF2, 5000);
      }
    }

    // Primeira notificação aparece imediatamente.
    exibirNotificacaoGIF2();
  }

  if (document.readyState === 'loading') {
    document.addEventListener(
      'DOMContentLoaded',
      iniciarNotificacaoGIF2
    );
  } else {
    iniciarNotificacaoGIF2();
  }
})();
