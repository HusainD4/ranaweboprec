// Menampilkan notifikasi
function showNotification() {
    const notification = document.getElementById('notification');
    notification.style.display = 'block'; // Menampilkan notifikasi
}

// Menyembunyikan notifikasi
function hideNotification() {
    const notification = document.getElementById('notification');
    notification.style.display = 'none'; // Menyembunyikan notifikasi
}

// Menampilkan notifikasi pertama kali dan setelah setiap interval 30 detik
function showAndHideNotification() {
    showNotification(); // Menampilkan notifikasi
    setTimeout(hideNotification, 10000); // Menyembunyikan notifikasi setelah 10 detik
}

// Set interval untuk menampilkan dan menyembunyikan notifikasi setiap 30 detik
setInterval(showAndHideNotification, 20000);

// Menampilkan notifikasi pertama kali ketika halaman dimuat
showAndHideNotification();




// Mengalihkan pengguna ke URL tanpa ekstensi .html
if (window.location.pathname.endsWith('.html')) {
    var newUrl = window.location.pathname.replace('.html', '');
    window.history.replaceState(null, null, newUrl);  // Mengganti URL tanpa refresh halaman
}
