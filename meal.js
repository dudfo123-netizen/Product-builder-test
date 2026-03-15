// ===== 식사 데이터 =====
const MEALS = [
  // 한식
  { name: '김치찌개',   emoji: '🍲', cat: '한식', tags: ['얼큰', '국물', '밥도둑'] },
  { name: '된장찌개',   emoji: '🍲', cat: '한식', tags: ['구수함', '국물', '건강식'] },
  { name: '불고기',     emoji: '🥩', cat: '한식', tags: ['달콤', '고기', '인기'] },
  { name: '비빔밥',     emoji: '🥗', cat: '한식', tags: ['건강식', '채소', '고추장'] },
  { name: '삼겹살',     emoji: '🥓', cat: '한식', tags: ['고기', '회식', '소주'] },
  { name: '제육볶음',   emoji: '🍖', cat: '한식', tags: ['매콤', '밥도둑', '돼지'] },
  { name: '냉면',       emoji: '🍜', cat: '한식', tags: ['시원함', '여름', '담백'] },
  { name: '삼계탕',     emoji: '🐔', cat: '한식', tags: ['보양식', '닭고기', '여름'] },
  { name: '순두부찌개', emoji: '🍲', cat: '한식', tags: ['얼큰', '부드러움', '해장'] },
  { name: '갈비탕',     emoji: '🍖', cat: '한식', tags: ['진한국물', '보양식', '고기'] },
  { name: '육개장',     emoji: '🍲', cat: '한식', tags: ['얼큰', '해장', '국물'] },
  { name: '설렁탕',     emoji: '🍲', cat: '한식', tags: ['담백', '국물', '소뼈'] },
  { name: '잡채',       emoji: '🍜', cat: '한식', tags: ['달콤', '당면', '명절'] },
  { name: '닭갈비',     emoji: '🐔', cat: '한식', tags: ['매콤', '볶음', '치즈추가'] },
  { name: '보쌈',       emoji: '🥬', cat: '한식', tags: ['수육', '배추', '새우젓'] },

  // 중식
  { name: '짜장면',   emoji: '🍜', cat: '중식', tags: ['중화', '달콤', '국민음식'] },
  { name: '짬뽕',     emoji: '🍜', cat: '중식', tags: ['얼큰', '해산물', '국물'] },
  { name: '탕수육',   emoji: '🍖', cat: '중식', tags: ['바삭', '새콤달콤', '고기'] },
  { name: '마파두부', emoji: '🌶️', cat: '중식', tags: ['얼큰', '두부', '중화'] },
  { name: '볶음밥',   emoji: '🍳', cat: '중식', tags: ['간단', '든든', '달걀'] },
  { name: '깐풍기',   emoji: '🍗', cat: '중식', tags: ['바삭', '매콤달콤', '닭고기'] },
  { name: '유린기',   emoji: '🍗', cat: '중식', tags: ['담백', '닭고기', '소스'] },

  // 일식
  { name: '라멘',     emoji: '🍜', cat: '일식', tags: ['국물', '면요리', '깊은맛'] },
  { name: '스시',     emoji: '🍣', cat: '일식', tags: ['신선함', '해산물', '고급'] },
  { name: '우동',     emoji: '🍜', cat: '일식', tags: ['담백', '국물', '면요리'] },
  { name: '돈카츠',   emoji: '🥩', cat: '일식', tags: ['바삭', '돼지', '소스'] },
  { name: '규동',     emoji: '🍚', cat: '일식', tags: ['소고기', '덮밥', '간단'] },
  { name: '오야코동', emoji: '🍚', cat: '일식', tags: ['닭고기', '달걀', '덮밥'] },
  { name: '텐동',     emoji: '🍤', cat: '일식', tags: ['튀김', '덮밥', '새우'] },
  { name: '타코야키', emoji: '🐙', cat: '일식', tags: ['문어', '간식', '오코노미'] },

  // 양식
  { name: '파스타',   emoji: '🍝', cat: '양식', tags: ['이탈리안', '면', '크림/토마토'] },
  { name: '피자',     emoji: '🍕', cat: '양식', tags: ['치즈', '인기', '파티'] },
  { name: '스테이크', emoji: '🥩', cat: '양식', tags: ['고급', '소고기', '특별한날'] },
  { name: '리조또',   emoji: '🍚', cat: '양식', tags: ['이탈리안', '쌀', '크리미'] },
  { name: '햄버거',   emoji: '🍔', cat: '양식', tags: ['패스트푸드', '간편', '인기'] },
  { name: '샌드위치', emoji: '🥪', cat: '양식', tags: ['간편', '점심', '다양함'] },
  { name: '그라탱',   emoji: '🧀', cat: '양식', tags: ['치즈', '오븐', '크리미'] },

  // 분식
  { name: '떡볶이',   emoji: '🌶️', cat: '분식', tags: ['매콤', '달콤', '국민간식'] },
  { name: '순대',     emoji: '🌭', cat: '분식', tags: ['분식', '포장마차', '소시지'] },
  { name: '라볶이',   emoji: '🍜', cat: '분식', tags: ['매콤', '라면', '떡볶이'] },
  { name: '쫄면',     emoji: '🍜', cat: '분식', tags: ['매콤새콤', '탱탱', '비빔'] },
  { name: '김밥',     emoji: '🍙', cat: '분식', tags: ['간편', '도시락', '든든'] },
  { name: '만두',     emoji: '🥟', cat: '분식', tags: ['군만두', '찐만두', '간식'] },

  // 기타
  { name: '치킨',     emoji: '🍗', cat: '기타', tags: ['바삭', '맥주', '배달'] },
  { name: '족발',     emoji: '🐷', cat: '기타', tags: ['쫄깃', '포장마차', '소주'] },
  { name: '곱창',     emoji: '🫀', cat: '기타', tags: ['진한맛', '소주', '특별함'] },
  { name: '쌀국수',   emoji: '🍜', cat: '기타', tags: ['담백', '베트남', '건강식'] },
  { name: '카레',     emoji: '🍛', cat: '기타', tags: ['향신료', '밥', '든든'] },
  { name: '찜닭',     emoji: '🐔', cat: '기타', tags: ['달콤매콤', '닭고기', '당면'] },
  { name: '해산물',   emoji: '🦞', cat: '기타', tags: ['신선함', '바다', '특별함'] },
];

