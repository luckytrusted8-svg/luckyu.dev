export interface BlogPost {
  slug: string;
  title: string;
  category: string;
  date: string;
  readTime: string;
  cover: string;
  summary: string;
  tags: string[];
  body: string;
}

export const categories = [
  "Project",
  "Case Study",
  "Tutorial",
  "Tips",
  "UI/UX",
  "Dev Journal",
] as const;

export const blogPosts: BlogPost[] = [
  {
    slug: "membangun-portfolio-modern-react-vite-tailwind",
    title: "Membangun Portfolio Modern Menggunakan React, Vite, dan Tailwind CSS",
    category: "Project",
    date: "2026-08-01",
    readTime: "9 min read",
    cover: "/images/blog/cover-1.svg",
    summary:
      "Saya membangun portfolio ini dengan fokus performa, konsistensi visual, dan pengalaman pengguna premium menggunakan React + Vite + Tailwind CSS.",
    tags: ["React", "Vite", "Tailwind CSS", "Portfolio"],
    body: `
## Mengapa saya memilih React, Vite, dan Tailwind CSS

Portfolio yang cepat dan mudah dikembangkan adalah tujuan utama saya. React memberi fleksibilitas komponen, Vite memberi kecepatan build yang terasa instan, dan Tailwind CSS membuat styling konsisten dengan gaya glassmorphism yang saya gunakan di seluruh situs.

> Portfolio bukan hanya kumpulan proyek. Itu adalah pengalaman produk yang harus terasa profesional, responsif, dan elegan.

### Arsitektur awal

Langkah pertama adalah membuat kerangka kerja yang sederhana:

\`\`\`bash
npm create vite@latest luckyu-portfolio -- --template react-ts
cd luckyu-portfolio
npm install
npm install -D tailwindcss postcss autoprefixer
\`\`\`

Saya memilih Vite karena hot reload sangat cepat dan output bundling lebih ringan dibandingkan setup Webpack tradisional.

### Struktur folder yang saya gunakan

Saya membagi folder menjadi tiga bagian utama:

- \`src/components\` untuk UI dan section yang reusable
- \`src/pages\` untuk struktur halaman utama
- \`src/content\` untuk data artikel, project, dan teks statis

Ini membuat pengembangan berkelanjutan lebih mudah saat menambah halaman baru seperti Blog.

### Tailwind sebagai sistem desain

Tailwind CSS memberi kontrol penuh terhadap spacing, warna, dan efek glassmorphism tanpa harus menulis CSS spesifik untuk setiap komponen.

\`\`\`tsx
export function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-3xl border border-border bg-surface/90 p-6 shadow-xl shadow-black/5 backdrop-blur-xl">
      <h3 className="text-xl font-semibold text-text">{title}</h3>
      <div className="mt-4 text-muted">{children}</div>
    </div>
  );
}
\`\`\`

Saya menggunakan variabel warna di Tailwind untuk menjaga palette konsisten di seluruh halaman.

### Tantangan performa

Salah satu fokus saya adalah menjaga 60 FPS. Untuk itu saya:

- menghindari animasi berat di layout utama
- menggunakan \`will-change: transform\` pada elemen kartu yang bergerak
- menunda render gambar hero sampai komponen masuk viewport

Dengan Vite, mode pengembangan terasa responsif, sementara build produksi tetap kecil.

### Tips

1. Gunakan \`React.lazy\` untuk memecah halaman besar menjadi chunk kecil.
2. Manfaatkan \`prefers-reduced-motion\` agar animasi tetap ramah pengguna.
3. Ukur performa dengan Lighthouse setelah setiap perubahan penting.

### Pengujian visual

Saya melakukan review pada beberapa ukuran layar:

- mobile pertama
- tablet landscape
- laptop 13" dan 16"

Grid artikel dan kartu portfolio disusun ulang untuk memastikan tampilan tetap rapi.

### Kesimpulan

Membangun portfolio modern bukan soal menampilkan teknologi terbaru. Itu soal menyajikan cerita produk yang bersih, cepat, dan konsisten.

Jika Anda ingin memulai portfolio sendiri, gunakan bundler cepat, struktur file sederhana, dan sistem styling yang bisa dirawat.

#### Ringkasan

- React + Vite = pengalaman pengembangan cepat
- Tailwind = styling konsisten dan adaptif
- Fokus mobile-first sejak awal
- Struktur data terpisah untuk blog dan proyek

Situs ini adalah contoh nyata bagaimana teknik tersebut bekerja bersama.
`,
  },
  {
    slug: "cara-deploy-react-ke-vercel-custom-domain",
    title: "Cara Deploy React ke Vercel Menggunakan Custom Domain",
    category: "Tutorial",
    date: "2026-07-26",
    readTime: "8 min read",
    cover: "/images/blog/cover-2.svg",
    summary:
      "Panduan praktis untuk mengirim portfolio React ke Vercel dengan domain kustom, SSL otomatis, dan optimasi build production.",
    tags: ["Vercel", "Deployment", "React", "Domain"],
    body: `
## Mengirim portfolio React ke Vercel dalam beberapa langkah

Deploy ke Vercel adalah proses yang cepat. Saya menggunakan Vite + React, lalu menghubungkan repositori GitHub secara otomatis.

> Vercel membuat deployment React terasa seperti klik satu tombol.

### Persiapan repository

Pastikan repository di GitHub sudah berisi file berikut:

- \`package.json\`
- \`vite.config.ts\`
- \`tsconfig.json\`
- \`public/\`
- \`src/\`

Kemudian masukkan perintah build yang jelas:

\`\`\`json
{
  "scripts": {
    "dev": "vite",
    "build": "tsc -b && vite build",
    "preview": "vite preview"
  }
}
\`\`\`

### Menambahkan Vercel ke produk

1. Login ke Vercel.
2. Pilih "New Project".
3. Pilih repository portfolio.
4. Biarkan Vercel mendeteksi framework React.
5. Klik Deploy.

Setelah selesai, situs akan tersedia di subdomain Vercel.

### Menghubungkan Custom Domain

Jika Anda memiliki domain seperti \`luckyu.dev\`, tambahkan di dashboard Vercel:

- Masuk ke project
- Pilih tab Domains
- Tambahkan domain \`luckyu.dev\`

Setelah domain ditambahkan, update DNS record di provider domain:

- \`A\` record ke 76.76.21.21
- \`CNAME\` record untuk \`www\` ke \`cname.vercel-dns.com\`

Vercel akan menerbitkan SSL secara otomatis.

### Tips

1. Gunakan \`vercel.json\` untuk mengatur SPA fallback agar rute \`/blog/:slug\` tidak 404.
2. Aktifkan \`Automatic SSL\` agar HTTPS selalu aktif.
3. Pantau deployment dari dashboard untuk melihat log error build.

### Optimasi SEO dan meta tags

Untuk SEO, tambahkan meta tag di halaman React:

\`\`\`tsx
useEffect(() => {
  document.title = "Blog | Lucky Ubaidillah";
  setMeta("description", "Blog saya tentang pengembangan web, deployment, dan pengalaman teknis.");
}, []);
\`\`\`

Jangan lupa menambahkan Open Graph agar preview di sosial media tampil baik.

### Masalah umum

- Build error karena modul tidak ditemukan
- Aset tidak tercopy karena path absolut yang salah
- DNS propagation yang butuh beberapa jam

Jika deploy gagal, buka Log Vercel dan periksa error build.

### Kesimpulan

Deploy React ke Vercel paling efisien jika Anda sudah memiliki struktur Folder bersih dan script build yang benar.

Sekarang portfolio saya berjalan dengan domain kustom, HTTPS aktif, dan refresh otomatis setiap push ke GitHub.
`,
  },
  {
    slug: "pengalaman-membuat-event-registration-nextjs",
    title: "Pengalaman Membuat Event Registration Menggunakan Next.js",
    category: "Case Study",
    date: "2026-07-18",
    readTime: "10 min read",
    cover: "/images/blog/cover-3.svg",
    summary:
      "Studi kasus pembuatan sistem Event Registration dengan Next.js, autentikasi, manajemen acara, dan UX pendaftaran yang lancar.",
    tags: ["Next.js", "Event Registration", "Case Study"],
    body: `
## Rangkaian fitur utama

Sistem Event Registration yang saya bangun terdiri dari:

- Halaman daftar event
- Form pendaftaran peserta
- Dashboard admin untuk manajemen event
- Integrasi notifikasi email

Tujuan saya adalah membuat alur pendaftaran secepat dan seterang mungkin.

> Experience yang baik dimulai dari tombol pendaftaran yang jelas dan formulir yang ringkas.

### Mengapa Next.js?

Next.js cocok karena dukungan rendering campuran:

- Static generation untuk halaman event publik
- Server-side rendering untuk dashboard admin
- API routes untuk menangani pendaftaran

Saya memanfaatkan \`app/\` routing Next.js dan \`next/image\` untuk performa gambar.

### Struktur fitur pendaftaran

Pada klien, saya menggunakan form dengan validasi sederhana di React Hook Form.

\`\`\`tsx
function RegistrationForm() {
  const { register, handleSubmit, formState } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <input {...register("name", { required: true })} placeholder="Nama lengkap" />
      <input {...register("email", { required: true })} type="email" placeholder="Email" />
      <button className="rounded-full bg-primary px-5 py-3 text-white">Daftar</button>
    </form>
  );
}
\`\`\`

Backend Next.js menggunakan API route untuk menyimpan data pendaftar dan memicu email konfirmasi.

### Pelajaran UX

Saya menyadari bahwa halaman pendaftaran harus:

- cepat merespon input
- menampilkan pesan sukses langsung
- meminimalkan teks yang tidak penting

Desain glassmorphism dan elemen kartu membantu menjaga fokus pengguna pada langkah pendaftaran.

### Tips

1. Gunakan \`React.memo\` untuk komponen form agar tidak re-render berlebihan.
2. Beri feedback seketika saat tombol submit ditekan (loading state).
3. Simpan draft pendaftaran agar pengguna tidak kehilangan data saat halaman di-refresh.

### Tantangan teknis

Beberapa masalah yang saya hadapi:

- sinkronisasi state antara client dan server
- validasi input yang harus berjalan di client dan server
- menjaga performa saat daftar event berisi banyak gambar

Solusinya adalah memecah halaman menjadi komponen kecil dan menggunakan \`React.memo\` untuk mengurangi rerender.

### Hasil

Sistem berhasil digunakan dalam event internal sekolah dengan 150+ peserta. Alur pendaftaran lebih cepat karena formulir ringkas dan feedback seketika.

### Kesimpulan

Next.js memberi fleksibilitas terbaik ketika aplikasi perlu menggabungkan konten publik dengan area manajemen internal.

Dengan desain yang konsisten, pengguna bisa langsung mendaftar tanpa kehilangan konteks acara.
`,
  },
  {
    slug: "mengatasi-merge-conflict-git-dalam-tim",
    title: "Mengatasi Merge Conflict di Git Saat Bekerja dalam Tim",
    category: "Tips",
    date: "2026-06-30",
    readTime: "7 min read",
    cover: "/images/blog/cover-4.svg",
    summary:
      "Praktik terbaik menangani merge conflict di Git ketika bekerja dengan tim, dari branch strategy hingga resolusi file yang aman.",
    tags: ["Git", "Merge Conflict", "Collaboration"],
    body: `
## Konflik Git bukan tanda kegagalan

Dalam proyek tim, merge conflict adalah hal yang biasa. Yang penting adalah bagaimana Anda menyelesaikannya dengan rapi dan tetap menjaga riwayat commit bersih.

> Git membantu tim berkolaborasi; konflik membantu kita membuat integrasi lebih sadar.

### Penyebab umum merge conflict

Beberapa penyebab yang sering saya temui:

- dua orang mengubah baris yang sama
- refactor file yang sedang diubah orang lain
- perubahan format otomatis tanpa sinkronisasi

### Strategi branch yang saya gunakan

Saya memakai model branch sederhana:

- \`main\` untuk produksi
- \`dev\` untuk integrasi fitur
- \`feature/*\` untuk pekerjaan harian

Setiap perubahan kecil dipush ke branch fitur dan merge ke \`dev\` setelah review.

### Resolusi konflik langkah demi langkah

1. Pull branch target terbaru:

\`\`\`bash
git checkout feature/event-form
git pull origin dev
\`\`\`

2. Jalankan merge:

\`\`\`bash
git merge dev
\`\`\`

3. Jika konflik muncul, buka file yang bermasalah.

4. Periksa bagian konflik yang ditandai oleh marker \`<<<<<<< HEAD\` dan \`>>>>>>> dev\`, lalu pilih hasil terbaik.

5. Jalankan build atau tes lokal.

6. Commit perubahan yang sudah dirapikan.

### Contoh konflik sederhana

Saat dua orang mengubah baris yang sama, Git menandai area konflik dengan marker khas:

\`\`\`text
<<<<<<< HEAD
const buttonLabel = "Kirim";
=======
const buttonLabel = "Submit";
>>>>>>> dev
\`\`\`

Di sini saya memutuskan apakah tetap menggunakan kata lokal atau versi bahasa Inggris berdasarkan konteks UI. Setelah memilih, saya hapus seluruh marker \`<<<<<<<\`, \`=======\`, dan \`>>>>>>>\` agar file bersih kembali.

### Tips untuk mengurangi konflik

- gunakan format otomatis (Prettier, ESLint)
- lakukan commit kecil dan sering
- komunikasi dengan tim saat merubah area besar
- gunakan rebase interaktif sebelum merge ke branch utama

### Quote pengalaman

> Ketika tim memahami alur Git, konflik menjadi checkpoint kualitas, bukan hambatan.

### Kesimpulan

Merge conflict bisa diatasi dengan cara komunikasi, tooling, dan disiplin branching.

Bekerja dalam tim berarti menjaga setiap merge sebagai momen integrasi yang terkontrol.
`,
  },
  {
    slug: "kenapa-saya-memilih-laravel-untuk-backend",
    title: "Kenapa Saya Memilih Laravel untuk Backend",
    category: "Dev Journal",
    date: "2026-06-12",
    readTime: "8 min read",
    cover: "/images/blog/cover-5.svg",
    summary:
      "Analisis praktis mengapa Laravel menjadi pilihan backend saya untuk aplikasi internal, CMS, dan API yang butuh kecepatan pengembangan.",
    tags: ["Laravel", "Backend", "PHP", "API"],
    body: `
## Laravel sebagai pilihan backend

Laravel menawarkan framework yang lengkap untuk membangun backend dengan cepat dan terstruktur. Saya memilihnya untuk beberapa alasan teknis dan praktis.

> Laravel mengedepankan konvensi yang masuk akal, dokumentasi kuat, dan ekosistem yang matang.

### Keunggulan Laravel yang paling terasa

- Eloquent ORM untuk database yang mudah dibaca
- Routing yang bersih dan dapat diskalakan
- Artisan CLI untuk scaffold cepat
- Sistem middleware yang fleksibel

Untuk proyek seperti panel admin dan API internal, Laravel mempercepat fase development secara signifikan.

### Contoh route sederhana

\`\`\`php
use Illuminate\\Support\\Facades\\Route;

Route::middleware(["auth:sanctum"])->group(function () {
    Route::get("/dashboard", [DashboardController::class, "index"]);
    Route::post("/events", [EventController::class, "store"]);
});
\`\`\`

Saya juga mengkombinasikan Laravel dengan Inertia atau API murni untuk frontend React.

### Kenapa bukan Node.js murni?

Node.js sangat kuat, tetapi untuk aplikasi backend dengan proses bisnis yang rumit, Laravel memudahkan:

- validasi request yang konsisten
- manajemen jobs dan queues
- cache yang mudah dikonfigurasi

Laravel tidak berarti saya tidak menggunakan Node.js. Justru saya memilih stack yang paling cocok untuk masalah yang ada.

### Tips

1. Kelompokkan route yang memerlukan autentikasi ke dalam grup middleware.
2. Gunakan \`Form Request\` untuk memisahkan logika validasi dari controller.
3. Manfaatkan \`php artisan make:\` untuk mempercepat scaffold.

### Studi kasus: backend event registration

Pada proyek Event Registration, backend Laravel bertugas memproses data pendaftaran, mengirim email konfirmasi, dan menyimpan log.

Saya membuat API endpoint yang sederhana dan aman:

\`\`\`php
public function store(Request $request)
{
    $validated = $request->validate([
        "name" => "required|string|max:255",
        "email" => "required|email",
        "event_id" => "required|exists:events,id",
    ]);

    $registration = Registration::create($validated);
    Mail::to($validated["email"])->send(new RegistrationConfirmed($registration));

    return response()->json(["message" => "Pendaftaran berhasil"], 201);
}
\`\`\`

### Kesimpulan

Laravel cocok untuk backend yang memerlukan struktur jelas, keamanan built-in, dan waktu pengembangan cepat.

Framework ini membantu saya fokus pada logika bisnis, bukan konfigurasi infrastruktur.
`,
  },
  {
    slug: "mendesain-ui-portfolio-modern-dengan-framer-motion",
    title: "Mendesain UI Portfolio Modern dengan Framer Motion",
    category: "UI/UX",
    date: "2026-05-28",
    readTime: "9 min read",
    cover: "/images/blog/cover-6.svg",
    summary:
      "Bagaimana saya menggunakan Framer Motion untuk menghadirkan animasi halus, interaksi premium, dan pengalaman pengguna yang modern di portfolio.",
    tags: ["Framer Motion", "UI/UX", "Animation"],
    body: `
## Animasi bukan sekadar efek visual

Dalam portfolio saya, Framer Motion digunakan untuk memberi makna pada transisi — bukan hanya dekorasi.

> Gerakan yang baik membuat pengguna merasa situs lebih responsif dan hidup.

### Prinsip animasi yang saya terapkan

- masuk dengan spring yang halus
- hover animation yang ringan
- animasi saat daftar artikel muncul
- gerakan fokus pada elemen aktif

Saya selalu memulai dengan state statis, lalu menambahkan animasi kecil untuk memperkuat hierarki visual.

### Contoh card masuk

\`\`\`tsx
<motion.article
  initial={{ opacity: 0, y: 24 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
  className="rounded-3xl border border-border bg-surface p-6"
>
  <h3 className="text-xl font-semibold">Judul Artikel</h3>
</motion.article>
\`\`\`

Animasi ini membuat setiap card terasa muncul dari grid, bukan tiba-tiba.

### Hover dan interaksi kartu

Hover card penting untuk memberikan umpan balik tanpa mengganggu. Saya biasanya menerapkan:

- translateY kecil
- shadow lebih dalam
- teks menjadi lebih tajam

### Cover flow dan motion

Di halaman utama Hero, saya memakai stack kartu interaktif. Teknik yang sama bisa diterapkan di daftar artikel untuk menyorot item aktif.

### Tips

1. Gunakan easing \`[0.16, 1, 0.3, 1]\` untuk kesan premium dan natural.
2. Batasi durasi di bawah 0.6 detik agar terasa responsif.
3. Terapkan \`will-change: transform\` hanya pada elemen yang benar-benar bergerak.

### Kecepatan dan performa

Jangan menggunakan animasi pada setiap elemen. Gunakan hanya pada elemen penting agar tidak memberatkan rendering.

Tip saya:

- gunakan \`will-change: transform\`
- hindari animasi layout pada banyak elemen sekaligus
- gunakan \`opacity\` dan \`transform\`

### Kesimpulan

Framer Motion membantu portfolio terasa premium jika digabungkan dengan tata letak minimalis dan fokus pada konten.

Gerakan yang ringan adalah kunci agar desain modern tetap elegan.
`,
  },
  {
    slug: "struktur-folder-react-yang-saya-gunakan",
    title: "Struktur Folder React yang Saya Gunakan",
    category: "Tutorial",
    date: "2026-05-10",
    readTime: "8 min read",
    cover: "/images/blog/cover-7.svg",
    summary:
      "Panduan struktur folder React yang saya terapkan untuk menjaga kode tetap rapi, mudah dipelihara, dan scalable seiring bertambahnya fitur.",
    tags: ["React", "Folder Structure", "Architecture"],
    body: `
## Dasar struktur folder saya

Untuk aplikasi React modern, saya membagi folder ke dalam area fungsi:

- \`src/components\`
- \`src/pages\`
- \`src/content\`
- \`src/hooks\`
- \`src/lib\`
- \`src/utils\`

Struktur ini membantu saya menemukan komponen atau data dengan cepat.

> Struktur file yang konsisten membuat tim dan diri sendiri tidak bingung ketika project berkembang.

### \`src/components\`

Di sini saya menaruh komponen UI reusable seperti tombol, tag, dan modal.

Contoh:

- \`components/ui/Button.tsx\`
- \`components/layout/Sidebar.tsx\`
- \`components/sections/Hero.tsx\`

### \`src/pages\`

Folder \`pages\` khusus untuk setiap route utama.

- \`Home.tsx\`
- \`Blog.tsx\`
- \`BlogDetail.tsx\`

Setiap halaman menggabungkan section dari \`components/sections\`.

### \`src/content\`

Data statis seperti blog, project, dan teks copy disimpan di folder ini.

Saya menghindari menulis konten langsung di komponen agar halaman lebih mudah diubah.

### \`src/hooks\`

Hook custom digunakan untuk perilaku spesifik, seperti:

- \`useActiveSection\`
- \`useLenis\`

Ini membantu agar kode tetap terorganisir dan reusable.

### \`src/lib\` dan \`src/utils\`

- \`src/lib/nav.ts\` untuk konfigurasi navigasi
- \`src/utils/cn.ts\` untuk helper className

### Contoh file yaitu \`BlogDetail.tsx\`

\`\`\`tsx
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
\`\`\`

Dengan struktur ini, komponen tetap fokus pada interface, sementara konten dan utilitas dipisah.

### Saran penerapan

- gunakan folder \`sections\` untuk blok halaman
- gunakan \`pages\` untuk route
- simpan data di \`content\`
- letakkan helper kecil di \`utils\`

### Kesimpulan

Struktur folder bukan hanya soal estetika, melainkan soal membuat pekerjaan sehari-hari lebih mudah dijaga dan dikembangkan.

Jika Anda memulai proyek baru, buat struktur yang logis sejak awal.
`,
  },
  {
    slug: "perjalanan-belajar-web-development",
    title: "Perjalanan Belajar Web Development",
    category: "Dev Journal",
    date: "2026-04-22",
    readTime: "11 min read",
    cover: "/images/blog/cover-8.svg",
    summary:
      "Catatan pengalaman saya belajar web development, dari dasar HTML/CSS hingga membuat portfolio full-stack dengan sistem nyata.",
    tags: ["Learning", "Web Development", "Journey"],
    body: `
## Awal mula belajar

Saya mulai dari HTML dan CSS dasar. Pada awalnya, fokus saya adalah membuat halaman statis yang rapi dan responsif.

> Langkah pertama dalam web development adalah membuat sesuatu yang bisa Anda lihat dan gunakan.

### Belajar dengan praktik

Saya mempelajari:

- grid layout dan flexbox
- responsive design
- JavaScript DOM manipulation

Salah satu latihan terbaik adalah mengulang ulang halaman portofolio kecil.

### Melangkah ke framework

Setelah nyaman dengan dasar, saya pindah ke React untuk membuat komponen.

Alasan utamanya:

- state management lebih mudah
- komponen bisa dipakai ulang
- ecosystem besar untuk UI

### Membangun proyek nyata

Proyek pertama saya bukan hanya demo satu halaman. Saya mulai membuat:

- event registration
- dashboard admin
- aplikasi absensi sekolah

Setiap proyek mengajarkan saya satu hal baru: routing, API, atau deployment.

### Tips

1. Kerjakan proyek nyata, bukan sekadar tutorial.
2. Baca dokumentasi resmi sebelum mengikuti tutorial pihak ketiga.
3. Pelajari debugging lebih dulu daripada library baru.

### Tantangan yang saya hadapi

- merge conflict saat bekerja dalam tim
- memilih stack backend yang tepat
- mengatur struktur file agar tidak berantakan

Ini semua saya dokumentasikan dan sekarang saya gunakan sebagai pola untuk proyek baru.

### Pencapaian

Saat ini saya sudah membuat portfolio yang:

- responsive
- performa tinggi
- estetika modern
- mudah dikembangkan lagi

### Kesimpulan

Perjalanan belajar web development adalah proses bertahap. Kuncinya adalah konsistensi dan membangun hal-hal nyata.

Jika Anda sedang mulai, fokuskan diri pada satu proyek dan kembangkan langkah demi langkah.
`,
  },
];

export function getBlogBySlug(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}

export const blogCategories = ["All", ...categories];
