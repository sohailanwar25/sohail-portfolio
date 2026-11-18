document.getElementById('year').textContent = new Date().getFullYear();

const skillButton = document.getElementById('skillButton');
const skillMessage = document.getElementById('skillMessage');
let showingFocus = false;

skillButton.addEventListener('click', function () {
  showingFocus = !showingFocus;
  if (showingFocus) {
    skillMessage.textContent = 'Current learning focus: PHP, Laravel, JavaScript and building responsive web applications.';
    skillButton.textContent = 'Hide learning focus';
  } else {
    skillMessage.textContent = '';
    skillButton.textContent = 'Show learning focus';
  }
});
