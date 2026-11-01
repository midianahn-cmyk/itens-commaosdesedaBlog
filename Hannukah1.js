
<style>
/* ==========================================
   HANUKKAH — COM MÃOS DE SEDA
   Estilos isolados
========================================== */

#cms-hanukkah-animacao {
  position: fixed;
  inset: 0;
  width: 100%;
  height: 100%;
  z-index: 999990;
  pointer-events: none;
  overflow: hidden;
}

#cms-hanukkah-personagem {
  position: absolute;
  left: -300px;
  bottom: 0;
  display: none;
  pointer-events: none;
}

.cms-hanukkah-figura {
  position: relative;
  display: flex;
  align-items: center;
}

.cms-hanukkah-imagem {
  width: 250px;
  height: auto;
  display: block;
}

.cms-hanukkah-fumaca {
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
  z-index: -1;
}

.cms-hanukkah-imagem-fumaca {
  width: 200px;
  height: auto;
  display: block;
}

.cms-hanukkah-decoracao {
  width: 50px;
  margin-left: -50px;
  display: block;
}

.cms-hanukkah-imagem-decoracao {
  width: 100%;
  height: auto;
  display: block;
}

.cms-hanukkah-mensagem {
  position: absolute;
  left: 50%;
  bottom: 100%;
  transform: translateX(-50%);
  white-space: nowrap;
  color: #e7c66a;
  font-size: 20px;
  font-weight: bold;
  text-shadow: 1px 2px 4px #000;
  opacity: 0;
}

#cms-hanukkah-controle {
  position: fixed;
  right: 15px;
  bottom: 110px;
  z-index: 999999;
}

#cms-hanukkah-caixa {
  position: relative;
  display: flex;
  align-items: center;
  gap: 9px;
  padding: 10px 14px;
  background: #12345b;
  border: 2px solid #d9b65c;
  border-radius: 12px;
  box-shadow: 0 3px 12px rgba(0,0,0,.3);
  color: #fff;
  font-size: 13px;
}

#cms-hanukkah-som {
  cursor: pointer;
  border: 1px solid #d9b65c;
  background: #fff;
  color: #12345b;
  padding: 6px 10px;
  border-radius: 7px;
  font-weight: bold;
}

#cms-hanukkah-credito {
  color: #e7c66a;
  text-decoration: none;
  font-weight: bold;
}

#cms-hanukkah-fechar {
  cursor: pointer;
  border: 0;
  background: transparent;
  color: #fff;
  font-size: 20px;
  line-height: 1;
  padding: 0 0 0 4px;
}

@keyframes cms-hanukkah-voo {
  0% {
    transform: translateX(0) translateY(0);
  }
  20% {
    transform: translateX(25vw) translateY(-15vh);
  }
  45% {
    transform: translateX(50vw) translateY(-5vh);
  }
  70% {
    transform: translateX(75vw) translateY(-18vh);
  }
  100% {
    transform: translateX(calc(100vw + 400px)) translateY(0);
  }
}

@keyframes cms-hanukkah-balanco {
  0%, 100% { transform: rotate(-5deg); }
  50% { transform: rotate(5deg); }
}

@keyframes cms-hanukkah-mensagem {
  0% { opacity: 0; transform: translate(-50%, 10px); }
  20%, 80% { opacity: 1; transform: translate(-50%, 0); }
  100% { opacity: 0; transform: translate(-50%, -10px); }
}

@media (max-width: 767px) {
  #cms-hanukkah-controle {
    bottom: 150px;
    right: 10px;
  }

  .cms-hanukkah-imagem {
    width: 68px;
  }

  .cms-hanukkah-imagem-fumaca {
    width: 35px;
  }

  .cms-hanukkah-decoracao {
    width: 30px;
    margin-left: -25px;
  }

  .cms-hanukkah-mensagem {
    font-size: 13px;
  }
}
</style>

<!-- ÁREA DA ANIMAÇÃO -->
<div id="cms-hanukkah-animacao">
  <div id="cms-hanukkah-personagem">

    <div class="cms-hanukkah-figura">

      <img
        class="cms-hanukkah-imagem"
        src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgdDzeM9H5CNf6BCWcab_7NGh-ne4vOtQSXARvjR8890HRm0g6GQmp0yOSHahDWwgb5-UinjqDZU_mWirKiTmSP2z2PZQSEB9o_q5h4P_yxcxaIEu9NUximKkhO_XDwwxqNQApyy8pGdAHLO16qnidwa2e-zwhnFhBZCFcja2oKS5OsNby5XGXtRtRvoJpY/s233/baixados%20%281%29.gif"
        alt="Hanukkah"
      />

      <div class="cms-hanukkah-fumaca">
        <img
          class="cms-hanukkah-imagem-fumaca"
          src="https://cdn.pixabay.com/animation/2025/12/04/03/37/03-37-06-948_512.gif"
          alt=""
        />
      </div>

      <div class="cms-hanukkah-decoracao">
        <img
          class="cms-hanukkah-imagem-decoracao"
          src="https://www.imagensanimadas.com/data/media/196/morcego-imagem-animada-0096.gif"
          alt=""
        />
      </div>

      <div class="cms-hanukkah-mensagem">
        ✨ Chag Hanukkah Sameach! ✨
      </div>

    </div>
  </div>
