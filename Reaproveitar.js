/* =====================================================
   COM MÃOS DE SEDA — CADASTRO DE ARTESÃS
   Arquivo externo: CadastroArtesas.js
   Integração com Google Apps Script
   © 2026 Com Mãos de Seda
   ===================================================== */

(function () {
  'use strict';

  var scriptAtual = document.currentScript;
  var raizExistente = document.getElementById('cmsl-cadastro-artesas');

  if (
    raizExistente &&
    raizExistente.getAttribute('data-iniciado') === 'sim'
  ) {
    return;
  }

  var raiz = raizExistente || document.createElement('div');
  raiz.id = 'cmsl-cadastro-artesas';

  if (!raizExistente && scriptAtual && scriptAtual.parentNode) {
    scriptAtual.parentNode.insertBefore(raiz, scriptAtual);
  } else if (!raizExistente) {
    document.body.appendChild(raiz);
  }

  if (raiz.getAttribute('data-iniciado') === 'sim') return;

  raiz.setAttribute('data-iniciado', 'sim');

  // ENDEREÇO DO APPS SCRIPT — MANTIDO
  var endpoint =
    'https://script.google.com/macros/s/AKfycbwm_t9YiIU4GiyuP6m8C6EbyrBrJkT0bskGLLZ-Dwt3iXsOffh0tMknm1OixJ4-YocGAA/exec';

  /* =========================
     ESTILO ISOLADO DO FORMULÁRIO
     ========================= */

  var estilo = document.createElement('style');

  estilo.textContent = `
    #cmsl-cadastro-artesas {
      --cmsl-dourado: #b58a45;
      --cmsl-dourado-escuro: #8e682d;
      --cmsl-fundo: #fffaf3;
      --cmsl-texto: #51463b;
      --cmsl-borda: #e5d6bd;

      max-width: 680px;
      margin: 25px auto;
      padding: 25px;
      box-sizing: border-box;
      background: var(--cmsl-fundo);
      border: 1px solid var(--cmsl-borda);
      border-radius: 18px;
      color: var(--cmsl-texto);
      font-family: Arial, sans-serif;
      box-shadow: 0 5px 20px rgba(100,70,30,.08);
    }

    #cmsl-cadastro-artesas *,
    #cmsl-cadastro-artesas *::before,
    #cmsl-cadastro-artesas *::after {
      box-sizing: border-box;
    }

    #cmsl-cadastro-artesas .cmsl-cabecalho {
      text-align: center;
      margin-bottom: 25px;
    }

    #cmsl-cadastro-artesas .cmsl-cabecalho h2 {
      margin: 0 0 12px;
      color: var(--cmsl-dourado-escuro);
      font-family: Georgia, serif;
      font-size: 29px;
      line-height: 1.3;
    }

    #cmsl-cadastro-artesas .cmsl-cabecalho p {
      margin: 0;
      font-size: 15px;
      line-height: 1.7;
    }

    #cmsl-cadastro-artesas .cmsl-campo {
      margin-bottom: 18px;
    }

    #cmsl-cadastro-artesas label {
      display: block;
      margin-bottom: 7px;
      color: #6d5330;
      font-size: 14px;
      font-weight: bold;
    }

    #cmsl-cadastro-artesas .cmsl-obrigatorio {
      color: #a14f4f;
    }

    #cmsl-cadastro-artesas input,
    #cmsl-cadastro-artesas select {
      display: block;
      width: 100%;
      min-width: 0;
      min-height: 45px;
      padding: 12px;
      border: 1px solid var(--cmsl-borda);
      border-radius: 9px;
      background: #fff;
      color: #42382e;
      font-family: Arial, sans-serif;
      font-size: 15px;
      outline: none;
    }

    #cmsl-cadastro-artesas input:focus,
    #cmsl-cadastro-artesas select:focus {
      border-color: var(--cmsl-dourado);
      box-shadow: 0 0 0 3px rgba(181,138,69,.13);
    }

    #cmsl-cadastro-artesas .cmsl-ajuda {
      display: block;
      margin-top: 6px;
      color: #786d60;
      font-size: 12px;
      line-height: 1.5;
    }

    #cmsl-cadastro-artesas .cmsl-privacidade {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      margin: 20px 0;
      padding: 15px;
      border: 1px solid var(--cmsl-borda);
      border-radius: 10px;
      background: #fffdf9;
    }

    #cmsl-cadastro-artesas .cmsl-privacidade input {
      width: 18px;
      min-width: 18px;
      height: 18px;
      min-height: 18px;
      margin: 2px 0 0;
      accent-color: var(--cmsl-dourado);
    }

    #cmsl-cadastro-artesas .cmsl-privacidade label {
      margin: 0;
      color: var(--cmsl-texto);
      font-size: 13px;
      font-weight: normal;
      line-height: 1.6;
      cursor: pointer;
    }

    #cmsl-cadastro-artesas .cmsl-botao {
      display: block;
      width: 100%;
      min-height: 49px;
      padding: 14px 20px;
      border: none;
      border-radius: 10px;
      background: var(--cmsl-dourado);
      color: #fff;
      font-size: 16px;
      font-weight: bold;
      cursor: pointer;
      transition: background .2s, transform .2s;
    }

    #cmsl-cadastro-artesas .cmsl-botao:hover {
      background: var(--cmsl-dourado-escuro);
      transform: translateY(-1px);
    }

    #cmsl-cadastro-artesas .cmsl-botao:disabled {
      opacity: .65;
      cursor: wait;
      transform: none;
    }

    #cmsl-cadastro-artesas #cmsl-mensagem-artesas {
      display: none;
      margin-top: 18px;
      padding: 13px;
      border-radius: 9px;
      font-size: 14px;
      line-height: 1.6;
      overflow-wrap: anywhere;
    }

    #cmsl-cadastro-artesas #cmsl-mensagem-artesas.cmsl-sucesso {
      display: block;
      background: #edf7ed;
      border: 1px solid #b8d8b8;
      color: #285c30;
    }

    #cmsl-cadastro-artesas #cmsl-mensagem-artesas.cmsl-erro {
      display: block;
      background: #fff0ef;
      border: 1px solid #e7c0bc;
      color: #963e38;
    }

    #cmsl-cadastro-artesas .cmsl-rodape {
      margin-top: 20px;
      text-align: center;
      font-size: 12px;
      line-height: 1.7;
      color: #817365;
    }

    #cmsl-cadastro-artesas .cmsl-rodape a {
      color: var(--cmsl-dourado-escuro);
      text-decoration: none;
      font-weight: bold;
    }

    @media (max-width: 600px) {
      #cmsl-cadastro-artesas {
        margin: 15px auto;
        padding: 18px;
        border-radius: 13px;
      }

      #cmsl-cadastro-artesas .cmsl-cabecalho h2 {
        font-size: 25px;
      }
    }
  `;

  document.head.appendChild(estilo);

  /* =========================
     ESTRUTURA DO FORMULÁRIO
     ========================= */

  raiz.innerHTML = `
    <div class="cmsl-cabecalho">
      <h2>🧵 Cadastro de Artesãs</h2>

      <p>
        Seu talento merece ser conhecido! 💛<br>
        Cadastre-se para fazer parte do diretório de artesãs
        do <strong>Com Mãos de Seda</strong>.
      </p>
    </div>

    <form id="cmsl-form-artesas">

      <!-- 1. NOME COMPLETO -->

      <div class="cmsl-campo">
        <label for="cmsl-artesa-nome">
          Seu Nome
          <span class="cmsl-obrigatorio">*</span>
        </label>

        <input
          id="cmsl-artesa-nome"
          name="nome"
          type="text"
          placeholder="Digite seu Nome + 1 sobrenome"
          maxlength="150"
          autocomplete="name"
          required
        >
      </div>

      <!-- 2. E-MAIL -->

      <div class="cmsl-campo">
        <label for="cmsl-artesa-email">
          E-mail
          <span class="cmsl-obrigatorio">*</span>
        </label>

        <input
          id="cmsl-artesa-email"
          name="email"
          type="email"
          placeholder="seuemail@exemplo.com"
          maxlength="200"
          autocomplete="email"
          required
        >
      </div>

      <!-- 3. ESPECIALIDADE -->

      <div class="cmsl-campo">
        <label for="cmsl-artesa-especialidade">
          Qual é sua especialidade artística?
          <span class="cmsl-obrigatorio">*</span>
        </label>

        <select
          id="cmsl-artesa-especialidade"
          name="especialidade"
          required
        >
          <option value="">Selecione sua especialidade</option>
          <option value="Biscuit e porcelana fria">Biscuit e porcelana fria</option>
          <option value="Amigurumi">Amigurumi</option>
          <option value="Crochê">Crochê</option>
          <option value="Tricô">Tricô</option>
          <option value="Costura e patchwork">Costura e patchwork</option>
          <option value="Bordado">Bordado</option>
          <option value="Pintura artesanal">Pintura artesanal</option>
          <option value="Artesanato em madeira">Artesanato em madeira</option>
          <option value="Papelaria personalizada">Papelaria personalizada</option>
          <option value="Laços e acessórios">Laços e acessórios</option>
          <option value="Velas e sabonetes artesanais">Velas e sabonetes artesanais</option>
          <option value="Resina artesanal">Resina artesanal</option>
          <option value="Flores artesanais">Flores artesanais</option>
          <option value="Decoração de festas">Decoração de festas</option>
          <option value="Lembrancinhas personalizadas">Lembrancinhas personalizadas</option>
          <option value="Artesanato com materiais reciclados">Artesanato com materiais reciclados</option>
          <option value="Macramê">Macramê</option>
          <option value="EVA">EVA</option>
          <option value="Pintura em tecido">Pintura em tecido</option>
          <option value="Outro">Outra especialidade — quero escrever</option>
        </select>
      </div>

      <!-- CAMPO CONDICIONAL: OUTRA ESPECIALIDADE -->

      <div
        class="cmsl-campo"
        id="cmsl-artesa-outra-box"
        style="display:none"
      >
        <label for="cmsl-artesa-outra">
          Escreva sua especialidade
          <span class="cmsl-obrigatorio">*</span>
        </label>

        <input
          id="cmsl-artesa-outra"
          type="text"
          maxlength="120"
          placeholder="Ex.: macramê com pedras naturais"
          disabled
        >

        <span class="cmsl-ajuda">
          Escreva o tipo de artesanato que você faz.
        </span>
      </div>

      <!-- 4. NOME DO ATELIÊ E CIDADE -->

      <div class="cmsl-campo">
        <label for="cmsl-artesa-atelie">
          Nome do seu ateliê e Cidade/UF
          <span class="cmsl-obrigatorio">*</span>
        </label>

        <input
          id="cmsl-artesa-atelie"
          name="nomeAtelie"
          type="text"
          placeholder="Nome da sua marca ou ateliê + Cidade/Estado"
          maxlength="150"
          required
        >
      </div>

      <!-- 5. LINK PARA DIVULGAÇÃO -->

      <div class="cmsl-campo">
        <label for="cmsl-artesa-link">
          Link para divulgação
          <span class="cmsl-obrigatorio">*</span>
        </label>

        <input
          id="cmsl-artesa-link"
          name="linkDivulgacao"
          type="url"
          placeholder="https://www.instagram.com/seuperfil/"
          maxlength="1000"
          required
        >

        <span class="cmsl-ajuda">
          Pode ser o Site/Blog, Instagram, Facebook, loja virtual ou outro endereço
          onde as pessoas encontrem seu trabalho. Inclua https:// no início.
        </span>
      </div>

      <!-- 6. FOTO, LOGOMARCA OU TRABALHO -->

      <div class="cmsl-campo">
        <label for="cmsl-artesa-imagem">
         Cole o link de sua foto, Logomarca ou Trabalho.
        </label>

        <input
          id="cmsl-artesa-imagem"
          name="urlImagem"
          type="url"
          placeholder="https://... (opcional)"
          maxlength="2000"
        >

        <span class="cmsl-ajuda">
          Opcional. Cole o endereço/link direto de uma imagem sua publicada
          na internet. Pode ser sua foto, a logomarca do ateliê
          ou uma foto de um trabalho artesanal.
        </span>
      </div>

      <!-- 7. WHATSAPP -->

      <div class="cmsl-campo">
        <label for="cmsl-artesa-whatsapp">
          WhatsApp com DDD
          <span class="cmsl-obrigatorio">*</span>
        </label>

        <input
          id="cmsl-artesa-whatsapp"
          name="whatsapp"
          type="tel"
          placeholder="Ex.: (21) 99999-9999"
          maxlength="25"
          autocomplete="tel"
          required
        >

        <span class="cmsl-ajuda">
          Informe o número com DDD. O código do Brasil será acrescentado
          automaticamente se estiver ausente.
        </span>
      </div>

      <!-- AUTORIZAÇÃO PARA DIVULGAÇÃO DO WHATSAPP -->

      <div class="cmsl-privacidade">
        <input
          id="cmsl-artesa-autoriza-whatsapp"
          name="autorizaWhatsapp"
          type="checkbox"
          value="sim"
        >

        <label for="cmsl-artesa-autoriza-whatsapp">
          <strong>Autorizo a divulgação pública do meu WhatsApp</strong>
          no diretório de artesãs, para que pessoas interessadas possam
          entrar em contato comigo. Se não marcar esta opção, meu número
          não será exibido publicamente.
        </label>
      </div>

      <!-- BOTÃO DE ENVIO -->

      <button
        type="submit"
        id="cmsl-botao-artesas"
        class="cmsl-botao"
      >
        ✨ Enviar meu cadastro
      </button>

      <div
        id="cmsl-mensagem-artesas"
        role="status"
        aria-live="polite"
      ></div>

    </form>

    <div class="cmsl-rodape">
      Feito com carinho por
      <a
        href="https://www.commaosdesedaoficial.com"
        target="_blank"
        rel="noopener noreferrer"
      >Com Mãos de Seda</a> 💛
    </div>
  `;

  /* =========================
     REFERÊNCIAS DOS ELEMENTOS
     ========================= */

  var formulario = raiz.querySelector('#cmsl-form-artesas');
  var campoEspecialidade = raiz.querySelector('#cmsl-artesa-especialidade');
  var caixaOutra = raiz.querySelector('#cmsl-artesa-outra-box');
  var campoOutra = raiz.querySelector('#cmsl-artesa-outra');
  var campoWhatsapp = raiz.querySelector('#cmsl-artesa-whatsapp');
  var campoAutorizacao = raiz.querySelector('#cmsl-artesa-autoriza-whatsapp');
  var botao = raiz.querySelector('#cmsl-botao-artesas');
  var mensagem = raiz.querySelector('#cmsl-mensagem-artesas');

  /* =========================
     MENSAGENS DO FORMULÁRIO
     ========================= */

  function mostrarMensagem(texto, tipo) {
    mensagem.textContent = texto;
    mensagem.className =
      tipo === 'erro' ? 'cmsl-erro' : 'cmsl-sucesso';
    mensagem.style.display = 'block';
  }

  function esconderMensagem() {
    mensagem.textContent = '';
    mensagem.className = '';
    mensagem.style.display = 'none';
  }

  /* =========================
     OUTRA ESPECIALIDADE
     ========================= */

  campoEspecialidade.addEventListener('change', function () {
    var outra = campoEspecialidade.value === 'Outro';

    caixaOutra.style.display = outra ? 'block' : 'none';
    campoOutra.disabled = !outra;
    campoOutra.required = outra;

    if (!outra) {
      campoOutra.value = '';
    }
  });

  /* =========================
     FORMATAÇÃO DO WHATSAPP
     ========================= */

  campoWhatsapp.addEventListener('input', function () {
    this.value = this.value.replace(/[^\d+\s().-]/g, '');
  });

  /* =========================
     ENVIO PARA A PLANILHA
     ========================= */

  formulario.addEventListener('submit', function (evento) {
    evento.preventDefault();
    esconderMensagem();

    if (!formulario.reportValidity()) {
      return;
    }

    var especialidade = campoEspecialidade.value;

    if (especialidade === 'Outro') {
      especialidade = campoOutra.value.trim();

      if (!especialidade) {
        mostrarMensagem(
          'Por favor, escreva sua especialidade.',
          'erro'
        );

        campoOutra.focus();
        return;
      }
    }

    var whatsapp = campoWhatsapp.value.replace(/\D/g, '');

    if (whatsapp.startsWith('00')) {
      whatsapp = whatsapp.substring(2);
    }

    if (!whatsapp.startsWith('55')) {
      whatsapp = '55' + whatsapp;
    }

    if (whatsapp.length !== 12 && whatsapp.length !== 13) {
      mostrarMensagem(
        'Confira o WhatsApp: informe o DDD e o número correto.',
        'erro'
      );

      campoWhatsapp.focus();
      return;
    }

    var dados = new URLSearchParams();

    dados.append(
      'nome',
      raiz.querySelector('[name="nome"]').value.trim()
    );

    dados.append(
      'email',
      raiz.querySelector('[name="email"]').value.trim()
    );

    dados.append('especialidade', especialidade);

    dados.append(
      'nomeAtelie',
      raiz.querySelector('[name="nomeAtelie"]').value.trim()
    );

    dados.append(
      'linkDivulgacao',
      raiz.querySelector('[name="linkDivulgacao"]').value.trim()
    );

    dados.append(
      'urlImagem',
      raiz.querySelector('[name="urlImagem"]').value.trim()
    );

    dados.append('whatsapp', whatsapp);

    dados.append(
      'autorizaWhatsapp',
      campoAutorizacao.checked ? 'sim' : 'nao'
    );

    botao.disabled = true;
    botao.textContent = 'Enviando cadastro...';

    mostrarMensagem(
      'Enviando seu cadastro. Aguarde um instante...',
      'sucesso'
    );

    fetch(endpoint, {
      method: 'POST',
      mode: 'no-cors',
      body: dados
    })
      .then(function () {
        mostrarMensagem(
          'Seu cadastro foi enviado! Salve essa Página do site e Confira quando o seu cartão aparecer também aqui!  Atenção Links de afiliados não serão aceitos.',
          'sucesso'
        );

        formulario.reset();

        caixaOutra.style.display = 'none';
        campoOutra.disabled = true;
        campoOutra.required = false;
      })
      .catch(function () {
        mostrarMensagem(
          'Não foi possível iniciar o envio. Verifique sua conexão e tente novamente.',
          'erro'
        );
      })
      .finally(function () {
        botao.disabled = false;
        botao.textContent = '✨ Enviar meu cadastro';
      });
  });

})();
