const btnContainer = document.querySelectorAll(".icons-container");
const questions = document.querySelectorAll(".single-question-wrapper");

btnContainer.forEach(function(btn) {
  btn.addEventListener("click", function(e) {
    const question = e.currentTarget.parentElement.parentElement;
    questions.forEach(function(item) {
      if(item !== question) {
        item.classList.remove("show-text");
      }
    });
    question.classList.toggle("show-text");
  })
});