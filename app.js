const players = [
  {
    name: "Vozinha",
    number: 1,
    group: "Goalkeeper",
    position: "Goalkeeper",
    club: "Chaves",
    photo: "assets/players/422149.png",
  },
  {
    name: "Márcio Rosa",
    number: 12,
    group: "Goalkeeper",
    position: "Goalkeeper",
    club: "Montana",
    photo: "assets/players/865144.png",
  },
  {
    name: "CJ dos Santos",
    number: 23,
    group: "Goalkeeper",
    position: "Goalkeeper",
    club: "San Diego FC",
    photo: "assets/players/1054027.png",
  },
  {
    name: "Steven Moreira",
    number: 22,
    group: "Defender",
    position: "Right back · Centre back",
    club: "Columbus Crew",
    photo: "assets/players/444000.png",
  },
  {
    name: "Wagner Pina",
    number: 24,
    group: "Defender",
    position: "Right back · Wing back",
    club: "Trabzonspor",
    photo: "assets/players/1460591.png",
  },
  {
    name: "João Paulo",
    number: 8,
    group: "Defender",
    position: "Left back · Defensive midfield",
    club: "FCSB",
    photo: "assets/players/1241301.png",
  },
  {
    name: "Sidny Lopes Cabral",
    number: 13,
    group: "Defender",
    position: "Left back · Wing back",
    club: "Trabzonspor",
    photo: "assets/players/1441786.png",
  },
  {
    name: "Logan Costa",
    number: 5,
    group: "Defender",
    position: "Centre back",
    club: "Villarreal",
    photo: "assets/players/922877.png",
  },
  {
    name: "Pico Lopes",
    number: 4,
    group: "Defender",
    position: "Centre back",
    club: "Shamrock Rovers",
    photo: "assets/players/230134.png",
  },
  {
    name: "Kelvin Pires",
    number: 25,
    group: "Defender",
    position: "Centre back",
    club: "SJK",
    photo: "assets/players/1175733.png",
  },
  {
    name: "Stopira",
    number: 2,
    group: "Defender",
    position: "Centre back · Left back",
    club: "Torreense",
    photo: "assets/players/164062.png",
  },
  {
    name: "Diney Borges",
    number: 3,
    group: "Defender",
    position: "Centre back",
    club: "Al Bataeh",
    photo: "assets/players/496648.png",
  },
  {
    name: "Jamiro Monteiro",
    number: 10,
    group: "Midfielder",
    position: "Central · Attacking midfield",
    club: "PEC Zwolle",
    photo: "assets/players/680905.png",
  },
  {
    name: "Telmo Arcanjo",
    number: 18,
    group: "Midfielder",
    position: "Attacking midfield · Winger",
    club: "Vitória de Guimarães",
    photo: "assets/players/1165477.png",
  },
  {
    name: "Yannick Semedo",
    number: 16,
    group: "Midfielder",
    position: "Central · Defensive midfield",
    club: "Farense",
    photo: "assets/players/1205410.png",
  },
  {
    name: "Laros Duarte",
    number: 15,
    group: "Midfielder",
    position: "Defensive · Central midfield",
    club: "Puskás Akadémia",
    photo: "assets/players/665167.png",
  },
  {
    name: "Deroy Duarte",
    number: 14,
    group: "Midfielder",
    position: "Defensive · Central midfield",
    club: "Ludogorets Razgrad",
    photo: "assets/players/798069.png",
  },
  {
    name: "Kevin Pina",
    number: 6,
    group: "Midfielder",
    position: "Defensive · Central midfield",
    club: "FC Krasnodar",
    photo: "assets/players/890503.png",
  },
  {
    name: "Ryan Mendes",
    number: 20,
    group: "Forward",
    position: "Winger · Forward",
    club: "Iğdır FK",
    photo: "assets/players/172615.png",
  },
  {
    name: "Willy Semedo",
    number: 17,
    group: "Forward",
    position: "Left · Right winger",
    club: "Omonia Nicosia",
    photo: "assets/players/873832.png",
  },
  {
    name: "Garry Rodrigues",
    number: 11,
    group: "Forward",
    position: "Left · Right winger",
    club: "Apollon Limassol",
    photo: "assets/players/302912.png",
  },
  {
    name: "Jovane Cabral",
    number: 7,
    group: "Forward",
    position: "Left winger · Attacking midfield",
    club: "Estrela da Amadora",
    photo: "assets/players/785716.png",
  },
  {
    name: "Nuno da Costa",
    number: 21,
    group: "Forward",
    position: "Striker · Left winger",
    club: "Başakşehir",
    photo: "assets/players/671326.png",
  },
  {
    name: "Dailon Livramento",
    number: 19,
    group: "Forward",
    position: "Striker · Left winger",
    club: "Casa Pia",
    photo: "assets/players/1309634.png",
  },
  {
    name: "Gilson Benchimol",
    number: 9,
    group: "Forward",
    position: "Striker · Right winger",
    club: "Akron Togliatti",
    photo: "assets/players/1241302.png",
  },
  {
    name: "Hélio Varela",
    number: 26,
    group: "Forward",
    position: "Left winger",
    club: "Maccabi Tel Aviv",
    photo: "assets/players/1524518.png",
  },
];

