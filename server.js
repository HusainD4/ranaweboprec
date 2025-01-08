// Import express dan multer
const express = require('express');
const multer = require('multer');
const path = require('path');

// Inisialisasi aplikasi express
const app = express();
const port = 3000;

// Tentukan folder untuk menyimpan file yang di-upload
const uploadFolder = 'images/foto/';

// Konfigurasi penyimpanan file menggunakan multer
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadFolder); // Tentukan lokasi penyimpanan file
    },
    filename: function (req, file, cb) {
        // Menggunakan nama file asli, bisa dimodifikasi sesuai kebutuhan
        cb(null, Date.now() + path.extname(file.originalname)); // Nama file unik berdasarkan timestamp
    }
});

// Inisialisasi multer dengan konfigurasi penyimpanan
const upload = multer({ storage: storage });

// Endpoint untuk menerima upload foto
app.post('/upload', upload.single('foto'), (req, res) => {
    if (!req.file) {
        return res.status(400).send('Tidak ada file yang di-upload.');
    }
    res.send('File berhasil di-upload ke folder: ' + uploadFolder + req.file.filename);
});

// Jalankan server
app.listen(port, () => {
    console.log(`Server berjalan di http://localhost:${port}`);
});
