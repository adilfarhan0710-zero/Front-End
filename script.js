// tangkap element tombol dan elemen <body>
const tombolDark = document.getElementById('btn-darkmode');
const body = document.body;

// beri "telinga" pada tombol. kalau dikil, jalankan fungsi ini:
tombolDark.addEventListener('click', function() {

    // toggle: kalau class 'dark-mode' belum ada di <body>, tambahkan. kalau sudah ada, cabut!
    body.classList.toggle('dark-mode');

    // ubah teks dan ikon tombolnya sesuai mode
    if (body.classList.contains('dark-mode')) {
        tombolDark.textContent = '☀️ Terang';
    } else {
        tombolDark.textContent = '🌙 Gelap';
    }
});