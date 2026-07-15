import Link from "next/link";
import DestinationCarousel from "../components/DestinationCarousel";
import singaporeIcon from "../images/singapura_icon.jpg";
import taiwanIcon from "../images/taiwan_icon.jpg";
import hongkongIcon from "../images/hongkong_icon.jpg";
import malaysiaIcon from "../images/malaysia_icon.jpg";

export const metadata = {
  title: {
    absolute: "Lowongan Kerja Luar Negeri TKI"
  },
  description:
    "Lowongan kerja luar negeri TKI untuk calon tenaga kerja yang ingin memahami syarat, negara tujuan, dan proses pendaftaran resmi.",
  openGraph: {
    title: "Lowongan Kerja Luar Negeri TKI",
    description:
      "Lowongan kerja luar negeri TKI untuk calon tenaga kerja yang ingin memahami syarat, negara tujuan, dan proses pendaftaran resmi.",
    url: "https://www.amanportasia.com",
    siteName: "Amanportasia",
    images: [
      {
        url: "/amanportasia.png",
        width: 1024,
        height: 1024,
        alt: "Amanportasia"
      }
    ],
    locale: "id_ID",
    type: "website"
  }
};

const featuredBlocks = [
  {
    title: "Profil Lembaga",
    desc: (
      <>
        Pelajari <strong>visi, misi, dan layanan inti</strong> Amanportasia sebelum memulai proses.
      </>
    ),
    linkLabel: "Buka Profil",
    href: "/profil"
  },
  {
    title: "Negara Tujuan",
    desc: (
      <>
        Bandingkan <strong>syarat usia</strong> dan jenis job order untuk setiap negara tujuan.
      </>
    ),
    linkLabel: "Lihat Infografis",
    href: "#infografis"
  },
  {
    title: "Konsultasi Admin",
    desc: (
      <>
        Kirim data awal lewat form cepat dan lanjutkan proses via <strong>WhatsApp resmi</strong>.
      </>
    ),
    linkLabel: "Hubungi Admin",
    href: "/contact"
  }
];