</div>

<!-- CONTROLE -->
<div id="cms-hanukkah-controle">
  <div id="cms-hanukkah-caixa">

    <button id="cms-hanukkah-som" type="button">
      🔇 Som
    </button>

    <a
      id="cms-hanukkah-credito"
      href="https://www.commaosdesedaoficial.com"
      target="_blank"
      rel="noopener noreferrer"
    >
      Com Mãos de Seda
    </a>

    <button
      id="cms-hanukkah-fechar"
      type="button"
      aria-label="Fechar efeito por 24 horas"
      title="Fechar por 24 horas"
    >
      ×
    </button>

  </div>
</div>

<!-- ÁUDIO -->
<audio
  id="cms-hanukkah-audio"
  preload="none"
  src="https://cdn.pixabay.com/download/audio/2022/03/10/audio_6f422dd969.mp3">
</audio>

<script>
(function () {
  "use strict";

  /* ==========================================
     CONFIGURAÇÕES
  ========================================== */

  const TEMPO_INICIAL = 5000;
  const TEMPO_MINIMO = 35000;
  const TEMPO_MAXIMO = 55000;
  const DURACAO_VOO = 9200;
  const SUSPENSAO = 24 * 60 * 60 * 1000;

  const CHAVE_SUSPENSAO = "cmsHanukkahSuspensoAte";

  /* ==========================================
     ELEMENTOS
  ========================================== */

  const personagem = document.getElementById(
    "cms-hanukkah-personagem"
  );

  const controle = document.getElementById(
    "cms-hanukkah-controle"
  );

  const botaoSom = document.getElementById(
    "cms-hanukkah-som"
  );

  const botaoFechar = document.getElementById(
    "cms-hanukkah-fechar"
  );

  const audio = document.getElementById(
    "cms-hanukkah-audio"
  );

  const mensagem = document.querySelector(
    ".cms-hanukkah-mensagem"
  );

  if (
    !personagem ||
    !controle ||
    !botaoSom ||
    !botaoFechar ||
    !audio
  ) {
    return;
  }

  /* ==========================================
     VARIÁVEIS
  ========================================== */

  let somAtivado = false;
  let voandoAgora = false;
  let temporizadorVoo = null;
  let temporizadorFim = null;
  let temporizadorSuspensao = null;

  /* ==========================================
     LEITURA DA SUSPENSÃO
  ========================================== */

  function obterSuspensao() {
    try {
      return Number(
        localStorage.getItem(CHAVE_SUSPENSAO)
      ) || 0;
    } catch (erro) {
      return 0;
    }
  }

  function salvarSuspensao(data) {
    try {
      localStorage.setItem(
        CHAVE_SUSPENSAO,
        String(data)
      );
    } catch (erro) {
      console.warn(
        "Não foi possível salvar a suspensão.",
        erro
      );
    }
  }

  function limparSuspensao() {
    try {
      localStorage.removeItem(CHAVE_SUSPENSAO);
    } catch (erro) {
      console.warn(
        "Não foi possível limpar a suspensão.",
        erro
      );
    }
  }

  /* ==========================================
     CANCELAR TEMPORIZADORES
  ========================================== */

  function cancelarTemporizadores() {
    clearTimeout(temporizadorVoo);
    clearTimeout(temporizadorFim);
    clearTimeout(temporizadorSuspensao);

    temporizadorVoo = null;
    temporizadorFim = null;
    temporizadorSuspensao = null;
  }

  /* ==========================================
     PARAR ANIMAÇÃO E ÁUDIO
  ========================================== */

  function pararEfeito() {
    clearTimeout(temporizadorVoo);
    clearTimeout(temporizadorFim);

    temporizadorVoo = null;
    temporizadorFim = null;

    voandoAgora = false;

    personagem.style.display = "none";
    personagem.style.animation = "none";

    audio.pause();

    try {
      audio.currentTime = 0;
    } catch (erro) {
      // O áudio pode ainda não estar carregado.
    }

    if (mensagem) {
      mensagem.style.animation = "none";
      mensagem.style.opacity = "0";
    }
  }

  /* ==========================================
     AGENDAR PRÓXIMO VOO
  ========================================== */

  function agendarProximo(tempo) {
    clearTimeout(temporizadorVoo);

    if (obterSuspensao() > Date.now()) {
      return;
    }

    temporizadorVoo = setTimeout(function () {
      voar();
    }, tempo);
  }

  /* ==========================================
     ANIMAÇÃO
  ========================================== */

  function voar() {
    if (obterSuspensao() > Date.now()) {
      return;
    }

    if (voandoAgora) {
      return;
    }

    voandoAgora = true;

    personagem.style.display = "block";
    personagem.style.left = "-300px";
    personagem.style.animation = "none";

    // Reinicia a animação.
    void personagem.offsetWidth;

    personagem.style.animation =
      "cms-hanukkah-voo " +
      DURACAO_VOO +
      "ms linear forwards";

    if (mensagem) {
      mensagem.style.animation = "none";
      void mensagem.offsetWidth;

      mensagem.style.animation =
        "cms-hanukkah-mensagem 4s ease forwards";
    }

    // Som somente se a pessoa ativou.
    if (somAtivado) {
      audio.currentTime = 0;

      const reproducao = audio.play();

      if (reproducao && reproducao.catch) {
        reproducao.catch(function () {});
      }
    }

    temporizadorFim = setTimeout(function () {
      personagem.style.display = "none";
      personagem.style.animation = "none";

      audio.pause();

      try {
        audio.currentTime = 0;
      } catch (erro) {}

      voandoAgora = false;

      const intervalo =
        TEMPO_MINIMO +
        Math.random() *
        (TEMPO_MAXIMO - TEMPO_MINIMO);

      agendarProximo(intervalo);

    }, DURACAO_VOO);
  }

  /* ==========================================
     REATIVAR DEPOIS DAS 24 HORAS
  ========================================== */

  function reativarEfeito() {
    limparSuspensao();

    controle.style.display = "block";

    pararEfeito();

    agendarProximo(TEMPO_INICIAL);
  }

  /* ==========================================
     VERIFICAR SE ESTÁ SUSPENSO
  ========================================== */

  function verificarSuspensao() {
    const ate = obterSuspensao();
    const restante = ate - Date.now();

    if (restante > 0) {
      controle.style.display = "none";

      pararEfeito();

      temporizadorSuspensao = setTimeout(
        reativarEfeito,
        restante
      );

      return true;
    }

    limparSuspensao();

    controle.style.display = "block";

    return false;
  }

  /* ==========================================
     BOTÃO DE SOM
  ========================================== */

  botaoSom.addEventListener("click", function () {
    somAtivado = !somAtivado;

    if (somAtivado) {
      botaoSom.textContent = "🔊 Som";

      if (voandoAgora) {
        audio.currentTime = 0;

        const reproducao = audio.play();

        if (reproducao && reproducao.catch) {
          reproducao.catch(function () {});
        }
      } else {
        // O clique também libera a reprodução no navegador.
        audio.currentTime = 0;

        const reproducao = audio.play();

        if (reproducao && reproducao.catch) {
          reproducao.catch(function () {});
        }
      }

    } else {
      botaoSom.textContent = "🔇 Som";

      audio.pause();

      try {
        audio.currentTime = 0;
      } catch (erro) {}
    }
  });

  /* ==========================================
     BOTÃO X — SUSPENDER POR 24 HORAS
  ========================================== */

  botaoFechar.addEventListener("click", function () {
    const dataRetorno = Date.now() + SUSPENSAO;

    salvarSuspensao(dataRetorno);

    cancelarTemporizadores();

    pararEfeito();

    controle.style.display = "none";

    temporizadorSuspensao = setTimeout(
      reativarEfeito,
      SUSPENSAO
    );
  });

  /* ==========================================
     QUANDO A PESSOA VOLTAR À ABA
  ========================================== */

  document.addEventListener(
    "visibilitychange",
    function () {
      if (document.hidden) {
        return;
      }

      if (verificarSuspensao()) {
        return;
      }

      if (!voandoAgora && !temporizadorVoo) {
        agendarProximo(TEMPO_INICIAL);
      }
    }
  );

  /* ==========================================
     INICIALIZAÇÃO
  ========================================== */

  if (!verificarSuspensao()) {
    agendarProximo(TEMPO_INICIAL);
  }

})();
</script>
