const TRACKER_STORAGE_KEY = "kill-team-tracker";
const trackerState = JSON.parse(localStorage.getItem(TRACKER_STORAGE_KEY) || "{}");
const statusValue = document.querySelector("[data-tracker-status]");
const log = document.querySelector("[data-tracker-log]");
const primaryPicker = document.querySelector("[data-primary-picker]");
const primaryOptions = document.querySelector("[data-primary-options]");
const primaryCards = window.KILL_TEAM_CARDS.filter((card) => card.cat === "primary");
const criticalPicker = document.querySelector("[data-critical-picker]");
const criticalOptions = document.querySelector("[data-critical-options]");
const criticalCards = window.KILL_TEAM_CARDS.filter((card) => card.cat === "crit");
const tacticalPicker = document.querySelector("[data-tactical-picker]");
const tacticalCategories = document.querySelector("[data-tactical-categories]");
const tacticalCardPicker = document.querySelector("[data-tactical-card-picker]");
const tacticalCategoryTitle = document.querySelector("[data-tactical-category-title]");
const tacticalOptions = document.querySelector("[data-tactical-options]");
const tacticalCards = window.KILL_TEAM_CARDS.filter((card) => card.cat === "tac");
const tacticalCategoryNames = [...new Set(tacticalCards.map((card) => card.archetype))];
const primaryChooseButton = document.querySelector("[data-action=choose-primary]");
const criticalChooseButton = document.querySelector("[data-action=choose-critical]");
const tacticalChooseButton = document.querySelector("[data-action=choose-secondary]");
const confirmButton = document.querySelector("[data-action=confirm]");
const revealButton = document.querySelector("[data-action=reveal-tactical]");
const tacticalReveal = document.querySelector("[data-tactical-reveal]");
const tacticalRevealCard = document.querySelector("[data-tactical-reveal-card]");
const criticalReveal = document.querySelector("[data-critical-reveal]");
const criticalRevealCard = document.querySelector("[data-critical-reveal-card]");
let viewingSelections = false;
const backToTopButton = document.querySelector("[data-back-to-top]");

primaryOptions.innerHTML = primaryCards.map((card) => `
  <div class="primary-card-choice" data-primary-id="${card.id}" data-primary-title="${card.title}">
    ${renderCard(card)}
  </div>
`).join("");

tacticalCategories.innerHTML = tacticalCategoryNames.map((category) => `
  <button class="tactical-category" type="button" data-tactical-category="${category}">${category}</button>
`).join("");

criticalOptions.innerHTML = criticalCards.map((card) => `
  <div class="critical-card-choice" data-critical-id="${card.id}" data-critical-title="${card.title}">
    ${renderCard(card)}
  </div>
`).join("");

function saveTrackerState() {
  localStorage.setItem(TRACKER_STORAGE_KEY, JSON.stringify(trackerState));
}

function updateTrackerStatus() {
  const selections = [
    trackerState.criticalTask && `关键行动 · ${trackerState.criticalTask.title}`,
    trackerState.primaryTask && `主要任务 · ${trackerState.primaryTask.title}`,
    trackerState.tacticalTask && `战术行动 · ${trackerState.tacticalTask.title}`,
  ].filter(Boolean);
  primaryChooseButton.classList.toggle("is-selected", Boolean(trackerState.primaryTask));
  criticalChooseButton.classList.toggle("is-selected", Boolean(trackerState.criticalTask));
  tacticalChooseButton.classList.toggle("is-selected", Boolean(trackerState.tacticalTask));
  primaryChooseButton.setAttribute("aria-pressed", Boolean(trackerState.primaryTask));
  criticalChooseButton.setAttribute("aria-pressed", Boolean(trackerState.criticalTask));
  tacticalChooseButton.setAttribute("aria-pressed", Boolean(trackerState.tacticalTask));
  const canReveal = Boolean(trackerState.lockedAt && trackerState.tacticalTask);
  revealButton.disabled = !canReveal;
  revealButton.textContent = trackerState.tacticalRevealed ? "已触发揭示" : "触发揭示";
  revealButton.classList.toggle("primary", Boolean(trackerState.tacticalRevealed));
  if (trackerState.lockedAt && trackerState.criticalTask) {
    const revealedCard = criticalCards.find((card) => card.id === trackerState.criticalTask.id);
    if (revealedCard) {
      criticalRevealCard.innerHTML = renderCard(revealedCard);
      criticalReveal.hidden = false;
    }
  } else {
    criticalRevealCard.innerHTML = "";
    criticalReveal.hidden = true;
  }
  if (trackerState.tacticalRevealed && trackerState.tacticalTask) {
    const revealedCard = tacticalCards.find((card) => card.id === trackerState.tacticalTask.id);
    if (revealedCard) {
      tacticalRevealCard.innerHTML = renderCard(revealedCard);
      tacticalReveal.hidden = false;
    }
  } else {
    tacticalRevealCard.innerHTML = "";
    tacticalReveal.hidden = true;
  }
  if (trackerState.lockedAt) {
    const lockTime = new Date(trackerState.lockedAt).toLocaleString("zh-CN", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });
    statusValue.textContent = `选择在 ${lockTime} 锁定`;
    log.textContent = "选择已锁定。点击“查看选择”仅查看已锁定的选择。";
    confirmButton.textContent = "查看选择";
    confirmButton.classList.toggle("primary", viewingSelections);
    return;
  }

  statusValue.textContent = selections.length ? selections.join(" · ") : "等待选择主要任务";
  log.innerHTML = selections.length
    ? `已记录：<strong>${selections.join(" · ")}</strong>。选择已保存在本机浏览器中。`
    : "尚未记录主要任务。";
  confirmButton.textContent = "确认";
  confirmButton.classList.remove("primary");
}

