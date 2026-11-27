
/*
 * Criado por: Com Mãos de Seda
 * Globo histórico de visitantes - © 2026
 * https://www.commaosdesedaoficial.com
 * Arquivo externo autocontido para Blogger.
 */ 
(function () {
  'use strict';

  if (window.__cmslGloboVisitantesCarregado) return;
  window.__cmslGloboVisitantesCarregado = true;

  var scriptAtual = document.currentScript;
  var raiz = document.getElementById('cmsl-globo-historico');

  if (!raiz) {
    var estrutura = '<div id="cmsl-globo-historico">\n\n  <div id="cmsl-globo-agradecimento">\n    <span class="cmsl-globo-agradecimento-linha">\n      ✨ Obrigado aos mais de\n    </span>\n\n    <strong id="cmsl-globo-total">Carregando...</strong>\n\n    <span class="cmsl-globo-agradecimento-linha">\n      🌎 Visitantes em nosso atelier pelo mundo, desde de nossa Fundação!\n    </span>\n  </div>\n\n  <div id="cmsl-globo-container"></div>\n\n  <div id="cmsl-globo-atualizacao"></div>\n\n  <div id="cmsl-globo-detalhe">\n    <span class="cmsl-globo-pulso"></span>\n    Atualizada a cada segundo\n    <br/>Explore o globo para descobrir os acessos.\n  </div>\n\n</div>';

    var modelo = document.createElement('div');
    modelo.innerHTML = estrutura;
    raiz = modelo.firstElementChild;

    if (scriptAtual && scriptAtual.parentNode && scriptAtual.parentNode !== document.head) {
      scriptAtual.parentNode.insertBefore(raiz, scriptAtual.nextSibling);
    } else {
      (document.body || document.documentElement).appendChild(raiz);
    }
  }

  var estilo = document.createElement('style');
  estilo.id = 'cmsl-globo-visitantes-estilo';
  estilo.textContent = '#cmsl-globo-historico {\n  width: 100%;\n  max-width: 850px;\n  margin: 20px auto;\n  position: relative;\n  background: transparent;\n  color: #fff;\n  font-family: Arial, sans-serif;\n  text-align: center;\n  overflow: hidden;\n  box-sizing: border-box;\n}\n\n#cmsl-globo-historico *,\n#cmsl-globo-historico *::before,\n#cmsl-globo-historico *::after {\n  box-sizing: border-box;\n}\n\n/* AGRADECIMENTO */\n\n#cmsl-globo-historico #cmsl-globo-agradecimento {\n  width: calc(100% - 20px);\n  max-width: 700px;\n  margin: 0 auto 12px;\n  padding: 17px 13px;\n  border: 1px solid rgba(53,223,255,.35);\n  border-radius: 14px;\n  background: rgba(9,28,49,.82);\n  color: #fff;\n  box-shadow: 0 0 15px rgba(53,223,255,.12);\n  line-height: 1.6;\n}\n\n#cmsl-globo-historico .cmsl-globo-agradecimento-linha {\n  display: block;\n  color: #d9f5ff;\n  font-size: 14px;\n  font-weight: 600;\n}\n\n#cmsl-globo-historico #cmsl-globo-total {\n  display: block;\n  margin: 5px 0;\n  color: #38dfff;\n  font-size: clamp(29px, 5vw, 40px);\n  line-height: 1.2;\n  font-weight: 800;\n  text-shadow: 0 0 13px rgba(53,223,255,.45);\n  overflow-wrap: anywhere;\n  font-family: Cookie, serif; serif;\n}\n\n/* CABEÇALHO */\n\n#cmsl-globo-historico #cmsl-globo-info {\n  position: relative;\n  z-index: 2;\n  padding: 12px 8px 0;\n  pointer-events: none;\n}\n\n#cmsl-globo-historico .cmsl-globo-titulo {\n  display: block;\n  color: #38dfff;\n  font-size: 21px;\n  font-weight: bold;\n  text-shadow: 0 0 12px rgba(53,223,255,.45);\n}\n\n#cmsl-globo-historico .cmsl-globo-subtitulo {\n  display: block;\n  margin-top: 6px;\n  color: #8caec8;\n  font-size: 12px;\n}\n\n/* GLOBO */\n\n#cmsl-globo-historico #cmsl-globo-container {\n  width: 100%;\n  height: 480px;\n  position: relative;\n  background: transparent;\n}\n\n/* CORAÇÃO DOS VISITANTES ONLINE */\n\n#cmsl-globo-historico .cmsl-globo-coracao {\n  position: relative;\n  display: block;\n  width: 19px;\n  height: 19px;\n  background: #ff1744;\n  transform: rotate(-45deg);\n  transform-origin: center;\n  animation: cmslGloboCoracao 1s ease-in-out infinite;\n  filter: drop-shadow(0 0 5px rgba(255,23,68,.95))\n          drop-shadow(0 0 10px rgba(255,23,68,.65));\n  pointer-events: auto;\n  cursor: pointer;\n}\n\n#cmsl-globo-historico .cmsl-globo-coracao::before,\n#cmsl-globo-historico .cmsl-globo-coracao::after {\n  content: \"\";\n  position: absolute;\n  width: 19px;\n  height: 19px;\n  background: #ff1744;\n  border-radius: 50%;\n}\n\n#cmsl-globo-historico .cmsl-globo-coracao::before {\n  top: -9.5px;\n  left: 0;\n}\n\n#cmsl-globo-historico .cmsl-globo-coracao::after {\n  top: 0;\n  left: 9.5px;\n}\n\n@keyframes cmslGloboCoracao {\n  0%, 100% {\n    transform: rotate(-45deg) scale(1);\n    filter: drop-shadow(0 0 5px rgba(255,23,68,.95))\n            drop-shadow(0 0 10px rgba(255,23,68,.65));\n  }\n\n  50% {\n    transform: rotate(-45deg) scale(1.3);\n    filter: drop-shadow(0 0 8px rgba(255,23,68,1))\n            drop-shadow(0 0 16px rgba(255,23,68,.9));\n  }\n}\n\n/* NOTIFICAÇÃO */\n\n#cmsl-globo-historico #cmsl-globo-atualizacao {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 7px;\n  margin: 10px auto 12px;\n  color: #8caec8;\n  font-size: 11px;\n  letter-spacing: .3px;\n}\n\n/* PONTINHO VERDE ORIGINAL */\n\n#cmsl-globo-historico .cmsl-globo-pulso {\n  display: inline-block;\n  width: 7px;\n  height: 7px;\n  flex: 0 0 7px;\n  border-radius: 50%;\n  background: #35e6a0;\n  box-shadow: 0 0 8px rgba(53,230,160,.8);\n  animation: cmslGloboPulso 1s infinite;\n}\n\n@keyframes cmslGloboPulso {\n  0%, 100% {\n    opacity: 1;\n    transform: scale(1);\n  }\n\n  50% {\n    opacity: .4;\n    transform: scale(.75);\n  }\n}\n\n/* DETALHES */\n\n#cmsl-globo-historico #cmsl-globo-detalhe {\n  position: relative;\n  z-index: 2;\n  display: inline-block;\n  max-width: 90%;\n  margin: 0 auto 12px;\n  padding: 9px 15px;\n  border: 1px solid rgba(53,223,255,.35);\n  border-radius: 20px;\n  background: rgba(9,28,49,.82);\n  color: #c7efff;\n  font-size: 12px;\n  box-shadow: 0 0 15px rgba(53,223,255,.12);\n}\n\n/* CELULAR */\n\n@media (max-width: 600px) {\n  #cmsl-globo-historico #cmsl-globo-container {\n    height: 350px;\n  }\n\n  #cmsl-globo-historico .cmsl-globo-titulo {\n    font-size: 18px;\n  }\n\n  #cmsl-globo-historico #cmsl-globo-agradecimento {\n    padding: 14px 10px;\n  }\n\n  #cmsl-globo-historico .cmsl-globo-agradecimento-linha {\n    font-size: 13px;\n  }\n\n  #cmsl-globo-historico .cmsl-globo-coracao {\n    transform: rotate(-45deg) scale(.85);\n  }\n}';

  (document.head || document.documentElement).appendChild(estilo);

  if (raiz.dataset.cmslVisitantesInicializado === 'sim') return;
  raiz.dataset.cmslVisitantesInicializado = 'sim';

  (function () {
    'use strict';

    const container = raiz.querySelector('#cmsl-globo-container');
    const detalhe = raiz.querySelector('#cmsl-globo-detalhe');

    if (!container || container.dataset.cmslIniciado === 'sim') return;
    container.dataset.cmslIniciado = 'sim';

    function formatar(numero) {
      return numero.toLocaleString('pt-BR');
    }

    /*
     * PAÍSES HISTÓRICOS
     */

    const paises = [
      { pais: 'Estados Unidos', visitas: 1060000, lat: 39.8, lng: -98.6 },
      { pais: 'Portugal', visitas: 248000, lat: 39.5, lng: -8.0 },
      { pais: 'Alemanha', visitas: 38500, lat: 51.2, lng: 10.4 },
      { pais: 'Irã', visitas: 33000, lat: 32.4, lng: 53.7 },
      { pais: 'Rússia', visitas: 25800, lat: 61.5, lng: 105.3 },
      { pais: 'Itália', visitas: 24400, lat: 41.9, lng: 12.5 },
      { pais: 'França', visitas: 23800, lat: 46.2, lng: 2.2 },
      { pais: 'Países Baixos', visitas: 19900, lat: 52.1, lng: 5.3 },
      { pais: 'Canadá', visitas: 14100, lat: 56.1, lng: -106.3 },
      { pais: 'China', visitas: 11600, lat: 35.9, lng: 104.2 },
      { pais: 'Espanha', visitas: 11000, lat: 40.4, lng: -3.7 },
      { pais: 'Tchéquia', visitas: 8180, lat: 49.8, lng: 15.5 },
      { pais: 'Singapura', visitas: 7540, lat: 1.35, lng: 103.8 },
      { pais: 'Ucrânia', visitas: 7070, lat: 48.4, lng: 31.2 },
      { pais: 'Reino Unido', visitas: 6720, lat: 55.3, lng: -3.4 },
      { pais: 'Israel', visitas: 5760, lat: 31.0, lng: 34.8 },
      { pais: 'Suécia', visitas: 4560, lat: 60.1, lng: 18.6 },
      { pais: 'Outros países', visitas: 194000, lat: 0, lng: 0 }
    ];

    /*
     * ESTADOS BRASILEIROS
     * Estimativas ilustrativas proporcionais à população.
     */

    const estados = [
      { pais: 'São Paulo', visitas: 113142, lat: -23.55, lng: -46.63 },
      { pais: 'Minas Gerais', visitas: 52526, lat: -19.92, lng: -43.94 },
      { pais: 'Rio de Janeiro', visitas: 42288, lat: -22.91, lng: -43.20 },
      { pais: 'Bahia', visitas: 36512, lat: -12.97, lng: -38.50 },
      { pais: 'Paraná', visitas: 29194, lat: -25.43, lng: -49.27 },
      { pais: 'Rio Grande do Sul', visitas: 27580, lat: -30.03, lng: -51.23 },
      { pais: 'Pernambuco', visitas: 23477, lat: -8.05, lng: -34.90 },
      { pais: 'Ceará', visitas: 22757, lat: -3.73, lng: -38.52 },
      { pais: 'Pará', visitas: 21388, lat: -1.45, lng: -48.49 },
      { pais: 'Santa Catarina', visitas: 20101, lat: -27.59, lng: -48.55 },
      { pais: 'Goiás', visitas: 18227, lat: -16.68, lng: -49.25 },
      { pais: 'Maranhão', visitas: 17231, lat: -2.53, lng: -44.30 },
      { pais: 'Amazonas', visitas: 10611, lat: -3.10, lng: -60.02 },
      { pais: 'Espírito Santo', visitas: 10132, lat: -20.32, lng: -40.34 },
      { pais: 'Paraíba', visitas: 10225, lat: -7.12, lng: -34.86 },
      { pais: 'Mato Grosso', visitas: 9560, lat: -15.60, lng: -56.10 },
      { pais: 'Rio Grande do Norte', visitas: 8483, lat: -5.79, lng: -35.21 },
      { pais: 'Piauí', visitas: 8310, lat: -5.09, lng: -42.80 },
      { pais: 'Alagoas', visitas: 7908, lat: -9.67, lng: -35.74 },
      { pais: 'Distrito Federal', visitas: 7358, lat: -15.79, lng: -47.88 },
      { pais: 'Mato Grosso do Sul', visitas: 7181, lat: -20.45, lng: -54.62 },
      { pais: 'Sergipe', visitas: 5646, lat: -10.91, lng: -37.07 },
      { pais: 'Rondônia', visitas: 4301, lat: -8.76, lng: -63.90 },
      { pais: 'Tocantins', visitas: 3896, lat: -10.18, lng: -48.33 },
      { pais: 'Acre', visitas: 2171, lat: -9.97, lng: -67.81 },
      { pais: 'Amapá', visitas: 1980, lat: 0.03, lng: -51.05 },
      { pais: 'Roraima', visitas: 1815, lat: 2.82, lng: -60.67 }
    ];

    estados.forEach(function (estado) {
      estado.tipo = 'estado';
    });

    const dados = paises.concat(estados);

    /*
     * CORES DOS MARCADORES HISTÓRICOS
     */

    function corDoPonto(d) {
      if (d.tipo === 'estado') return '#FFD166';
      if (d.visitas >= 200000) return '#FFD166';
      if (d.visitas >= 50000) return '#35E6FF';
      if (d.visitas >= 10000) return '#65B9FF';
      return '#B5E8FF';
    }

    /*
     * COORDENADAS DAS CIDADES
     */

    const coordenadasCidades = {
      'mage': [-22.65, -43.04],
      'magé': [-22.65, -43.04],
      'duque de caxias': [-22.79, -43.31],
      'rio de janeiro': [-22.91, -43.20],
      'são paulo': [-23.55, -46.63],
      'sao paulo': [-23.55, -46.63],
      'belo horizonte': [-19.92, -43.94],
      'brasília': [-15.79, -47.88],
      'brasilia': [-15.79, -47.88],
      'curitiba': [-25.43, -49.27],
      'porto alegre': [-30.03, -51.23],
      'salvador': [-12.97, -38.50],
      'recife': [-8.05, -34.90],
      'fortaleza': [-3.73, -38.52],
      'manaus': [-3.10, -60.02],
      'belém': [-1.45, -48.49],
      'belem': [-1.45, -48.49],
      'goiânia': [-16.68, -49.25],
      'goiania': [-16.68, -49.25],
      'niterói': [-22.88, -43.10],
      'niteroi': [-22.88, -43.10],
      'nova iguaçu': [-22.76, -43.45],
      'nova iguacu': [-22.76, -43.45],
      'petrópolis': [-22.51, -43.18],
      'petropolis': [-22.51, -43.18]
    };

    /*
     * COORDENADAS DE PAÍSES
     */

    const coordenadasPaises = {
      'brazil': [-14.2, -51.9],
      'brasil': [-14.2, -51.9],
      'united states': [39.8, -98.6],
      'estados unidos': [39.8, -98.6],
      'portugal': [39.5, -8.0],
      'germany': [51.2, 10.4],
      'alemanha': [51.2, 10.4],
      'france': [46.2, 2.2],
      'frança': [46.2, 2.2],
      'italy': [41.9, 12.5],
      'itália': [41.9, 12.5],
      'canada': [56.1, -106.3],
      'canadá': [56.1, -106.3],
      'spain': [40.4, -3.7],
      'espanha': [40.4, -3.7],
      'united kingdom': [55.3, -3.4],
      'reino unido': [55.3, -3.4],
      'netherlands': [52.1, 5.3],
      'países baixos': [52.1, 5.3],
      'china': [35.9, 104.2],
      'russia': [61.5, 105.3],
      'rússia': [61.5, 105.3],
      'sweden': [60.1, 18.6],
      'suécia': [60.1, 18.6],
      'israel': [31.0, 34.8],
      'ukraine': [48.4, 31.2],
      'ucrânia': [48.4, 31.2],
      'iran': [32.4, 53.7],
      'irã': [32.4, 53.7],
      'singapore': [1.35, 103.8],
      'singapura': [1.35, 103.8],
      'czechia': [49.8, 15.5],
      'tchéquia': [49.8, 15.5]
    };

    function normalizar(texto) {
      return String(texto || '')
        .trim()
        .toLocaleLowerCase('pt-BR');
    }

    function obterCoordenadas(local) {
      const cidade = normalizar(local.cidade);
      const pais = normalizar(local.pais);

      if (cidade && coordenadasCidades[cidade]) {
        return coordenadasCidades[cidade];
      }

      if (pais && coordenadasPaises[pais]) {
        return coordenadasPaises[pais];
      }

      return null;
    }

    /*
     * MARCADORES DOS VISITANTES ONLINE
     */

    let globoAtivo = null;

    function criarMarcadoresOnline(resposta) {
      if (!globoAtivo || !resposta || !Array.isArray(resposta.localizacoes)) {
        return;
      }

      const marcadores = [];

      resposta.localizacoes.forEach(function (local) {
        const quantidade = Number(local.visitantes || 0);

        if (quantidade <= 0) return;

        const coordenadas = obterCoordenadas(local);

        if (!coordenadas) {
          console.warn(
            'Com Mãos de Seda - cidade sem coordenadas cadastradas:',
            local.cidade,
            local.pais
          );
          return;
        }

        marcadores.push({
          lat: coordenadas[0],
          lng: coordenadas[1],
          cidade: local.cidade || 'Cidade não identificada',
          pais: local.pais || '',
          visitantes: quantidade,
          visualizacoes: Number(local.visualizacoes || 0),
          eventos: Number(local.eventos || 0)
        });
      });

      globoAtivo.htmlElementsData(marcadores);
    }

    /*
     * CONSULTA ONLINE AO GA4
     * Atualização a cada 20 segundos.
     */

    const endpoint =
      'https://script.google.com/macros/s/AKfycbzfk2QYtkxrtt4UldiaGGMfrfYZljnD-CNulZjbWtYhOIgaMwiOqOwfI0YDxOS6-_LoSw/exec';

    let consultaOnlineEmAndamento = false;

    window.cmslReceberOnline = function (resposta) {
      consultaOnlineEmAndamento = false;

      if (!resposta || !resposta.sucesso) {
        console.warn('Com Mãos de Seda - resposta online inválida:', resposta);
        return;
      }

      criarMarcadoresOnline(resposta);
    };

    function consultarOnline() {
      if (consultaOnlineEmAndamento) return;

      consultaOnlineEmAndamento = true;

      const script = document.createElement('script');

      script.src = endpoint +
        '?acao=online&callback=cmslReceberOnline&_=' + Date.now();

      script.onerror = function () {
        consultaOnlineEmAndamento = false;
        console.warn('Com Mãos de Seda - não foi possível consultar visitantes online.');
      };

      script.onload = function () {
        script.remove();
      };

      document.head.appendChild(script);
    }

    /*
     * CARREGAMENTO DO GLOBE.GL
     */

    function carregarGlobe() {
      return new Promise(function (resolve, reject) {

        if (typeof window.Globe === 'function') {
          resolve();
          return;
        }

        const script = document.createElement('script');

        script.src = 'https://unpkg.com/globe.gl';
        script.async = true;

        script.onload = function () {
          if (typeof window.Globe === 'function') {
            resolve();
          } else {
            reject(new Error('Globe.gl foi carregado, mas não inicializou.'));
          }
        };

        script.onerror = function () {
          reject(new Error('Não foi possível carregar a biblioteca Globe.gl.'));
        };

        document.head.appendChild(script);
      });
    }

    /*
     * INICIALIZAÇÃO DO GLOBO
     */

    function iniciarGlobo() {
      if (typeof window.Globe !== 'function') {
        throw new Error('Biblioteca do globo não encontrada.');
      }

      const globo = window.Globe()(container)

        .backgroundColor('rgba(0,0,0,0)')

        .globeImageUrl(
          'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
        )

        .showAtmosphere(true)
        .atmosphereColor('#54DFFF')
        .atmosphereAltitude(0.18)

        .pointsData(dados)
        .pointLat('lat')
        .pointLng('lng')

        .pointRadius(function (d) {
          return 0.12 +
            Math.log10(Math.max(1, d.visitas)) * 0.025;
        })

        .pointAltitude(function (d) {
          return 0.08 +
            Math.log10(Math.max(1, d.visitas)) * 0.012;
        })

        .pointColor(corDoPonto)
        .pointResolution(16)

        .ringsData(dados)
        .ringLat('lat')
        .ringLng('lng')

        .ringColor(function (d) {
          return function () {
            return corDoPonto(d);
          };
        })

        .ringMaxRadius(2.5)
        .ringPropagationSpeed(1)
        .ringRepeatPeriod(1800)

        .pointLabel(function (d) {
          const observacao = d.tipo === 'estado'
            ? '<div style="margin-top:6px;color:#FFD166;font-size:11px;">Estimativa ilustrativa por população</div>'
            : '';

          return `
            <div style="
              background:rgba(8,22,42,.96);
              color:#fff;
              padding:12px 16px;
              border:1px solid ${corDoPonto(d)};
              border-radius:10px;
              font-family:Arial,sans-serif;
              box-shadow:0 0 18px rgba(53,223,255,.4);
            ">
              <strong style="color:${corDoPonto(d)};font-size:15px;">
                ${d.pais}
              </strong>

              <div style="margin-top:6px;font-size:13px;">
                ${formatar(d.visitas)} visitas
              </div>

              ${observacao}
            </div>
          `;
        })

        .onPointClick(function (d) {
          const observacao = d.tipo === 'estado'
            ? '<br><span style="color:#FFD166;">Estimativa ilustrativa, não medição real.</span>'
            : '';

          detalhe.innerHTML =
            '<strong style="color:' + corDoPonto(d) + ';">' +
            d.pais +
            '</strong> — ' +
            formatar(d.visitas) +
            ' visitas aproximadas.' +
            observacao;
        })

        /*
         * CORAÇÕES DOS VISITANTES ONLINE
         */

        .htmlElementsData([])
        .htmlLat('lat')
        .htmlLng('lng')
        .htmlAltitude(0.08)
        .htmlElement(function (d) {
          const coracao = document.createElement('div');

          coracao.className = 'cmsl-globo-coracao';

          coracao.title =
            d.cidade + ', ' + d.pais +
            ' — ' + d.visitantes +
            (d.visitantes === 1 ? ' visitante online' : ' visitantes online');

          coracao.setAttribute(
            'aria-label',
            coracao.title
          );

          return coracao;
        });

      globoAtivo = globo;

      /*
       * ROTAÇÃO AUTOMÁTICA
       */

      const controles = globo.controls();

      controles.autoRotate = true;
      controles.autoRotateSpeed = 0.55;
      controles.enableDamping = true;
      controles.dampingFactor = 0.08;

      /*
       * POSIÇÃO INICIAL
       */

      globo.pointOfView({
        lat: 15,
        lng: 0,
        altitude: 2.4
      }, 1000);

      /*
       * AJUSTE AUTOMÁTICO DO TAMANHO
       */

      function ajustarTamanho() {
        const largura = container.clientWidth;

        if (largura > 0) {
          globo.width(largura);
          globo.height(container.clientHeight);
        }
      }

      ajustarTamanho();

      if (window.ResizeObserver) {
        new ResizeObserver(ajustarTamanho).observe(container);
      } else {
        window.addEventListener('resize', ajustarTamanho);
      }

      /*
       * PRIMEIRA CONSULTA E ATUALIZAÇÃO
       */

      consultarOnline();

      window.setInterval(consultarOnline, 20000);
    }

    /*
     * TRATAMENTO DE ERROS
     */

    function mostrarErro(erro) {
      console.error('Com Mãos de Seda - erro do globo:', erro);

      container.innerHTML =
        '<p style="color:#d8efff;padding:50px 15px;">' +
        'Não foi possível carregar o globo. Verifique o Console para identificar o erro.' +
        '</p>';
    }

    /*
     * PREPARAÇÃO
     */

    async function preparar() {
      try {
        await carregarGlobe();
        iniciarGlobo();

      } catch (erro) {
        mostrarErro(erro);
      }
    }

    preparar();

  })();

  /*
   * CONTADOR OFICIAL DO BLOGGER
   *
   * Lê Stats1_totalCount.
   * Verifica a widget a cada segundo.
   * Envia ao Apps Script somente quando o total muda.
   * Não substitui nem desativa a widget original.
   */

  (function () {
    'use strict';

    var endpoint =
      'https://script.google.com/macros/s/AKfycbzfk2QYtkxrtt4UldiaGGMfrfYZljnD-CNulZjbWtYhOIgaMwiOqOwfI0YDxOS6-_LoSw/exec';

    var elemento = raiz.querySelector('#cmsl-globo-total');

    if (!elemento) return;

    var ultimoValor = '';
    var ultimoEnviado = '';
    var consultaInicialFeita = false;

    function enviarAoAppsScript(numero) {
      if (!numero || numero === ultimoEnviado) return;

      ultimoEnviado = numero;

      var imagem = new Image();

      imagem.src = endpoint +
        '?acao=contador&bloggerTotal=' +
        encodeURIComponent(numero) +
        '&_=' + Date.now();
    }

    function consultarValorArmazenado() {
      if (consultaInicialFeita) return;

      consultaInicialFeita = true;

      window.cmslReceberGlobo = function (resposta) {
        if (
          resposta &&
          resposta.sucesso &&
          resposta.contadorBlogger &&
          resposta.contadorBlogger.ativo
        ) {
          var total = Number(resposta.contadorBlogger.total);

          if (Number.isSafeInteger(total) && total >= 0) {
            if (ultimoValor === '') {
              ultimoValor = String(total);
              elemento.textContent = total.toLocaleString('pt-BR');
            }
          }
        }
      };

      var consulta = document.createElement('script');

      consulta.src = endpoint +
        '?acao=contador&callback=cmslReceberGlobo';

      consulta.onerror = function () {
        if (ultimoValor === '') {
          elemento.textContent = 'Indisponível';
        }
      };

      document.head.appendChild(consulta);
    }

    function sincronizarContador() {
      var origem = document.getElementById('Stats1_totalCount');

      if (origem && origem.textContent.trim() !== '') {

        var numero = origem.textContent.replace(/[^\d]/g, '');

        if (numero !== '' && /^\d+$/.test(numero)) {

          if (numero !== ultimoValor) {
            ultimoValor = numero;

            elemento.textContent =
              Number(numero).toLocaleString('pt-BR');

            enviarAoAppsScript(numero);
          }

          return;
        }
      }

      consultarValorArmazenado();
    }

    sincronizarContador();

    window.setInterval(sincronizarContador, 1000);

  })();

})();