const elements = {
  kiosk: document.querySelector(".kiosk"),
  playerPhoto: document.querySelector("#playerPhoto"),
  playerBackdrop: document.querySelector("#playerBackdrop"),
  playerName: document.querySelector("#playerName"),
  shirtNumber: document.querySelector("#shirtNumber"),
  positionGroup: document.querySelector("#positionGroup"),
  specificPosition: document.querySelector("#specificPosition"),
  clubName: document.querySelector("#clubName"),
  currentNumber: document.querySelector("#currentNumber"),
  totalPlayers: document.querySelector("#totalPlayers"),
  progressBar: document.querySelector("#progressBar"),
  intervalLabel: document.querySelector("#intervalLabel"),
  pauseButton: document.querySelector("#pauseButton"),
  previousButton: document.querySelector("#previousButton"),
  nextButton: document.querySelector("#nextButton"),
  rosterButton: document.querySelector("#rosterButton"),
  settingsButton: document.querySelector("#settingsButton"),
  fullscreenButton: document.querySelector("#fullscreenButton"),
  rosterDialog: document.querySelector("#rosterDialog"),
  settingsDialog: document.querySelector("#settingsDialog"),
  rosterGrid: document.querySelector("#rosterGrid"),
  intervalInput: document.querySelector("#intervalInput"),
  intervalValue: document.querySelector("#intervalValue"),
  saveButton: document.querySelector("#saveButton"),
  resetButton: document.querySelector("#resetButton"),
};

const defaultIntervalSeconds = 3;
const urlInterval = Number.parseInt(new URLSearchParams(location.search).get("interval"), 10);
const savedInterval = Number.parseInt(localStorage.getItem("cv-kiosk-interval"), 10);
let intervalSeconds = clamp(
  Number.isFinite(urlInterval) ? urlInterval : savedInterval || defaultIntervalSeconds,
  1,
  15,
);
let currentIndex = 0;
let timerId;
let isPaused = false;
let changeToken = 0;

function clamp(value, minimum, maximum) {
  return Math.min(Math.max(value, minimum), maximum);
}

function preloadPhotos() {
  players.forEach(({ photo }) => {
    const image = new Image();
    image.src = photo;
  });
}

function renderPlayer(index, immediate = false) {
  currentIndex = (index + players.length) % players.length;
  const player = players[currentIndex];
  const token = ++changeToken;

  if (!immediate) {
    elements.kiosk.classList.add("is-changing");
  }

  window.setTimeout(
    () => {
      if (token !== changeToken) return;

      elements.playerPhoto.src = player.photo;
      elements.playerPhoto.alt = `${player.name}, ${player.position}`;
      elements.playerBackdrop.src = player.photo;
      elements.playerName.textContent = player.name;
      elements.shirtNumber.textContent = String(player.number).padStart(2, "0");
      elements.positionGroup.textContent = player.group;
      elements.specificPosition.textContent = player.position;
      elements.clubName.textContent = player.club;
      elements.currentNumber.textContent = String(currentIndex + 1).padStart(2, "0");

      elements.kiosk.classList.remove("is-changing");
      restartProgress();
    },
    immediate ? 0 : 220,
  );
}

