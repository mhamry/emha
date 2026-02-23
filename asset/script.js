//kode menhilangkan off canvas kekiri
const offcanvasElement = document.getElementById("offcanvasNavbar");
const offcanvas = bootstrap.Offcanvas.getOrCreateInstance(offcanvasElement);

offcanvasElement.querySelectorAll(".nav-link").forEach((link) => {
  link.addEventListener("click", () => {
    offcanvas.hide();
  });
});

//pesan wa

document.querySelectorAll(".pesan-btn").forEach((btn) => {
  btn.addEventListener("click", function (e) {
    e.preventDefault();

    const template = this.dataset.template;
    const harga = this.dataset.harga;

    const pesan = `Halo Admin EMHA Undangan,
    Saya ingin memesan:Template : ${template}
    Harga : ${harga}
    Mohon info langkah selanjutnya ❤️🙏🙏`;

    const url = "https://wa.me/6285176856246?text=" + encodeURIComponent(pesan);

    window.open(url, "_blank");
  });
});
