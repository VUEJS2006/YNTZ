
  const openBtn = document.getElementById("openBooking");
  const closeBtn = document.getElementById("closeBooking");
  const modal = document.getElementById("ModalBooking");

  openBtn.onclick = () => {
    modal.classList.add("active");
  };

  closeBtn.onclick = () => {
    modal.classList.remove("active");
  };

  modal.onclick = (e) => {
    if (e.target === modal) {
      modal.classList.remove("active");
    }
  };

