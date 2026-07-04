import Link from "next/link";
import DestinationCarousel from "../components/DestinationCarousel";
import singaporeIcon from "../images/singapura_icon.jpg";
import taiwanIcon from "../images/taiwan_icon.jpg";
import hongkongIcon from "../images/hongkong_icon.jpg";
import malaysiaIcon from "../images/malaysia_icon.jpg";

const featuredBlocks = [
  {
    title: "Profil Lembaga",
    desc: "Pelajari visi, misi, dan layanan inti  Amanportasia sebelum memulai proses.",
    linkLabel: "Buka Profil",
    href: "/profil"
  },
  {
    title: "Negara Tujuan",
    desc: "Bandingkan syarat usia dan jenis job order untuk setiap negara tujuan.",
    linkLabel: "Lihat Infografis",
    href: "#infografis"
  },
  {
    title: "Konsultasi Admin",
    desc: "Kirim data awal lewat form cepat dan lanjutkan proses via WhatsApp resmi.",
    linkLabel: "Hubungi Admin",
    href: "/contact"
  }
];

const homeReasons = [
  {
    title: "Data Mudah Dipahami",
    desc: "Materi disusun dengan bahasa sederhana agar calon pendaftar dan keluarga bisa memahami proses sejak awal."
  },
  {
    title: "Fokus pada Kesiapan",
    desc: "Kami menekankan kesiapan mental, dokumen, dan arah negara tujuan agar proses berjalan lebih tenang."
  },
  {
    title: "Pendampingan Bertahap",
    desc: "Setiap calon dibimbing langkah demi langkah, mulai dari konsultasi awal sampai pemetaan kebutuhan pelatihan."
  }
];

const destinationSlides = [
  {
    key: "singapore",
    title: "Singapura",
    age: "Usia minimal 23 tahun",
    points: ["House Maid (Pembantu Rumah Tangga)"],
    image: singaporeIcon,
    alt: "Suasana kota Singapura"
  },
  {
    key: "taiwan",
    title: "Taiwan",
    age: "Usia minimal 21 tahun",
    points: ["Perawat orang tua jompo"],
    image: taiwanIcon,
    alt: "Pemandangan kota Taiwan"
  },
  {
    key: "hongkong",
    title: "Hongkong",
    age: "Usia minimal 21 tahun",
    points: ["House Maid (Pembantu Rumah Tangga)"],
    image: hongkongIcon,
    alt: "Skyline malam Hongkong"
  },
  {
    key: "malaysia",
    title: "Malaysia",
    age: "Usia minimal 21 tahun",
    points: ["House Maid (Pembantu Rumah Tangga)"],
    image: malaysiaIcon,
    alt: "Pusat kota Malaysia"
  }
];

