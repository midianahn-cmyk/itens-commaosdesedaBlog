
(function () {
  'use strict';

  // Evita instalação duplicada
  if (document.getElementById('cms-caixa-autora-2026')) return;

  const css = `
    .cms-caixa-destaque {
      width: 95%;
      max-width: 95%;
      margin: 10px auto;
      display: flex;
      align-items: stretch;
      background: #f5eee6;
      border: 1px solid #ddcbb5;
      border-radius: 14px;
      overflow: hidden;
      box-sizing: border-box;
      color: #594638;
      font-family: Arial, sans-serif;
    }

    .cms-caixa-foto {
      width: 25%;
      background: #f5eee6;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .cms-caixa-foto img {
      width: 50%;
      height: 50%;
      min-height: auto;
      object-fit: cover;
      display: block;
      margin: 10px auto;
      border-radius: 10%;
    }

    .cms-caixa-texto {
      width: 75%;
      padding: 25px 0;
      box-sizing: border-box;
      background: #f5eee6;
    }

    .cms-caixa-texto h2 {
      color: #80634c;
      margin: 0 0 14px;
      font-size: 23px;
    }

    .cms-caixa-texto p {
      color: #594638;
      font-size: 12px;
      line-height: 1.7;
      margin: 0 0 12px;
    }

    @media (max-width: 600px) {
      .cms-caixa-destaque {
        flex-direction: column;
        width: 94%;
      }

      .cms-caixa-foto,
      .cms-caixa-texto {
        width: 100%;
      }

      .cms-caixa-foto img {
        height: 230px;
        min-height: 0;
      }

      .cms-caixa-texto {
        padding: 20px;
      }
    }
  `;

  const html = `
    <div class="cms-caixa-destaque">

      <div class="cms-caixa-foto">
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgM0BkKD41lO68lp6thpK4FXOaUfoGrLaIl3S2jPhogZWtIajxHCuhwCzV0Ij0kWQAeMl-v5uROXZirbav0wTI2a2dtpmPeme9dPDok07ID8NpdmaAbdMM5pQNiHdFSGLv09xjGbVPwuNLudTuTWtrjSupP3o4IOsdgYvJIcW9tnLwF39DyTFDnTLx8Lmqy/s634/MidianLima%20-%20Copia%20%283%29%20-%20Copia.png"
          alt="Fotografia"
          loading="eager"
          decoding="async"
        >
      </div>

      <div class="cms-caixa-texto">

        <p style="font-size: 0.8em; line-height: 0.8em; font-weight: normal; color: #80634c;">
          <b>Idealizadora e Construtora</b>
        </p>

        <p style="font-family: 'Cookie', cursive; font-size: 2em; line-height: 1em; font-weight: normal; color: #80634c;">
          Midian.L.S.Ferreira
        </p>

        <p>
          Sou Midian, idealizadora do Com Mãos de Seda – Revelando Talentos. Criei este projeto com muito carinho para acolher, valorizar e dar visibilidade a blogueiras(os), influenciadoras(os), artesãs(os) e empreendedoras(es).
        </p>

        <p>
          Acredito que cada pessoa tem uma história e um talento que merecem ser conhecidos. Por isso, quero oferecer um espaço onde possamos compartilhar trabalhos, criar conexões e crescer juntas! ❤️
        </p>

      </div>
    </div>
  `;

  // Insere o CSS
  const style = document.createElement('style');
  style.id = 'cms-caixa-autora-css';
  style.textContent = css;
  document.head.appendChild(style);

  // Insere o HTML no local do instalador
  const scriptAtual = document.currentScript;

  if (scriptAtual && scriptAtual.parentNode) {
    scriptAtual.insertAdjacentHTML('afterend', html);
  } else {
    document.body.insertAdjacentHTML('beforeend', html);
  }

})();
