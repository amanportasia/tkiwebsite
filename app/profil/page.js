import Link from "next/link";

export const metadata = {
  title: "Profil",
  description: "Profil Informasi Lowongan Kerja Luar negri."
};

const values = [
  {
    title: "Visi",
    text: (
      <>
        Menjadi pusat informasi dan komunikasi TKI yang <strong>terpercaya</strong>, cepat, dan mudah diakses.
      </>
    )
  },
  {
    title: "Misi",
    text: (
      <>
        Menyediakan layanan informasi yang <strong>jelas</strong> serta memudahkan masyarakat menghubungi contact person
        resmi.
      </>
    )
  },
  {
    title: "Pelayanan",
    text: (
      <>
        Informasi profil, <strong>konsultasi awal</strong>, serta kontak langsung melalui telepon dan WhatsApp.
      </>
    )
  }
];

const profileHighlights = [
  {
    title: "Transparansi Proses",
    text: (
      <>
        Kami menjelaskan tahap demi tahap secara <strong>terbuka</strong> agar calon pendaftar memahami arah proses sejak
        awal.
      </>
    )
  },
  {
    title: "Pendekatan Personal",
    text: (
      <>
        Setiap calon memiliki kebutuhan berbeda, karena itu arahan disesuaikan dengan <strong>profil usia</strong> dan
        minat kerja.
      </>
    )
  },
  {
    title: "Komunikasi Aktif",
    text: (
      <>
        Tim kami menjaga komunikasi tetap <strong>aktif</strong> supaya setiap perubahan informasi cepat diterima calon
        pendaftar.
      </>
    )
  }
];

export default function ProfilPage() {
  return (
    <main className="site-main max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <section className="section profile-hero-section">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <article className="hero-copy hero-copy-main h-full">
            <p className="eyebrow">Profil</p>
            <h1>
              Tentang <span className="text-accent">Informasi Lowongan Kerja Luar negri</span>
            </h1>
            <p className="hero-lead">
              Informasi Lowongan Kerja Luar negri hadir sebagai platform <strong>informasi</strong> dan{" "}
              <strong>konsultasi awal</strong> bagi calon pekerja migran Indonesia yang membutuhkan panduan seputar
              proses pendaftaran, persiapan dokumen, pelatihan, hingga penempatan kerja di luar negeri. Kami
              berkomitmen menyediakan informasi yang jelas, praktis, dan mudah dipahami agar calon tenaga kerja dapat
              mempersiapkan diri dengan lebih{" "}
              <em>aman, matang, dan terarah</em> sebelum bekerja di negara tujuan.
            </p>
            <div className="hero-actions">
              <Link className="btn btn-primary" href="/contact">
                Konsultasi Sekarang
              </Link>
              <Link className="btn btn-secondary" href="/">
                Kembali ke Beranda
              </Link>
            </div>
          </article>

          <aside className="hero-card hero-aside h-full">
            <p className="eyebrow">Fondasi Layanan</p>
            <h2>
              Nilai <span className="text-accent">Utama</span> Kami
            </h2>
            <ul className="profile-stat-list">
              <li>
                <strong>Jelas</strong>
                <span>Informasi disusun ringkas dan mudah dipahami.</span>
              </li>
              <li>
                <strong>Terarah</strong>
                <span>Fokus pada langkah yang benar-benar dibutuhkan calon CTKI.</span>
              </li>
              <li>
                <strong>Responsif</strong>
                <span>Terhubung cepat ke admin resmi melalui kanal konsultasi.</span>
              </li>
            </ul>
          </aside>
        </div>
      </section>

      <section className="section">
        <div className="section-title section-title-inline">
          <div>
            <p className="eyebrow">Blok Profil</p>
            <h2>
              Visi, Misi, dan <span className="text-accent">Layanan</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((item) => (
            <article key={item.title} className="quick-card profile-card-lite">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-title section-title-inline">
          <div>
            <p className="eyebrow">Komitmen Kami</p>
            <h2>
              Standar Layanan yang Kami <span className="text-accent">Jaga Setiap Hari</span>
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {profileHighlights.map((item) => (
            <article key={item.title} className="quick-card profile-card-lite">
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <article className="infographic-note mt-3">
          <h3>Kepercayaan Dibangun dari Konsistensi</h3>
          <p className="story-note">
            Kami percaya pelayanan terbaik dimulai dari <strong>informasi yang jujur</strong>, komunikasi yang cepat,
            dan pendampingan yang tidak membingungkan calon tenaga kerja.
          </p>
        </article>
      </section>
    </main>
  );
}
