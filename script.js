let fotoSudahDibuka=[false,false,false];

function mulaiMusik(){
let musik=document.getElementById("musik");
musik.play().catch(()=>{});
}

function nextSlide(nomor){
document.querySelectorAll(".slide").forEach(s=>s.classList.remove("active"));
document.getElementById("slide"+nomor).classList.add("active");

if(nomor===2){
loveBerjatuhan();
}

if(nomor===7){
mulaiGame();
}
}



function tampilkanSurat(){
document.getElementById("surat").classList.add("muncul");
}

function bukaSlideFoto(slideNomor,index){
fotoSudahDibuka[index-1]=true;
nextSlide(slideNomor);
}

function loveBerjatuhan(){
const container=document.getElementById("loveContainer");

let interval=setInterval(()=>{
let love=document.createElement("div");
love.classList.add("love");
love.innerHTML="❤";

love.style.left=Math.random()*100+"%";
love.style.fontSize=(18+Math.random()*28)+"px";

container.appendChild(love);

setTimeout(()=>love.remove(),6000);

},140);

setTimeout(()=>clearInterval(interval),20000);
}

document.addEventListener("DOMContentLoaded",function(){

document.getElementById("lanjutAlbum").addEventListener("click",function(){
if(fotoSudahDibuka.includes(false)){
alert("jangan kemana mana dulu sayang, coba liat kenangan kita, hehe");
}else{
nextSlide(7);
}
});

/* animasi ketik */
let text="Hai CINDERELLA PUTRI";
let i=0;

function ketik(){
if(i<text.length){
document.getElementById("typing").innerHTML+=text.charAt(i);
i++;
setTimeout(ketik,80);
}
}
ketik();

/* COUNTDOWN */
let tanggalJadian = new Date("2024-10-02"); // GANTI TANGGAL
let sekarang = new Date();
let selisih = Math.floor((sekarang - tanggalJadian) / (1000*60*60*24));

document.getElementById("hariJadian").innerText =
"Kita sudah bersama " + selisih + " hari ❤️";

});

let skorGame = 0;
let gameAktif = false;

function mulaiGame(){
if(gameAktif) return;
gameAktif = true;

const area = document.getElementById("gameArea");

function jatuhkanHati(){

let hati = document.createElement("div");
hati.classList.add("hatiJatuh");

let fotoLove = [
"love1.png",
"love2.png",
"love3.png",
"love4.png",
"love5.png",
"love6.png"
];

let randomFoto = fotoLove[Math.floor(Math.random()*fotoLove.length)];

let img = document.createElement("img");
img.src = randomFoto;

hati.appendChild(img);

hati.style.left = Math.random()*85 + "%";

hati.onclick = function(){
skorGame++;
document.getElementById("scoreGame").innerText =
"Hati terkumpul: " + skorGame;
hati.remove();

if(skorGame >= 10){
document.getElementById("pesanAkhir").style.display="block";
return;
}
};

area.appendChild(hati);

/* setelah beberapa detik baru jatuhkan lagi */
setTimeout(()=>{
if(skorGame < 10){
jatuhkanHati();
}
},1800);   // jarak antar love (bisa diubah)
}

/* mulai pertama kali */
jatuhkanHati();

}
