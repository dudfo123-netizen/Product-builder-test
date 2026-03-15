// 다크/라이트 모드 토글
const themeToggle = document.getElementById('theme-toggle');
const html = document.documentElement;

themeToggle.addEventListener('click', () => {
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  themeToggle.textContent = isDark ? '🌙 다크모드' : '☀️ 라이트모드';
});

// 로또 번호 생성
const generatorBtn = document.getElementById('generator-btn');
const lottoNumbersDiv = document.getElementById('lotto-numbers');

generatorBtn.addEventListener('click', () => {
  lottoNumbersDiv.innerHTML = '';
  const numbers = new Set();
  while (numbers.size < 6) {
    const randomNumber = Math.floor(Math.random() * 45) + 1;
    numbers.add(randomNumber);
  }

  const sorted = [...numbers].sort((a, b) => a - b);
  for (const number of sorted) {
    const numberDiv = document.createElement('div');
    numberDiv.classList.add('lotto-number');
    numberDiv.textContent = number;
    lottoNumbersDiv.appendChild(numberDiv);
  }
});
