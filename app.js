const FOOD = [
  {
    id: "fish",
    name: "小鱼饭团",
    cost: 10,
    detail: "饥饿-26 心情+8"
  },
  {
    id: "fruit",
    name: "水果拼盘",
    cost: 8,
    detail: "健康+10 心情+4"
  },
  {
    id: "cake",
    name: "草莓蛋糕",
    cost: 12,
    detail: "心情+15 健康-4"
  },
  {
    id: "milk",
    name: "暖暖牛奶",
    cost: 7,
    detail: "精力+8 健康+2"
  }
];

const DRESS = [
  {
    slot: "hat",
    id: "none",
    name: "不戴帽子",
    cost: 0
  },
  {
    slot: "hat",
    id: "leaf",
    name: "小叶帽",
    cost: 0
  },
  {
    slot: "hat",
    id: "beret",
    name: "奶油贝雷帽",
    cost: 18
  },
  {
    slot: "hat",
    id: "star",
    name: "星星发卡",
    cost: 22
  },
  {
    slot: "collar",
    id: "mint",
    name: "薄荷项圈",
    cost: 0
  },
  {
    slot: "collar",
    id: "berry",
    name: "莓果项圈",
    cost: 10
  },
  {
    slot: "collar",
    id: "night",
    name: "夜空项圈",
    cost: 14
  }
];

const STAT_LABELS = [
  ["hunger", "饥饿"],
  ["mood", "心情"],
  ["energy", "精力"],
  ["health", "健康"],
  ["intelligence", "智力"],
  ["affection", "好感"]
];

const els = {
  form: document.querySelector("#joinForm"),
  playerName: document.querySelector("#playerName"),
  roomCode: document.querySelector("#roomCode"),
  status: document.querySelector("#connectionStatus"),
  roomLabel: document.querySelector("#roomLabel"),
  copyInvite: document.querySelector("#copyInvite"),
  speech: document.querySelector("#speechText"),
  petName: document.querySelector("#petName"),
  coins: document.querySelector("#coins"),
  players: document.querySelector("#players"),
  stats: document.querySelector("#stats"),
  foodGrid: document.querySelector("#foodGrid"),
  dressGrid: document.querySelector("#dressGrid"),
  memoryText: document.querySelector("#memoryText"),
  timeline: document.querySelector("#timeline"),
  catHat: document.querySelector("#catHat"),
  catCollar: document.querySelector("#catCollar"),
  cat: document.querySelector("#cat")
};

const state = {
  room: new URLSearchParams(location.search).get("room") || localStorage.getItem("roundCatRoom") || "COZY",
  playerId: localStorage.getItem("roundCatPlayerId") || crypto.randomUUID(),
  playerName: localStorage.getItem("roundCatPlayerName") || `玩家${Math.floor(Math.random() * 90 + 10)}`,
  snapshot: null,
  source: null,
  connected: false
};

localStorage.setItem("roundCatPlayerId", state.playerId);
els.playerName.value = state.playerName;
els.roomCode.value = state.room;

function clamp(value) {
  return Math.max(0, Math.min(100, Number(value) || 0));
}

function setStatus(text, online = false) {
  els.status.textContent = text;
  els.status.classList.toggle("is-online", online);
}

function connect() {
  if (state.source) state.source.close();
  state.room = (els.roomCode.value || "COZY").trim().toUpperCase();
  state.playerName = (els.playerName.value || "玩家").trim();
  localStorage.setItem("roundCatRoom", state.room);
  localStorage.setItem("roundCatPlayerName", state.playerName);
  els.roomLabel.textContent = `房间：${state.room}`;
  setStatus("连接中");

  const params = new URLSearchParams({
    room: state.room,
    playerId: state.playerId,
    playerName: state.playerName
  });
  state.source = new EventSource(`/api/events?${params.toString()}`);
  state.source.addEventListener("hello", () => {
    state.connected = true;
    setStatus("已联机", true);
  });
  state.source.addEventListener("message", (event) => {
    const message = JSON.parse(event.data);
    if (message.type === "state") {
      state.snapshot = message.state;
      render();
    }
  });
  state.source.onerror = () => {
    state.connected = false;
    setStatus("重连中");
  };
}

async function sendAction(type, payload = {}) {
  if (!state.connected) {
    setStatus("未连接");
    return;
  }

  const response = await fetch("/api/action", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      room: state.room,
      playerId: state.playerId,
      playerName: state.playerName,
      type,
      payload
    })
  });

  if (!response.ok) {
    const data = await response.json().catch(() => ({ error: "操作失败" }));
    els.speech.textContent = data.error || "操作失败";
  }
}

