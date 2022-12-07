var form = document.getElementById("contact-form");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);

function resetForm() {
  const form = document.getElementById('contact-form');
  form.submit();
  form.reset();
};

$(function () {
  $('[data-bs-toggle="popover"]').popover()
})

function checkValidation() {
  $('#sentModal').show()
  return false
}
