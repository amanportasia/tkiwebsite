"use client";

const ADMIN_WHATSAPP_NUMBER = "6282337224661";

export default function WhatsAppForm() {
  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const nama = String(formData.get("nama") || "").trim();
    const nomorHp = String(formData.get("nomor_hp") || "").trim();
    const keperluan = String(formData.get("keperluan") || "").trim();
    const jenisKelamin = "Perempuan";

    const message = [
      "Halo Admin TKW, saya ingin konsultasi.",
      `Nama: ${nama}`,
      `Nomor HP: ${nomorHp}`,
      `Jenis Kelamin: ${jenisKelamin}`,
      `Keperluan: ${keperluan}`
    ].join("\n");

    const waUrl = `https://wa.me/${ADMIN_WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
    window.open(waUrl, "_blank", "noopener,noreferrer");
  };

  return (
    <form id="waContactForm" className="wa-contact-form" onSubmit={handleSubmit}>
      <div className="form-field">
        <label htmlFor="namaKonsultasi">Nama</label>
        <input
          id="namaKonsultasi"
          name="nama"
          className="form-input"
          type="text"
          placeholder="Nama lengkap"
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="nomorHpKonsultasi">Nomor HP</label>
        <input
          id="nomorHpKonsultasi"
          name="nomor_hp"
          className="form-input"
          type="tel"
          inputMode="numeric"
          placeholder="Contoh: 081234567890"
          required
        />
      </div>

      <div className="form-field">
        <label htmlFor="jenisKelaminKonsultasi">Jenis Kelamin</label>
        <input
          id="jenisKelaminKonsultasi"
          className="form-input locked-field"
          type="text"
          value="Perempuan"
          disabled
          aria-disabled="true"
          readOnly
        />
      </div>

      <div className="form-field">
        <label htmlFor="keperluanKonsultasi">Keperluan</label>
        <textarea
          id="keperluanKonsultasi"
          name="keperluan"
          className="form-input form-textarea"
          rows="4"
          placeholder="Contoh: Konsultasi syarat dan proses pendaftaran"
          required
        ></textarea>
      </div>

      <button type="submit" className="btn btn-primary w-100">
        Kirim ke WhatsApp Admin
      </button>
    </form>
  );
}