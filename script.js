let count = 0;
const countDisplay = document.getElementById('count');
const button = document.getElementById('clickBtn');

button.addEventListener('click', () => {
  count++;
  countDisplay.textContent = count;
});
