    const CARDS_DATA = [
      // ----- 1. 主要行动 OP (Primary Ops) - 3张统一猩红卡面与完全一致卡背 -----
      {
        id: "primary-crit-op",
        cat: "primary",
        categoryName: "主要行动 OP",
        type: "主要行动卡",
        title: "主要行动：关键行动",
        subtitle: "PRIMARY OP : CRITICAL OPERATION",
        icon: "primary",
        colorScheme: "red",
        cornerColor: "#ef4444",
        badge: "第 1 转折点 · 战略计划",
        front: {
          tag: "战略计划 · 秘密选择",
          ruleHtml: `
            <div class="text-[12.5px] sm:text-[13px] leading-relaxed space-y-2.5 mt-1">
              <p class="text-neutral-200">在第一转折点中，作为一次<b>战略计划</b>，将本卡面朝下放置在一旁（或隐藏一枚对应骰子），秘密选择<b>关键行动 OP (CRITICAL OP)</b> 作为自己的主要行动。</p>
              <div class="p-3 rounded bg-red-950/50 border border-red-600/50 text-red-200 my-2">
                <div class="font-bold text-xs sm:text-sm flex items-center justify-between text-red-300">
                  <span>目标行动：关键行动 OP</span>
                  <span class="font-mono-kt text-[10.5px] leading-none bg-black/80 px-2 py-1 rounded border border-red-700/60 text-red-300 inline-block">CRIT OP</span>
                </div>
                <div class="text-[12px] mt-1 text-neutral-300 leading-snug">
                  通过执行任务行动和控制目标标识来获得 VP（常规上限 6 VP）。
                </div>
              </div>
              <div class="border-t border-neutral-700/80 pt-2">
                <div class="text-red-400 font-bold text-xs sm:text-sm leading-normal">胜利点数奖励 (VP)</div>
                <p class="text-[12.5px] sm:text-[13px] text-neutral-200 mt-1 leading-snug">
                  战斗结束时，双方同时揭示自己的主要行动 OP。从<b>关键行动 OP</b>获得额外 VP，数量等于通过该行动 OP 所获 <b>VP 数量的一半（向上取整）</b>。
                </p>
                <p class="text-[11px] text-red-300 font-mono-kt mt-1 font-semibold leading-normal">※ 若关键行动拿到 6 VP，本卡提供最高 +3 额外 VP。</p>
              </div>
            </div>
          `,
          footer: "PRIMARY OPERATION · CRIT OP"
        },
        back: {
          title: "主要行动",
          subtitle: "PRIMARY OPERATION",
          symbol: "skulls_ring",
          color: "red",
          cornerColor: "#ef4444",
          borderColor: "border-red-600/70",
          tagline: "FIRST TURNING POINT STRATEGIC PLOY"
        }
      },
      {
        id: "primary-tac-op",
        cat: "primary",
        categoryName: "主要行动 OP",
        type: "主要行动卡",
        title: "主要行动：战术行动",
        subtitle: "PRIMARY OP : TACTICAL OPERATION",
        icon: "primary",
        colorScheme: "red",
        cornerColor: "#ef4444",
        badge: "第 1 转折点 · 战略计划",
        front: {
          tag: "战略计划 · 秘密选择",
          ruleHtml: `
            <div class="text-[12.5px] sm:text-[13px] leading-relaxed space-y-2.5 mt-1">
              <p class="text-neutral-200">在第一转折点中，作为一次<b>战略计划</b>，将本卡面朝下放置在一旁（或隐藏一枚对应骰子），秘密选择<b>战术行动 OP (TACTICAL OP)</b> 作为自己的主要行动。</p>
              <div class="p-3 rounded bg-red-950/50 border border-red-600/50 text-red-200 my-2">
                <div class="font-bold text-xs sm:text-sm flex items-center justify-between text-red-300">
                  <span>目标行动：战术行动 OP</span>
                  <span class="font-mono-kt text-[10.5px] leading-none bg-black/80 px-2 py-1 rounded border border-red-700/60 text-red-300 inline-block">TAC OP</span>
                </div>
                <div class="text-[12px] mt-1 text-neutral-300 leading-snug">
                  根据杀戮小队原型秘密选择并达成条件所获的 VP（常规上限 6 VP）。
                </div>
              </div>
              <div class="border-t border-neutral-700/80 pt-2">
                <div class="text-red-400 font-bold text-xs sm:text-sm leading-normal">胜利点数奖励 (VP)</div>
                <p class="text-[12.5px] sm:text-[13px] text-neutral-200 mt-1 leading-snug">
                  战斗结束时，双方同时揭示自己的主要行动 OP。从<b>战术行动 OP</b>获得额外 VP，数量等于通过该行动 OP 所获 <b>VP 数量的一半（向上取整）</b>。
                </p>
                <p class="text-[11px] text-red-300 font-mono-kt mt-1 font-semibold leading-normal">※ 若战术行动拿到 6 VP，本卡提供最高 +3 额外 VP。</p>
              </div>
            </div>
          `,
          footer: "PRIMARY OPERATION · TAC OP"
        },
        back: {
          title: "主要行动",
          subtitle: "PRIMARY OPERATION",
          symbol: "skulls_ring",
          color: "red",
          cornerColor: "#ef4444",
          borderColor: "border-red-600/70",
          tagline: "FIRST TURNING POINT STRATEGIC PLOY"
        }
      },
      {
        id: "primary-kill-op",
        cat: "primary",
        categoryName: "主要行动 OP",
        type: "主要行动卡",
        title: "主要行动：击杀行动",
        subtitle: "PRIMARY OP : KILL OPERATION",
        icon: "primary",
        colorScheme: "red",
        cornerColor: "#ef4444",
        badge: "第 1 转折点 · 战略计划",
        front: {
          tag: "战略计划 · 秘密选择",
          ruleHtml: `
            <div class="text-[12.5px] sm:text-[13px] leading-relaxed space-y-2.5 mt-1">
              <p class="text-neutral-200">在第一转折点中，作为一次<b>战略计划</b>，将本卡面朝下放置在一旁（或隐藏一枚对应骰子），秘密选择<b>击杀行动 OP (KILL OP)</b> 作为自己的主要行动。</p>
              <div class="p-3 rounded bg-red-950/50 border border-red-600/50 text-red-200 my-2">
                <div class="font-bold text-xs sm:text-sm flex items-center justify-between text-red-300">
                  <span>目标行动：击杀行动 OP</span>
                  <span class="font-mono-kt text-[10.5px] leading-none bg-black/80 px-2 py-1 rounded border border-red-700/60 text-red-300 inline-block">KILL OP</span>
                </div>
                <div class="text-[12px] mt-1 text-neutral-300 leading-snug">
                  通过使敌方特工残废、提升击杀等级所获的 VP（常规上限 6 VP）。
                </div>
              </div>
              <div class="border-t border-neutral-700/80 pt-2">
                <div class="text-red-400 font-bold text-xs sm:text-sm leading-normal">胜利点数奖励 (VP)</div>
                <p class="text-[12.5px] sm:text-[13px] text-neutral-200 mt-1 leading-snug">
                  战斗结束时，双方同时揭示自己的主要行动 OP。从<b>击杀行动 OP</b>获得额外 VP，数量等于通过该行动 OP 所获 <b>VP 数量的一半（向上取整）</b>。
                </p>
                <p class="text-[11px] text-red-300 font-mono-kt mt-1 font-semibold leading-normal">※ 若击杀行动拿到 6 VP，本卡提供最高 +3 额外 VP。</p>
              </div>
            </div>
          `,
          footer: "PRIMARY OPERATION · KILL OP"
        },
        back: {
          title: "主要行动",
          subtitle: "PRIMARY OPERATION",
          symbol: "skulls_ring",
          color: "red",
          cornerColor: "#ef4444",
          borderColor: "border-red-600/70",
          tagline: "FIRST TURNING POINT STRATEGIC PLOY"
        }
      },

      // ----- 2. 击杀行动 OP (Kill Op & 阶梯分对照表) -----
      {
        id: "kill-op",
        cat: "kill",
        categoryName: "击杀行动 OP",
        type: "击杀行动",
        title: "击杀行动",
        subtitle: "KILL OPERATION",
        icon: "skull",
        colorScheme: "red",
        cornerColor: "#ef4444",
        badge: "常规上限 6 VP",
        front: {
          tag: "击杀等级与残废结算",
          ruleHtml: `
            <div class="text-[12px] sm:text-[12.5px] leading-snug space-y-1.5">
              <p class="text-neutral-200">在游戏开始时，您不会拥有击杀等级。随着敌方特工被残废，您的击杀等级提升，最多到 5 级。</p>
              <ul class="list-disc list-inside text-neutral-100 text-[11.5px] sm:text-[12px] space-y-0.5">
                <li>每当在您提升到新的击杀等级时：<b>获得 1 VP</b></li>
                <li>在对战结束时，如果您的击杀等级大于您的对手：<b>获得 1 VP</b></li>
              </ul>
              <div class="border border-neutral-700 rounded overflow-hidden mt-1 shadow-md">
                <table class="w-full text-center text-[10.5px] sm:text-[11px] font-mono-kt border-collapse bg-neutral-950/80">
                  <thead>
                    <tr class="bg-red-950/80 text-red-300 border-b border-neutral-700">
                      <th class="py-0.5 px-1">起始数量</th>
                      <th class="py-0.5">1级</th><th class="py-0.5">2级</th><th class="py-0.5">3级</th><th class="py-0.5">4级</th><th class="py-0.5">5级</th>
                    </tr>
                  </thead>
                  <tbody class="divide-y divide-neutral-800 text-neutral-200 font-semibold">
                    <tr><td class="bg-neutral-900 font-bold text-amber-400 py-0.5">5</td><td>1</td><td>2</td><td>3</td><td>4</td><td>5</td></tr>
                    <tr><td class="bg-neutral-900 font-bold text-amber-400 py-0.5">6</td><td>1</td><td>2</td><td>4</td><td>5</td><td>6</td></tr>
                    <tr><td class="bg-neutral-900 font-bold text-amber-400 py-0.5">7</td><td>1</td><td>3</td><td>4</td><td>6</td><td>7</td></tr>
                    <tr><td class="bg-neutral-900 font-bold text-amber-400 py-0.5">8</td><td>2</td><td>3</td><td>5</td><td>6</td><td>8</td></tr>
                    <tr><td class="bg-neutral-900 font-bold text-amber-400 py-0.5">9</td><td>2</td><td>4</td><td>5</td><td>7</td><td>9</td></tr>
                    <tr><td class="bg-neutral-900 font-bold text-amber-400 py-0.5">10</td><td>2</td><td>4</td><td>6</td><td>8</td><td>10</td></tr>
                    <tr><td class="bg-neutral-900 font-bold text-amber-400 py-0.5">11</td><td>2</td><td>4</td><td>7</td><td>9</td><td>11</td></tr>
                    <tr><td class="bg-neutral-900 font-bold text-amber-400 py-0.5">12</td><td>2</td><td>5</td><td>7</td><td>10</td><td>12</td></tr>
                    <tr><td class="bg-neutral-900 font-bold text-amber-400 py-0.5">13</td><td>3</td><td>5</td><td>8</td><td>10</td><td>13</td></tr>
                    <tr><td class="bg-neutral-900 font-bold text-amber-400 py-0.5">14</td><td>3</td><td>6</td><td>8</td><td>11</td><td>14</td></tr>
                  </tbody>
                </table>
              </div>
              <p class="text-[10px] sm:text-[10.5px] text-neutral-400 italic pt-0.5">WCW专属FAQ：可消耗/消耗品构装体/变异害虫单位被残废不产生指示物且不计入击杀表。</p>
            </div>
          `,
          footer: "KILL OPERATION CARD"
        },
        back: {
          title: "击杀行动",
          subtitle: "KILL OPERATION",
          symbol: "skull",
          color: "red",
          tagline: "APPROVED OPS 2025"
        }
      },

      // ----- 3. 关键行动 OP (Crit Ops 1~9) -----
      {
        id: "crit-op-1",
        cat: "crit",
        categoryName: "关键行动 OP",
        type: "关键行动 1",
        title: "1. 占领",
        subtitle: "SECURE",
        colorScheme: "amber",
        cornerColor: "#f59e0b",
        front: {
          actionName: "占领 (1 AP)",
          actionDetail: "▶ 该活跃特工控制的一个目标标识被您的杀戮小队占领，直到这个目标标识被敌方杀戮小队占领为止。<br>◆ 特工不能在第一转折点中执行此行动，也不能在位于一名敌方特工的控制范围内时执行此行动。",
          ruleHtml: `
            <div class="mt-2.5 pt-2 border-t border-neutral-700/80">
              <div class="text-amber-400 font-bold text-xs sm:text-sm mb-1">胜利点数 (VP)</div>
              <div class="text-[12px] sm:text-[12.5px] space-y-1.5 text-neutral-200 leading-snug">
                <p>在第一转折点之后的每个转折点结束时：</p>
                <p class="pl-2.5 border-l-2 border-amber-500/60">· 只要有任意目标标识被您的杀戮小队占领，您<b>获得 1 VP</b>。</p>
                <p class="pl-2.5 border-l-2 border-amber-500/60">· 如果您的杀戮小队占领的目标标识数量大于对手的杀戮小队，您<b>获得 1 VP</b>。</p>
              </div>
            </div>
          `,
          footer: "CRITICAL OP · 01"
        },
        back: { title: "关键行动", subtitle: "CRITICAL OPERATION", symbol: "target", color: "amber" }
      },
      {
        id: "crit-op-2",
        cat: "crit",
        categoryName: "关键行动 OP",
        type: "关键行动 2",
        title: "2. 掠夺",
        subtitle: "LOOT",
        colorScheme: "amber",
        cornerColor: "#f59e0b",
        front: {
          actionName: "掠夺 (1 AP)",
          actionDetail: "▶ 该活跃特工控制的一个目标标识被掠夺。<br>◆ 特工不能在第一转折点中执行此行动，也不能在位于一名敌方特工的控制范围内时执行此行动，也不能在该目标标识在此转折点中已经被掠夺的情况下执行此行动。",
          ruleHtml: `
            <div class="mt-2.5 pt-2 border-t border-neutral-700/80">
              <div class="text-amber-400 font-bold text-xs sm:text-sm mb-1">胜利点数 (VP)</div>
              <div class="text-[12px] sm:text-[12.5px] space-y-1.5 text-neutral-200 leading-snug">
                <p>每当一名己方特工执行掠夺行动时，您<b>获得 1 VP</b>。</p>
                <p class="text-neutral-400 text-[11px] sm:text-xs">（每个转折点中最多获得 2 VP）</p>
              </div>
            </div>
          `,
          footer: "CRITICAL OP · 02"
        },
        back: { title: "关键行动", subtitle: "CRITICAL OPERATION", symbol: "target", color: "amber" }
      },
      {
        id: "crit-op-3",
        cat: "crit",
        categoryName: "关键行动 OP",
        type: "关键行动 3",
        title: "3. 情报传输",
        subtitle: "TRANSMISSION",
        colorScheme: "amber",
        cornerColor: "#f59e0b",
        front: {
          actionName: "开始传输 (1 AP)",
          actionDetail: "▶ 该活跃特工控制的一个目标标识开始进行传输，直到下一个转折点开始为止。<br>◆ 特工不能在第一转折点中执行此行动，也不能在位于一名敌方特工的控制范围内时执行此行动。",
          ruleHtml: `
            <div class="mt-2.5 pt-2 border-t border-neutral-700/80">
              <div class="text-amber-400 font-bold text-xs sm:text-sm mb-1">胜利点数 (VP)</div>
              <div class="text-[12px] sm:text-[12.5px] space-y-1.5 text-neutral-200 leading-snug">
                <p>在第一转折点之后的每个转折点结束时：</p>
                <p class="pl-2.5 border-l-2 border-amber-500/60">· 如果己方特工控制正在进行传输的任何目标标识，您<b>获得 1 VP</b>。</p>
                <p class="pl-2.5 border-l-2 border-amber-500/60">· 如果己方特工控制的正在进行传输的目标标识数量大于敌方特工，您<b>获得 1 VP</b>。</p>
              </div>
            </div>
          `,
          footer: "CRITICAL OP · 03"
        },
        back: { title: "关键行动", subtitle: "CRITICAL OPERATION", symbol: "target", color: "amber" }
      },
      {
        id: "crit-op-4",
        cat: "crit",
        categoryName: "关键行动 OP",
        type: "关键行动 4",
        title: "4. 宝球",
        subtitle: "ORB",
        colorScheme: "amber",
        cornerColor: "#f59e0b",
        front: {
          actionName: "移动宝球 (1 AP)",
          actionDetail: "【额外规则】在战斗开始时，中央的目标标识拥有宝球指示物。<br>▶ 如果活跃特工控制了拥有宝球指示物的目标标识，按照以下规则移动宝球：<br>· 如果中央目标标识拥有宝球指示物，将其移动到任一玩家的目标标识处（由你选择）。<br>· 如果一名玩家的目标标识拥有宝球指示物，将其移动到中央目标标识处。<br>◆ 特工不能在第一转折点中执行此行动，不能在位于一名敌方特工的控制范围内时执行此行动，不能在未控制拥有宝球指示物的目标标识时执行此行动。",
          ruleHtml: `
            <div class="mt-2.5 pt-2 border-t border-neutral-700/80">
              <div class="text-amber-400 font-bold text-xs sm:text-sm mb-1">胜利点数 (VP)</div>
              <div class="text-[12px] sm:text-[12.5px] space-y-1.5 text-neutral-200 leading-snug">
                <p>在第一转折点之后的每个转折点结束时：</p>
                <p class="pl-2.5 border-l-2 border-amber-500/60">· 己方特工每控制一个<b>没有宝球指示物</b>的目标标识，您<b>获得 1 VP</b>。</p>
              </div>
            </div>
          `,
          footer: "CRITICAL OP · 04"
        },
        back: { title: "关键行动", subtitle: "CRITICAL OPERATION", symbol: "target", color: "amber" }
      },
      {
        id: "crit-op-5",
        cat: "crit",
        categoryName: "关键行动 OP",
        type: "关键行动 5",
        title: "5. 申索主张",
        subtitle: "STAKE CLAIM",
        colorScheme: "amber",
        cornerColor: "#f59e0b",
        front: {
          actionName: "申索主张 (战略计划 · 计划步骤)",
          actionDetail: "【额外规则】在第一个战略阶段之后的每个战略阶段的计划步骤开始时，从拥有先手权的玩家开始，每名玩家必须为当前转折点选择一个目标标识和下列主张中的一项：<br>· 在本转折点结束时，己方特工将控制该目标标识。<br>· 在本转折点结束时，敌方特工不会争夺该目标标识。<br>◆ 同一场对战中，每一名玩家选择每一个目标标识的次数不能大于 1 次（因此玩家在对战中必须将每个目标标识选择一次）。",
          ruleHtml: `
            <div class="mt-2.5 pt-2 border-t border-neutral-700/80">
              <div class="text-amber-400 font-bold text-xs sm:text-sm mb-1">胜利点数 (VP)</div>
              <div class="text-[12px] sm:text-[12.5px] space-y-1.5 text-neutral-200 leading-snug">
                <p>在第一个转折点后的每个转折点结束时：</p>
                <p class="pl-2.5 border-l-2 border-amber-500/60">· 如果己方特工控制的目标标识数量，大于敌方特工控制的目标标识数量，您<b>获得 1 VP</b>。</p>
                <p class="pl-2.5 border-l-2 border-amber-500/60">· 如果您选择的主张达成，您<b>获得 1 VP</b>。</p>
              </div>
            </div>
          `,
          footer: "CRITICAL OP · 05"
        },
        back: { title: "关键行动", subtitle: "CRITICAL OPERATION", symbol: "target", color: "amber" }
      },
      {
        id: "crit-op-6",
        cat: "crit",
        categoryName: "关键行动 OP",
        type: "关键行动 6",
        title: "6. 能量电池",
        subtitle: "ENERGY CELLS",
        colorScheme: "amber",
        cornerColor: "#f59e0b",
        front: {
          actionName: "额外规则：拾取目标标识",
          actionDetail: "在以下的转折点中，特工可对所有目标标识执行拾取标识行动：<br>· 第二转折点：您必须额外花费 2 AP（该行动不能是无消耗的行动，并且此行动的 AP 不能被减少）。<br>· 第三转折点：您必须额外花费 1 AP（该行动不能是无消耗的行动，并且此行动的 AP 不能被减少）。<br>· 第四转折点：照常。<br>◆ 每当一名特工携带一枚目标标识时，该特工被移除并重新部署时，距离不能超过 6 寸。",
          ruleHtml: `
            <div class="mt-2.5 pt-2 border-t border-neutral-700/80">
              <div class="text-amber-400 font-bold text-xs sm:text-sm mb-1">胜利点数 (VP)</div>
              <div class="text-[12px] sm:text-[12.5px] space-y-1.5 text-neutral-200 leading-snug">
                <p>· 在第一个转折点后的每个转折点结束时，如果己方特工控制的目标标识数量，大于敌方特工控制的目标标识数量，您<b>获得 1 VP</b>。</p>
                <p>· 在战斗结束时，每有一个己方特工正在携带的目标标识，您<b>获得 1 VP</b>。</p>
              </div>
            </div>
          `,
          footer: "CRITICAL OP · 06"
        },
        back: { title: "关键行动", subtitle: "CRITICAL OPERATION", symbol: "target", color: "amber" }
      },
      {
        id: "crit-op-7",
        cat: "crit",
        categoryName: "关键行动 OP",
        type: "关键行动 7",
        title: "7. 下载",
        subtitle: "DOWNLOAD",
        colorScheme: "amber",
        cornerColor: "#f59e0b",
        front: {
          actionName: "下载 (1 AP)",
          actionDetail: "▶ 活跃特工控制的一个中央或对手目标标识被下载。<br>◆ 特工不能在第一、第二转折点中执行此行动，也不能在位于一名敌方特工的控制范围内时执行此行动，也不能在该目标标识在本次对战中已经被下载过的情况下执行此行动。",
          ruleHtml: `
            <div class="mt-2.5 pt-2 border-t border-neutral-700/80">
              <div class="text-amber-400 font-bold text-xs sm:text-sm mb-1">胜利点数 (VP)</div>
              <div class="text-[12px] sm:text-[12.5px] space-y-1 text-neutral-200 leading-snug">
                <p>· 在第一个转折点后的每个转折点结束时，如果己方特工控制的目标标识数量，大于敌方特工控制的目标标识数量，您<b>获得 1 VP</b>。在判断数量时，无视被下载过的目标标识。</p>
                <p>· 每当一名己方特工在第三转折点期间，执行下载行动时，您<b>获得 1 VP</b>。</p>
                <p>· 每当一名己方特工在第四转折点期间，执行下载行动时，您<b>获得 2 VP</b>。</p>
              </div>
            </div>
          `,
          footer: "CRITICAL OP · 07"
        },
        back: { title: "关键行动", subtitle: "CRITICAL OPERATION", symbol: "target", color: "amber" }
      },
      {
        id: "crit-op-8",
        cat: "crit",
        categoryName: "关键行动 OP",
        type: "关键行动 8",
        title: "8. 数据",
        subtitle: "DATA",
        colorScheme: "amber",
        cornerColor: "#f59e0b",
        front: {
          actionName: "编译数据 / 传输数据",
          actionDetail: "▶ <b>编译数据 (1 AP)</b>：活跃特工控制的一个目标标识获得 1 点数据点。使用一枚骰子或指示物来记录该目标标识上的数据点。<br>◆ 特工不能在第一转折点中执行此行动，也不能在位于一名敌方特工的控制范围内时执行此行动，也不能在该目标标识在此转折点中已经获得过 1 点数据点情况下执行此行动。<br>▶ <b>传输数据 (1 AP)</b>：针对活跃特工控制的一个目标标识，移除它的所有数据点。<br>◆ 特工不能在第一、第二、第三转折点中执行此行动，也不能在位于一名敌方特工的控制范围内时执行此行动，也不能在该目标标识没有可供移除的数据点的情况下执行此行动。",
          ruleHtml: `
            <div class="mt-2 pt-2 border-t border-neutral-700/80">
              <div class="text-amber-400 font-bold text-xs sm:text-sm mb-1">胜利点数 (VP)</div>
              <div class="text-[11.5px] sm:text-[12px] space-y-1 text-neutral-200 leading-snug">
                <p>· 在第二和第三转折点结束时，如果己方特工在此转折点期间，执行过的编译数据行动次数比敌方特工更多，您<b>获得 1 VP</b>。</p>
                <p>· 每当一名己方特工执行传输数据行动时，您获得的 VP 数量等于您移除的数据点的数量。</p>
              </div>
            </div>
          `,
          footer: "CRITICAL OP · 08"
        },
        back: { title: "关键行动", subtitle: "CRITICAL OPERATION", symbol: "target", color: "amber" }
      },
      {
        id: "crit-op-9",
        cat: "crit",
        categoryName: "关键行动 OP",
        type: "关键行动 9",
        title: "9. 重启",
        subtitle: "REBOOT",
        colorScheme: "amber",
        cornerColor: "#f59e0b",
        front: {
          actionName: "额外规则：钝化 / 重启 (2 AP)",
          actionDetail: "【额外规则】在设置战斗时，在部署目标标识后，将每个目标标识标为 1 至 3。在每个战略阶段的计划步骤开始时，每名玩家秘密选择一个目标标识，在手中藏一个骰子，对应该目标标识的数字。然后双方同时展示自己的选择。如果双方玩家选择的数字相同，该目标标识在此转折点期间处于钝化。如果双方选择不同，则双方都没有选择的目标标识在此转折点期间处于钝化。<br>▶ <b>任务行动：重启 (2 AP)</b>：活跃特工控制的一个钝化的目标标识，不再钝化。<br>◆ 特工不能在第一转折点中执行此行动，不能在位于一名敌方特工的控制范围内时执行此行动。",
          ruleHtml: `
            <div class="mt-2.5 pt-2 border-t border-neutral-700/80">
              <div class="text-amber-400 font-bold text-xs sm:text-sm mb-1">胜利点数 (VP)</div>
              <div class="text-[12px] sm:text-[12.5px] space-y-1 text-neutral-200 leading-snug">
                <p>在第一转折点之后的每个转折点结束时：</p>
                <p class="pl-2.5 border-l-2 border-amber-500/60">· 己方特工每控制一个目标标识，您<b>获得 1 VP</b>。在判断目标标识的数量时，忽略钝化的目标标识。</p>
              </div>
            </div>
          `,
          footer: "CRITICAL OP · 09"
        },
        back: { title: "关键行动", subtitle: "CRITICAL OPERATION", symbol: "target", color: "amber" }
      },

      // ----- 4. 战术行动 OP (Tac Ops 12张: 4大原型) -----
      // 搜索与摧毁 (Seek & Destroy)
      {
        id: "tac-sd-1",
        cat: "tac",
        archetype: "搜索与摧毁",
        categoryName: "战术行动 · 搜索与摧毁",
        type: "战术行动",
        title: "扫荡清理",
        subtitle: "SWEEP & CLEAR",
        colorScheme: "red",
        cornerColor: "#ef4444",
        front: {
          revealText: "第一次有一名正在争夺目标标识的敌方特工被残废时，或者第一次有一名己方特工执行清理行动时（以先达成的条件为准）。",
          actionName: "清理 (1 AP)",
          actionDetail: "【额外规则】当一名正在争夺一个目标标识的敌方特工被残废时，该目标标识获得一枚己方扫荡指示物（如果该目标标识还没有扫荡指示物），直到下一个战略阶段的就绪步骤前。<br>▶ <b>任务行动：清理 (1 AP)</b>：活跃特工控制的一个目标标识在本转折点中被清理。<br>◆ 特工不能在第一转折点中执行此行动，不能在位于一名敌方特工的控制范围内时执行此行动。",
          ruleHtml: `
            <div class="mt-1.5 pt-1.5 border-t border-neutral-700/80 text-[11.5px] sm:text-[12px] space-y-1 text-neutral-200 leading-snug">
              <div class="text-red-400 font-bold text-xs sm:text-sm">胜利点数 (VP)</div>
              <p>· 在第一转折点之后的每个转折点结束时，如果己方特工控制任意数量拥有己方扫荡指示物的目标标识，您<b>获得 1 VP</b>。</p>
              <p>· 如果上述条件成立，且上述目标标识本被清理过，您改为<b>获得 2 VP</b>。</p>
              <p class="text-neutral-400 text-[10.5px]">（每个转折点中，您通过本行动 OP 最多只能获得 2 VP）</p>
              <p class="text-neutral-400 italic text-[10px]">WCW专属FAQ：可消耗/消耗品构装体/变异害虫单位被残废不会产生扫荡指示物。</p>
            </div>
          `,
          footer: "SEEK & DESTROY"
        },
        back: { title: "战术行动", subtitle: "TACTICAL OPERATION", archetype: "搜索与摧毁", symbol: "sword", color: "red" }
      },
      {
        id: "tac-sd-2",
        cat: "tac",
        archetype: "搜索与摧毁",
        categoryName: "战术行动 · 搜索与摧毁",
        type: "战术行动",
        title: "主宰",
        subtitle: "DOMINATE",
        colorScheme: "red",
        cornerColor: "#ef4444",
        front: {
          revealText: "第一次有一名敌方特工被己方特工残废时。",
          actionName: "额外规则：主宰指示物",
          actionDetail: "每当一名己方特工将一名敌方特工残废时，该己方特工获得一枚己方主宰指示物。",
          ruleHtml: `
            <div class="mt-2 pt-2 border-t border-neutral-700/80 text-[12px] sm:text-[12.5px] space-y-1.5 text-neutral-200 leading-snug">
              <div class="text-red-400 font-bold text-xs sm:text-sm">胜利点数 (VP)</div>
              <p>在第三和第四转折点结束时，您可以从未残废的己方特工上移除主宰指示物。您每移除一枚，您<b>获得 1 VP</b>。</p>
              <p class="text-neutral-400 text-[11px]">（每个转折点中，您通过本行动 OP 最多获得 3 VP）</p>
              <p class="text-neutral-400 italic text-[10.5px]">WCW专属FAQ：击杀可消耗/消耗品构装体/变异害虫单位不会产生主宰指示物。</p>
            </div>
          `,
          footer: "SEEK & DESTROY"
        },
        back: { title: "战术行动", subtitle: "TACTICAL OPERATION", archetype: "搜索与摧毁", symbol: "sword", color: "red" }
      },
      {
        id: "tac-sd-3",
        cat: "tac",
        archetype: "搜索与摧毁",
        categoryName: "战术行动 · 搜索与摧毁",
        type: "战术行动",
        title: "击垮",
        subtitle: "ROUTE",
        colorScheme: "red",
        cornerColor: "#ef4444",
        front: {
          revealText: "您第一次通过本行动 OP 获得 VP 时。",
          actionName: "特工残废判定",
          actionDetail: "每当一名己方特工将一名敌方特工残废时：<br>· 如果该己方特工位于对手降落区的 6 寸内，您<b>获得 1 VP</b>；<br>· 如果上述条件成立，且该敌方特工的耐伤属性大于等于 12，您改为<b>获得 2 VP</b>。",
          ruleHtml: `
            <div class="mt-2 pt-2 border-t border-neutral-700/80 text-[12px] sm:text-[12.5px] space-y-1.5 text-neutral-200 leading-snug">
              <div class="text-red-400 font-bold text-xs sm:text-sm">胜利点数 (VP)</div>
              <p>在敌方降落区前沿斩杀敌人；您在每个转折点中，通过此行动 OP 最多获得 <b>2 VP</b>。</p>
              <p class="text-neutral-400 italic text-[10.5px]">WCW专属FAQ：残废可消耗/消耗品构装体/变异害虫单位不会获得 VP。</p>
            </div>
          `,
          footer: "SEEK & DESTROY"
        },
        back: { title: "战术行动", subtitle: "TACTICAL OPERATION", archetype: "搜索与摧毁", symbol: "sword", color: "red" }
      },

      // 侦察 (Recon)
      {
        id: "tac-recon-1",
        cat: "tac",
        archetype: "侦察",
        categoryName: "战术行动 · 侦察",
        type: "战术行动",
        title: "侧翼",
        subtitle: "FLANK",
        colorScheme: "green",
        cornerColor: "#10b981",
        front: {
          revealText: "作为一次战略计划。",
          actionName: "额外规则：侧翼控制判定",
          actionDetail: "画一条假想的中线，链接每个玩家杀戮区边界的中点，将杀戮区分为两个侧翼（左翼和右翼）。一名特工如果完全位于一个侧翼内，且位于对手领地内时，则该特工正在争夺该侧翼。如果争夺一个侧翼的己方特工的 APL 属性总和，大于正在争夺的敌方特工，则己方特工控制该侧翼。",
          ruleHtml: `
            <div class="mt-1.5 pt-1.5 border-t border-neutral-700/80 text-[11.5px] sm:text-[12px] space-y-1 text-neutral-200 leading-snug">
              <div class="text-green-400 font-bold text-xs sm:text-sm">胜利点数 (VP)</div>
              <p>在您揭示此行动 OP 后，在第一个转折点后的每个转折点结束时：</p>
              <p class="pl-2 border-l-2 border-green-500/60">· 己方特工每控制一个侧翼，您<b>获得 1 VP</b>。</p>
              <p class="pl-2 border-l-2 border-green-500/60">· 如果己方特工在上一转折点结束时也控制了该侧翼（第一个转折点除外），则您改为<b>获得 2 VP</b>。</p>
              <p class="text-neutral-400 text-[10.5px]">（每个转折点中，您最多通过此行动 OP 获得 2 VP）</p>
            </div>
          `,
          footer: "RECON"
        },
        back: { title: "战术行动", subtitle: "TACTICAL OPERATION", archetype: "侦察", symbol: "recon", color: "green" }
      },
      {
        id: "tac-recon-2",
        cat: "tac",
        archetype: "侦察",
        categoryName: "战术行动 · 侦察",
        type: "战术行动",
        title: "回收",
        subtitle: "RETRIEVAL",
        colorScheme: "green",
        cornerColor: "#10b981",
        front: {
          revealText: "您第一次通过此行动 OP 获得 VP 时。",
          actionName: "任务行动：回收 (1 AP)",
          actionDetail: "▶ 如果活跃特工控制了一个尚未被己方特工搜寻过的目标标识，那么该特工现在会携带一枚己方回收任务标识，且该目标标识视为被己方特工搜寻过。己方特工可对己方回收任务标识执行拾取标识行动。<br>◆ 特工不能在第一转折点中执行此行动，不能在位于一名敌方特工的控制范围内时执行此行动。",
          ruleHtml: `
            <div class="mt-2 pt-2 border-t border-neutral-700/80 text-[12px] sm:text-[12.5px] space-y-1.5 text-neutral-200 leading-snug">
              <div class="text-green-400 font-bold text-xs sm:text-sm">胜利点数 (VP)</div>
              <p>· 对于每个目标标识，当该标识第一次被己方特工搜寻时，您<b>获得 1 VP</b>。</p>
              <p>· 在对战结束时，己方特工每携带一枚回收任务标识，您<b>获得 1 VP</b>。</p>
            </div>
          `,
          footer: "RECON"
        },
        back: { title: "战术行动", subtitle: "TACTICAL OPERATION", archetype: "侦察", symbol: "recon", color: "green" }
      },
      {
        id: "tac-recon-3",
        cat: "tac",
        archetype: "侦察",
        categoryName: "战术行动 · 侦察",
        type: "战术行动",
        title: "刺探敌方动向",
        subtitle: "SCOUT ENEMY MOVEMENT",
        colorScheme: "green",
        cornerColor: "#10b981",
        front: {
          revealText: "第一次一名己方特工执行侦查行动时。",
          actionName: "任务行动：侦查 (1 AP)",
          actionDetail: "▶ 选择活跃特工可见、且位于其 6 寸外的一名就绪敌方特工，该敌方特工视为处于监视状态，直到下一个战略阶段的就绪步骤。<br>◆ 特工不能在拥有交战命令时执行此行动，不能在第一转折点中执行此行动，不能在位于一名敌方特工的控制范围内时执行此行动。",
          ruleHtml: `
            <div class="mt-2 pt-2 border-t border-neutral-700/80 text-[12px] sm:text-[12.5px] space-y-1.5 text-neutral-200 leading-snug">
              <div class="text-green-400 font-bold text-xs sm:text-sm">胜利点数 (VP)</div>
              <p>在第一个转折点之后的每个转折点结束时，每有一个处于监视状态的敌方特工对任何己方特工可见，您便<b>获得 1 VP</b>。（注意：上述己方特工不需要是执行过侦查行动的特工）</p>
              <p class="text-neutral-400 text-[11px]">（每个转折点中，您最多通过此行动 OP 获得 2 VP）</p>
            </div>
          `,
          footer: "RECON"
        },
        back: { title: "战术行动", subtitle: "TACTICAL OPERATION", archetype: "侦察", symbol: "recon", color: "green" }
      },

      // 安全保护 (Security)
      {
        id: "tac-sec-1",
        cat: "tac",
        archetype: "安全保护",
        categoryName: "战术行动 · 安全保护",
        type: "战术行动",
        title: "插上旗帜",
        subtitle: "PLANT BANNER",
        colorScheme: "blue",
        cornerColor: "#3b82f6",
        front: {
          revealText: "当您执行插上旗帜行动时。",
          actionName: "任务行动：插上旗帜 (1 AP)",
          actionDetail: "▶ 将己方旗帜任务标识放在位于活跃特工控制范围内、完全位于对手领地内、距离中立杀戮区边缘大于 5 寸的位置。特工可对己方旗帜任务标记执行拾取标识行动。<br>◆ 特工不能在第一转折点中执行此行动，不能在位于一名敌方特工的控制范围内时执行此行动，不能在一名字己方特工本次对战中已经执行过此行动后执行此行动。",
          ruleHtml: `
            <div class="mt-2 pt-2 border-t border-neutral-700/80 text-[12px] sm:text-[12.5px] space-y-1.5 text-neutral-200 leading-snug">
              <div class="text-blue-400 font-bold text-xs sm:text-sm">胜利点数 (VP)</div>
              <p>在第一个转折点后的每一个转折点结束时：</p>
              <p class="pl-2 border-l-2 border-blue-500/60">· 如果己方旗帜任务标示完全位于对手领地内，且己方特工控制该标记，您<b>获得 1 VP</b>。</p>
              <p class="pl-2 border-l-2 border-blue-500/60">· 如果上述条件成立，且没有敌方特工争夺该标记，您改为<b>获得 2 VP</b>。</p>
              <p class="text-neutral-400 text-[10.5px]">（注意：己方旗帜任务标识只能放在杀戮区上才能得分，被携带时不能）</p>
            </div>
          `,
          footer: "SECURITY"
        },
        back: { title: "战术行动", subtitle: "TACTICAL OPERATION", archetype: "安全保护", symbol: "shield", color: "blue" }
      },
      {
        id: "tac-sec-2",
        cat: "tac",
        archetype: "安全保护",
        categoryName: "战术行动 · 安全保护",
        type: "战术行动",
        title: "殉道者",
        subtitle: "MARTYRS",
        colorScheme: "blue",
        cornerColor: "#3b82f6",
        front: {
          revealText: "第一次正在争夺一枚目标标识的己方特工被残废时。",
          actionName: "额外规则：殉道者指示物",
          actionDetail: "每当一名正在争夺一枚目标标识的己方特工被残废时，该标记获得一枚己方殉道者指示物。<br><span class='text-[11px] text-neutral-400'>【WCW更新】每名特工只有第一次被残废时，才会获得殉道者指示物。因此如果一名特工被残废后重新部署（例如神圣技师之环的重生协议），然后再次被残废，不能再次获得殉道者指示物。</span>",
          ruleHtml: `
            <div class="mt-1.5 pt-1.5 border-t border-neutral-700/80 text-[11.5px] sm:text-[12px] space-y-1 text-neutral-200 leading-snug">
              <div class="text-blue-400 font-bold text-xs sm:text-sm">胜利点数 (VP)</div>
              <p>在第一个转折点后的每一个转折点结束时，如果己方特工正在争夺一个拥有 1 个或更多己方殉道者指示物的目标标识，您可以移除任意数量的上述指示物：</p>
              <p class="pl-2 border-l-2 border-blue-500/60">· 您每以此方式移除 1 枚指示物，您<b>获得 1 VP</b>。</p>
              <p class="pl-2 border-l-2 border-blue-500/60">· 如果己方特工还控制该目标标识，您改为<b>获得 2 VP</b>。</p>
              <p class="text-neutral-400 text-[10.5px]">（每个转折点中，您最多通过此行动 OP 获得 2 VP）</p>
              <p class="text-neutral-400 italic text-[10px]">WCW专属FAQ：可消耗/消耗品构装体/变异害虫单位被残废不会产生殉道者指示物。</p>
            </div>
          `,
          footer: "SECURITY"
        },
        back: { title: "战术行动", subtitle: "TACTICAL OPERATION", archetype: "安全保护", symbol: "shield", color: "blue" }
      },
      {
        id: "tac-sec-3",
        cat: "tac",
        archetype: "安全保护",
        categoryName: "战术行动 · 安全保护",
        type: "战术行动",
        title: "使节",
        subtitle: "ENVOY",
        colorScheme: "blue",
        cornerColor: "#3b82f6",
        front: {
          revealText: "第一次您选择一名使节时。",
          actionName: "额外规则：委派使节",
          actionDetail: "作为第一个转折点后的每个转折点中，作为一次战略计划，选择一名己方特工成己方使节，直到下一个战略阶段的就绪步骤。您不能将上一个转折点中被选择的特工选为使节。",
          ruleHtml: `
            <div class="mt-2.5 pt-2 border-t border-neutral-700/80 text-[12px] sm:text-[12.5px] space-y-1.5 text-neutral-200 leading-snug">
              <div class="text-blue-400 font-bold text-xs sm:text-sm">胜利点数 (VP)</div>
              <p>在第一个转折点后的每一个转折点结束时：</p>
              <p class="pl-2 border-l-2 border-blue-500/60">· 如果己方使节完全位于敌方领地内、且不位于敌方特工的控制范围，您<b>获得 1 VP</b>。</p>
              <p class="pl-2 border-l-2 border-blue-500/60">· 如果上述条件成立，且己方使节在本转折点中未曾失去过任何耐伤，您改为<b>获得 2 VP</b>。</p>
            </div>
          `,
          footer: "SECURITY"
        },
        back: { title: "战术行动", subtitle: "TACTICAL OPERATION", archetype: "安全保护", symbol: "shield", color: "blue" }
      },

      // 渗透 (Infiltration)
      {
        id: "tac-inf-1",
        cat: "tac",
        archetype: "渗透",
        categoryName: "战术行动 · 渗透",
        type: "战术行动",
        title: "追踪敌方",
        subtitle: "TRACK ENEMY",
        colorScheme: "purple",
        cornerColor: "#a855f7",
        front: {
          revealText: "第一次您通过本行动 OP 获得 VP 时。",
          actionName: "额外规则：追踪状态判定",
          actionDetail: "如果一名敌方特工位于一名己方特工 6 寸内，且对该己方特工来说是有效目标，则该敌方特工正在被追踪。该己方特工必须拥有隐匿命令、对他的追踪目标来说他不能是该敌方特工的有效目标、且不能位于任何敌方特工的控制范围内。",
          ruleHtml: `
            <div class="mt-2.5 pt-2 border-t border-neutral-700/80 text-[12px] sm:text-[12.5px] space-y-1.5 text-neutral-200 leading-snug">
              <div class="text-purple-400 font-bold text-xs sm:text-sm">胜利点数 (VP)</div>
              <p>在第一个转折点后的每一个转折点结束时：</p>
              <p class="pl-2 border-l-2 border-purple-500/60">· 如果一个敌方特工被追踪，您<b>获得 1 VP</b>，或者，如果此时是第四转折点，则改为<b>获得 2 VP</b>。</p>
              <p class="pl-2 border-l-2 border-purple-500/60">· 如果 2 个或更多敌方特工被追踪，您<b>获得 2 VP</b>。</p>
              <p class="text-neutral-400 text-[10.5px]">（您在每个转折点中，最多通过此行动 OP 获得 2 VP）</p>
            </div>
          `,
          footer: "INFILTRATION"
        },
        back: { title: "战术行动", subtitle: "TACTICAL OPERATION", archetype: "渗透", symbol: "target_stealth", color: "purple" }
      },
      {
        id: "tac-inf-2",
        cat: "tac",
        archetype: "渗透",
        categoryName: "战术行动 · 渗透",
        type: "战术行动",
        title: "植入设备",
        subtitle: "PLANT DEVICES",
        colorScheme: "purple",
        cornerColor: "#a855f7",
        front: {
          revealText: "第一次一名己方特工执行植入设备行动时。",
          actionName: "任务行动：植入设备 (1 AP)",
          actionDetail: "▶ 活跃特工控制的一个目标标识获得一枚己方设备指示物。<br>◆ 特工不能在第一转折点中执行此行动，不能在位于一名敌方特工的控制范围内时执行此行动，不能在一枚目标标识已经拥有己方设备指示物时执行此行动。",
          ruleHtml: `
            <div class="mt-2.5 pt-2 border-t border-neutral-700/80 text-[12px] sm:text-[12.5px] space-y-1.5 text-neutral-200 leading-snug">
              <div class="text-purple-400 font-bold text-xs sm:text-sm">胜利点数 (VP)</div>
              <p>在第一个转折点后的每一个转折点结束时：</p>
              <p class="pl-2 border-l-2 border-purple-500/60">· 如果对手的目标标识拥有己方设备指示物，您<b>获得 1 VP</b>。</p>
              <p class="pl-2 border-l-2 border-purple-500/60">· 每有一个正在被敌方特工争夺的其他目标标识拥有己方设备指示物，您<b>获得 1 VP</b>。</p>
              <p class="text-neutral-400 text-[10.5px]">（您在每个转折点中，最多通过此行动 OP 获得 2 VP）</p>
            </div>
          `,
          footer: "INFILTRATION"
        },
        back: { title: "战术行动", subtitle: "TACTICAL OPERATION", archetype: "渗透", symbol: "target_stealth", color: "purple" }
      },
      {
        id: "tac-inf-3",
        cat: "tac",
        archetype: "渗透",
        categoryName: "战术行动 · 渗透",
        type: "战术行动",
        title: "窃取情报",
        subtitle: "STEAL INTELLIGENCE",
        colorScheme: "purple",
        cornerColor: "#a855f7",
        front: {
          revealText: "第一次一名敌方特工被残废时。",
          actionName: "额外规则：情报遗落与拾取",
          actionDetail: "每当一名敌方特工被残废时，在他从杀戮区移除前，将一枚己方情报任务标识放置在位于该敌方特工控制范围内的位置。<br>己方特工可对己方情报任务标识执行拾取标识行动，以及对于该行动的条件规则，您可以忽略该活跃特工携带的第一个情报任务标识。也就是说，每个己方特工可携带最多 2 个情报任务标识，或者 1 个情报任务标识和 1 个其他标识。",
          ruleHtml: `
            <div class="mt-1.5 pt-1.5 border-t border-neutral-700/80 text-[11.5px] sm:text-[12px] space-y-1 text-neutral-200 leading-snug">
              <div class="text-purple-400 font-bold text-xs sm:text-sm">胜利点数 (VP)</div>
              <p>· 在第一个转折点后的每一个转折点结束时，如果任意己方特工正在携带己方情报任务标识，您<b>获得 1 VP</b>。</p>
              <p>· 在对战结束时，己方特工每携带一枚己方情报任务标识，您<b>获得 1 VP</b>。</p>
              <p class="text-neutral-400 italic text-[10px]">WCW专属FAQ：可消耗/消耗品构装体/变异害虫单位被残废不会产生窃取情报任务标识。</p>
            </div>
          `,
          footer: "INFILTRATION"
        },
        back: { title: "战术行动", subtitle: "TACTICAL OPERATION", archetype: "渗透", symbol: "target_stealth", color: "purple" }
      },

      // ----- 5. 先手权卡组 (Initiative Cards - 4张) -----
      {
        id: "init-reroll",
        cat: "init",
        categoryName: "先手权卡组",
        type: "先手权卡",
        title: "重投先手权",
        subtitle: "RE-ROLL INITIATIVE",
        colorScheme: "orange",
        cornerColor: "#ea580c",
        badge: "后选降落区玩家获得",
        front: {
          tag: "拼骰调整 · 步骤 4",
          actionName: "重投先手权卡",
          actionDetail: "在步骤 1 设置战斗中，拥有先手权的玩家选择一个降落区，其对手使用另外一个降落区，并且获得重投先手权卡。<br>▶ 允许该玩家<b>重投他的先手权骰头</b>。<br>◆ 如果一名玩家在修正自己的掷骰结果后，使用了重投先手权卡，那么新的结果会覆盖已经进行过的所有修正。",
          ruleHtml: `
            <div class="mt-3.5 p-2.5 bg-orange-950/40 border border-orange-600/40 rounded text-[12px] text-orange-200 leading-snug">
              <b>使用时机：</b>决定每一个转折点的先手权时（包括第一个），双方玩家拼骰（平手时不要重投）。从拼骰的败者先开始，交替使用先手权卡改变掷骰结果或让过，直到双方连续让过。
            </div>
          `,
          footer: "INITIATIVE CARD · RE-ROLL"
        },
        back: { title: "先手权卡", subtitle: "INITIATIVE MODIFIER", symbol: "dice", color: "orange" }
      },
      {
        id: "init-plus-minus-1",
        cat: "init",
        categoryName: "先手权卡组",
        type: "先手权卡",
        title: "+1 / -1 先手权卡",
        subtitle: "INITIATIVE MODIFIER (+1/-1)",
        colorScheme: "orange",
        cornerColor: "#ea580c",
        badge: "第 1 转折点败者获得",
        front: {
          tag: "拼骰调整",
          actionName: "+1 或 -1 点数修正",
          actionDetail: "拼骰结算时打出，向上或向下修正该玩家的骰头结果 1 点。<br>◆ 修正后结果可以大于 6 或小于 1（例如投出 6 修正为 7，或投出 1 修正为 0）。",
          ruleHtml: `
            <div class="mt-3.5 p-2.5 bg-neutral-900 border border-neutral-700 rounded text-[12px] text-neutral-200 leading-snug">
              由第一转折点拼骰失败的玩家拿取（注意由拼骰的败者获得，而非没有先手权的玩家获得），可在后续转折点中使用。
            </div>
          `,
          footer: "INITIATIVE CARD · 1ST TP"
        },
        back: { title: "先手权卡", subtitle: "INITIATIVE MODIFIER", symbol: "dice", color: "orange" }
      },
      {
        id: "init-plus-minus-2",
        cat: "init",
        categoryName: "先手权卡组",
        type: "先手权卡",
        title: "+2 / -2 先手权卡",
        subtitle: "INITIATIVE MODIFIER (+2/-2)",
        colorScheme: "orange",
        cornerColor: "#ea580c",
        badge: "第 2 转折点败者获得",
        front: {
          tag: "拼骰调整",
          actionName: "+2 或 -2 点数修正",
          actionDetail: "拼骰结算时打出，向上或向下修正该玩家的骰头结果 2 点。<br>◆ 修正后结果可以大于 6 或小于 1（例如投出 5 修正为 7 或 3）。",
          ruleHtml: `
            <div class="mt-3.5 p-2.5 bg-neutral-900 border border-neutral-700 rounded text-[12px] text-neutral-200 leading-snug">
              由第二转折点拼骰失败的玩家拿取（注意由拼骰的败者获得，而非没有先手权的玩家获得），可在后续转折点中使用。
            </div>
          `,
          footer: "INITIATIVE CARD · 2ND TP"
        },
        back: { title: "先手权卡", subtitle: "INITIATIVE MODIFIER", symbol: "dice", color: "orange" }
      },
      {
        id: "init-plus-minus-3",
        cat: "init",
        categoryName: "先手权卡组",
        type: "先手权卡",
        title: "+3 / -3 先手权卡",
        subtitle: "INITIATIVE MODIFIER (+3/-3)",
        colorScheme: "orange",
        cornerColor: "#ea580c",
        badge: "第 3 转折点败者获得",
        front: {
          tag: "拼骰调整",
          actionName: "+3 或 -3 点数修正",
          actionDetail: "拼骰结算时打出，向上或向下修正该玩家的骰头结果 3 点。<br>◆ 修正后结果可以大于 6 或小于 1（例如投出 4 修正为 7 或 1）。",
          ruleHtml: `
            <div class="mt-3.5 p-2.5 bg-neutral-900 border border-neutral-700 rounded text-[12px] text-neutral-200 leading-snug">
              由第三转折点拼骰失败的玩家拿取（注意由拼骰的败者获得，而非没有先手权的玩家获得），可在第四转折点中使用。第四转折点拼骰失败者不再获得先手权卡。
            </div>
          `,
          footer: "INITIATIVE CARD · 3RD TP"
        },
        back: { title: "先手权卡", subtitle: "INITIATIVE MODIFIER", symbol: "dice", color: "orange" }
      }
    ];

    window.KILL_TEAM_CARDS = CARDS_DATA;

    function getFrontWatermark(card) {
      const color = card.cornerColor || '#ff5722';

      if (card.cat === "primary") {
        return `
          <svg class="watermark-svg" viewBox="0 0 300 400" fill="none" stroke="${color}" stroke-width="1.5">
            <circle cx="150" cy="200" r="130" stroke-dasharray="4 6" opacity="0.4"/>
            <circle cx="150" cy="200" r="95" stroke-dasharray="8 4" opacity="0.6"/>
            <circle cx="150" cy="200" r="45" opacity="0.7"/>
            <line x1="150" y1="30" x2="150" y2="370" stroke-dasharray="6 4" opacity="0.5"/>
            <line x1="20" y1="200" x2="280" y2="200" stroke-dasharray="6 4" opacity="0.5"/>
            <path d="M150 140 L190 100 L240 105 L260 130 L230 145 L250 165 L220 180 L235 210 L195 215 L150 240 L105 215 L65 210 L80 180 L50 165 L70 145 L40 130 L60 105 L110 100 Z" fill="${color}" fill-opacity="0.1" stroke-width="2"/>
            <path d="M140 180 C140 165, 160 165, 160 180 C160 192, 156 205, 154 212 L146 212 C144 205, 140 192, 140 180 Z" fill="${color}" fill-opacity="0.25"/>
            <circle cx="146" cy="182" r="2.5" fill="#10141b"/>
            <circle cx="154" cy="182" r="2.5" fill="#10141b"/>
            <path d="M70 70 L95 70 M70 70 L70 95" stroke-width="2"/>
            <path d="M230 70 L205 70 M230 70 L230 95" stroke-width="2"/>
            <path d="M70 330 L95 330 M70 330 L70 305" stroke-width="2"/>
            <path d="M230 330 L205 330 M230 330 L230 305" stroke-width="2"/>
          </svg>
        `;
      }

      if (card.cat === "kill") {
        return `
          <svg class="watermark-svg" viewBox="0 0 300 400" fill="none" stroke="${color}" stroke-width="1.8">
            <circle cx="150" cy="200" r="125" stroke-width="2"/>
            <circle cx="150" cy="200" r="105" stroke-dasharray="10 6" opacity="0.6"/>
            <circle cx="150" cy="200" r="65" stroke-dasharray="2 3" opacity="0.5"/>
            <line x1="25" y1="200" x2="275" y2="200" stroke-width="2"/>
            <line x1="150" y1="40" x2="150" y2="360" stroke-width="2"/>
            <path d="M110 160 C110 115, 190 115, 190 160 C190 190, 180 220, 172 235 L128 235 C120 220, 110 190, 110 160 Z" fill="${color}" fill-opacity="0.12" stroke-width="2.5"/>
            <rect x="134" y="235" width="32" height="22" rx="2" fill="${color}" fill-opacity="0.12" stroke-width="2"/>
            <line x1="142" y1="235" x2="142" y2="257" stroke-width="1.5"/>
            <line x1="150" y1="235" x2="150" y2="257" stroke-width="1.5"/>
            <line x1="158" y1="235" x2="158" y2="257" stroke-width="1.5"/>
            <circle cx="132" cy="168" r="9" fill="#10141b" stroke-width="2"/>
            <circle cx="168" cy="168" r="9" fill="#10141b" stroke-width="2"/>
            <polygon points="150,188 143,204 157,204" fill="#10141b" stroke-width="1.5"/>
            <path d="M75 140 L75 260 M85 150 L85 250 M65 170 L65 230" stroke-dasharray="4 6" opacity="0.4"/>
            <path d="M225 140 L225 260 M215 150 L215 250 M235 170 L235 230" stroke-dasharray="4 6" opacity="0.4"/>
          </svg>
        `;
      }

      if (card.cat === "crit") {
        return `
          <svg class="watermark-svg" viewBox="0 0 300 400" fill="none" stroke="${color}" stroke-width="1.5">
            <circle cx="150" cy="205" r="135" stroke-dasharray="6 4" opacity="0.4"/>
            <circle cx="150" cy="205" r="95" stroke-width="2" opacity="0.7"/>
            <circle cx="150" cy="205" r="55" stroke-dasharray="12 4" stroke-width="1.5"/>
            <circle cx="150" cy="205" r="24" fill="${color}" fill-opacity="0.15" stroke-width="2.5"/>
            <line x1="150" y1="45" x2="150" y2="80" stroke-width="2"/>
            <line x1="150" y1="330" x2="150" y2="365" stroke-width="2"/>
            <line x1="15" y1="205" x2="50" y2="205" stroke-width="2"/>
            <line x1="250" y1="205" x2="285" y2="205" stroke-width="2"/>
            <polygon points="150,95 240,205 150,315 60,205" stroke-dasharray="8 6" opacity="0.5"/>
            <polygon points="150,165 185,205 150,245 115,205" fill="${color}" fill-opacity="0.08"/>
            <circle cx="150" cy="205" r="5" fill="${color}"/>
          </svg>
        `;
      }

      if (card.cat === "tac") {
        if (card.archetype === "搜索与摧毁") {
          return `
            <svg class="watermark-svg" viewBox="0 0 300 400" fill="none" stroke="${color}" stroke-width="1.8">
              <circle cx="150" cy="200" r="120" stroke-dasharray="8 5" opacity="0.4"/>
              <line x1="50" y1="320" x2="250" y2="80" stroke-width="3"/>
              <line x1="250" y1="320" x2="50" y2="80" stroke-width="3"/>
              <line x1="75" y1="265" x2="105" y2="295" stroke-width="3.5"/>
              <line x1="225" y1="265" x2="195" y2="295" stroke-width="3.5"/>
              <circle cx="150" cy="200" r="50" fill="${color}" fill-opacity="0.12" stroke-width="2"/>
              <polygon points="150,130 165,185 220,200 165,215 150,270 135,215 80,200 135,185" fill="${color}" fill-opacity="0.2"/>
            </svg>
          `;
        }
        if (card.archetype === "侦察") {
          return `
            <svg class="watermark-svg" viewBox="0 0 300 400" fill="none" stroke="${color}" stroke-width="1.8">
              <polygon points="150,70 265,290 35,290" stroke-width="2.5" fill="${color}" fill-opacity="0.08"/>
              <polygon points="150,125 225,265 75,265" stroke-dasharray="6 4" opacity="0.6"/>
              <circle cx="150" cy="215" r="45" stroke-width="2"/>
              <circle cx="150" cy="215" r="16" fill="${color}" fill-opacity="0.3"/>
              <line x1="150" y1="40" x2="150" y2="340" stroke-dasharray="4 4" opacity="0.5"/>
              <path d="M70 170 Q150 120 230 170" opacity="0.4"/>
              <path d="M55 215 Q150 155 245 215" opacity="0.4"/>
            </svg>
          `;
        }
        if (card.archetype === "安全保护") {
          return `
            <svg class="watermark-svg" viewBox="0 0 300 400" fill="none" stroke="${color}" stroke-width="2">
              <path d="M150 60 L245 95 C245 210, 150 325, 150 325 C150 325, 55 210, 55 95 Z" fill="${color}" fill-opacity="0.1" stroke-width="3"/>
              <path d="M150 90 L220 115 C220 195, 150 280, 150 280 C150 280, 80 195, 80 115 Z" stroke-dasharray="6 4" opacity="0.6"/>
              <line x1="150" y1="85" x2="150" y2="270" stroke-width="2.5"/>
              <line x1="100" y1="160" x2="200" y2="160" stroke-width="2.5"/>
              <circle cx="150" cy="160" r="28" fill="${color}" fill-opacity="0.15"/>
            </svg>
          `;
        }
        if (card.archetype === "渗透") {
          return `
            <svg class="watermark-svg" viewBox="0 0 300 400" fill="none" stroke="${color}" stroke-width="1.6">
              <circle cx="150" cy="200" r="125" stroke-dasharray="4 6" opacity="0.5"/>
              <path d="M150 100 L210 135 L210 205 L150 240 L90 205 L90 135 Z" stroke-width="2" fill="${color}" fill-opacity="0.08"/>
              <path d="M150 160 L185 180 L185 220 L150 240 L115 220 L115 180 Z" stroke-width="1.5" opacity="0.7"/>
              <line x1="30" y1="200" x2="110" y2="200" stroke-width="2"/>
              <line x1="190" y1="200" x2="270" y2="200" stroke-width="2"/>
              <line x1="150" y1="60" x2="150" y2="140" stroke-width="2"/>
              <line x1="150" y1="260" x2="150" y2="340" stroke-width="2"/>
              <circle cx="150" cy="200" r="7" fill="${color}" fill-opacity="0.5"/>
            </svg>
          `;
        }
      }

      if (card.cat === "init") {
        return `
          <svg class="watermark-svg" viewBox="0 0 300 400" fill="none" stroke="${color}" stroke-width="1.8">
            <polygon points="150,110 235,160 150,210 65,160" fill="${color}" fill-opacity="0.12" stroke-width="2.5"/>
            <polygon points="65,160 150,210 150,305 65,255" fill="${color}" fill-opacity="0.06" stroke-width="2.5"/>
            <polygon points="235,160 150,210 150,305 235,255" fill="${color}" fill-opacity="0.18" stroke-width="2.5"/>
            <circle cx="150" cy="160" r="6" fill="${color}"/>
            <circle cx="108" cy="225" r="4.5" fill="${color}"/>
            <circle cx="108" cy="245" r="4.5" fill="${color}"/>
            <circle cx="192" cy="225" r="4.5" fill="${color}"/>
            <circle cx="192" cy="245" r="4.5" fill="${color}"/>
            <circle cx="192" cy="265" r="4.5" fill="${color}"/>
            <circle cx="150" cy="205" r="130" stroke-dasharray="10 8" opacity="0.45"/>
            <path d="M90 85 A 130 130 0 0 1 210 85" stroke-width="3"/>
            <polygon points="215,75 228,88 210,95" fill="${color}"/>
          </svg>
        `;
      }

      return `
        <svg class="watermark-svg" viewBox="0 0 300 400" fill="none" stroke="${color}" stroke-width="1.5">
          <circle cx="150" cy="200" r="115" stroke-dasharray="6 4" opacity="0.4"/>
          <circle cx="150" cy="200" r="45" opacity="0.6"/>
          <line x1="40" y1="200" x2="260" y2="200" opacity="0.5"/>
          <line x1="150" y1="70" x2="150" y2="330" opacity="0.5"/>
        </svg>
      `;
    }

    function getSvgSymbol(symbol, colorName) {
      const colorMap = {
        red: '#ef4444',
        amber: '#f59e0b',
        green: '#10b981',
        blue: '#3b82f6',
        purple: '#a855f7',
        orange: '#f97316'
      };
      const c = colorMap[colorName] || '#ff5722';

      if (symbol === 'skulls_ring') {
        return `
          <svg class="w-32 h-32" viewBox="0 0 160 160" fill="none">
            <circle cx="80" cy="80" r="72" stroke="${c}" stroke-width="4" fill="rgba(0,0,0,0.45)"/>
            <circle cx="80" cy="80" r="64" stroke="${c}" stroke-width="1.5" stroke-dasharray="4 3"/>
            <circle cx="80" cy="80" r="54" stroke="${c}" stroke-width="3" stroke-opacity="0.8"/>
            <path d="M52 64 C52 52 68 52 68 64 C68 74 65 82 62 86 L56 86 C53 82 52 74 52 64 Z" fill="${c}" fill-opacity="0.85"/>
            <rect x="55" y="86" width="8" height="6" rx="1" fill="${c}"/>
            <circle cx="58" cy="65" r="2.5" fill="#10141b"/>
            <path d="M108 64 C108 52 92 52 92 64 C92 74 95 82 98 86 L104 86 C107 82 108 74 108 64 Z" fill="${c}" fill-opacity="0.85"/>
            <rect x="97" y="86" width="8" height="6" rx="1" fill="${c}"/>
            <circle cx="102" cy="65" r="2.5" fill="#10141b"/>
            <line x1="80" y1="42" x2="80" y2="118" stroke="${c}" stroke-width="2" stroke-dasharray="3 3"/>
            <circle cx="80" cy="80" r="5" fill="${c}"/>
          </svg>
        `;
      }

      if (symbol === 'skull') {
        return `
          <svg class="w-28 h-28" viewBox="0 0 120 120" fill="none">
            <circle cx="60" cy="60" r="52" stroke="${c}" stroke-width="2.5" stroke-dasharray="6 3"/>
            <circle cx="60" cy="60" r="44" stroke="${c}" stroke-width="1.5"/>
            <path d="M40 48 C40 30 80 30 80 48 C80 62 74 72 70 78 L50 78 C46 72 40 62 40 48 Z" fill="${c}" fill-opacity="0.85"/>
            <rect x="49" y="78" width="22" height="14" rx="2" fill="${c}" fill-opacity="0.9"/>
            <line x1="55" y1="78" x2="55" y2="92" stroke="#10141b" stroke-width="1.5"/>
            <line x1="60" y1="78" x2="60" y2="92" stroke="#10141b" stroke-width="1.5"/>
            <line x1="65" y1="78" x2="65" y2="92" stroke="#10141b" stroke-width="1.5"/>
            <circle cx="51" cy="52" r="5" fill="#10141b"/>
            <circle cx="69" cy="52" r="5" fill="#10141b"/>
            <polygon points="60,62 56,70 64,70" fill="#10141b"/>
          </svg>
        `;
      }

      if (symbol === 'target') {
        return `
          <svg class="w-28 h-28" viewBox="0 0 120 120" fill="none">
            <circle cx="60" cy="60" r="50" stroke="${c}" stroke-width="2" stroke-dasharray="6 4"/>
            <circle cx="60" cy="60" r="38" stroke="${c}" stroke-width="3"/>
            <circle cx="60" cy="60" r="22" stroke="${c}" stroke-width="1.5"/>
            <circle cx="60" cy="60" r="8" fill="${c}"/>
            <line x1="12" y1="60" x2="108" y2="60" stroke="${c}" stroke-width="2"/>
            <line x1="60" y1="12" x2="60" y2="108" stroke="${c}" stroke-width="2"/>
          </svg>
        `;
      }

      if (symbol === 'sword') {
        return `
          <svg class="w-28 h-28" viewBox="0 0 120 120" fill="none">
            <circle cx="60" cy="60" r="50" stroke="${c}" stroke-width="2" stroke-dasharray="4 4"/>
            <circle cx="60" cy="60" r="40" stroke="${c}" stroke-width="1.5"/>
            <line x1="24" y1="96" x2="96" y2="24" stroke="${c}" stroke-width="4" stroke-linecap="round"/>
            <line x1="96" y1="96" x2="24" y2="24" stroke="${c}" stroke-width="4" stroke-linecap="round"/>
            <line x1="32" y1="80" x2="48" y2="96" stroke="${c}" stroke-width="5" stroke-linecap="square"/>
            <line x1="88" y1="80" x2="72" y2="96" stroke="${c}" stroke-width="5" stroke-linecap="square"/>
            <polygon points="60,46 72,60 60,74 48,60" fill="${c}"/>
          </svg>
        `;
      }

      if (symbol === 'recon') {
        return `
          <svg class="w-28 h-28" viewBox="0 0 120 120" fill="none">
            <polygon points="60,20 102,96 18,96" stroke="${c}" stroke-width="3" fill="none"/>
            <polygon points="60,38 90,90 30,90" stroke="${c}" stroke-width="1.5" stroke-dasharray="4 3"/>
            <circle cx="60" cy="68" r="16" stroke="${c}" stroke-width="2"/>
            <circle cx="60" cy="68" r="6" fill="${c}"/>
            <line x1="60" y1="12" x2="60" y2="108" stroke="${c}" stroke-width="1.5" stroke-dasharray="3 3"/>
          </svg>
        `;
      }

      if (symbol === 'shield') {
        return `
          <svg class="w-28 h-28" viewBox="0 0 120 120" fill="none">
            <path d="M60 18 L98 32 C98 75, 60 104, 60 104 C60 104, 22 75, 22 32 Z" stroke="${c}" stroke-width="3.5" fill="rgba(0,0,0,0.3)"/>
            <path d="M60 28 L88 39 C88 70, 60 92, 60 92 C60 92, 32 70, 32 39 Z" stroke="${c}" stroke-width="1.5" stroke-dasharray="4 3"/>
            <line x1="60" y1="26" x2="60" y2="88" stroke="${c}" stroke-width="2"/>
            <line x1="42" y1="52" x2="78" y2="52" stroke="${c}" stroke-width="2"/>
            <circle cx="60" cy="52" r="7" fill="${c}"/>
          </svg>
        `;
      }

      if (symbol === 'target_stealth') {
        return `
          <svg class="w-28 h-28" viewBox="0 0 120 120" fill="none">
            <circle cx="60" cy="60" r="50" stroke="${c}" stroke-width="1.5" stroke-dasharray="4 4"/>
            <polygon points="60,24 92,42 92,78 60,96 28,78 28,42" stroke="${c}" stroke-width="2.5" fill="rgba(0,0,0,0.3)"/>
            <polygon points="60,38 78,49 78,71 60,82 42,71 42,49" stroke="${c}" stroke-width="1.5"/>
            <line x1="16" y1="60" x2="44" y2="60" stroke="${c}" stroke-width="2"/>
            <line x1="76" y1="60" x2="104" y2="60" stroke="${c}" stroke-width="2"/>
            <line x1="60" y1="16" x2="60" y2="40" stroke="${c}" stroke-width="2"/>
            <line x1="60" y1="80" x2="60" y2="104" stroke="${c}" stroke-width="2"/>
            <circle cx="60" cy="60" r="5" fill="${c}"/>
          </svg>
        `;
      }

      if (symbol === 'dice') {
        return `
          <svg class="w-28 h-28" viewBox="0 0 120 120" fill="none">
            <circle cx="60" cy="60" r="50" stroke="${c}" stroke-width="2" stroke-dasharray="6 4"/>
            <polygon points="60,26 94,46 60,66 26,46" stroke="${c}" stroke-width="2" fill="rgba(0,0,0,0.2)"/>
            <polygon points="26,46 60,66 60,102 26,82" stroke="${c}" stroke-width="2" fill="rgba(0,0,0,0.4)"/>
            <polygon points="94,46 60,66 60,102 94,82" stroke="${c}" stroke-width="2" fill="rgba(0,0,0,0.6)"/>
            <circle cx="60" cy="46" r="3.5" fill="${c}"/>
            <circle cx="42" cy="74" r="2.5" fill="${c}"/>
            <circle cx="42" cy="86" r="2.5" fill="${c}"/>
            <circle cx="78" cy="70" r="2.5" fill="${c}"/>
            <circle cx="78" cy="80" r="2.5" fill="${c}"/>
            <circle cx="78" cy="90" r="2.5" fill="${c}"/>
          </svg>
        `;
      }

      return `
        <svg class="w-28 h-28" viewBox="0 0 120 120" fill="none">
          <circle cx="60" cy="60" r="48" stroke="${c}" stroke-width="3"/>
          <circle cx="60" cy="60" r="34" stroke="${c}" stroke-width="1.5" stroke-dasharray="4 4"/>
          <circle cx="60" cy="60" r="12" fill="${c}"/>
        </svg>
      `;
    }

    function renderCard(card) {
      const isRed = card.colorScheme === 'red';
      const isAmber = card.colorScheme === 'amber';
      const isGreen = card.colorScheme === 'green';
      const isBlue = card.colorScheme === 'blue';
      const isPurple = card.colorScheme === 'purple';

      const themeBorder = isRed ? 'border-red-600/70' : isAmber ? 'border-amber-500/70' : isGreen ? 'border-emerald-500/70' : isBlue ? 'border-blue-500/70' : isPurple ? 'border-purple-500/70' : 'border-orange-500/70';
      const themeHeaderBg = isRed ? 'bg-gradient-to-r from-red-950/95 via-neutral-900 to-red-950/70' : isAmber ? 'bg-gradient-to-r from-amber-950/95 via-neutral-900 to-amber-950/70' : isGreen ? 'bg-gradient-to-r from-emerald-950/95 via-neutral-900 to-emerald-950/70' : isBlue ? 'bg-gradient-to-r from-blue-950/95 via-neutral-900 to-blue-950/70' : isPurple ? 'bg-gradient-to-r from-purple-950/95 via-neutral-900 to-purple-950/70' : 'bg-gradient-to-r from-orange-950/95 via-neutral-900 to-orange-950/70';
      const themeTitleColor = isRed ? 'text-red-400' : isAmber ? 'text-amber-400' : isGreen ? 'text-emerald-400' : isBlue ? 'text-blue-400' : isPurple ? 'text-purple-300' : 'text-orange-400';
      const cornerHex = card.cornerColor || '#ff5722';

      const backThemeBorder = card.back && card.back.borderColor ? card.back.borderColor : (card.cat === 'primary' ? 'border-red-600/70' : themeBorder);
      const backCornerHex = card.back && card.back.cornerColor ? card.back.cornerColor : (card.cat === 'primary' ? '#ef4444' : cornerHex);

      return `
        <div class="card-item flex flex-col items-center" data-cat="${card.cat}" id="card-wrap-${card.id}">
          <div class="card-scene">
            <div class="card-body-wrapper" id="${card.id}-body" onclick="flipSingleCard('${card.id}')">
              
              <!-- ===== 正面 (FRONT) ===== -->
              <div class="card-face card-face-front ${themeBorder} flex flex-col justify-between text-neutral-100 grimdark-grid p-3.5 select-none cursor-pointer overflow-hidden">
                <div class="kt-inner-border"></div>
                
                <div class="card-watermark">
                  ${getFrontWatermark(card)}
                </div>

                <div class="card-corner-decor card-tl" style="border-color: ${cornerHex};"></div>
                <div class="card-corner-decor card-tr" style="border-color: ${cornerHex};"></div>
                <div class="card-corner-decor card-bl" style="border-color: ${cornerHex};"></div>
                <div class="card-corner-decor card-br" style="border-color: ${cornerHex};"></div>

                <div class="relative z-10">
                  <div class="flex items-center justify-between text-xs uppercase font-mono-kt tracking-wider text-neutral-400 border-b border-neutral-700/60 pb-1 mb-1.5 leading-normal">
                    <span class="flex items-center gap-1.5 ${themeTitleColor} font-bold text-xs sm:text-[13px] whitespace-nowrap">
                      <span class="w-2 h-2 rounded-full shrink-0" style="background-color: ${cornerHex};"></span>
                      ${card.categoryName}
                    </span>
                    ${card.badge ? `
                      <span class="text-[10px] sm:text-[10.5px] font-mono-kt font-medium bg-black/90 px-2 py-0.5 rounded border border-neutral-600/80 text-neutral-200 whitespace-nowrap shrink-0 leading-none inline-flex items-center">
                        ${card.badge}
                      </span>
                    ` : `
                      <span class="text-neutral-300 font-semibold text-xs whitespace-nowrap shrink-0">${card.type}</span>
                    `}
                  </div>

                  <div class="p-2.5 rounded ${themeHeaderBg} border border-neutral-700/80 shadow-md">
                    <div class="text-[16px] sm:text-[17px] font-bold font-warhammer tracking-wide ${themeTitleColor} leading-snug">
                      ${card.title}
                    </div>
                    <div class="text-[10.5px] sm:text-[11px] font-mono-kt tracking-wider text-neutral-400 mt-1 leading-normal">
                      ${card.subtitle}
                    </div>
                  </div>
                </div>

                <div class="flex-1 my-2 overflow-visible flex flex-col justify-start relative z-10">
                  ${card.front.revealText ? `
                    <div class="bg-neutral-900/95 border border-neutral-700/80 rounded p-2 mb-2 shadow-sm">
                      <div class="text-[11px] text-orange-400 font-mono-kt uppercase font-bold tracking-wider leading-normal">揭示条件 (REVEAL)</div>
                      <div class="text-[12px] sm:text-[12.5px] text-neutral-200 leading-snug mt-0.5 font-medium">${card.front.revealText}</div>
                    </div>
                  ` : ''}

                  ${card.front.actionName ? `
                    <div class="bg-neutral-950/90 border-l-[3px] border-orange-500 px-2.5 py-1.5 mb-2 rounded-r">
                      <div class="text-[12px] sm:text-[12.5px] font-bold text-orange-300 font-mono-kt leading-normal">${card.front.actionName}</div>
                      <div class="text-[12px] sm:text-[12.5px] text-neutral-200 leading-snug mt-0.5">${card.front.actionDetail}</div>
                    </div>
                  ` : ''}

                  ${card.front.ruleHtml}
                </div>

                <div class="pt-2 border-t border-neutral-800 flex items-center justify-between text-[10px] text-neutral-400 font-mono-kt relative z-10 font-semibold gap-2 leading-normal">
                  <span class="whitespace-nowrap shrink-0">KT 2025 · APPROVED OPS</span>
                  <span class="whitespace-nowrap shrink-0">${card.front.footer}</span>
                </div>
              </div>

              <!-- ===== 反面 (BACK) ===== -->
              <div class="card-face card-face-back ${backThemeBorder} flex flex-col justify-between text-neutral-100 grimdark-grid p-4 select-none cursor-pointer overflow-hidden">
                <div class="kt-inner-border"></div>
                <div class="card-corner-decor card-tl" style="border-color: ${backCornerHex};"></div>
                <div class="card-corner-decor card-tr" style="border-color: ${backCornerHex};"></div>
                <div class="card-corner-decor card-bl" style="border-color: ${backCornerHex};"></div>
                <div class="card-corner-decor card-br" style="border-color: ${backCornerHex};"></div>

                <div class="text-center pt-3 border-b border-neutral-800 pb-2 relative z-10">
                  <div class="text-xs font-mono-kt tracking-widest text-neutral-400 uppercase whitespace-nowrap leading-normal">OFFICIAL APPROVED OPS</div>
                  <div class="text-xl sm:text-2xl font-warhammer font-black tracking-wider text-orange-500 mt-1 whitespace-nowrap leading-[1.3]">${card.back.title}</div>
                  <div class="text-xs font-mono-kt text-neutral-400 tracking-wider mt-0.5 whitespace-nowrap leading-normal">${card.back.subtitle}</div>
                </div>

                <div class="my-auto py-2 text-center flex flex-col items-center justify-center relative z-10">
                  ${getSvgSymbol(card.back.symbol, card.back.color)}
                  ${card.back.archetype ? `
                    <div class="mt-4 px-4 py-1.5 rounded bg-neutral-900/90 border border-neutral-700 text-sm font-warhammer font-bold tracking-widest text-neutral-100 shadow-md whitespace-nowrap leading-normal">
                      【 原型：${card.back.archetype} 】
                    </div>
                  ` : ''}
                  ${card.back.tagline ? `
                    <div class="mt-2.5 text-xs font-mono-kt tracking-widest text-neutral-400 font-semibold whitespace-nowrap leading-normal">
                      ${card.back.tagline}
                    </div>
                  ` : ''}
                </div>

                <div class="text-center pb-1.5 border-t border-neutral-800 pt-2 text-xs font-mono-kt text-neutral-400 relative z-10 font-medium whitespace-nowrap leading-normal">
                  <span>KILL TEAM 2025 · COMPETITIVE PLAY</span>
                </div>
              </div>

            </div>
          </div>

          <div class="w-full mt-3 flex items-center justify-between gap-2 px-1">
            <button onclick="downloadCardSide('${card.id}', 'front')" class="dl-btn flex-1 py-1.5 px-2 rounded text-xs text-neutral-200 font-mono-kt font-bold flex items-center justify-center gap-1" title="下载正面高清图片">
              <svg class="w-3.5 h-3.5 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              下正面
            </button>
            <button onclick="flipSingleCard('${card.id}')" class="py-1.5 px-3 rounded bg-neutral-800 hover:bg-neutral-700 text-neutral-200 hover:text-white text-xs font-mono-kt font-bold transition shadow" title="翻转此卡">
              翻转
            </button>
            <button onclick="downloadCardSide('${card.id}', 'back')" class="dl-btn flex-1 py-1.5 px-2 rounded text-xs text-neutral-200 font-mono-kt font-bold flex items-center justify-center gap-1" title="下载反面高清图片">
              <svg class="w-3.5 h-3.5 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
              下反面
            </button>
          </div>
        </div>
      `;
    }

    function initGallery() {
      const grid = document.getElementById("cardsGrid");
      if (!grid) return;
      grid.innerHTML = CARDS_DATA.map(renderCard).join('');
    }

    function flipSingleCard(cardId) {
      const cardWrapper = document.getElementById(`${cardId}-body`);
      if (cardWrapper) {
        cardWrapper.classList.toggle("is-flipped");
      }
    }

    let isGlobalFlipped = false;
    function toggleAllCards() {
      isGlobalFlipped = !isGlobalFlipped;
      const allCards = document.querySelectorAll(".card-body-wrapper");
      allCards.forEach(c => {
        if (isGlobalFlipped) {
          c.classList.add("is-flipped");
        } else {
          c.classList.remove("is-flipped");
        }
      });
    }

    function filterCategory(cat) {
      document.querySelectorAll(".cat-filter-btn").forEach(btn => {
        if (btn.dataset.cat === cat) {
          btn.className = "cat-filter-btn px-3 py-1.5 rounded bg-orange-600 text-white font-bold";
        } else {
          btn.className = "cat-filter-btn px-2.5 py-1.5 rounded hover:text-orange-400 text-neutral-300";
        }
      });

      const cards = document.querySelectorAll(".card-item");
      cards.forEach(card => {
        if (cat === "all" || card.dataset.cat === cat) {
          card.style.display = "flex";
        } else {
          card.style.display = "none";
        }
      });
    }

    async function downloadCardSide(cardId, side) {
      const cardWrap = document.getElementById(`card-wrap-${cardId}`);
      if (!cardWrap) return;

      const targetFaceClass = side === 'front' ? '.card-face-front' : '.card-face-back';
      const originalFace = cardWrap.querySelector(targetFaceClass);
      if (!originalFace) return;

      // Ensure all custom fonts (Cinzel, Share Tech Mono, Noto Serif SC) are fully ready
      try {
        await document.fonts.ready;
      } catch (e) {
        console.warn('Font loading check skipped', e);
      }

      // Create an offscreen render stage placed at top:0, left:0 behind the document body
      // to avoid negative coordinate calculation glitches in html2canvas
      const stage = document.createElement('div');
      stage.style.position = 'fixed';
      stage.style.left = '0';
      stage.style.top = '0';
      stage.style.width = '336px';
      stage.style.height = '504px';
      stage.style.boxSizing = 'border-box';
      stage.style.zIndex = '-9999';
      stage.style.pointerEvents = 'none';
      stage.style.overflow = 'visible';
      stage.style.backgroundColor = '#10141b';

      const clone = originalFace.cloneNode(true);
      // Reset 3D flip transform and visibility so it renders cleanly to canvas regardless of flip state
      clone.style.transform = 'none';
      clone.style.webkitTransform = 'none';
      clone.style.visibility = 'visible';
      clone.style.position = 'relative';
      clone.style.width = '336px';
      clone.style.height = '504px';
      clone.style.boxSizing = 'border-box';
      clone.style.boxShadow = 'none';

      stage.appendChild(clone);
      document.body.appendChild(stage);

      try {
        // Render at 3x scale for crisp, print-ready 300 DPI resolution (~1008 x 1512 px)
        const canvas = await html2canvas(clone, {
          scale: 3,
          useCORS: true,
          backgroundColor: '#10141b',
          logging: false,
          width: 336,
          height: 504,
          scrollX: 0,
          scrollY: 0,
          windowWidth: 336,
          windowHeight: 504,
          onclone: (clonedDoc) => {
            // Guarantee all elements in the cloned DOM have visibility restored and SVG inline display enforced
            const style = clonedDoc.createElement('style');
            style.innerHTML = `
              img, svg { display: inline-block !important; }
              .card-face { overflow: visible !important; }
            `;
            clonedDoc.head.appendChild(style);

            const face = clonedDoc.querySelector(targetFaceClass);
            if (face) {
              face.style.visibility = 'visible';
              face.style.transform = 'none';
            }
          }
        });

        const link = document.createElement('a');
        link.download = `KT2025_${cardId}_${side.toUpperCase()}.png`;
        link.href = canvas.toDataURL('image/png');
        link.click();
      } catch (err) {
        console.error('Failed to export card face:', err);
      } finally {
        document.body.removeChild(stage);
      }
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initGallery);
    } else {
      initGallery();
    }
