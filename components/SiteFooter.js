export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="footer-panel">
          <div className="footer-intro">
            <p>
              Informasi Lowongan Kerja Luar negri membantu calon pekerja migran memahami syarat, negara tujuan,
              pendampingan dokumen, dan layanan konsultasi yang mudah dijangkau.
            </p>
          </div>

          <div className="footer-grid">
            <section className="footer-col">
              <p className="eyebrow">Mengapa Kami</p>
              <h3>Alasan Memilih Agent Kami</h3>
              <p>
                Kami fokus membantu calon tenaga kerja dengan informasi valid, pendampingan manusiawi, dan alur proses
                yang jelas dari awal sampai siap penempatan.
              </p>
            </section>

            <section className="footer-col">
              <p className="eyebrow">Nilai Utama</p>
              <h3>Keunggulan Agent Kami</h3>
              <ul className="footer-list">
                <li>Informasi syarat tiap negara disampaikan transparan.</li>
                <li>Pendampingan dokumen dan konsultasi personal.</li>
                <li>Respon admin cepat melalui WhatsApp resmi.</li>
              </ul>
            </section>

            <section className="footer-col">
              <p className="eyebrow">Hubungi Kami</p>
              <h3>Kontak Admin</h3>
              <ul className="footer-contact-list">
                <li>
                  <i className="bi bi-telephone" aria-hidden="true" />
                  <a href="tel:082337224661">082337224661</a>
                </li>
              </ul>
            </section>
          </div>
        </div>

        <p className="footer-bottom">&copy; 2026 All right reserved</p>
      </div>
    </footer>
  );
}
