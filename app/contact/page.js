import WhatsAppForm from "../../components/WhatsAppForm";

export const metadata = {
  title: "Contact Person",
  description: "Pusat kontak  Amanportasia."
};

const contactValueCards = [
  {
    title: "Konsultasi Ramah Pemula",
    text: (
      <>
        Belum tahu harus mulai dari mana? Tim kami siap membantu memetakan <strong>langkah awal</strong> sesuai kondisi
        Anda.
      </>
    )
  },
  {
    title: "Arah Dokumen Lebih Jelas",
    text: (
      <>
        Kami bantu jelaskan <strong>dokumen inti</strong> yang dibutuhkan agar Anda tidak bingung menyiapkan berkas.
      </>
    )
  },
  {
    title: "Respon Cepat & Terarah",
    text: (
      <>
        Setiap pertanyaan dijawab dengan ringkas dan fokus pada <strong>tindakan selanjutnya</strong> yang perlu Anda
        lakukan.
      </>
    )
  }
];

export default function ContactPage() {
  return (
    <>
      <main className="site-main max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <section className="section contact-section">
          <div className="section-title section-title-inline">
            <div>
              <p className="eyebrow">Pusat Kontak</p>
              <h2>
                Konsultasi <span className="text-accent">Penempatan</span>
              </h2>
              <p className="contact-intro">
                Hubungi tim resmi untuk <strong>informasi pendaftaran</strong>, persiapan dokumen, dan pengecekan syarat
                negara tujuan.
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <article className="contact-hero h-full">
                <p className="mini-label">Contact Person Resmi</p>
                <a
                  className="contact-number"
                  href="https://wa.me/6282337224661"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  082337224661
                </a>
                <p className="hero-note">
                  Layanan konsultasi <strong>pendaftaran</strong>, dokumen awal, dan proses penempatan.
                </p>

                <div className="contact-tag-row">
                  <span className="contact-tag">WhatsApp</span>
                  <span className="contact-tag">Respon Cepat</span>
                  <span className="contact-tag">Form Konsultasi</span>
                </div>

                <div className="contact-actions">
                  <a
                    className="btn btn-secondary"
                    href="https://wa.me/6282337224661?text=Halo%2C%20saya%20ingin%20konsultasi%20program%20TKW."
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chat WhatsApp
                  </a>
                </div>

                <div className="contact-helper-card">
                  <h3>Panduan Singkat</h3>
                  <ol>
                    <li>
                      Isi form konsultasi dengan <strong>data dasar</strong>.
                    </li>
                    <li>
                      Klik kirim untuk membuka <strong>WhatsApp admin</strong>.
                    </li>
                    <li>
                      Lanjutkan arahan dokumen sesuai <em>negara tujuan</em>.
                    </li>
                  </ol>
                </div>
              </article>
            </div>

            <div>
              <article className="contact-form-card h-full">
                <h3>
                  Form Konsultasi <span className="text-accent">Cepat</span>
                </h3>
                <p className="form-intro">
                  Isi data di bawah ini, lalu klik kirim. Anda akan diarahkan ke chat <strong>WhatsApp admin</strong>{" "}
                  dengan format data otomatis.
                </p>
                <WhatsAppForm />
              </article>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="section-title section-title-inline">
            <div>
              <p className="eyebrow">Nilai Layanan</p>
              <h2>
                Mengapa Konsultasi di <span className="text-accent">Amanportasia</span> Lebih Nyaman
              </h2>
            </div>
          </div>

          <div className="quick-grid">
            {contactValueCards.map((item) => (
              <article key={item.title} className="quick-card">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>

          <article className="infographic-note mt-3">
            <h3>Kami Siap Menemani Proses Anda</h3>
            <p className="story-note">
              Konsultasi yang baik bukan hanya cepat dijawab, tetapi juga memberi <strong>arah yang jelas</strong> agar
              Anda merasa yakin saat melangkah ke tahap berikutnya.
            </p>
          </article>
        </section>
      </main>

      <a
        className="floating-contact"
        href="https://wa.me/6282337224661"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Contact person WhatsApp 6282337224661"
      >
        <i className="bi bi-whatsapp" aria-hidden="true"></i>
        <span>082337224661</span>
      </a>
    </>
  );
}