export default function HomePage() {
  return (
    <main className="site-main max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <section className="section landing-hero">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article className="hero-copy hero-copy-main h-full">
            <p className="eyebrow">Website Resmi  Amanportasia</p>
            <h1>Masa Depan Karier Migran Dimulai dari Informasi yang Jelas.</h1>
            <p className="hero-lead">
              Kami membantu calon tenaga kerja memahami syarat, pilihan negara, dan langkah awal pendaftaran lewat
              materi yang ringkas, terstruktur, dan mudah diakses.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/contact">
                Mulai Konsultasi
              </Link>
              <a className="btn btn-secondary" href="#infografis">
                Lihat Negara Tujuan
              </a>
            </div>
          </article>

          <aside className="hero-card hero-aside h-full">
            <p className="eyebrow">Ringkasan</p>
            <h2>Data Inti Penempatan</h2>
            <div className="hero-mini-metrics">
              <div>
                <span>4</span>
                <small>Negara Tujuan</small>
              </div>
              <div>
                <span>21+</span>
                <small>Usia Minimal Umum</small>
              </div>
              <div>
                <span>23+</span>
                <small>Khusus Singapura</small>
              </div>
            </div>
            <Link className="btn btn-secondary" href="/profil">
              Lihat Profil Lembaga
            </Link>
          </aside>
        </div>
      </section>

      <section className="section quick-grid-section">
        <div className="section-title section-title-inline">
          <div>
            <p className="eyebrow">Blok Informasi</p>
            <h2>Pilih Jalur Informasi Sesuai Kebutuhan</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredBlocks.map((item) => (
            <article key={item.title} className="quick-card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <Link href={item.href}>{item.linkLabel}</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-title section-title-inline">
          <div>
            <p className="eyebrow">Kenapa Mulai di Sini</p>
            <h2>Langkah Awal yang Jelas Bikin Proses Lebih Tenang</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {homeReasons.map((item) => (
            <article key={item.title} className="quick-card">
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </article>
          ))}
        </div>

        <article className="infographic-note mt-3">
          <h3> Amanportasia Siap Menjadi Partner Informasi Anda</h3>
          <p className="story-note">
            Tujuan kami bukan sekadar memberi data, tetapi membantu Anda mengambil keputusan dengan percaya diri,
            terarah, dan realistis sesuai kondisi masing-masing calon.
          </p>
        </article>
      </section>

      <section className="section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article id="infografis" className="infographic-card h-full">
            <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
              <div>
                <p className="eyebrow mb-1">Infografis Beranda</p>
                <h2 className="mb-0 infographic-title">Negara Tujuan</h2>
              </div>
              <span className="info-badge">4 Negara Tujuan</span>
            </div>

            <p className="infographic-intro">
              Ringkasan ini menampilkan negara tujuan, batas usia minimal, dan jenis job order yang tersedia untuk
              penempatan.
            </p>

            <div className="infographic-metrics">
              <div className="metric-item">
                <span className="metric-value">4</span>
                <span className="metric-label">Negara Tujuan</span>
              </div>
              <div className="metric-item">
                <span className="metric-value">21+</span>
                <span className="metric-label">Umur Minimal Umum</span>
              </div>
              <div className="metric-item">
                <span className="metric-value">23+</span>
                <span className="metric-label">Khusus Singapura</span>
              </div>
              <div className="metric-item">
                <span className="metric-value">3</span>
                <span className="metric-label">Tahap Persiapan Dasar</span>
              </div>
            </div>

            <DestinationCarousel slides={destinationSlides} />

            <div className="infographic-note">
              <h3>Alur Persiapan Umum CTKI</h3>
              <ol>
                <li>Verifikasi syarat umur dan data identitas sesuai negara tujuan.</li>
                <li>Ikuti pelatihan dasar keterampilan kerja dan komunikasi.</li>
                <li>Lengkapi dokumen kesehatan dan administrasi sebelum proses penempatan.</li>
              </ol>
            </div>
          </article>

          <aside className="requirement-card h-full">
            <p className="eyebrow">Syarat Utama</p>
            <h3>Kualifikasi Dasar</h3>
            <p className="requirement-intro">
              Kriteria ini dipakai sebagai penyaringan awal calon pendaftar sebelum masuk tahap konsultasi dan pemilihan
              negara tujuan.
            </p>
            <ul className="requirement-list">
              <li>Berjenis kelamin wanita.</li>
              <li>Kualifikasi umur minimal 21 tahun.</li>
              <li>Khusus tujuan Singapura, umur minimal 23 tahun.</li>
            </ul>
            <div className="requirement-note">
              <h4>Tahap Setelah Lolos Syarat Dasar</h4>
              <ol>
                <li>Verifikasi identitas dan data keluarga.</li>
                <li>Penentuan negara tujuan sesuai usia dan minat kerja.</li>
                <li>Pendampingan dokumen dan jadwal pelatihan awal.</li>
              </ol>
            </div>
            <p className="requirement-footnote">
              Dokumen yang dibutuhkan: KTP, KK, dan ijazah terakhir untuk pengecekan administrasi.
            </p>
          </aside>
        </div>
      </section>
    </main>
  );
}
