
/* =========================================================
   FORMULÁRIO DE CONTATO ISOLADO — COM MÃOS DE SEDA
   Crie na página: <div id="cmsContatoIsolado"></div>
   ========================================================= */
(function () {
  'use strict';

  function iniciarFormularioCMS() {
    var raiz = document.getElementById('cmsContatoIsolado');

    if (!raiz || raiz.getAttribute('data-cms-iniciado') === 'sim') return;
    raiz.setAttribute('data-cms-iniciado', 'sim');

    raiz.innerHTML = `
      <style>
        #cmsContatoIsolado {
          width: 98%;
          max-width: 700px;
          margin: 20px auto;
          padding: 20px;
          background-image: url('https://img.magnific.com/premium-photo/birthday-background-copy-space_1036998-318769.jpg');
          background-size: cover;
          background-position: center;
          border-radius: 12px;
          box-shadow: 0 4px 15px rgba(0,0,0,.2);
          color: #fff;
          font-family: Arial, sans-serif;
          position: relative;
          isolation: isolate;
          box-sizing: border-box;
        }

        #cmsContatoIsolado *,
        #cmsContatoIsolado *::before,
        #cmsContatoIsolado *::after {
          box-sizing: border-box;
        }

        #cmsContatoIsolado .cms-contato-titulo {
          color: #000;
          font-family: 'Henny Penny', cursive;
          font-weight: 900;
          margin: 0 0 20px;
          text-align: center;
          text-shadow: 1px 1px 3px rgba(0,0,0,.5);
        }

        #cmsContatoIsolado .cms-contato-form {
          display: flex;
          flex-direction: column;
          gap: 15px;
          margin: 0;
        }

        #cmsContatoIsolado .cms-contato-campo {
          display: block;
          width: 100%;
          max-width: 100%;
          margin: 0;
          padding: 10px;
          border: none;
          border-radius: 6px;
          background: #fff;
          color: #222;
          font: 14px Arial, sans-serif;
          line-height: 1.5;
          box-shadow: none;
        }

        #cmsContatoIsolado textarea.cms-contato-campo {
          min-height: 150px;
          resize: vertical;
        }

        #cmsContatoIsolado .cms-contato-botao {
          display: block;
          width: 100%;
          max-width: 100%;
          margin: 0;
          padding: 12px;
          border: none;
          border-radius: 6px;
          background: #4CAF50;
          color: #fff;
          font: 16px Arial, sans-serif;
          text-align: center;
          cursor: pointer;
          text-transform: none;
          box-shadow: none;
          line-height: 1.4;
        }

        #cmsContatoIsolado .cms-contato-botao:hover {
          background: #45a049;
        }

        #cmsContatoIsolado .cms-contato-botao:disabled {
          opacity: .65;
          cursor: wait;
        }

        #cmsContatoIsolado .cms-contato-confirmacao {
          display: none;
          text-align: center;
          padding: 20px;
          background: rgba(0,0,0,.6);
          border-radius: 12px;
          color: #fff;
        }

        #cmsContatoIsolado .cms-contato-confirmacao h2 {
          color: #fff;
          font-family: 'Henny Penny', cursive;
          margin: 0 0 15px;
        }

        #cmsContatoIsolado .cms-contato-confirmacao p {
          color: #fff;
          line-height: 1.6;
        }

        #cmsContatoIsolado .cms-contato-btn-whatsapp {
          background: #25D366;
        }

        #cmsContatoIsolado .cms-contato-btn-whatsapp:hover {
          background: #1eaf54;
        }

        #cmsContatoIsolado .cms-contato-erro {
          display: none;
          color: #ffcccc;
          text-align: center;
          margin: 12px 0 0;
        }

        @media (max-width: 600px) {
          #cmsContatoIsolado {
            width: 100%;
            padding: 15px;
          }

          #cmsContatoIsolado .cms-contato-campo {
            font-size: 16px;
          }
        }
      </style>

      <h2 class="cms-contato-titulo">Entre em Contato</h2>

      <form class="cms-contato-form"
        action="https://api.web3forms.com/submit"
        method="POST">

        <input type="hidden" name="access_key"
          value="3cbedfcb-3481-49e1-8d0f-d3cf19285628">

        <input type="hidden" name="subject"
          value="Nova mensagem de contato">

        <input class="cms-contato-campo"
          type="text" name="nome"
          placeholder="Seu nome"
          aria-label="Seu nome"
          autocomplete="name" required>

        <input class="cms-contato-campo"
          type="email" name="email"
          placeholder="Seu e-mail"
          aria-label="Seu e-mail"
          autocomplete="email" required>

        <input class="cms-contato-campo"
          type="tel" name="whatsapp"
          placeholder="Seu WhatsApp com DDD"
          aria-label="Seu WhatsApp com DDD"
          autocomplete="tel" required>

        <textarea class="cms-contato-campo"
          name="mensagem" rows="6"
          placeholder="Escreva sua mensagem..."
          aria-label="Escreva sua mensagem"
          required></textarea>

        <button class="cms-contato-botao" type="submit">
          Enviar mensagem
        </button>
      </form>

      <div class="cms-contato-confirmacao" aria-live="polite">
        <h2>Mensagem enviada com sucesso!</h2>

        <p>
          Obrigado pelo contato! Se desejar, clique abaixo para abrir
          o WhatsApp e enviar também a mesma mensagem por lá.
        </p>

        <button class="cms-contato-botao cms-contato-btn-whatsapp"
          type="button">
          Enviar a mesma mensagem pelo WhatsApp
        </button>
      </div>

      <p class="cms-contato-erro" role="alert">
        Não foi possível enviar sua mensagem.
        Verifique sua conexão e tente novamente.
      </p>
    `;

    var formulario = raiz.querySelector('.cms-contato-form');
    var titulo = raiz.querySelector('.cms-contato-titulo');
    var confirmacao = raiz.querySelector('.cms-contato-confirmacao');
    var botaoEnviar = formulario.querySelector('button[type="submit"]');
    var botaoWhatsApp = raiz.querySelector('.cms-contato-btn-whatsapp');
    var mensagemErro = raiz.querySelector('.cms-contato-erro');

    var dadosContato = null;

    formulario.addEventListener('submit', async function (evento) {
      evento.preventDefault();

      if (!formulario.reportValidity()) return;

      mensagemErro.style.display = 'none';
      botaoEnviar.disabled = true;
      botaoEnviar.textContent = 'Enviando...';

      try {
        var resposta = await fetch(formulario.action, {
          method: 'POST',
          body: new FormData(formulario),
          headers: {
            'Accept': 'application/json'
          }
        });

        var resultado = await resposta.json();

        if (!resposta.ok || resultado.success !== true) {
          throw new Error('Falha no envio');
        }

        dadosContato = {
          nome: formulario.elements['nome'].value.trim(),
          email: formulario.elements['email'].value.trim(),
          whatsapp: formulario.elements['whatsapp'].value.trim(),
          mensagem: formulario.elements['mensagem'].value.trim()
        };

        formulario.style.display = 'none';
        titulo.style.display = 'none';
        confirmacao.style.display = 'block';

      } catch (erro) {
        mensagemErro.style.display = 'block';
        botaoEnviar.disabled = false;
        botaoEnviar.textContent = 'Tentar enviar novamente';
      }
    });

    botaoWhatsApp.addEventListener('click', function () {
      if (!dadosContato) return;

      var numeroDestino = '5521979356412';

      var texto =
        'Olá! Estou entrando em contato pelo site.\n\n' +
        'Nome: ' + dadosContato.nome + '\n' +
        'E-mail: ' + dadosContato.email + '\n' +
        'Meu WhatsApp: ' + dadosContato.whatsapp + '\n\n' +
        'Mensagem:\n' + dadosContato.mensagem;

      var url =
        'https://api.whatsapp.com/send?phone=' +
        numeroDestino +
        '&text=' + encodeURIComponent(texto);

      window.open(url, '_blank', 'noopener,noreferrer');
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', iniciarFormularioCMS);
  } else {
    iniciarFormularioCMS();
  }
})();