// ===== 상태 =====
let selectedCat = '전체';
let currentMeals = [];

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

// ===== 카테고리 필터 =====
document.querySelectorAll('.cat-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    selectedCat = btn.dataset.cat;
  });
});

// ===== Fisher-Yates 셔플 =====
function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// ===== 카드 생성 헬퍼 =====
const RANK_INFO = [
  { label: '🥇 1등', cls: 'rank-1' },
  { label: '🥈 2등', cls: 'rank-2' },
  { label: '🥉 3등', cls: 'rank-3' },
];

function makeCard(meal, rank) {
  const { label, cls } = RANK_INFO[rank];
  const card = document.createElement('div');
  card.className = `meal-card ${cls}`;
  card.innerHTML = `
    <div class="rank-label">${label}</div>
    <div class="meal-emoji">${meal.emoji}</div>
    <div class="meal-info">
      <div class="meal-name">${meal.name}</div>
      <div class="meal-tags">
        ${meal.tags.map(t => `<span class="meal-tag">${t}</span>`).join('')}
      </div>
      <div class="meal-badge">${meal.cat}</div>
    </div>
  `;
  return card;
}

// ===== 추천 생성 =====
document.getElementById('pick-btn').addEventListener('click', () => {
  const pool = selectedCat === '전체' ? MEALS : MEALS.filter(m => m.cat === selectedCat);
  if (pool.length === 0) return;

  const count = Math.min(3, pool.length);
  currentMeals = shuffle(pool).slice(0, count);

  const container = document.getElementById('meals-container');
  container.innerHTML = '';

  // 1등: 단독 전체 너비
  container.appendChild(makeCard(currentMeals[0], 0));

  // 2, 3등: 나란히 절반 크기
  if (currentMeals.length > 1) {
    const row = document.createElement('div');
    row.className = 'rank-row';
    if (currentMeals[1]) row.appendChild(makeCard(currentMeals[1], 1));
    if (currentMeals[2]) row.appendChild(makeCard(currentMeals[2], 2));
    container.appendChild(row);
  }

  document.getElementById('save-btn').style.display = 'block';
  document.getElementById('save-btn').textContent = '💾 저장하기';
});

// ===== 저장 =====
document.getElementById('save-btn').addEventListener('click', () => {
  if (!currentMeals.length) return;
  const saved = JSON.parse(localStorage.getItem('mealSaved') || '[]');
  saved.unshift({ time: new Date().toLocaleString('ko-KR'), meals: currentMeals });
  if (saved.length > 50) saved.splice(50);
  localStorage.setItem('mealSaved', JSON.stringify(saved));
  document.getElementById('save-btn').textContent = '✅ 저장됨';
  setTimeout(() => { document.getElementById('save-btn').textContent = '💾 저장하기'; }, 1500);
});

// ===== 저장 목록 렌더링 =====
function renderSaved() {
  const container = document.getElementById('saved-container');
  const saved = JSON.parse(localStorage.getItem('mealSaved') || '[]');

  if (!saved.length) {
    container.innerHTML = '<p class="empty-msg">저장된 추천이 없습니다.</p>';
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

    entry.meals.forEach(meal => {
      const row = document.createElement('div');
      row.className = 'saved-meal-row';
      row.innerHTML = `
        <span class="saved-meal-emoji">${meal.emoji}</span>
        <span class="saved-meal-name">${meal.name}</span>
        <span class="saved-meal-cat">${meal.cat}</span>
      `;
      item.appendChild(row);
    });

    container.appendChild(item);
  });
}

// ===== 전체 삭제 =====
document.getElementById('clear-btn').addEventListener('click', () => {
  if (!confirm('저장된 추천을 모두 삭제할까요?')) return;
  localStorage.removeItem('mealSaved');
  renderSaved();
});
