
(function () {
  'use strict';

  var ID = 'cmsl-cadastro-blogueiras';
  var raiz = document.getElementById(ID);

  if (!raiz || raiz.dataset.iniciado === 'sim') return;
  raiz.dataset.iniciado = 'sim';

  var endpoint = 'https://script.google.com/macros/s/AKfycbw9RZtYRz_AfsHI89BCEbbvqhxSnFAVLMz1kf3tY0WtKvPpL0xRN2Mts37QqrmSTCGMgQ/exec';

  raiz.innerHTML = `
    <style>
      #cmsl-cadastro-blogueiras {
        --cmsl-dourado:#b58a45;
        --cmsl-fundo:#fffdf9;
        --cmsl-texto:#493e35;
        font-family:Arial,sans-serif;
        color:var(--cmsl-texto);
        max-width:720px;
        margin:25px auto;
        padding:24px;
        background:var(--cmsl-fundo);
        border:1px solid #eadcc6;
        border-radius:18px;
        box-sizing:border-box;
        box-shadow:0 5px 22px rgba(80,55,25,.08);
      }

      #cmsl-cadastro-blogueiras *,
      #cmsl-cadastro-blogueiras *::before,
      #cmsl-cadastro-blogueiras *::after {
        box-sizing:border-box;
      }

      #cmsl-cadastro-blogueiras .cmsl-cabecalho {
        text-align:center;
        margin-bottom:25px;
      }

      #cmsl-cadastro-blogueiras .cmsl-cabecalho h2 {
        color:var(--cmsl-dourado);
        font-size:28px;
        margin:0 0 12px;
        line-height:1.3;
      }

      #cmsl-cadastro-blogueiras .cmsl-cabecalho p {
        font-size:15px;
        line-height:1.7;
        margin:0;
      }

      #cmsl-cadastro-blogueiras .cmsl-campo {
        margin-bottom:17px;
      }

      #cmsl-cadastro-blogueiras label {
        display:block;
        font-size:14px;
        font-weight:bold;
        margin-bottom:7px;
      }

      #cmsl-cadastro-blogueiras input:not([type="checkbox"]),
      #cmsl-cadastro-blogueiras select {
        display:block;
        width:100%;
        min-height:46px;
        padding:12px;
        border:1px solid #d9cbb7;
        border-radius:9px;
        background:#fff;
        color:#493e35;
        font-size:15px;
        outline:none;
      }

      #cmsl-cadastro-blogueiras input:focus,
      #cmsl-cadastro-blogueiras select:focus {
        border-color:var(--cmsl-dourado);
        box-shadow:0 0 0 2px rgba(181,138,69,.13);
      }

      #cmsl-cadastro-blogueiras .cmsl-ajuda {
        display:block;
        margin-top:6px;
        font-size:12px;
        line-height:1.5;
        color:#796e62;
      }

      #cmsl-cadastro-blogueiras .cmsl-obrigatorio {
        color:#a34b4b;
      }

      #cmsl-cadastro-blogueiras .cmsl-autorizacao {
        display:flex;
        align-items:flex-start;
        gap:10px;
        margin-top:12px;
        padding:13px;
        background:#f8f2e8;
        border:1px solid #eadcc6;
        border-radius:9px;
        font-size:13px;
        font-weight:normal;
        line-height:1.6;
        cursor:pointer;
      }

      #cmsl-cadastro-blogueiras .cmsl-autorizacao input[type="checkbox"] {
        flex:0 0 18px;
        width:18px;
        min-height:18px;
        height:18px;
        margin:2px 0 0;
        padding:0;
        accent-color:var(--cmsl-dourado);
      }

      #cmsl-cadastro-blogueiras .cmsl-enviar {
        display:block;
        width:100%;
        min-height:49px;
        padding:13px 18px;
        border:0;
        border-radius:10px;
        background:var(--cmsl-dourado);
        color:#fff;
        font-size:16px;
        font-weight:bold;
        cursor:pointer;
        transition:background .2s,transform .2s;
      }

      #cmsl-cadastro-blogueiras .cmsl-enviar:hover {
        background:#947039;
        transform:translateY(-1px);
      }

      #cmsl-cadastro-blogueiras .cmsl-enviar:disabled {
        opacity:.65;
        cursor:wait;
        transform:none;
      }

      #cmsl-cadastro-blogueiras .cmsl-mensagem {
        display:none;
        margin-top:18px;
        padding:14px;
        border-radius:9px;
        font-size:14px;
        line-height:1.6;
        overflow-wrap:anywhere;
      }

      #cmsl-cadastro-blogueiras .cmsl-mensagem.cmsl-visivel {
        display:block;
      }

      #cmsl-cadastro-blogueiras .cmsl-sucesso {
        background:#edf7ed;
        color:#285b32;
        border:1px solid #c9e4cb;
      }

      #cmsl-cadastro-blogueiras .cmsl-erro {
        background:#fff0ee;
        color:#923c34;
        border:1px solid #f0cfca;
      }

      #cmsl-cadastro-blogueiras .cmsl-rodape {
        margin-top:20px;
        text-align:center;
        font-size:12px;
        line-height:1.7;
        color:#796e62;
      }

      @media(max-width:480px) {
        #cmsl-cadastro-blogueiras {
          padding:17px;
          margin:15px auto;
          border-radius:12px;
        }

        #cmsl-cadastro-blogueiras .cmsl-cabecalho h2 {
          font-size:24px;
        }
      }
    </style>

    <div class="cmsl-cabecalho">
      <h2>🌷 Cadastre seu Blog</h2>
      <p>
        Vamos conhecer o seu cantinho na internet!
        Preencha os dados abaixo para participar do nosso
        diretório de blogueiras.
      </p>
    </div>

    <form id="cmsl-form-blogueiras">
      <div class="cmsl-campo">
        <label for="cmsl-nome">Seu nome <span class="cmsl-obrigatorio">*</span></label>
        <input id="cmsl-nome" name="nome" type="text"
          maxlength="120" autocomplete="name" required>
      </div>

      <div class="cmsl-campo">
        <label for="cmsl-email">Seu e-mail <span class="cmsl-obrigatorio">*</span></label>
        <input id="cmsl-email" name="email" type="email"
          maxlength="200" autocomplete="email" required>
        <small class="cmsl-ajuda">
          Seu e-mail será usado para o cadastro e não aparecerá
          no diretório público.
        </small>
      </div>

      <div class="cmsl-campo">
        <label for="cmsl-nicho">Qual é o nicho do seu blog? <span class="cmsl-obrigatorio">*</span></label>
        <select id="cmsl-nicho" name="nicho" required>
          <option value="">Selecione uma opção</option>
          <option>Artesanato</option>
          <option>Biscuit e porcelana fria</option>
          <option>Festas e decoração</option>
          <option>Culinária</option>
          <option>Moda e beleza</option>
          <option>Casa e decoração</option>
          <option>Educação</option>
          <option>Maternidade e família</option>
          <option>Viagens</option>
          <option>Empreendedorismo</option>
          <option>Variedades</option>
          <option>Outro</option>
        </select>
      </div>

      <div class="cmsl-campo">
        <label for="cmsl-nome-blog">Nome do blog <span class="cmsl-obrigatorio">*</span></label>
        <input id="cmsl-nome-blog" name="nomeBlog" type="text"
          maxlength="180" required>
      </div>

      <div class="cmsl-campo">
        <label for="cmsl-link-blog">Link do blog <span class="cmsl-obrigatorio">*</span></label>
        <input id="cmsl-link-blog" name="linkBlog" type="url"
          placeholder="https://seublog.com" maxlength="1000" required>
        <small class="cmsl-ajuda">
          Inclua o endereço completo, começando com https:// ou http://.
        </small>
      </div>

      <div class="cmsl-campo">
        <label for="cmsl-url-imagem">Link da sua foto (opcional)</label>
        <input id="cmsl-url-imagem" name="urlImagem" type="url"
          placeholder="https://.../minhafoto.jpg" maxlength="1000">
        <small class="cmsl-ajuda">
          Se tiver uma imagem hospedada na internet, cole o link direto. Atenção Deve ser o Link da Imagem original, não poder ser link de redes sociais.
        </small>
      </div>

      <div class="cmsl-campo">
        <label for="cmsl-whatsapp">WhatsApp para contato <span class="cmsl-obrigatorio">*</span></label>
        <input id="cmsl-whatsapp" name="whatsapp" type="tel"
          inputmode="tel" autocomplete="tel"
          placeholder="Ex.: (21) 99999-9999" maxlength="25" required>
        <small class="cmsl-ajuda">
          Informe seu número com DDD. Ele será guardado na planilha
          para contato relacionado ao diretório. A divulgação pública
          depende da autorização abaixo.
        </small>

        <label class="cmsl-autorizacao" for="cmsl-autoriza-whatsapp">
          <input id="cmsl-autoriza-whatsapp"
            name="autorizaWhatsapp" type="checkbox" value="sim">
          <span>
            Autorizo a divulgação do meu número de WhatsApp na pagina, para que visitantes possam entrar em contato comigo.
            Essa autorização é opcional.
          </span>
        </label>
      </div>

      <button class="cmsl-enviar" id="cmsl-botao-enviar" type="submit">
        Enviar meu cadastro 🌷
      </button>

      <div id="cmsl-mensagem-blogueiras"
        class="cmsl-mensagem" role="status" aria-live="polite"></div>
    </form>

    <div class="cmsl-rodape">
      Os cadastros passam por uma análise antes de aparecer no diretório.
      <br>Criado por Com Mãos de Seda
    </div>
  `;

  var formulario = raiz.querySelector('#cmsl-form-blogueiras');
  var botao = raiz.querySelector('#cmsl-botao-enviar');
  var mensagem = raiz.querySelector('#cmsl-mensagem-blogueiras');
  var campoWhatsApp = raiz.querySelector('#cmsl-whatsapp');
  var autorizacao = raiz.querySelector('#cmsl-autoriza-whatsapp');

  function mostrarMensagem(texto, tipo) {
    mensagem.textContent = texto;
    mensagem.className = 'cmsl-mensagem cmsl-visivel ' +
      (tipo === 'sucesso' ? 'cmsl-sucesso' : 'cmsl-erro');
  }

  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();

    if (!formulario.reportValidity()) return;

    var digitos = campoWhatsApp.value.replace(/\D/g, '');

    if (digitos.indexOf('55') !== 0) {
      digitos = '55' + digitos;
    }

    if (!/^55[1-9][0-9]\d{8,9}$/.test(digitos)) {
      mostrarMensagem(
        'Confira o WhatsApp: informe o código do Brasil, DDD e número completo.',
        'erro'
      );
      campoWhatsApp.focus();
      return;
    }

    var dados = new URLSearchParams();

    new FormData(formulario).forEach(function (valor, chave) {
      if (chave !== 'whatsapp' && chave !== 'autorizaWhatsapp') {
        dados.append(chave, String(valor).trim());
      }
    });

    dados.append('whatsapp', digitos);
    dados.append('autorizaWhatsapp', autorizacao.checked ? 'sim' : 'nao');

    botao.disabled = true;
    botao.textContent = 'Enviando seu cadastro...';
    mensagem.className = 'cmsl-mensagem';

    fetch(endpoint, {
      method: 'POST',
      mode: 'no-cors',
      body: dados
    })
    .then(function () {
      mostrarMensagem(
        'O Seu Cadastro foi enviado! E no prazo de 24h a 48h, se os dados estiverem corretos seu Site/Blog/Redes Sociais será aprovado e entrará na lista de nossa Página. SALVE ESSA PAGIAN NO NAVEGADOR PARA CONFERIR EM ATÉ 24H.  Atenção Links de Afiliados não seram aprovados.',
        'sucesso'
      );
      formulario.reset();
    })
    .catch(function () {
      mostrarMensagem(
        'Não conseguimos iniciar o envio. Verifique sua conexão e tente novamente.',
        'erro'
      );
    })
    .finally(function () {
      botao.disabled = false;
      botao.textContent = 'Enviar meu cadastro 🌷';
    });
  });
})();
