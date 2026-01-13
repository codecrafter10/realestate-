function openForm() {
  document.getElementById("formModal").style.display = "block";
}

window.onclick = function(e) {
  if (e.target.className === "modal") {
    e.target.style.display = "none";
  }
};
