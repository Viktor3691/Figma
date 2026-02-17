function openModal() {
  document.querySelector(".first-modal").style.display = "block";
}
document
  .querySelector(".design-flex__btn")
  .addEventListener("click", openModal);

function clouseModal() {
  document.querySelector(".first-modal").style.display = "none";
  messageFild.value = "";
}
document.querySelector(".clouse__btn").addEventListener("click", clouseModal);

// кнопка и отправка текста из поля на почту
let sendBtn = document.querySelector(".send__btn");
let messageFild = document.querySelector(".first-modal-message");

sendBtn.addEventListener("click", function () {
  let message = messageFild.value;

let email = "vviller959@gmail.com";
  let subject = "Вопрос по разработке";
  let mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(message)}`;
  window.location.href = mailtoLink;
});
// sendBtn.addEventListener('click', closеModal);