const homeReasons = [
  {
    title: "Data Mudah Dipahami",
    desc: (
      <>
        Materi disusun dengan <strong>bahasa sederhana</strong> agar calon pendaftar dan keluarga memahami proses sejak
        awal.
      </>
    )
  },
  {
    title: "Fokus pada Kesiapan",
    desc: (
      <>
        Kami menekankan <strong>kesiapan mental, dokumen, dan arah negara tujuan</strong> agar proses berjalan lebih
        tenang.
      </>
    )
  },
  {
    title: "Pendampingan Bertahap",
    desc: (
      <>
        Setiap calon dibimbing <strong>langkah demi langkah</strong>, mulai dari konsultasi awal sampai pemetaan
        kebutuhan pelatihan.
      </>
    )
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
    points: ["Perawat orang tua (Lansia)"],
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
        <div className="grid grid-cols-1 gap-8">
          <article className="hero-copy hero-copy-main h-full">
            <p className="eyebrow">Website Resmi  Amanportasia</p>
            <h1>
              Lowongan Kerja Luar Negeri <span className="text-accent">TKI</span>
            </h1>
            <p className="hero-lead">
              Kami membantu calon tenaga kerja memahami <strong>syarat</strong>, <strong>pilihan negara</strong>, dan{" "}
              <strong>langkah awal pendaftaran</strong> lewat materi yang ringkas, terstruktur, dan mudah diakses.
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
        </div>
      </section>

      <section className="section quick-grid-section">
        <div className="section-title section-title-inline">
          <div>
            <p className="eyebrow">Blok Informasi</p>
            <h2>
              Pilih Jalur <span className="text-accent">Informasi</span> Sesuai Kebutuhan
            </h2>
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
            <h2>
              Langkah Awal yang <span className="text-accent">Jelas</span> Bikin Proses Lebih Tenang
            </h2>
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
            Tujuan kami bukan sekadar memberi data, tetapi membantu Anda mengambil keputusan dengan{" "}
            <strong>percaya diri</strong>, <strong>terarah</strong>, dan <em>realistis</em> sesuai kondisi masing-masing
            calon.
          </p>
        </article>
      </section>

      <section className="section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article id="infografis" className="infographic-card h-full">
            <div className="d-flex flex-wrap justify-content-between align-items-center gap-2 mb-3">
              <div>
                <p className="eyebrow mb-1">Infografis Beranda</p>
                <h2 className="mb-0 infographic-title">
                  Negara <span className="text-accent">Tujuan</span>
                </h2>
              </div>
              <span className="info-badge">4 Negara Tujuan</span>
            </div>

            <p className="infographic-intro">
              Ringkasan ini menampilkan <strong>negara tujuan</strong>, <strong>batas usia minimal</strong>, dan jenis
              job order yang tersedia untuk penempatan.
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
                <span className="metric-value">3</span>
                <span className="metric-label">Tahap Persiapan Dasar</span>
              </div>
            </div>

            <DestinationCarousel slides={destinationSlides} />

            <div className="infographic-note">
              <h3>Alur Persiapan Umum CTKI</h3>
              <ol>
                <li>
                  Verifikasi <strong>syarat umur</strong> dan data identitas sesuai negara tujuan.
                </li>
                <li>
                  Ikuti pelatihan dasar <strong>keterampilan kerja</strong> dan komunikasi.
                </li>
                <li>
                  Lengkapi dokumen <strong>kesehatan</strong> dan administrasi sebelum proses penempatan.
                </li>
              </ol>
            </div>
          </article>

          <aside className="requirement-card h-full">
            <p className="eyebrow">Panduan Pendaftaran</p>
            <h3>
              ALUR <span className="text-accent">PROSES</span>
            </h3>
            <p className="requirement-intro">
              Berikut tahapan awal yang perlu disiapkan calon pendaftar sebelum masuk ke proses administrasi lanjutan
              dan <strong>pemilihan negara tujuan</strong>.
            </p>
            <ol className="requirement-list">
              <li>
                <strong>MCU</strong> atau pemeriksaan kesehatan awal.
              </li>
               <li>
                belajar di <strong>LPK</strong>.
              </li>
              <li>
                Pendaftaran <strong>ID PMI</strong> di <em>Dinas Tenaga Kerja</em>.
              </li>
              <li>
                Pembuatan <strong>paspor</strong> jika belum memiliki paspor aktif.
              </li>
            </ol>
            <div className="requirement-note">
              <h4>BENEFIT</h4>
              <ol>
                <li>
                  Akun siap kerja by <strong>Kemenaker</strong>.
                </li>
                <li>
                  Visa kerja <strong>resmi</strong>.
                </li>
                <li>
                  Asuransi Kesehatan.
                </li>
                <li>
                  Tempat <strong>LPK</strong> yang nyaman.
                </li>
              </ol>
            </div>
            <div className="process-info-grid">
              <article className="process-mini-card">
                <span className="process-mini-label">Dokumen Awal</span>
                <h4>Siapkan Berkas Dasar</h4>
                <ul>
                  <li>KTP dan KK.</li>
                  <li>Ijazah terakhir.</li>
                  <li>Nomor HP aktif.</li>
                </ul>
              </article>
              <article className="process-mini-card process-mini-card-accent">
                <span className="process-mini-label">Pendampingan</span>
                <h4>Admin Bantu Cek Kesiapan</h4>
                <p>
                  Tim membantu mengecek urutan proses agar pendaftar tidak bingung menentukan langkah berikutnya.
                </p>
              </article>
            </div>
            <div className="process-cta">
              <div>
                <span>Butuh arahan cepat?</span>
                <p>Kirim data awal lewat form konsultasi, lalu admin akan membantu memetakan proses Anda.</p>
              </div>
              <Link className="btn btn-primary" href="/contact">
                Konsultasi
              </Link>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
