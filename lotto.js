// ===== 테마 토글 =====
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

themeToggle.addEventListener('click', () => {
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  themeToggle.textContent = isDark ? '🌙 다크모드' : '☀️ 라이트모드';
});

// ===== 탭 전환 =====
document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
    tab.classList.add('active');
    document.getElementById('tab-' + tab.dataset.tab).classList.add('active');
    if (tab.dataset.tab === 'saved') renderSaved();
  });
});

// ===== 로또 알고리즘 =====
function pick6() {
  const pool = Array.from({ length: 45 }, (_, i) => i + 1);
  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }
  return pool.slice(0, 7); // 6개 + 보너스 1개
}

function ballClass(n) {
  if (n <= 9)  return 'y';
  if (n <= 19) return 'b';
  if (n <= 29) return 'r';
  if (n <= 39) return 'g';
  return 'p';
}

function makeBall(n, delay = 0) {
  const el = document.createElement('div');
  el.className = `ball ${ballClass(n)}`;
  el.textContent = n;
  el.style.animationDelay = `${delay}ms`;
  return el;
}

// ===== 5게임 생성 =====
let currentGames = [];

document.getElementById('pick-btn').addEventListener('click', () => {
  currentGames = [];
  const container = document.getElementById('games-container');
  container.innerHTML = '';

  for (let g = 0; g < 5; g++) {
    const nums = pick6();
    const main = nums.slice(0, 6).sort((a, b) => a - b);
    const bonus = nums[6];
    currentGames.push({ main, bonus });

    const card = document.createElement('div');
    card.className = 'game-card';
    card.style.animationDelay = `${g * 60}ms`;

    const header = document.createElement('div');
    header.className = 'game-header';
    header.innerHTML = `<span class="game-label">Game ${g + 1}</span>`;
    card.appendChild(header);

    const row = document.createElement('div');
    row.className = 'balls-row';

    main.forEach((n, i) => row.appendChild(makeBall(n, g * 60 + i * 60)));

    const sep = document.createElement('span');
    sep.className = 'separator';
    sep.textContent = '+';
    row.appendChild(sep);

    const bonusWrap = document.createElement('div');
    bonusWrap.style.display = 'flex';
    bonusWrap.style.flexDirection = 'column';
    bonusWrap.style.alignItems = 'center';
    bonusWrap.style.gap = '3px';
    const bonusLabel = document.createElement('span');
    bonusLabel.className = 'bonus-label';
    bonusLabel.textContent = '보너스';
    bonusWrap.appendChild(bonusLabel);
    bonusWrap.appendChild(makeBall(bonus, g * 60 + 6 * 60));
    row.appendChild(bonusWrap);

    card.appendChild(row);
    container.appendChild(card);
  }

  document.getElementById('save-btn').style.display = 'block';
});

// ===== 저장 기능 =====
document.getElementById('save-btn').addEventListener('click', () => {
  if (!currentGames.length) return;

  const saved = JSON.parse(localStorage.getItem('lottoSaved') || '[]');
  saved.unshift({ time: new Date().toLocaleString('ko-KR'), games: currentGames });
  if (saved.length > 50) saved.splice(50);
  localStorage.setItem('lottoSaved', JSON.stringify(saved));

  document.getElementById('save-btn').textContent = '✅ 저장됨';
  setTimeout(() => { document.getElementById('save-btn').textContent = '💾 저장하기'; }, 1500);
});

// ===== 저장 목록 렌더링 =====
function renderSaved() {
  const container = document.getElementById('saved-container');
  const saved = JSON.parse(localStorage.getItem('lottoSaved') || '[]');

  if (!saved.length) {
    container.innerHTML = '<p class="empty-msg">저장된 번호가 없습니다.</p>';
    return;
  }

  container.innerHTML = '';
  saved.forEach(entry => {
    const item = document.createElement('div');
    item.className = 'saved-item';

    const meta = document.createElement('div');
    meta.className = 'saved-meta';
    meta.textContent = entry.time;
    item.appendChild(meta);

    entry.games.forEach((game, i) => {
      const row = document.createElement('div');
      row.className = 'balls-row';
      row.style.marginBottom = '8px';

      const label = document.createElement('span');
      label.className = 'game-label';
      label.style.fontSize = '0.8rem';
      label.style.minWidth = '54px';
      label.textContent = `G${i + 1}`;
      row.appendChild(label);

      game.main.forEach(n => row.appendChild(makeBall(n)));

      const sep = document.createElement('span');
      sep.className = 'separator';
      sep.textContent = '+';
      row.appendChild(sep);

      row.appendChild(makeBall(game.bonus));
      item.appendChild(row);
    });

    container.appendChild(item);
  });
}

// ===== 전체 삭제 =====
document.getElementById('clear-btn').addEventListener('click', () => {
  if (!confirm('저장된 번호를 모두 삭제할까요?')) return;
  localStorage.removeItem('lottoSaved');
  renderSaved();
});
