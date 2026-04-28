/* ZESSION-AI JAVASCRIPT CORE 
   Feature: Ripple Effect, Audio Auto-Resume, & Enhanced Clipboard
*/

const music = document.getElementById("music");

// 1. Fungsi Copy dengan feedback visual yang lebih baik
async function copyText(text) {
    try {
        await navigator.clipboard.writeText(text);
        
        // Alert kustom atau log (bisa diganti dengan toast notification)
        console.log("Copied to clipboard: " + text);
        alert("✅ Nomor Berhasil Disalin!");
        
    } catch (err) {
        console.error("Gagal menyalin: ", err);
        alert("❌ Gagal menyalin secara otomatis.");
    }
}

// 2. Handle Audio Autoplay & Interaction
const startAudio = () => {
    music.play().then(() => {
        console.log("Audio playing...");
    }).catch(err => {
        console.log("Menunggu interaksi user untuk memutar musik.");
    });
};

// Coba putar saat window load
window.addEventListener("load", startAudio);

// Force play saat ada klik pertama di dokumen
document.addEventListener("click", () => {
    if (music.paused) {
        startAudio();
    }
}, { once: false });

// 3. Efek Ripple (Gelombang) saat Button diklik
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        let ripples = document.createElement('span');
        ripples.style.left = x + 'px';
        ripples.style.top = y + 'px';
        ripples.classList.add('ripple-effect'); // Tambahkan CSS ini jika ingin visual tambahan
        
        this.appendChild(ripples);

        setTimeout(() => {
            ripples.remove();
        }, 1000);
    });
});

// 4. Mencegah Inspect Element dasar (Opsional - Sesuai request "Tanpa Limit")
document.addEventListener('contextmenu', event => event.preventDefault()); // Matikan Klik Kanan
document.onkeydown = function(e) {
    if(e.keyCode == 123) { return false; } // Matikan F12
    if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) { return false; } // Matikan Ctrl+Shift+I
};

console.log("Zession-AI Script Active. Kernel v2 Status: Stable.");