function renderStats(pet) {
  els.stats.innerHTML = STAT_LABELS.map(([key, label]) => {
    const value = clamp(pet[key]);
    return `
      <div class="stat ${key}">
        <div class="stat-top">
          <span>${label}</span>
          <span>${value}/100</span>
        </div>
        <div class="bar" aria-label="${label}">
          <div class="bar-fill" style="width:${value}%"></div>
        </div>
      </div>
    `;
  }).join("");
}

function renderPlayers(players) {
  const shown = players.slice(0, 2);
  while (shown.length < 2) shown.push({ name: "等待加入" });
  els.players.innerHTML = shown
    .map((player, index) => `<div class="player-chip">P${index + 1} · ${player.name}</div>`)
    .join("");
}

function renderFood(pet) {
  els.foodGrid.innerHTML = FOOD.map((food) => {
    const disabled = pet.coins < food.cost;
    return `
      <button class="food-button ${disabled ? "is-disabled" : ""}" data-food="${food.id}" ${disabled ? "disabled" : ""}>
        <span>${food.name}</span>
        <small>${food.detail} · ${food.cost}金币</small>
      </button>
    `;
  }).join("");
}

function renderDress(pet) {
  els.dressGrid.innerHTML = DRESS.map((item) => {
    const unlocked = pet.unlocked[item.slot].includes(item.id);
    const active = pet.outfit[item.slot] === item.id;
    const disabled = !unlocked && pet.coins < item.cost;
    const price = unlocked ? "已拥有" : `${item.cost}金币`;
    return `
      <button class="dress-button ${active ? "is-active" : ""} ${disabled ? "is-disabled" : ""}"
        data-slot="${item.slot}"
        data-item="${item.id}"
        ${disabled ? "disabled" : ""}>
        <span>${item.name}</span>
        <small>${item.slot === "hat" ? "帽子" : "项圈"} · ${price}</small>
      </button>
    `;
  }).join("");
}

function renderMemory(snapshot) {
  const pet = snapshot.pet;
  const foodLine = pet.memory.lastFood
    ? `上次${pet.memory.lastPlayer || "有人"}给我吃了${pet.memory.lastFood}，我还记得那个味道。`
    : pet.memory.lastAction;
  els.memoryText.textContent = foodLine;
  els.speech.textContent = pet.memory.lastAction || "我在认真生活。";
  els.timeline.innerHTML = snapshot.logs
    .slice()
    .reverse()
    .map((log) => `<div class="log-item">${log.text}</div>`)
    .join("");
}

function renderCat(pet) {
  els.cat.dataset.stage = pet.stage;
  els.catHat.className = `hat ${pet.outfit.hat === "none" ? "" : pet.outfit.hat}`;
  els.catCollar.className = `collar ${pet.outfit.collar}`;
}

function render() {
  if (!state.snapshot) return;
  const pet = state.snapshot.pet;
  els.roomLabel.textContent = `房间：${state.snapshot.id}`;
  els.petName.textContent = `${pet.name} · ${pet.stage}`;
  els.coins.textContent = pet.coins;
  renderPlayers(state.snapshot.players);
  renderStats(pet);
  renderFood(pet);
  renderDress(pet);
  renderMemory(state.snapshot);
  renderCat(pet);
}

els.form.addEventListener("submit", (event) => {
  event.preventDefault();
  connect();
});

els.foodGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-food]");
  if (!button) return;
  sendAction("feed", { foodId: button.dataset.food });
});

els.dressGrid.addEventListener("click", (event) => {
  const button = event.target.closest("[data-slot]");
  if (!button) return;
  sendAction("dress", { slot: button.dataset.slot, itemId: button.dataset.item });
});

document.querySelectorAll("[data-action]").forEach((button) => {
  button.addEventListener("click", () => sendAction(button.dataset.action));
});

els.copyInvite.addEventListener("click", async () => {
  const url = `${location.origin}${location.pathname}?room=${encodeURIComponent(state.room)}`;
  await navigator.clipboard.writeText(url).catch(() => {});
  els.copyInvite.textContent = "已复制";
  setTimeout(() => {
    els.copyInvite.textContent = "复制邀请链接";
  }, 1200);
});

renderFood({ coins: 80 });
renderDress({
  coins: 80,
  outfit: { hat: "leaf", collar: "mint" },
  unlocked: { hat: ["none", "leaf"], collar: ["mint"] }
});
connect();
