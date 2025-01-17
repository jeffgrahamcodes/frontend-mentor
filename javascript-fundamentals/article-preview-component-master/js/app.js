const share = document.querySelector('.share');
const icon = document.querySelector('.share svg path');
share.addEventListener('mousedown', (e) => {
  icon.attributes.fill.value = '#fff';
});
share.addEventListener('mouseup', (e) => {
  icon.attributes.fill.value = '#6E8098';
});
