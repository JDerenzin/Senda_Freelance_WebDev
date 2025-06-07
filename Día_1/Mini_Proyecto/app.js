const questions = document.querySelectorAll('.question');

questions.forEach((btn) => {
  btn.addEventListener('click', () => {
    const answer = btn.nextElementSibling;
    answer.classList.toggle('hidden');
  });
});