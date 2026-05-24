const toggleButton = document.getElementById('modeToggle');
if (toggleButton) {
  toggleButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    toggleButton.textContent = document.body.classList.contains('-mode') ? '💡' : 'Dark Mode';
  });
}
const toggle = document.getElementById('modeToggle');

toggle.addEventListener('change', () => {
  document.body.classList.toggle('dark-mode');
});
document.body.classList.add('light-mode');