function restartProgress() {
  elements.progressBar.classList.remove("is-running");
  void elements.progressBar.offsetWidth;
  if (!isPaused) {
    elements.progressBar.classList.add("is-running");
  }
}

function startTimer() {
  window.clearInterval(timerId);
  document.documentElement.style.setProperty("--interval", `${intervalSeconds * 1000}ms`);
  elements.intervalLabel.textContent = `${intervalSeconds} ${intervalSeconds === 1 ? "second" : "seconds"}`;
  elements.intervalInput.value = intervalSeconds;
  elements.intervalValue.textContent = intervalSeconds;

  if (!isPaused) {
    timerId = window.setInterval(() => renderPlayer(currentIndex + 1), intervalSeconds * 1000);
  }
  restartProgress();
}

function setPaused(paused) {
  isPaused = paused;
  elements.pauseButton.textContent = paused ? "Resume" : "Pause";
  startTimer();
}

function goToPlayer(index) {
  renderPlayer(index);
  startTimer();
}

function buildRoster() {
  const fragment = document.createDocumentFragment();

  players.forEach((player, index) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = "roster-card";
    card.innerHTML = `
      <img src="${player.photo}" alt="" loading="lazy">
      <span>
        <span>${String(player.number).padStart(2, "0")} · ${player.group}</span>
        <strong>${player.name}</strong>
        <small>${player.position}</small>
      </span>
    `;
    card.addEventListener("click", () => {
      elements.rosterDialog.close();
      goToPlayer(index);
    });
    fragment.append(card);
  });

  elements.rosterGrid.append(fragment);
}

function openDialog(dialog) {
  setPaused(true);
  dialog.showModal();
}

function saveInterval(seconds) {
  intervalSeconds = clamp(Number(seconds), 1, 15);
  localStorage.setItem("cv-kiosk-interval", String(intervalSeconds));
  startTimer();
}

elements.previousButton.addEventListener("click", () => goToPlayer(currentIndex - 1));
elements.nextButton.addEventListener("click", () => goToPlayer(currentIndex + 1));
elements.pauseButton.addEventListener("click", () => setPaused(!isPaused));
elements.rosterButton.addEventListener("click", () => openDialog(elements.rosterDialog));
elements.settingsButton.addEventListener("click", () => openDialog(elements.settingsDialog));

elements.fullscreenButton.addEventListener("click", async () => {
  if (document.fullscreenElement) {
    await document.exitFullscreen();
  } else {
    await document.documentElement.requestFullscreen();
  }
});

elements.intervalInput.addEventListener("input", (event) => {
  elements.intervalValue.textContent = event.target.value;
});

elements.saveButton.addEventListener("click", () => {
  saveInterval(elements.intervalInput.value);
  elements.settingsDialog.close();
  setPaused(false);
});

elements.resetButton.addEventListener("click", () => {
  elements.intervalInput.value = defaultIntervalSeconds;
  elements.intervalValue.textContent = defaultIntervalSeconds;
});

document.querySelectorAll("[data-close]").forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(`#${button.dataset.close}`).close();
  });
});

[elements.rosterDialog, elements.settingsDialog].forEach((dialog) => {
  dialog.addEventListener("close", () => {
    if (!elements.rosterDialog.open && !elements.settingsDialog.open) {
      setPaused(false);
    }
  });
});

document.addEventListener("keydown", (event) => {
  if (event.key === "ArrowRight") goToPlayer(currentIndex + 1);
  if (event.key === "ArrowLeft") goToPlayer(currentIndex - 1);
  if (event.key === " ") {
    event.preventDefault();
    setPaused(!isPaused);
  }
  if (event.key.toLowerCase() === "f") elements.fullscreenButton.click();
  if (event.key.toLowerCase() === "r") openDialog(elements.rosterDialog);
  if (event.key.toLowerCase() === "s") openDialog(elements.settingsDialog);
});

document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    window.clearInterval(timerId);
  } else {
    startTimer();
  }
});

elements.totalPlayers.textContent = players.length;
buildRoster();
preloadPhotos();
renderPlayer(0, true);
startTimer();
