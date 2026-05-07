const yearNode = document.getElementById("year");
if (yearNode) {
  yearNode.textContent = new Date().getFullYear();
}

const ADMIN_WHATSAPP_NUMBER = "6285156575538";

const mainMenu = document.getElementById("mainMenu");
const menuToggle = document.querySelector('.custom-toggler[data-bs-target="#mainMenu"]');

if (mainMenu && menuToggle) {
  const setMenuToggleState = (isActive) => {
    menuToggle.classList.toggle("is-active", isActive);
  };

  setMenuToggleState(mainMenu.classList.contains("show"));

  ["show.bs.modal", "show.bs.offcanvas"].forEach((eventName) => {
    mainMenu.addEventListener(eventName, () => setMenuToggleState(true));
  });

  ["hide.bs.modal", "hide.bs.offcanvas"].forEach((eventName) => {
    mainMenu.addEventListener(eventName, () => setMenuToggleState(false));
  });
}

const menuLinks = document.querySelectorAll(".menu-link[href]");
menuLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    const targetHref = link.getAttribute("href");
    if (!targetHref || targetHref.startsWith("#")) {
      return;
    }

    event.preventDefault();
    window.location.assign(targetHref);
  });
});

const waContactForm = document.getElementById("waContactForm");

if (waContactForm) {
  waContactForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const nama = waContactForm.elements.nama?.value.trim() || "";
    const nomorHp = waContactForm.elements.nomor_hp?.value.trim() || "";
    const keperluan = waContactForm.elements.keperluan?.value.trim() || "";
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
  });
}
