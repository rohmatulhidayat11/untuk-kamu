// Mengambil elemen
const btnYes = document.getElementById('btn-yes');
const btnNo = document.getElementById('btn-no');
const questionCard = document.getElementById('question-card');
const successCard = document.getElementById('success-card');
const heartsBackground = document.getElementById('hearts-background');

// --- 1. MEMBUAT EFEK HUJAN HATI (BACKGROUND) ---
function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-shape');
    heart.innerHTML = '🤍'; // Bisa diganti 🌸 atau 🎀
    
    // Posisi acak di atas layar
    heart.style.left = Math.random() * 100 + 'vw';
    
    // Ukuran acak
    heart.style.fontSize = (Math.random() * 20 + 10) + 'px';
    
    // Durasi jatuh acak (antara 3 detik sampai 6 detik)
    heart.style.animationDuration = Math.random() * 3 + 3 + 's';
    
    heartsBackground.appendChild(heart);
    
    // Hapus hati yang sudah jatuh agar website tidak berat
    setTimeout(() => {
        heart.remove();
    }, 6000);
}
// Panggil fungsi pembuat hati setiap 300 milidetik
setInterval(createHeart, 300);


// --- 2. JIKA DIA KLIK 'MAUUU!' ---
btnYes.addEventListener('click', () => {
    // Sembunyikan kartu pertanyaan
    questionCard.style.transform = 'scale(0.8)';
    questionCard.style.opacity = '0';
    
    setTimeout(() => {
        questionCard.classList.add('hidden');
        // Munculkan kartu sukses
        successCard.classList.remove('hidden');
        successCard.style.opacity = '0';
        successCard.style.transform = 'scale(0.8)';
        
        // Animasi muncul dengan cantik
        setTimeout(() => {
            successCard.style.transition = 'all 0.6s cubic-bezier(0.68, -0.55, 0.265, 1.55)';
            successCard.style.opacity = '1';
            successCard.style.transform = 'scale(1)';
        }, 50);
    }, 400); // Tunggu animasi kartu pertama selesai
});


// --- 3. LOGIKA TOMBOL 'NGGAK' GOCEK KANAN/KIRI ---
function gocekKananKiri() {
    // Kombinasi arah geseran beruntun (Nilai + ke Kanan, Nilai - ke Kiri)
    const jarakGeser = [
        (Math.random() > 0.5 ? 90 : -90),
        (Math.random() > 0.5 ? 120 : -120),
        (Math.random() > 0.5 ? 70 : -70),
        (Math.random() > 0.5 ? 140 : -140),
        (Math.random() > 0.5 ? 110 : -110)
    ];
    
    // Melakukan pergeseran berkali-kali dengan jeda 120ms
    jarakGeser.forEach((jarak, index) => {
        setTimeout(() => {
            btnNo.style.transform = `translateX(${jarak}px)`;
        }, index * 120);
    });
}

// Menghindar saat kursor mouse mendekat (untuk PC/Laptop)
btnNo.addEventListener('mouseover', gocekKananKiri);

// Menghindar saat mau disentuh jari (untuk HP)
btnNo.addEventListener('touchstart', (e) => {
    e.preventDefault(); 
    gocekKananKiri();
});