
/*
 * =====================================================
 * GLOBO DE VISITANTES — COM MÃOS DE SEDA
 * Criado por: Com Mãos de Seda
 * © 2026
 * https://www.commaosdesedaoficial.com
 *
 * HTML + CSS + JAVASCRIPT
 * Google Analytics 4 + Contador original do Blogger
 * =====================================================
 */

(function () {
  'use strict';

  /* EVITA INSTALAÇÃO DUPLICADA */

  if (window.cmslGloboInicializado) return;

  if (document.getElementById('cmsl-globo-historico')) return;

  window.cmslGloboInicializado = true;

  /*
   * Guarda a referência ao próprio script.
   * O globo será inserido exatamente no local
   * em que esta linha foi colocada no Blogger.
   */

  var scriptAtual = document.currentScript;

  var endpoint =
    'https://script.google.com/macros/s/AKfycbzfk2QYtkxrtt4UldiaGGMfrfYZljnD-CNulZjbWtYhOIgaMwiOqOwfI0YDxOS6-_LoSw/exec';


  /* =====================================================
     1. HTML DO GLOBO
     ===================================================== */

  var htmlGlobo = `
    <div id="cmsl-globo-historico">

      <div id="cmsl-globo-agradecimento">

        <div class="cmsl-globo-total-linha">

          <span class="cmsl-globo-agradecimento-linha">
            ✨ Obrigado aos mais de
          </span>

          <strong id="cmsl-globo-total">Carregando...</strong>

          <span class="cmsl-globo-agradecimento-linha">
            🌎 Visitantes em nosso atelier pelo mundo, desde de nossa Fundação!
          </span>

        </div>

        <div id="cmsl-globo-legenda">

          <span>
            <b class="cmsl-legenda-online">❤︎</b>
            Online agora
          </span>

          <span>
            <b class="cmsl-legenda-azul">❤︎</b>
            Países - visitas históricas
          </span>

          <span>
            <b class="cmsl-legenda-dourado">❤︎</b>
            Estados brasileiros e países com 200 mil+ visitas
          </span>

        </div>

      </div>

      <div id="cmsl-globo-container"></div>

      <div id="cmsl-globo-atualizacao"></div>

      <div id="cmsl-globo-detalhe">
        <span class="cmsl-globo-pulso"></span>
        Atualizada a cada segundo
        <br>
        Explore o globo para descobrir os acessos.
      </div>

    </div>
  `;


  /* =====================================================
     2. CSS ORIGINAL
     ===================================================== */

  var cssGlobo = `

    #cmsl-globo-historico .cmsl-globo-total-linha {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: wrap;
      gap: 8px;
    }

    #cmsl-globo-historico .cmsl-globo-total-linha #cmsl-globo-total {
      display: inline;
      margin: 0;
    }

    #cmsl-globo-historico {
      width: 100%;
      max-width: 850px;
      margin: 20px auto;
      position: relative;
      background: transparent;
      color: #fff;
      font-family: Arial, sans-serif;
      text-align: center;
      overflow: hidden;
      box-sizing: border-box;
    }

    #cmsl-globo-historico *,
    #cmsl-globo-historico *::before,
    #cmsl-globo-historico *::after {
      box-sizing: border-box;
    }

    /* AGRADECIMENTO */

    #cmsl-globo-historico #cmsl-globo-agradecimento {
      width: 100%;
      max-width: none;
      margin: 0 auto 0px;
      padding: 17px 13px;
      border: 1px solid rgba(53,223,255,.35);
      border-radius: 8px;
      background: rgba(9,28,49,.82);
      color: #fff;
      box-shadow: 0 0 15px rgba(53,223,255,.12);
      line-height: 1.6;
    }

    #cmsl-globo-historico .cmsl-globo-agradecimento-linha {
      display: block;
      color: #d9f5ff;
      font-size: 14px;
      font-weight: 600;
    }

    #cmsl-globo-historico #cmsl-globo-total {
      display: block;
      margin: 5px 0;
      color: #38dfff;
      font-size: clamp(29px, 5vw, 40px);
      line-height: 1.2;
      font-weight: 800;
      text-shadow: 0 0 13px rgba(53,223,255,.45);
      overflow-wrap: anywhere;
      font-family: 'Cookie', serif;
    }

    /* CABEÇALHO */

    #cmsl-globo-historico #cmsl-globo-info {
      position: relative;
      z-index: 2;
      padding: 12px 8px 0;
      pointer-events: none;
    }

    #cmsl-globo-historico .cmsl-globo-titulo {
      display: block;
      color: #38dfff;
      font-size: 21px;
      font-weight: bold;
      text-shadow: 0 0 12px rgba(53,223,255,.45);
    }

    #cmsl-globo-historico .cmsl-globo-subtitulo {
      display: block;
      margin-top: 0px;
      color: #8caec8;
      font-size: 12px;
    }

    /* GLOBO */

    #cmsl-globo-historico #cmsl-globo-container {
      width: 100%;
      height: 480px;
      position: relative;
      background: transparent;
    }

    /* MARCADOR EXTERNO */

    #cmsl-globo-historico .cmsl-globo-marcador {
      position: absolute;
      width: 0;
      height: 0;
      pointer-events: auto;
    }

    /* POSIÇÃO DOS CORAÇÕES */

    #cmsl-globo-historico .cmsl-globo-coracao,
    #cmsl-globo-historico .cmsl-globo-coracao-historico {
      position: absolute;
      display: block;
      left: 0;
      top: 0;
      transform: translate(-50%, -50%);
      line-height: 1;
      font-weight: normal;
      pointer-events: auto;
      cursor: pointer;
    }

    /* CORAÇÃO ONLINE */

    #cmsl-globo-historico .cmsl-globo-coracao {
      font-size: 18px;
      color: #ff1744;
      animation: cmslGloboCoracao 1s ease-in-out infinite;
      filter: drop-shadow(0 0 5px #ff1744);
    }

    #cmsl-globo-historico .cmsl-globo-coracao::before {
      content: "\\2764\\FE0E";
    }

    /* CORAÇÕES HISTÓRICOS */

    #cmsl-globo-historico .cmsl-globo-coracao-historico {
      font-size: 11px;
      filter: drop-shadow(0 0 3px currentColor);
    }

    /* PULSAÇÃO */

    @keyframes cmslGloboCoracao {
      0%, 100% {
        transform: translate(-50%, -50%) scale(1);
        filter:
          drop-shadow(0 0 5px rgba(255,23,68,.95))
          drop-shadow(0 0 10px rgba(255,23,68,.65));
      }

      50% {
        transform: translate(-50%, -50%) scale(1.3);
        filter:
          drop-shadow(0 0 8px rgba(255,23,68,1))
          drop-shadow(0 0 16px rgba(255,23,68,.9));
      }
    }

    /* LEGENDA */

    #cmsl-globo-historico #cmsl-globo-legenda {
      display: flex;
      align-items: center;
      justify-content: center;
      flex-wrap: nowrap;
      gap: 14px;
      width: 100%;
      padding: 5px 8px;
      overflow-x: auto;
      white-space: nowrap;
      color: #c7efff;
      font-size: 10px;
    }

    #cmsl-globo-historico #cmsl-globo-legenda span {
      display: inline-flex;
      align-items: center;
      gap: 4px;
      flex-shrink: 0;
    }

    #cmsl-globo-historico #cmsl-globo-legenda b {
      font-size: 15px;
      line-height: 1;
    }

    #cmsl-globo-historico .cmsl-legenda-online {
      color: #ff1744;
    }

    #cmsl-globo-historico .cmsl-legenda-azul {
      color: #65B9FF;
    }

    #cmsl-globo-historico .cmsl-legenda-dourado {
      color: #FFD166;
    }

    /* NOTIFICAÇÃO */

    #cmsl-globo-historico #cmsl-globo-atualizacao {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 7px;
      margin: 0px auto 12px;
      color: #8caec8;
      font-size: 11px;
      letter-spacing: .0px;
      margin-top: -10px;
    }

    /* PONTINHO VERDE */

    #cmsl-globo-historico .cmsl-globo-pulso {
      display: inline-block;
      width: 7px;
      height: 7px;
      flex: 0 0 7px;
      border-radius: 50%;
      background: #35e6a0;
      box-shadow: 0 0 8px rgba(53,230,160,.8);
      animation: cmslGloboPulso 1s infinite;
    }

    @keyframes cmslGloboPulso {
      0%, 100% {
        opacity: 1;
        transform: scale(1);
      }

      50% {
        opacity: .4;
        transform: scale(.75);
      }
    }

    /* DETALHES */

    #cmsl-globo-historico #cmsl-globo-detalhe {
      position: relative;
      z-index: 2;
      display: block;
      width: 100%;
      max-width: none;
      margin: 0 auto 12px;
      padding: 9px 15px;
      border: 1px solid rgba(53,223,255,.35);
      border-radius: 10px;
      background: rgba(9,28,49,.82);
      color: #c7efff;
      font-size: 12px;
      box-shadow: 0 0 15px rgba(53,223,255,.12);
    }

    /* CELULAR */

    @media (max-width: 600px) {

      #cmsl-globo-historico #cmsl-globo-container {
        height: 350px;
      }

      #cmsl-globo-historico .cmsl-globo-titulo {
        font-size: 18px;
      }

      #cmsl-globo-historico #cmsl-globo-agradecimento {
        padding: 0px 10px;
      }

      #cmsl-globo-historico .cmsl-globo-agradecimento-linha {
        font-size: 13px;
      }

      #cmsl-globo-historico .cmsl-globo-coracao-historico {
        font-size: 10px;
      }

    }

  `;


  /* =====================================================
     3. INSERE HTML E CSS NA PÁGINA
     ===================================================== */

  function montarGlobo() {

    if (document.getElementById('cmsl-globo-historico')) {
      return;
    }

    var wrapper = document.createElement('div');

    wrapper.innerHTML = htmlGlobo;

    var elementoGlobo = wrapper.firstElementChild;

    if (!elementoGlobo) {
      throw new Error('Não foi possível criar o HTML do globo.');
    }

    /*
     * Insere o globo no lugar da linha do script.
     */

    if (scriptAtual && scriptAtual.parentNode) {

      scriptAtual.parentNode.insertBefore(
        elementoGlobo,
        scriptAtual
      );

    } else {

      (document.body || document.documentElement)
        .appendChild(elementoGlobo);

    }

    /*
     * Cria o CSS dinamicamente.
     */

    var estilo = document.createElement('style');

    estilo.id = 'cmsl-globo-estilos';

    estilo.textContent = cssGlobo;

    document.head.appendChild(estilo);

    iniciarAplicacao(elementoGlobo);
  }


  /* =====================================================
     4. APLICAÇÃO DO GLOBO
     ===================================================== */

  function iniciarAplicacao(wrapper) {

    var container =
      wrapper.querySelector('#cmsl-globo-container');

    var detalhe =
      wrapper.querySelector('#cmsl-globo-detalhe');

    var elementoContador =
      wrapper.querySelector('#cmsl-globo-total');


    function formatar(numero) {
      return numero.toLocaleString('pt-BR');
    }


    /* PAÍSES HISTÓRICOS */

    var paises = [

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


    /* ESTADOS BRASILEIROS */

    var estados = [

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

    var dados = paises.concat(estados);


    /* CORES DOS MARCADORES */

    function corDoPonto(d) {

      if (d.tipo === 'online') return '#ff1744';

      if (d.tipo === 'estado') return '#FFD166';

      if (d.visitas >= 200000) return '#FFD166';

      if (d.visitas >= 50000) return '#35E6FF';

      if (d.visitas >= 10000) return '#65B9FF';

      return '#B5E8FF';

    }


    /* COORDENADAS DAS CIDADES */

    var coordenadasCidades = {

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


    /* COORDENADAS DOS PAÍSES */

    var coordenadasPaises = {

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

      var cidade = normalizar(local.cidade);

      var pais = normalizar(local.pais);

      if (cidade && coordenadasCidades[cidade]) {
        return coordenadasCidades[cidade];
      }

      if (pais && coordenadasPaises[pais]) {
        return coordenadasPaises[pais];
      }

      return null;

    }


    /* =====================================================
       5. MARCADORES ONLINE
       ===================================================== */

    var globoAtivo = null;

    function criarMarcadoresOnline(resposta) {

      if (
        !globoAtivo ||
        !resposta ||
        !Array.isArray(resposta.localizacoes)
      ) {
        return;
      }

      var marcadoresOnline = [];

      resposta.localizacoes.forEach(function (local) {

        var quantidade = Number(local.visitantes || 0);

        if (quantidade <= 0) return;

        var coordenadas = obterCoordenadas(local);

        if (!coordenadas) {

          console.warn(
            'Com Mãos de Seda - cidade sem coordenadas cadastradas:',
            local.cidade,
            local.pais
          );

          return;
        }

        marcadoresOnline.push({

          lat: coordenadas[0],

          lng: coordenadas[1],

          cidade: local.cidade || 'Cidade não identificada',

          pais: local.pais || '',

          visitantes: quantidade,

          visualizacoes: Number(local.visualizacoes || 0),

          eventos: Number(local.eventos || 0),

          tipoMarcador: 'online'

        });

      });


      var historicos = dados.map(function (d) {

        return Object.assign({}, d, {
          tipoMarcador: 'historico'
        });

      });


      var todosMarcadores =
        historicos.concat(marcadoresOnline);


      globoAtivo.htmlElementsData(todosMarcadores);

      globoAtivo.ringsData(todosMarcadores);

    }


    /* =====================================================
       6. CONSULTA ONLINE AO GA4
       ===================================================== */

    var consultaOnlineEmAndamento = false;

    window.cmslReceberOnline = function (resposta) {

      consultaOnlineEmAndamento = false;

      if (!resposta || !resposta.sucesso) {

        console.warn(
          'Com Mãos de Seda - resposta online inválida:',
          resposta
        );

        return;
      }

      criarMarcadoresOnline(resposta);

    };


    function consultarOnline() {

      if (consultaOnlineEmAndamento) return;

      consultaOnlineEmAndamento = true;

      var script = document.createElement('script');

      script.src = endpoint +
        '?acao=online&callback=cmslReceberOnline&_=' +
        Date.now();

      script.onerror = function () {

        consultaOnlineEmAndamento = false;

        console.warn(
          'Com Mãos de Seda - não foi possível consultar visitantes online.'
        );

        script.remove();

      };

      script.onload = function () {
        script.remove();
      };

      document.head.appendChild(script);

    }


    /* =====================================================
       7. CARREGAMENTO DO GLOBE.GL
       ===================================================== */

    function carregarGlobe() {

      return new Promise(function (resolve, reject) {

        if (typeof window.Globe === 'function') {
          resolve();
          return;
        }

        var script = document.createElement('script');

        script.src = 'https://unpkg.com/globe.gl';

        script.async = true;

        script.onload = function () {

          if (typeof window.Globe === 'function') {

            resolve();

          } else {

            reject(
              new Error(
                'Globe.gl foi carregado, mas não inicializou.'
              )
            );

          }

        };

        script.onerror = function () {

          reject(
            new Error(
              'Não foi possível carregar a biblioteca Globe.gl.'
            )
          );

        };

        document.head.appendChild(script);

      });

    }


    /* =====================================================
       8. INICIALIZAÇÃO DO GLOBO
       ===================================================== */

    function iniciarGlobo() {

      if (typeof window.Globe !== 'function') {
        throw new Error('Biblioteca do globo não encontrada.');
      }

      var historicos = dados.map(function (d) {

        return Object.assign({}, d, {
          tipoMarcador: 'historico'
        });

      });


      var globo = window.Globe()(container)

        .backgroundColor('rgba(0,0,0,0)')

        .globeImageUrl(
          'https://unpkg.com/three-globe/example/img/earth-blue-marble.jpg'
        )

        .showAtmosphere(true)

        .atmosphereColor('#54DFFF')

        .atmosphereAltitude(0.18)

        /* ANÉIS HISTÓRICOS E ONLINE */

        .ringsData(historicos)

        .ringLat('lat')

        .ringLng('lng')

        .ringColor(function (d) {

          return function () {

            return d.tipoMarcador === 'online'
              ? '#ff1744'
              : corDoPonto(d);

          };

        })

        .ringMaxRadius(2.5)

        .ringPropagationSpeed(1)

        .ringRepeatPeriod(1800)


        /* CAMADA DE CORAÇÕES */

        .htmlElementsData(historicos)

        .htmlLat('lat')

        .htmlLng('lng')

        .htmlAltitude(0.01)

        .htmlElement(function (d) {

          var marcador = document.createElement('div');

          marcador.className = 'cmsl-globo-marcador';


          if (d.tipoMarcador === 'online') {

            marcador.title =
              d.cidade + ', ' + d.pais +
              ' - ' + d.visitantes +
              (d.visitantes === 1
                ? ' visitante online'
                : ' visitantes online');

            marcador.setAttribute(
              'aria-label',
              marcador.title
            );

            var coracaoOnline =
              document.createElement('span');

            coracaoOnline.className =
              'cmsl-globo-coracao';

            marcador.appendChild(coracaoOnline);

          } else {

            marcador.title =
              d.pais + ' - ' +
              formatar(d.visitas) +
              ' visitas';

            marcador.setAttribute(
              'aria-label',
              marcador.title
            );

            var coracaoHistorico =
              document.createElement('span');

            coracaoHistorico.className =
              'cmsl-globo-coracao-historico';

            coracaoHistorico.textContent =
              '\\u2764\\uFE0E';

            coracaoHistorico.style.color =
              corDoPonto(d);


            coracaoHistorico.addEventListener(
              'click',
              function (evento) {

                evento.stopPropagation();

                var observacao =
                  d.tipo === 'estado'
                    ? '<br><span style="color:#FFD166;">Estimativa ilustrativa por população. Não é medição real.</span>'
                    : '';

                detalhe.innerHTML =
                  '<strong style="color:' +
                  corDoPonto(d) +
                  ';">' +
                  d.pais +
                  '</strong> - ' +
                  formatar(d.visitas) +
                  ' visitas aproximadas.' +
                  observacao;

              }
            );

            marcador.appendChild(coracaoHistorico);

          }

          return marcador;

        });


      globoAtivo = globo;


      /* ROTAÇÃO AUTOMÁTICA */

      var controles = globo.controls();

      controles.autoRotate = true;

      controles.autoRotateSpeed = 0.05;

      controles.enableDamping = true;

      controles.dampingFactor = 0.08;


      /* POSIÇÃO INICIAL */

      globo.pointOfView({

        lat: 15,

        lng: 0,

        altitude: 1.4

      }, 1000);


      /* AJUSTE AUTOMÁTICO DO TAMANHO */

      function ajustarTamanho() {

        var largura = container.clientWidth;

        if (largura > 0) {

          globo.width(largura);

          globo.height(container.clientHeight);

        }

      }

      ajustarTamanho();


      if (window.ResizeObserver) {

        new ResizeObserver(ajustarTamanho)
          .observe(container);

      } else {

        window.addEventListener(
          'resize',
          ajustarTamanho
        );

      }


      /* PRIMEIRA CONSULTA E ATUALIZAÇÃO */

      consultarOnline();

      window.setInterval(consultarOnline, 20000);

    }


    /* =====================================================
       9. TRATAMENTO DE ERROS
       ===================================================== */

    function mostrarErro(erro) {

      console.error(
        'Com Mãos de Seda - erro do globo:',
        erro
      );

      container.innerHTML =
        '<p style="color:#d8efff;padding:50px 15px;">' +
        'Não foi possível carregar o globo. Verifique o Console para identificar o erro.' +
        '</p>';

    }


    /* =====================================================
       10. PREPARAÇÃO DO GLOBO
       ===================================================== */

    async function preparar() {

      try {

        await carregarGlobe();

        iniciarGlobo();

      } catch (erro) {

        mostrarErro(erro);

      }

    }

    preparar();


    /* =====================================================
       11. CONTADOR OFICIAL DO BLOGGER
       ===================================================== */

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

          var total =
            Number(resposta.contadorBlogger.total);

          if (
            Number.isSafeInteger(total) &&
            total >= 0
          ) {

            if (ultimoValor === '') {

              ultimoValor = String(total);

              elementoContador.textContent =
                total.toLocaleString('pt-BR');

            }

          }

        }

      };


      var consulta = document.createElement('script');

      consulta.src = endpoint +
        '?acao=contador&callback=cmslReceberGlobo';


      consulta.onerror = function () {

        if (ultimoValor === '') {
          elementoContador.textContent = 'Indisponível';
        }

        consulta.remove();

      };


      consulta.onload = function () {
        consulta.remove();
      };


      document.head.appendChild(consulta);

    }


    function sincronizarContador() {

      /*
       * Lê a widget original do Blogger.
       * Não remove nem modifica essa widget.
       */

      var origem =
        document.getElementById('Stats1_totalCount');


      if (origem && origem.textContent.trim() !== '') {

        var numero =
          origem.textContent.replace(/[^\d]/g, '');

        if (
          numero !== '' &&
          /^\d+$/.test(numero)
        ) {

          if (numero !== ultimoValor) {

            ultimoValor = numero;

            elementoContador.textContent =
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

  }


  /* =====================================================
     12. AGUARDA O DOCUMENTO E MONTA TUDO
     ===================================================== */

  function iniciar() {

    try {

      montarGlobo();

    } catch (erro) {

      window.cmslGloboInicializado = false;

      console.error(
        'Com Mãos de Seda - não foi possível montar o globo:',
        erro
      );

    }

  }


  if (document.readyState === 'loading') {

    document.addEventListener(
      'DOMContentLoaded',
      iniciar,
      { once: true }
    );

  } else {

    iniciar();

  }

})();