function showLockedSelections() {
  criticalOptions.querySelectorAll("[data-critical-id]").forEach((cardChoice) => {
    cardChoice.hidden = cardChoice.dataset.criticalId !== trackerState.criticalTask?.id;
  });
  primaryOptions.querySelectorAll("[data-primary-id]").forEach((cardChoice) => {
    cardChoice.hidden = cardChoice.dataset.primaryId !== trackerState.primaryTask?.id;
  });

  const selectedTacticalCard = tacticalCards.find((card) => card.id === trackerState.tacticalTask?.id);
  tacticalCategories.hidden = true;
  tacticalCardPicker.hidden = !selectedTacticalCard;
  if (selectedTacticalCard) {
    tacticalCategoryTitle.textContent = `${trackerState.tacticalTask.category} · 已选择`;
    tacticalOptions.innerHTML = `
      <div class="tactical-card-choice" data-tactical-id="${selectedTacticalCard.id}">
        ${renderCard(selectedTacticalCard)}
      </div>
    `;
  }
}

function resetSelectionChoices() {
  criticalOptions.querySelectorAll("[data-critical-id]").forEach((cardChoice) => {
    cardChoice.hidden = false;
  });
  primaryOptions.querySelectorAll("[data-primary-id]").forEach((cardChoice) => {
    cardChoice.hidden = false;
  });
  tacticalCategories.hidden = false;
  tacticalCardPicker.hidden = true;
  tacticalOptions.innerHTML = "";
}

function hideSelectionPickers() {
  viewingSelections = false;
  resetSelectionChoices();
  criticalPicker.hidden = true;
  primaryPicker.hidden = true;
  tacticalPicker.hidden = true;
}

