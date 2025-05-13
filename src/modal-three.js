(() => {
  const refs = {
    openModalBtn: document.querySelector("[data-modal-open-three]"),
    closeModalBtn: document.querySelector("[data-modal-close-three]"),
    modal: document.querySelector("[data-modal-three]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    document.body.classList.toggle("modal-open")
    refs.modal.classList.toggle("is-hidden");
  }
})();