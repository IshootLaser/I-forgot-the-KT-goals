const FIRST_TURN_STORAGE_KEY = "kill-team-first-turn";
const firstTurnState = JSON.parse(localStorage.getItem(FIRST_TURN_STORAGE_KEY) || "{}");
const firstTurnList = document.querySelector("[data-first-turn-list]");

function saveFirstTurnState() {
  localStorage.setItem(FIRST_TURN_STORAGE_KEY, JSON.stringify(firstTurnState));
}

function renderFirstTurnRows() {
  const rowLabels = [
    ["部署 (重投)", ""],
    ["+1/-1", "第1轮"],
    ["+2/-2", "第2轮"],
    ["+3/-3", "第3轮"],
  ];
  firstTurnList.innerHTML = rowLabels.map(([label, roundLabel], index) => {
    const round = index + 1;
    const owner = firstTurnState[round] || "对手";
    const hasSelection = Object.prototype.hasOwnProperty.call(firstTurnState, round);
    return `
      <button class="first-turn-toggle${owner === "我" ? " is-me" : ""}${hasSelection ? " is-set" : ""}" type="button" data-round="${round}" aria-label="${label}${roundLabel ? ` ${roundLabel}` : ""}先手：${owner}" aria-pressed="${owner === "我"}">
        <span class="first-turn-round"><strong>${label}</strong><small>${roundLabel}</small></span>
        <span class="first-turn-side-icon first-turn-me-icon" aria-hidden="true">♙</span>
        <span class="first-turn-switch" aria-hidden="true">
          <span class="first-turn-option">我</span>
          <span class="first-turn-option">对手</span>
          <span class="first-turn-thumb"></span>
        </span>
        <span class="first-turn-side-icon first-turn-opponent-icon" aria-hidden="true">♟</span>
      </button>
    `;
  }).join("");

  firstTurnList.querySelectorAll("[data-round]").forEach((toggle) => {
    toggle.addEventListener("click", () => {
      const round = toggle.dataset.round;
      firstTurnState[round] = firstTurnState[round] === "我" ? "对手" : "我";
      saveFirstTurnState();
      renderFirstTurnRows();
    });
  });
}

renderFirstTurnRows();
