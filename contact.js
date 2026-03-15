// ===== 테마 토글 =====
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
  document.documentElement.setAttribute('data-theme', isDark ? 'light' : 'dark');
  themeToggle.textContent = isDark ? '🌙 다크모드' : '☀️ 라이트모드';
});

// ===== 폼 제출 (Formspree AJAX) =====
const form = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');
const successMsg = document.getElementById('success-msg');

form.addEventListener('submit', async (e) => {
  e.preventDefault();

  submitBtn.disabled = true;
  submitBtn.textContent = '⏳ 전송 중...';

  try {
    const res = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    });

    if (res.ok) {
      form.style.display = 'none';
      successMsg.style.display = 'block';
    } else {
      const data = await res.json();
      const msg = data?.errors?.map(e => e.message).join(', ') || '전송에 실패했습니다.';
      alert(`오류: ${msg}`);
      submitBtn.disabled = false;
      submitBtn.textContent = '✉️ 문의 보내기';
    }
  } catch {
    alert('네트워크 오류가 발생했습니다. 잠시 후 다시 시도해 주세요.');
    submitBtn.disabled = false;
    submitBtn.textContent = '✉️ 문의 보내기';
  }
});

// ===== 폼 초기화 =====
function resetForm() {
  form.reset();
  form.style.display = 'block';
  successMsg.style.display = 'none';
  submitBtn.disabled = false;
  submitBtn.textContent = '✉️ 문의 보내기';
}
