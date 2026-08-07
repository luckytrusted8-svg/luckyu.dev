# TODO - Merapikan Sidebar

## Steps
- [x] Analisis struktur sidebar (Sidebar.tsx, nav.ts, MainLayout, index.css)
- [x] Buat rencana & dapatkan persetujuan user
- [x] Ubah `Sidebar.tsx`: jadikan area nav `flex-1` dan center-kan vertikal agar menu Beranda → Kontak turun ke bawah & mengisi ruang kosong
- [x] Tambah jarak antar menu (gap-2) agar tidak terlalu rapat
- [x] Tambah garis pembatas (border-t) di atas tombol Download CV
- [x] Rapikan ulang layout compact: hapus `justify-between` & `flex-1`, gunakan struktur natural Profile → Navigation → Download CV → Social
- [x] Item nav tinggi konsisten (min-h 44px), gap rapat 1.5, spacing blok 24-32px (mt-7), footer dekat di bawah nav
- [x] Tambah menu "Admin" di dalam footer container yang sama dengan Download CV (button, icon UserCog, gap 14px)
- [x] Perbaiki footer terpotong di layar default: nav flex-1 min-h-0 overflow-y-auto, footer shrink-0 agar selalu terlihat di bawah
- [x] Tambah link "Kembali ke beranda" (panah ArrowLeft) di halaman Blog, konsisten dengan AllProjects
- [x] Rapikan versi mobile (MobileNav): tambah garis pembatas (border-t) di atas Download CV, samakan tombol CV dengan desktop, Admin tidak ditambahkan di mobile
- [x] Verifikasi hasil (tsc & lint bersih)
