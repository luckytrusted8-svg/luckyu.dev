# TODO - Sidebar Blog Scroll Behavior

## Task
Membuat klik "Blog" di sidebar agar **scroll** ke section blog di halaman depan (bukan pindah ke `/blog`).

## Steps
- [x] Baca file terkait (nav.ts, Sidebar.tsx, BlogSection.tsx, Home.tsx, App.tsx, useLenis.ts, useActiveSection.ts)
- [x] Hapus `path: "/blog"` dari item nav Blog di `src/lib/nav.ts`
- [x] Update logika active-state di `src/components/layout/Sidebar.tsx` agar Blog diperlakukan seperti section biasa
- [x] Bersihkan import & variabel yang tidak terpakai (`useLocation`, `location`)
- [x] Verifikasi perubahan (build sukses: `tsc -b && vite build` selesai tanpa error)
