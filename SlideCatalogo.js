
<!-- =====================================================
     CARROSSEL RESPONSIVO — COM MÃOS DE SEDA
     Código isolado para Blogger
     14 imagens | Loop infinito | Sem bibliotecas externas
     ===================================================== -->

<div id="cms-carrossel-isolado-2026">

  <style>
    /* Todo o CSS está limitado a este carrossel */
    #cms-carrossel-isolado-2026 {
      --cms-cor-seta: #ffffff;
      --cms-fundo-seta: rgba(0, 0, 0, 0.65);
      --cms-espaco: 14px;

      position: relative;
      display: block;
      width: 100%;
      max-width: 100%;
      margin: 20px auto;
      padding: 0;
      box-sizing: border-box;
      isolation: isolate;
    }

    #cms-carrossel-isolado-2026 *,
    #cms-carrossel-isolado-2026 *::before,
    #cms-carrossel-isolado-2026 *::after {
      box-sizing: border-box;
    }

    #cms-carrossel-isolado-2026 .cms26-janela {
      display: block;
      position: relative;
      width: 100%;
      overflow: hidden;
      padding: 0 38px;
    }

    #cms-carrossel-isolado-2026 .cms26-faixa {
      display: flex;
      align-items: stretch;
      gap: var(--cms-espaco);
      width: 100%;
      margin: 0;
      padding: 0;
      transform: translateX(0);
      transition: transform 450ms ease;
      will-change: transform;
    }

    #cms-carrossel-isolado-2026 .cms26-item {
      position: relative;
      display: block;
      flex: 0 0 calc((100% - 56px) / 5);
      min-width: 0;
      margin: 0;
      padding: 0;
      overflow: hidden;
      border-radius: 8px;
      line-height: 0;
    }

    #cms-carrossel-isolado-2026 .cms26-item a {
      display: block;
      width: 100%;
      margin: 0;
      padding: 0;
      text-decoration: none;
      border: 0;
      outline-offset: 3px;
    }

    #cms-carrossel-isolado-2026 .cms26-item img {
      display: block;
      width: 100%;
      height: auto;
      aspect-ratio: 9 / 16;
      object-fit: cover;
      margin: 0;
      padding: 0;
      border: 0;
      border-radius: 8px;
    }

    #cms-carrossel-isolado-2026 .cms26-seta {
      position: absolute;
      z-index: 3;
      top: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 34px;
      height: 48px;
      margin: 0;
      padding: 0;
      transform: translateY(-50%);
      border: 0;
      border-radius: 6px;
      background: var(--cms-fundo-seta);
      color: var(--cms-cor-seta);
      font-family: Arial, sans-serif;
      font-size: 27px;
      line-height: 1;
      cursor: pointer;
      box-shadow: none;
      appearance: none;
      -webkit-appearance: none;
    }

    #cms-carrossel-isolado-2026 .cms26-seta-anterior {
      left: 2px;
    }

    #cms-carrossel-isolado-2026 .cms26-seta-proxima {
      right: 2px;
    }

    #cms-carrossel-isolado-2026 .cms26-seta:hover {
      background: rgba(0, 0, 0, 0.85);
      color: #ffffff;
    }

    #cms-carrossel-isolado-2026 .cms26-pontos {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
      gap: 7px;
      width: 100%;
      margin: 14px 0 0;
      padding: 0;
    }

    #cms-carrossel-isolado-2026 .cms26-ponto {
      display: block;
      width: 9px;
      height: 9px;
      min-width: 9px;
      margin: 0;
      padding: 0;
      border: 0;
      border-radius: 50%;
      background: #c8c8c8;
      cursor: pointer;
      appearance: none;
      -webkit-appearance: none;
    }

    #cms-carrossel-isolado-2026 .cms26-ponto.cms26-ativo {
      background: #555555;
      transform: scale(1.2);
    }

    #cms-carrossel-isolado-2026 .cms26-seta:focus-visible,
    #cms-carrossel-isolado-2026 .cms26-ponto:focus-visible {
      outline: 2px solid #555555;
      outline-offset: 3px;
    }

    /* Tablets: 3 imagens */
    @media (max-width: 900px) {
      #cms-carrossel-isolado-2026 {
        --cms-espaco: 10px;
      }

      #cms-carrossel-isolado-2026 .cms26-item {
        flex-basis: calc((100% - 20px) / 3);
      }

      #cms-carrossel-isolado-2026 .cms26-janela {
        padding-right: 34px;
        padding-left: 34px;
      }
    }

    /* Celulares: 2 imagens */
    @media (max-width: 600px) {
      #cms-carrossel-isolado-2026 {
        --cms-espaco: 10px;
      }

      #cms-carrossel-isolado-2026 .cms26-item {
        flex-basis: calc((100% - 10px) / 2);
      }

      #cms-carrossel-isolado-2026 .cms26-janela {
        padding-right: 30px;
        padding-left: 30px;
      }

      #cms-carrossel-isolado-2026 .cms26-seta {
        width: 27px;
        height: 42px;
        font-size: 23px;
      }
    }

    /* Telas muito estreitas: 1 imagem */
    @media (max-width: 360px) {
      #cms-carrossel-isolado-2026 .cms26-item {
        flex-basis: 100%;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      #cms-carrossel-isolado-2026 .cms26-faixa {
        transition: none;
      }
    }
  </style>

  <div class="cms26-janela">
    <div class="cms26-faixa">

      <div class="cms26-item">
        <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgss9zbIUSAPnI7tY81wRGKFNOzUTXD2XeFRHIGo6fdcTRL3aHqgiTqg0jlpFePPO9icCe-NYwBtfZOJHkma-z0K6-szNmctxUVJJHqlTIWoBuD3fUhqUhDcZQoHKlCero2GDeYpv-LazjPs-cQcmAvRJ5ymwhIttC8biLv3CtBObQom26VRLlZUTPZypW/s1920/1.png" target="_blank" rel="noopener">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjgss9zbIUSAPnI7tY81wRGKFNOzUTXD2XeFRHIGo6fdcTRL3aHqgiTqg0jlpFePPO9icCe-NYwBtfZOJHkma-z0K6-szNmctxUVJJHqlTIWoBuD3fUhqUhDcZQoHKlCero2GDeYpv-LazjPs-cQcmAvRJ5ymwhIttC8biLv3CtBObQom26VRLlZUTPZypW/s320-rw/1.png" alt="Imagem 1" loading="lazy">
        </a>
      </div>

      <div class="cms26-item">
        <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh3Le9rUpO1IFByKnPz9x19vhHG_EQ6yrnCF20Scvp1aNwhT0E86ryfdlCndMkG2zgpWIrFuCFTThp-yHEf1SCxpobmQ48tRKf8H12BK3FLF83WaPH0RJJJn4iEyxR-EE907lgxbFrTpcRlG_d5vB0TAT16s7gyvDetI0f3ggk6Laz-gdSgzvcZlc1y-_nZ/s1920/2.png" target="_blank" rel="noopener">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh3Le9rUpO1IFByKnPz9x19vhHG_EQ6yrnCF20Scvp1aNwhT0E86ryfdlCndMkG2zgpWIrFuCFTThp-yHEf1SCxpobmQ48tRKf8H12BK3FLF83WaPH0RJJJn4iEyxR-EE907lgxbFrTpcRlG_d5vB0TAT16s7gyvDetI0f3ggk6Laz-gdSgzvcZlc1y-_nZ/s320-rw/2.png" alt="Imagem 2" loading="lazy">
        </a>
      </div>

      <div class="cms26-item">
        <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-6_rZjdqiOof1TUzifGhSJbIthZpAthO2sQA0WNtWTBPDA7K10jwAB4vqKaPTGhDk0SqU0EoBJjOioqV76bTiBR9os9zmigLfTZR9z2RbQAFWKgFv7LraEdIxkB2E3S7QvTmiuI213fha6clIUcZOsIRmdSrR2G3lSRqHT8cSnL1uYVpk-fxZV5lJaXLE/s1920/3.png" target="_blank" rel="noopener">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh-6_rZjdqiOof1TUzifGhSJbIthZpAthO2sQA0WNtWTBPDA7K10jwAB4vqKaPTGhDk0SqU0EoBJjOioqV76bTiBR9os9zmigLfTZR9z2RbQAFWKgFv7LraEdIxkB2E3S7QvTmiuI213fha6clIUcZOsIRmdSrR2G3lSRqHT8cSnL1uYVpk-fxZV5lJaXLE/s320-rw/3.png" alt="Imagem 3" loading="lazy">
        </a>
      </div>

      <div class="cms26-item">
        <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhqJRZl6kZUOdKPC66m6_KgoZtzYSOQox5kiWh9q8EPs3I1cLxJIiMX4xV1BMWTcjSUhuYRGQys4H_YGWBQFN6dN-aoCuTkmSrJHZ_JFkyAsn1MHZpLKzZj8DRnV466FFysUxPgA7ptB2V13oe3-FNjf70sVxUEbyrZMKoZCGJgnPxypVWia5fd-mmm5fTB/s1920/4.png" target="_blank" rel="noopener">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhqJRZl6kZUOdKPC66m6_KgoZtzYSOQox5kiWh9q8EPs3I1cLxJIiMX4xV1BMWTcjSUhuYRGQys4H_YGWBQFN6dN-aoCuTkmSrJHZ_JFkyAsn1MHZpLKzZj8DRnV466FFysUxPgA7ptB2V13oe3-FNjf70sVxUEbyrZMKoZCGJgnPxypVWia5fd-mmm5fTB/s320-rw/4.png" alt="Imagem 4" loading="lazy">
        </a>
      </div>

      <div class="cms26-item">
        <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjkvOQKDF_-VnpMOX0qERKLEqtks4NjoAlSS3zdMlyOLWpdpFO2GGx0fnCbAThHY_GldEf6W9UmrRxrfKaPpG84PtT6E8MnXcuMLpJH2avNIbR_3zwe47QQukDqkniwcGQpUP4eBbqRB4LqkDH07IV15C7KCXJZr-nUDJrQIj6ZC-nKDjF8pF9MyvWHtrjA/s1920/5.png" target="_blank" rel="noopener">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjkvOQKDF_-VnpMOX0qERKLEqtks4NjoAlSS3zdMlyOLWpdpFO2GGx0fnCbAThHY_GldEf6W9UmrRxrfKaPpG84PtT6E8MnXcuMLpJH2avNIbR_3zwe47QQukDqkniwcGQpUP4eBbqRB4LqkDH07IV15C7KCXJZr-nUDJrQIj6ZC-nKDjF8pF9MyvWHtrjA/s320-rw/5.png" alt="Imagem 5" loading="lazy">
        </a>
      </div>

      <div class="cms26-item">
        <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVxU68JgXag_eCdgptSaiTIQdwwWbJnlCCNlg3VVR_69up52vw7tr-dhyserXlA5q6tDTTUYO0VU4kUnN9Tfgt4nxcv3ut3oAhGJEsopNu_0-rjIQsySIlvskMStcWc_3cbQFQM1AFbV0lk9nvcvtjkZwbLul1zFFFAUX16juOowi1aj6WbqR_piSIf4De/s1920/6.png" target="_blank" rel="noopener">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjVxU68JgXag_eCdgptSaiTIQdwwWbJnlCCNlg3VVR_69up52vw7tr-dhyserXlA5q6tDTTUYO0VU4kUnN9Tfgt4nxcv3ut3oAhGJEsopNu_0-rjIQsySIlvskMStcWc_3cbQFQM1AFbV0lk9nvcvtjkZwbLul1zFFFAUX16juOowi1aj6WbqR_piSIf4De/s320-rw/6.png" alt="Imagem 6" loading="lazy">
        </a>
      </div>

      <div class="cms26-item">
        <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYOwyFMejpInprlgYxWU2J9Mn6jprQPQJnJuN4I8di3Eltq1SuOFkRYq1CdN00bQaaGbrYf2Xi5TF5NCkaprYd77KTehm2AXNfa7fmug0WRA9wQ15kOYfhXfGard2gIn_CAreQt3Mvgdvo705zCDJKn_7UtQXWwkgnyUWT33EyJ56Z7YzARoGxkQ9lFFql/s1920/7.png" target="_blank" rel="noopener">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjYOwyFMejpInprlgYxWU2J9Mn6jprQPQJnJuN4I8di3Eltq1SuOFkRYq1CdN00bQaaGbrYf2Xi5TF5NCkaprYd77KTehm2AXNfa7fmug0WRA9wQ15kOYfhXfGard2gIn_CAreQt3Mvgdvo705zCDJKn_7UtQXWwkgnyUWT33EyJ56Z7YzARoGxkQ9lFFql/s320-rw/7.png" alt="Imagem 7" loading="lazy">
        </a>
      </div>

      <div class="cms26-item">
        <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhFptGSTx8BtrG8RV5VCax0PF9F9hfIBHz-Db6aoYFs-yARAdhNJsC9BlApxhijyk6qItsMf7n1Styb2jVCmqxkvTILg-Cb9xJao9AZUeCRpInCcLpTDpzqu7haF85yKlXoECYXX9VuRfiFIsmZ_eKG8T2ClItrT6oxiTnVPuE93ENksxD87gAcDYLjBG8v/s1920/8.png" target="_blank" rel="noopener">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhFptGSTx8BtrG8RV5VCax0PF9F9hfIBHz-Db6aoYFs-yARAdhNJsC9BlApxhijyk6qItsMf7n1Styb2jVCmqxkvTILg-Cb9xJao9AZUeCRpInCcLpTDpzqu7haF85yKlXoECYXX9VuRfiFIsmZ_eKG8T2ClItrT6oxiTnVPuE93ENksxD87gAcDYLjBG8v/s320-rw/8.png" alt="Imagem 8" loading="lazy">
        </a>
      </div>

      <div class="cms26-item">
        <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRXioBWv-kGOE9FInfbtbl8XYZZIDu0MDU0nRgjNVoiGUCK5YWqgTxCrSMaOyoKJq0nNKY8n69wIkn8kZUDs0VM1QIwePiVV0xQAEx81XuoLuUS48iPLEIZlv6TvPuJsCSq84Pqu6zYXdHmPV4dPrBHygTv0vWE-gAtuqnKIW6PQKkWz02vh7DCzMgvAiG/s1920/9.png" target="_blank" rel="noopener">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhRXioBWv-kGOE9FInfbtbl8XYZZIDu0MDU0nRgjNVoiGUCK5YWqgTxCrSMaOyoKJq0nNKY8n69wIkn8kZUDs0VM1QIwePiVV0xQAEx81XuoLuUS48iPLEIZlv6TvPuJsCSq84Pqu6zYXdHmPV4dPrBHygTv0vWE-gAtuqnKIW6PQKkWz02vh7DCzMgvAiG/s320-rw/9.png" alt="Imagem 9" loading="lazy">
        </a>
      </div>

      <div class="cms26-item">
        <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgu1LDYcb6k9Hquhsav8xuMkpbsT-6QwmyHdTw0Tiknqc3bOEfWutZLPS6mShCBRGoY7S9cMnWsNhp2y7kxRi3VQgLzUbGNKBWBxgTXWwUXZ0YYlC-ZtEOq-UqvnKm33jWXoRB5w83CQ8qqtphg998xTYymZxWUBA8sJ53pAlBDcg-UtXsAn4dcwFN1Yzrw/s1920/10.png" target="_blank" rel="noopener">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgu1LDYcb6k9Hquhsav8xuMkpbsT-6QwmyHdTw0Tiknqc3bOEfWutZLPS6mShCBRGoY7S9cMnWsNhp2y7kxRi3VQgLzUbGNKBWBxgTXWwUXZ0YYlC-ZtEOq-UqvnKm33jWXoRB5w83CQ8qqtphg998xTYymZxWUBA8sJ53pAlBDcg-UtXsAn4dcwFN1Yzrw/s320-rw/10.png" alt="Imagem 10" loading="lazy">
        </a>
      </div>

      <div class="cms26-item">
        <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEinn9ToqBqLyvnXMevxOJat6oxMxsw2UViCdEN3cy9ZrwEbPk_eMPYpmsWiyTCCC06m-yh10uU5EjLgfnBmjLm6MbnYEvwqJH3l-xKXH2mTV058r836-jko9jaNxacC2n3KUpITRhrnEvuDPsx0bjlxm4eGygkUW4xR4BoSnKoIDz0XcCInnA0PxVrOP8sy/s1920/11.png" target="_blank" rel="noopener">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEinn9ToqBqLyvnXMevxOJat6oxMxsw2UViCdEN3cy9ZrwEbPk_eMPYpmsWiyTCCC06m-yh10uU5EjLgfnBmjLm6MbnYEvwqJH3l-xKXH2mTV058r836-jko9jaNxacC2n3KUpITRhrnEvuDPsx0bjlxm4eGygkUW4xR4BoSnKoIDz0XcCInnA0PxVrOP8sy/s320-rw/11.png" alt="Imagem 11" loading="lazy">
        </a>
      </div>

      <div class="cms26-item">
        <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXQq3znv0q1egwdqRR93p_mPTctYps0kfLGjvNs3OUijJmzgDdI-KAfPKmYHEvzf3RQzK_UC2EYqU4GhEaHGUIvu3167qKWKYozrOymHXx_Rk78eVvW4G_pPqXV782tKb98ch94mcPI8mIBNihnq2Im0SmsHiZGyetTVeajyCLUnG0cJBNSPyD4LJzwNDz/s1920/12.png" target="_blank" rel="noopener">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiXQq3znv0q1egwdqRR93p_mPTctYps0kfLGjvNs3OUijJmzgDdI-KAfPKmYHEvzf3RQzK_UC2EYqU4GhEaHGUIvu3167qKWKYozrOymHXx_Rk78eVvW4G_pPqXV782tKb98ch94mcPI8mIBNihnq2Im0SmsHiZGyetTVeajyCLUnG0cJBNSPyD4LJzwNDz/s320-rw/12.png" alt="Imagem 12" loading="lazy">
        </a>
      </div>

      <div class="cms26-item">
        <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgsQFS5uGRPiqZQRsOSxZLqK_OVqA-yKXSA0QzwJ7484C3CacMXAjb-U57vvtUudmafVo6BHx0LuLHcoJQ7Gl3rWbnrwkY0OKnvpHM2EFgOlDZ3M3dtI8Nj67belIXNU34pC4pt5NdK4nG_kQh8ICSDg5gLOF-6eTnafHW7IdG40Rg7HrzVGt1sRB1NIUW-/s1920/13.png" target="_blank" rel="noopener">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgsQFS5uGRPiqZQRsOSxZLqK_OVqA-yKXSA0QzwJ7484C3CacMXAjb-U57vvtUudmafVo6BHx0LuLHcoJQ7Gl3rWbnrwkY0OKnvpHM2EFgOlDZ3M3dtI8Nj67belIXNU34pC4pt5NdK4nG_kQh8ICSDg5gLOF-6eTnafHW7IdG40Rg7HrzVGt1sRB1NIUW-/s320-rw/13.png" alt="Imagem 13" loading="lazy">
        </a>
      </div>

      <div class="cms26-item">
        <a href="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj1V501J-inyIVUwUkK7neFTl8Jeg66R5vwna_UVL25Wzght8jx7PJVQgf6AdMOq6Kh4_CeoVzipXWzP2GdFdKkl9txL5fr6J3rvIoqzj3Q0eL6lk_Sl6fqVVAsQCA5ueRvnH_mhLJ2cNGLmsMXxfibnnqKs7KyAuBgNgUXDVGkRtrwUSsPjJ21ca3ASYBh/s1920/14.png" target="_blank" rel="noopener">
          <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj1V501J-inyIVUwUkK7neFTl8Jeg66R5vwna_UVL25Wzght8jx7PJVQgf6AdMOq6Kh4_CeoVzipXWzP2GdFdKkl9txL5fr6J3rvIoqzj3Q0eL6lk_Sl6fqVVAsQCA5ueRvnH_mhLJ2cNGLmsMXxfibnnqKs7KyAuBgNgUXDVGkRtrwUSsPjJ21ca3ASYBh/s320-rw/14.png" alt="Imagem 14" loading="lazy">
        </a>
      </div>

    </div>
  </div>

  <button class="cms26-seta cms26-seta-anterior"
          type="button"
          aria-label="Ver imagens anteriores">&#8249;</button>

  <button class="cms26-seta cms26-seta-proxima"
          type="button"
          aria-label="Ver próximas imagens">&#8250;</button>

  <div class="cms26-pontos" aria-label="Navegação do carrossel"></div>

  <script>
    (function () {
      'use strict';

      var raiz = document.getElementById('cms-carrossel-isolado-2026');

      if (!raiz || raiz.getAttribute('data-cms26-iniciado') === 'sim') {
        return;
      }

      var faixa = raiz.querySelector('.cms26-faixa');
      var janela = raiz.querySelector('.cms26-janela');
      var itens = Array.prototype.slice.call(
        raiz.querySelectorAll('.cms26-item')
      );
      var anterior = raiz.querySelector('.cms26-seta-anterior');
      var proxima = raiz.querySelector('.cms26-seta-proxima');
      var pontos = raiz.querySelector('.cms26-pontos');

      if (!faixa || !janela || !itens.length || !anterior || !proxima || !pontos) {
        return;
      }

      raiz.setAttribute('data-cms26-iniciado', 'sim');

      var paginaAtual = 0;
      var porPagina = 5;
      var temporizadorRedimensionamento = null;

      function obterQuantidadeVisivel() {
        var largura = janela.clientWidth;

        if (largura <= 300) return 1;
        if (window.matchMedia('(max-width: 360px)').matches) return 1;
        if (window.matchMedia('(max-width: 600px)').matches) return 2;
        if (window.matchMedia('(max-width: 900px)').matches) return 3;

        return 5;
      }

      function obterTotalPaginas() {
        return Math.max(1, Math.ceil(itens.length / porPagina));
      }

      function obterIntervalo() {
        if (!itens.length) return 0;

        var larguraItem = itens[0].getBoundingClientRect().width;
        var estilos = window.getComputedStyle(faixa);
        var espaco = parseFloat(estilos.columnGap || estilos.gap) || 0;

        return larguraItem + espaco;
      }

      function desenharPontos(totalPaginas) {
        pontos.innerHTML = '';

        for (var i = 0; i < totalPaginas; i++) {
          (function (numero) {
            var ponto = document.createElement('button');

            ponto.type = 'button';
            ponto.className = 'cms26-ponto';
            ponto.setAttribute('aria-label', 'Ir para o grupo ' + (numero + 1));

            if (numero === paginaAtual) {
              ponto.classList.add('cms26-ativo');
              ponto.setAttribute('aria-current', 'true');
            }

            ponto.addEventListener('click', function () {
              paginaAtual = numero;
              atualizar(false);
            });

            pontos.appendChild(ponto);
          })(i);
        }
      }

      function atualizar(recalcularQuantidade) {
        if (recalcularQuantidade !== false) {
          porPagina = obterQuantidadeVisivel();
        }

        var totalPaginas = obterTotalPaginas();

        paginaAtual = ((paginaAtual % totalPaginas) + totalPaginas) % totalPaginas;

        /*
         * A última página é alinhada à extremidade final da faixa,
         * evitando deixar um espaço vazio no lado direito.
         */
        var inicio = paginaAtual * porPagina;
        var maximoInicio = Math.max(0, itens.length - porPagina);

        if (inicio > maximoInicio) {
          inicio = maximoInicio;
        }

        var deslocamento = inicio * obterIntervalo();

        faixa.style.transform = 'translateX(-' + deslocamento + 'px)';

        desenharPontos(totalPaginas);
      }

      anterior.addEventListener('click', function () {
        porPagina = obterQuantidadeVisivel();
        var total = obterTotalPaginas();

        paginaAtual = (paginaAtual - 1 + total) % total;
        atualizar(false);
      });

      proxima.addEventListener('click', function () {
        porPagina = obterQuantidadeVisivel();
        var total = obterTotalPaginas();

        paginaAtual = (paginaAtual + 1) % total;
        atualizar(false);
      });

      window.addEventListener('resize', function () {
        if (temporizadorRedimensionamento) {
          window.clearTimeout(temporizadorRedimensionamento);
        }

        temporizadorRedimensionamento = window.setTimeout(function () {
          atualizar(true);
        }, 120);
      });

      atualizar(true);
    })();
  </script>

</div>
