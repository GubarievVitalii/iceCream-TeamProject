(() => {
  const refs = {
    openModalBtn: document.querySelector("[open-franchise]"),
    closeModalBtn: document.querySelector("[close-franchise]"),
    modal: document.querySelector("[data-modal-franchise]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();