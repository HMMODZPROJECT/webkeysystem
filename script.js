const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "アカサタナハマヤラワ0123456789アイウエオABCDEFGHIJKLMNOPQRSTUVWXYZ";
const fontSize = 16;
const columns = canvas.width / fontSize; 

const drops = [];
for (let i = 0; i < columns; i++) {
  drops[i] = 1;
}

function draw() {
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0F0"; 
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
setInterval(draw, 33);

const CORRECT_PASSWORD = 'hmmodz-updt';

function validatePassword(event) {
  if (event && event.preventDefault) event.preventDefault();
  const input = document.getElementById('password');
  const errorEl = document.getElementById('error');
  const pw = input.value.trim();

  errorEl.textContent = '';

  if (!pw) {
    errorEl.textContent = 'Password';
    return false;
  }

  if (pw === CORRECT_PASSWORD) {
    window.location.href = 'https://webisteteacher.netlify.app/';
    return true;
  } else {
    errorEl.textContent = 'Ngentod, Makanya Punya mata di pake memek';
    input.value = '';
    input.focus();
    return false;
  }
}
