(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-two-open]"),
    closeModalBtn: document.querySelector("[data-modal-two-close]"),
    modal: document.querySelector("[data-modal-two]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();