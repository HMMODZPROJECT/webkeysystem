// Matrix effect
const canvas=document.getElementById("matrix"),ctx=canvas.getContext("2d");
canvas.height=window.innerHeight;canvas.width=window.innerWidth;

const chars="アァイィウヴエェオカガキギクグケゲコゴサザシジスズセゼソゾタダチヂッヅテデトドナニヌネノハバパヒビピフブプヘベペホボポマミムメモヤユヨラリルレロワヲンABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
const fontSize=14,columns=canvas.width/fontSize;
let drops=[];
for(let x=0;x<columns;x++)drops[x]=1;

function draw(){
  ctx.fillStyle="rgba(0,0,0,0.05)";
  ctx.fillRect(0,0,canvas.width,canvas.height);
  ctx.fillStyle="#0f0";ctx.font=fontSize+"px monospace";
  for(let i=0;i<drops.length;i++){
    const text=chars.charAt(Math.floor(Math.random()*chars.length));
    ctx.fillText(text,i*fontSize,drops[i]*fontSize);
    if(drops[i]*fontSize>canvas.height&&Math.random()>0.975)drops[i]=0;
    drops[i]++;
  }
}
setInterval(draw,35);

window.addEventListener("resize",()=>{
  canvas.height=window.innerHeight;
  canvas.width=window.innerWidth;
});

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
