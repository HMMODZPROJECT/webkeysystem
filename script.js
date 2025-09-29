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

// Password validation + redirect
function validatePassword(){
  const pass=document.getElementById("password").value;
  const error=document.getElementById("error");
  if(pass.length<6){
    error.textContent="Minimal 6 karakter!";
  } else {
    error.textContent="";
    // arahkan ke halaman baru (ganti dengan link kamu)
    window.location.href="https://webisteteacher.netlify.app/"; 
    // atau ke file lokal: window.location.href="home.html";
  }
}
