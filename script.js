// --- ELEMEN HTML ---
const btnYes = document.getElementById('btn-yes');
const btnNo = document.getElementById('btn-no');
const questionCard = document.getElementById('question-card');
const successCard = document.getElementById('success-card');
const heartsBackground = document.getElementById('hearts-background');
const reveals = document.querySelectorAll('.reveal');

// --- 1. EFEK ANIMASI MUNCUL SAAT SCROLL (SCROLL REVEAL) ---
function revealOnScroll() {
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let elementTop = reveals[i].getBoundingClientRect().top;
        let elementVisible = 150; // Jarak sebelum elemen muncul

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll(); // Panggil sekali saat web dimuat

// --- 2. EFEK JEJAK KURSOR AJAIB ---
document.addEventListener("mousemove", function(e) {
    createCursorParticle(e.pageX, e.pageY);
});
document.addEventListener("touchmove", function(e) {
    createCursorParticle(e.touches[0].pageX, e.touches[0].pageY);
});

function createCursorParticle(x, y) {
    // Membatasi jumlah partikel biar nggak bikin lag
    if (Math.random() > 0.4) return; 

    const particle = document.createElement("div");
    particle.className = "trail-particle";
    
    // Acak mau keluar ikon bintang atau hati
    const icons = ["✨", "💖", "🌸", "🤍"];
    particle.innerText = icons[Math.floor(Math.random() * icons.length)];
    
    particle.style.left = (x - 10) + "px";
    particle.style.top = (y - 10) + "px";
    
    document.body.appendChild(particle);
    
    // Hapus partikel setelah 800ms
    setTimeout(() => {
        particle.remove();
    }, 800);
}

// --- 3. EFEK HUJAN HATI BACKGROUND ---
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-shape');
    heart.innerHTML = '🤍'; 
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    heart.style.animationDuration = Math.random() * 3 + 3 + 's';
    heartsBackground.appendChild(heart);
    
    setTimeout(() => { heart.remove(); }, 6000);
}
setInterval(createHeart, 300);

// --- 4. JIKA KLIK 'MAUUU!' ---
btnYes.addEventListener('click', () => {
    questionCard.style.transform = 'scale(0.8)';
    questionCard.style.opacity = '0';
    
    setTimeout(() => {
        questionCard.classList.add('hidden');
        successCard.classList.remove('hidden');
        successCard.classList.add('active'); // Memicu efek reveal
        successCard.style.opacity = '0';
        successCard.style.transform = 'scale(0.8)';
        
        setTimeout(() => {
            successCard.style.transition = 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            successCard.style.opacity = '1';
            successCard.style.transform = 'scale(1)';
        }, 50);
    }, 400); 
});

// --- 5. LOGIKA TOMBOL 'NGGAK' GOCEK KE SEGALA ARAH ---
function gocekSemuaArah() {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => {
            const arahX = (Math.random() > 0.5 ? 1 : -1) * (Math.floor(Math.random() * 100) + 60);
            const arahY = (Math.random() > 0.5 ? 1 : -1) * (Math.floor(Math.random() * 100) + 60);
            
            btnNo.style.transform = `translate(${arahX}px, ${arahY}px)`;
        }, i * 120); 
    }
}

btnNo.addEventListener('mouseover', gocekSemuaArah);
btnNo.addEventListener('touchstart', (e) => {
    e.preventDefault(); 
    gocekSemuaArah();
});