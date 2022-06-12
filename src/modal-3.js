(() => {
  const refs = {
    openModalBtn: document.querySelector("[open-locations]"),
    closeModalBtn: document.querySelector("[close-locations]"),
    modal: document.querySelector("[data-modal-locations]"),
  };

  refs.openModalBtn.addEventListener("click", toggleModal);
  refs.closeModalBtn.addEventListener("click", toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle("is-hidden");
  }
})();

