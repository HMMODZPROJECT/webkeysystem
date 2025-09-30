// ====== Efek Matrix Rain ======
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Atur ukuran canvas full screen
canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const letters = "アカサタナハマヤラワ0123456789アイウエオABCDEFGHIJKLMNOPQRSTUVWXYZ";
const fontSize = 16;
const columns = canvas.width / fontSize; 

// array untuk posisi Y setiap kolom
const drops = [];
for (let i = 0; i < columns; i++) {
  drops[i] = 1;
}

function draw() {
  // background hitam dengan transparansi biar ada efek trail
  ctx.fillStyle = "rgba(0, 0, 0, 0.05)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "#0F0"; // warna hijau
  ctx.font = fontSize + "px monospace";

  for (let i = 0; i < drops.length; i++) {
    const text = letters.charAt(Math.floor(Math.random() * letters.length));
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    // reset ke atas dengan random supaya jatuh terus
    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
      drops[i] = 0;
    }
    drops[i]++;
  }
}
setInterval(draw, 33);

}

// Contoh sederhana: password yang benar (ganti sesuai kebutuhan)
// NOTE: untuk aplikasi nyata, verifikasi password harus dilakukan di server, bukan di JS client.
const CORRECT_PASSWORD = 'hmmodz-updt'; // ganti ini

function validatePassword(event) {
  if (event && event.preventDefault) event.preventDefault(); // cegah submit default
  const input = document.getElementById('password');
  const errorEl = document.getElementById('error');
  const pw = input.value.trim();

  // reset pesan
  errorEl.textContent = '';

  if (!pw) {
    errorEl.textContent = 'Masukkan kata sandi.';
    return false;
  }

  if (pw === CORRECT_PASSWORD) {
    // sukses: redirect ke halaman berikutnya
    // ganti 'dashboard.html' dengan tujuan yang diinginkan
    window.location.href = 'https://webisteteacher.netlify.app/';
    return true;
  } else {
    // salah: tampilkan pesan dan jangan redirect
    errorEl.textContent = 'Kata sandi salah. Coba lagi.';
    // opsional: bersihkan input atau fokus kembali
    input.value = '';
    input.focus();
    return false;
  }
}