function showPrimaryPicker() {
  if (trackerState.lockedAt) return;
  primaryPicker.hidden = false;
  criticalPicker.hidden = true;
  tacticalPicker.hidden = true;
  primaryPicker.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function showCriticalPicker() {
  if (trackerState.lockedAt) return;
  criticalPicker.hidden = false;
  primaryPicker.hidden = true;
  tacticalPicker.hidden = true;
  criticalPicker.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

function showTacticalPicker() {
  if (trackerState.lockedAt) return;
  criticalPicker.hidden = true;
  primaryPicker.hidden = true;
  tacticalPicker.hidden = false;
  tacticalCardPicker.hidden = true;
  tacticalPicker.scrollIntoView({ behavior: "smooth", block: "nearest" });
}

document.querySelector("[data-action=choose-primary]").addEventListener("click", showPrimaryPicker);
document.querySelector("[data-action=choose-critical]").addEventListener("click", showCriticalPicker);
document.querySelector("[data-action=choose-secondary]").addEventListener("click", showTacticalPicker);
document.querySelector("[data-action=confirm]").addEventListener("click", () => {
  if (trackerState.lockedAt) {
    viewingSelections = !viewingSelections;
    primaryPicker.hidden = !viewingSelections;
    criticalPicker.hidden = true;
    tacticalPicker.hidden = !viewingSelections || Boolean(trackerState.tacticalRevealed);
    if (viewingSelections) showLockedSelections();
    else resetSelectionChoices();
    updateTrackerStatus();
    log.textContent = viewingSelections
      ? "当前为查看模式，清除选择后才能重新编辑。"
      : "已隐藏锁定的任务选择。";
    return;
  }

  const selections = [trackerState.criticalTask, trackerState.primaryTask, trackerState.tacticalTask].filter(Boolean);
  if (!selections.length) {
    log.textContent = "请先选择任务。";
    return;
  }

  trackerState.lockedAt = new Date().toISOString();
  delete trackerState.tacticalRevealed;
  saveTrackerState();
  viewingSelections = false;
  primaryPicker.hidden = true;
  criticalPicker.hidden = true;
  tacticalPicker.hidden = true;
  updateTrackerStatus();
});
revealButton.addEventListener("click", () => {
  if (revealButton.disabled || !trackerState.tacticalTask) return;
  trackerState.tacticalRevealed = true;
  saveTrackerState();
  tacticalPicker.hidden = true;
  updateTrackerStatus();
  log.textContent = "战术行动已揭示。";
  tacticalReveal.scrollIntoView({ behavior: "smooth", block: "start" });
});
document.querySelector("[data-action=clear-selection]").addEventListener("click", () => {
  localStorage.removeItem(TRACKER_STORAGE_KEY);
  localStorage.removeItem("kill-team-first-turn");
  delete trackerState.primaryTask;
  delete trackerState.criticalTask;
  delete trackerState.tacticalTask;
  delete trackerState.lockedAt;
  delete trackerState.tacticalRevealed;
  viewingSelections = false;
  resetSelectionChoices();
  primaryPicker.hidden = true;
  criticalPicker.hidden = true;
  tacticalPicker.hidden = true;
  updateTrackerStatus();
  log.textContent = "已清除本机保存的任务选择。";
});

document.querySelectorAll("[data-critical-id]").forEach((cardChoice) => {
  cardChoice.addEventListener("click", (event) => {
    if (trackerState.lockedAt) return;
    event.preventDefault();
    event.stopPropagation();
    trackerState.criticalTask = {
      id: cardChoice.dataset.criticalId,
      title: cardChoice.dataset.criticalTitle,
    };
    saveTrackerState();
    criticalPicker.hidden = true;
    updateTrackerStatus();
    document.querySelector(".tracker-panel").scrollIntoView({ behavior: "smooth", block: "start" });
  }, true);
});

document.querySelectorAll("[data-primary-id]").forEach((cardChoice) => {
  cardChoice.addEventListener("click", (event) => {
    if (trackerState.lockedAt) return;
    event.preventDefault();
    event.stopPropagation();
    trackerState.primaryTask = {
      id: cardChoice.dataset.primaryId,
      title: cardChoice.dataset.primaryTitle,
    };
    saveTrackerState();
    primaryPicker.hidden = true;
    updateTrackerStatus();
    document.querySelector(".tracker-panel").scrollIntoView({ behavior: "smooth", block: "start" });
  }, true);
});

document.querySelectorAll("[data-tactical-category]").forEach((button) => {
  button.addEventListener("click", () => {
    if (trackerState.lockedAt) return;
    const category = button.dataset.tacticalCategory;
    const cards = tacticalCards.filter((card) => card.archetype === category);
    tacticalCategoryTitle.textContent = `${category} · 选择 1 张卡`;
    tacticalOptions.innerHTML = cards.map((card) => `
      <div class="tactical-card-choice" data-tactical-id="${card.id}" data-tactical-title="${card.title}">
        ${renderCard(card)}
      </div>
    `).join("");
    tacticalCardPicker.hidden = false;
    tacticalCardPicker.scrollIntoView({ behavior: "smooth", block: "nearest" });

    tacticalOptions.querySelectorAll("[data-tactical-id]").forEach((cardChoice) => {
      cardChoice.addEventListener("click", (event) => {
        if (trackerState.lockedAt) return;
        event.preventDefault();
        event.stopPropagation();
        trackerState.tacticalTask = {
          id: cardChoice.dataset.tacticalId,
          title: cardChoice.dataset.tacticalTitle,
          category,
        };
        delete trackerState.tacticalRevealed;
        saveTrackerState();
        tacticalPicker.hidden = true;
        updateTrackerStatus();
        document.querySelector(".tracker-panel").scrollIntoView({ behavior: "smooth", block: "start" });
      }, true);
    });
  });
});

window.addEventListener("pageshow", () => {
  hideSelectionPickers();
  updateTrackerStatus();
});

backToTopButton.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

hideSelectionPickers();
updateTrackerStatus();
