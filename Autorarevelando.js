
(function () {
  'use strict';

  if (document.getElementById('cms-caixa-destaque-2026')) return;

  const css = `
    .cms-caixa-destaque {
      width: 90%;
      max-width: 1100px;
      margin: 25px auto;
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
      width: 30%;
      background: #f5eee6;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .cms-caixa-foto img {
      width: 100%;
      height: 100%;
      min-height: 220px;
      object-fit: cover;
      display: block;
      margin: 0 0 0 30px;
      border-radius: 10%;
    }

    .cms-caixa-texto {
      width: 70%;
      padding: 25px 30px;
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
      font-size: 15px;
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
        margin: 0;
      }

      .cms-caixa-texto {
        padding: 20px;
      }
    }
  `;

  const html = `
    <div id="cms-caixa-destaque-2026"
         class="cms-caixa-destaque">

      <div class="cms-caixa-foto">
        <img
          src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgM0BkKD41lO68lp6thpK4FXOaUfoGrLaIl3S2jPhogZWtIajxHCuhwCzV0Ij0kWQAeMl-v5uROXZirbav0wTI2a2dtpmPeme9dPDok07ID8NpdmaAbdMM5pQNiHdFSGLv09xjGbVPwuNLudTuTWtrjSupP3o4IOsdgYvJIcW9tnLwF39DyTFDnTLx8Lmqy/s634/MidianLima%20-%20Copia%20%283%29%20-%20Copia.png"
          alt="Fotografia de Midian Lima"
        >
      </div>

      <div class="cms-caixa-texto">

        <p style="font-size: 1.8em; line-height: 0.8em; font-weight: normal; color: #80634c;">
          Idealizadora e Construção
        </p>

        <p style="font-family: 'Cookie', cursive; font-size: 1.8em; line-height: 1em; font-weight: normal; color: #80634c;">
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

  const style = document.createElement('style');
  style.id = 'cms-caixa-destaque-css';
  style.textContent = css;
  document.head.appendChild(style);

  const scriptAtual = document.currentScript;

  if (scriptAtual) {
    scriptAtual.insertAdjacentHTML('afterend', html);
  } else {
    document.body.insertAdjacentHTML('beforeend', html);
  }

})();
