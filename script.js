const form = document.getElementById("form");
const errorMessage = document.getElementById("error-message");
const fields = document.querySelectorAll("#form input");



form.addEventListener("submit", function (event) {
  event.preventDefault();

  let allFieldsValid = true; 
  let total = 0;

  fields.forEach((field) => {
    const value = Number(field.value);

    if (field.value.trim() === "" || value < 0) {
      allFieldsValid = false;
      field.setAttribute("aria-invalid", "true");
    } else {
      total += value; 
      field.setAttribute("aria-invalid", "false");
    }
  });

  if (!allFieldsValid) {
    errorMessage.textContent = "Por favor, preencha todos os campos com valores válidos (0 ou maior).";
    errorMessage.style.display = "block";
  } else {
    errorMessage.style.display = "none";
    const totalHours = document.getElementById("total-hours");
    totalHours.textContent = `Total de horas: ${total}`;
    totalHours.style.display = "block";
  }
});
