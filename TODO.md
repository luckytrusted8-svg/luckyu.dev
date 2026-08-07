# TODO - Ubah Fungsi Kontak ke WhatsApp

## Steps
- [x] Analisis komponen Contact.tsx & file terkait (nav.ts, content.ts, Footer.tsx)
- [x] Buat rencana & dapatkan persetujuan user

## V1 - Kontak langsung ke WhatsApp
- [x] Tambah konstanta WHATSAPP & ubah item "Telepon" agar render sebagai link (target _blank, hover state)
- [x] Ubah handleSubmit agar membuka WhatsApp (bukan mailto)
- [x] Update teks tombol & keterangan form
- [x] Verifikasi hasil: tsc & oxlint bersih

## V2 - Form kontak menyusun pesan WhatsApp dari input user
- [x] Ambil value input Nama, Email, Pesan & gabungkan menjadi satu pesan WhatsApp
- [x] Gunakan encodeURIComponent() untuk URL aman
- [x] Buka https://wa.me/62895629244156?text={encoded} via window.open (target _blank, noopener, noreferrer)
- [x] Validasi: Nama wajib, Email wajib + format valid, Pesan wajib — jika gagal jangan buka WhatsApp
- [x] Tampilkan pesan error sederhana (border merah + teks error) mengikuti desain
- [x] Pertahankan desain, icon, typography, spacing, & style tombol; Email & Lokasi tidak diubah
- [x] Verifikasi hasil: tsc & oxlint bersih
