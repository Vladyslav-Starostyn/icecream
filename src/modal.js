(() => {
  const refs = {
    openModalBtn: document.querySelectorAll("[data-modal-open]"),
    closeModalBtn: document.querySelector("[data-modal-close]"),
    modal: document.querySelector("[data-modal]"),
  };
  
  [...refs.openModalBtn].map((item) => {
    item.addEventListener("click", toggleModal);
  })
  refs.closeModalBtn.addEventListener("click", toggleModal);


  function toggleModal() {
    document.body.classList.toggle("modal-open");
    refs.modal.classList.toggle("is-hidden");
  }
})();