

/* ==================================================
   CARROSSEL DE MARCAS PARCEIRAS — Com Mãos de Seda
   Arquivo externo JavaScript (.js)
   © 2026 Com Mãos de Seda
================================================== */
(function () {
  'use strict';

  if (document.getElementById('cmsl_carrossel_logos')) return;

  var cmsl_estilo = `
    #cmsl_carrossel_logos {
      width: 100%;
      max-width: 1000px;
      margin: 20px auto;
      display: flex;
      align-items: center;
      gap: 8px;
      box-sizing: border-box;
    }
    #cmsl_carrossel_logos *,
    #cmsl_carrossel_logos *::before,
    #cmsl_carrossel_logos *::after {
      box-sizing: border-box;
    }
    #cmsl_janela_logos {
      width: 100%;
      overflow: hidden;
    }
    #cmsl_lista_logos {
      display: flex;
      width: 100%;
      transition: transform 0.4s ease;
      will-change: transform;
    }
    #cmsl_lista_logos > a {
      flex: 0 0 25%;
      width: 25%;
      padding: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
    }
    #cmsl_lista_logos > a > img {
      display: block;
      width: 100%;
      max-width: 180px;
      height: 100px;
      object-fit: contain;
      border: 0;
      margin: 0;
      padding: 0;
    }
    #cmsl_carrossel_logos #cmsl_botao_anterior,
    #cmsl_carrossel_logos #cmsl_botao_proximo {
      flex: 0 0 auto;
      width: 40px;
      height: 40px;
      padding: 0;
      margin: 0;
      border: 0;
      background: transparent;
      color: inherit;
      font-size: 28px;
      line-height: 40px;
      text-align: center;
      cursor: pointer;
      box-shadow: none;
      outline: none;
    }
    #cmsl_carrossel_logos #cmsl_botao_anterior:hover,
    #cmsl_carrossel_logos #cmsl_botao_proximo:hover {
      transform: scale(1.15);
    }
    @media screen and (max-width: 600px) {
      #cmsl_carrossel_logos {
        gap: 4px;
      }
      #cmsl_lista_logos > a {
        flex: 0 0 50%;
        width: 50%;
        padding: 8px;
      }
      #cmsl_lista_logos > a > img {
        height: 80px;
      }
      #cmsl_carrossel_logos #cmsl_botao_anterior,
      #cmsl_carrossel_logos #cmsl_botao_proximo {
        width: 32px;
        height: 36px;
        font-size: 22px;
        line-height: 36px;
      }
    }
  `;

  var cmsl_html = `
    <div id="cmsl_carrossel_logos" aria-label="Marcas parceiras">
      <button id="cmsl_botao_anterior" type="button"
        aria-label="Marca anterior">&#10094;</button>

      <div id="cmsl_janela_logos">
        <div id="cmsl_lista_logos">

          <a href="https://s.shopee.com.br/9AOKNnHxCs#commaosdeseda"
             target="_blank" rel="noopener noreferrer">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbU4ku9lINxA7hT3q0-BpcNQz_L4Fw1USOoPOlmFQwgJ2kAoeuAh7zDzgyVPkhkV4wHd7mhV-y3qc3Q9GwvUXuzh6Pcdx_QO-bFREruthfyiijvOFtiRLhs4FYg8lxHEfi-FzFnPST1zyZ6kaTulTTuuTTCoE8Jk8hw0TzOdnUwAR7iNmBzvrnNBAeh3G_/s320/poli.png"
                 alt="Polycol" loading="lazy">
          </a>

          <a href="https://s.shopee.com.br/3g3Nptbplg#commaosdeseda"
             target="_blank" rel="noopener noreferrer">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjO7lBM52BvxYothIj1EUhMQGQCMBQbvjYfvj6DGIzejCIvb2H_Ccn2dgUp0GsSpYwBi0e69SR4J9VuDZyOwGTckjl3urntkGUwVAxPcF2a2Mp1dVR9jgdEjqi4sbs_5b9SQ0AUjqyX1Majf1aAz_TtxnaGeb_dXXwbeq99TihCocz__Q-s2833yKPYdzIY/s320-rw/condor.png"
                 alt="Condor" loading="lazy">
          </a>

          <a href="https://s.shopee.com.br/20v9qmWOhG#commaosdeseda"
             target="_blank" rel="noopener noreferrer">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhYDxUZDLpR8WiiZKWzqJmVVataN4W_9Tpu4-jxD5rKj-IF4l98YE9Y6TYmHRU-ONpZIn_w6FyhiKAskgQq6ZVWwFMUuUpLdKUJDexWkjZnWSYahjoeEX1KoI1ZGl2vxMHdlUWof2JOEhXegNV9bgsY1gEUlRQaKXV2mf6x4Pax1-9ODdcyITZga0_d1EOD/s458/Modele.png"
                 alt="Modele" loading="lazy">
          </a>

          <a href="https://s.shopee.com.br/8KpDOW5rbm#commaosdeseda"
             target="_blank" rel="noopener noreferrer">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgQgvTfPeA6gViF5z-t4yLOKWhY_MYbHMdxkC9mrTlWBAwxU3SxKqclzlWYEUYTAdDGOx27ZYHdEWEPLFIEEgh3DbzzgmLCfujc1LRL0Qcndcpv_XdZGbMCTESXY52AMHzNpHezsp9eMPKUK8vaScbRs-uwjqYW74WoLn2KsZqZn1vMkY-gfMahqUZeE-4P/s458/acri.png"
                 alt="Acrilex" loading="lazy">
          </a>

          <a href="https://s.shopee.com.br/1qbjedT3rM#commaosdeseda"
             target="_blank" rel="noopener noreferrer">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgvStD8U2dPMkYtK5IB8sVG4OEjFZTT48hJGfBgY8YIhxvxVqC1O1-Wsb29ogsQtJCNEefHUVZH8SBIYMC2AU3L5Ojx68gmb8PVdgsxpUh7neBo1JPT-7qimcxaTCxwzT_m0IOtwdUnkuA9yG-iElDp9wu4fYqiqMHVtILUAqqeU4KsA9buWBQTjmnc63Nr/s458/tek.png"
                 alt="TekBond" loading="lazy">
          </a>

          <a href="https://s.shopee.com.br/9fKaz7agJ0#commaosdeseda"
             target="_blank" rel="noopener noreferrer">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjLgqgf875xB-Jz96Oh2g9sBJdMTKu2Y4JCS7VS2DSrGhC7QTDptOZ6EOe-WRA7lesFDuJEd4qkxEdaJ0etSftRmJ5KN6LaBKwLm9g00VL_LUVrwrg_tX0aeEv0l8IM3oHwq3MxkOBsSYQU1oB8AGpzgDDeGG2iwm-4OBS7J8KgQvW6bxtMWFXH3n3gKf53/s320/perma.png"
                 alt="Permabond" loading="lazy">
          </a>

          <a href="https://s.shopee.com.br/7VG6PIWEBw#commaosdeseda"
             target="_blank" rel="noopener noreferrer">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj_sTdxgYiWH6OXc-gPo2LW1nxI9z2tE7k7Z9BFi-hvb0HHaWg895RwB9R1sEkkbB6HXAeZxL7LCEn_KVuRwcFnXl2g1R9sfHKTQRSwhbd-yyI1NDOUumNiQj99fX_HNSy0wEo98vRg1uiAOpE41MOnc8xZphMYGH4_VJVuex0Zvvoi0HVOP5jV-Rb9TXii/s320/kit.png"
                 alt="KIT" loading="lazy">
          </a>

          <a href="https://s.shopee.com.br/9AOKNnHxCs#commaosdeseda"
             target="_blank" rel="noopener noreferrer">
            <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhbU4ku9lINxA7hT3q0-BpcNQz_L4Fw1USOoPOlmFQwgJ2kAoeuAh7zDzgyVPkhkV4wHd7mhV-y3qc3Q9GwvUXuzh6Pcdx_QO-bFREruthfyiijvOFtiRLhs4FYg8lxHEfi-FzFnPST1zyZ6kaTulTTuuTTCoE8Jk8hw0TzOdnUwAR7iNmBzvrnNBAeh3G_/s320/poli.png"
                 alt="Polycol" loading="lazy">
          </a>

        </div>
      </div>

      <button id="cmsl_botao_proximo" type="button"
        aria-label="Próxima marca">&#10095;</button>
    </div>
  `;

  function cmsl_inicializar() {
    if (document.getElementById('cmsl_carrossel_logos')) return;

    var cmsl_style = document.createElement('style');
    cmsl_style.id = 'cmsl_estilo_carrossel_logos';
    cmsl_style.textContent = cmsl_estilo;
    document.head.appendChild(cmsl_style);

    var cmsl_conteudo = document.createElement('div');
    cmsl_conteudo.innerHTML = cmsl_html.trim();
    var cmsl_carrossel = cmsl_conteudo.firstElementChild;

    var cmsl_scriptAtual = document.currentScript;

    if (cmsl_scriptAtual && cmsl_scriptAtual.parentNode) {
      cmsl_scriptAtual.parentNode.insertBefore(
        cmsl_carrossel, cmsl_scriptAtual
      );
    } else {
      (document.body || document.documentElement)
        .appendChild(cmsl_carrossel);
    }

    var cmsl_lista = document.getElementById('cmsl_lista_logos');
    var cmsl_anterior = document.getElementById('cmsl_botao_anterior');
    var cmsl_proximo = document.getElementById('cmsl_botao_proximo');

    if (!cmsl_lista || !cmsl_anterior || !cmsl_proximo) return;

    var cmsl_posicao = 0;
    var cmsl_timer = null;

    function cmsl_logosVisiveis() {
      return window.innerWidth <= 600 ? 2 : 4;
    }

    function cmsl_atualizar() {
      var visiveis = cmsl_logosVisiveis();
      var total = cmsl_lista.children.length;
      var maximo = Math.max(0, total - visiveis);

      if (cmsl_posicao > maximo) cmsl_posicao = 0;
      if (cmsl_posicao < 0) cmsl_posicao = maximo;

      var deslocamento = (cmsl_posicao * 100) / visiveis;

      cmsl_lista.style.transform =
        'translate3d(-' + deslocamento + '%, 0, 0)';
    }

    function cmsl_avancar() {
      var maximo = Math.max(
        0, cmsl_lista.children.length - cmsl_logosVisiveis()
      );

      cmsl_posicao++;
      if (cmsl_posicao > maximo) cmsl_posicao = 0;
      cmsl_atualizar();
    }

    function cmsl_voltar() {
      var maximo = Math.max(
        0, cmsl_lista.children.length - cmsl_logosVisiveis()
      );

      cmsl_posicao--;
      if (cmsl_posicao < 0) cmsl_posicao = maximo;
      cmsl_atualizar();
    }

    function cmsl_iniciar() {
      clearInterval(cmsl_timer);
      cmsl_timer = setInterval(cmsl_avancar, 3000);
    }

    cmsl_proximo.addEventListener('click', function () {
      cmsl_avancar();
      cmsl_iniciar();
    });

    cmsl_anterior.addEventListener('click', function () {
      cmsl_voltar();
      cmsl_iniciar();
    });

    window.addEventListener('resize', cmsl_atualizar);

    cmsl_atualizar();
    cmsl_iniciar();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', cmsl_inicializar, {
      once: true
    });
  } else {
    cmsl_inicializar();
  }
})();
