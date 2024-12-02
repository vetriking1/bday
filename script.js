
onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");
    clearTimeout(c);
  }, 1000);
};
document.addEventListener('DOMContentLoaded', function() {
  // Remove the not-loaded class to start animations
  document.body.classList.remove('not-loaded');
  
  // Set character indices for text animation
  const textSpans = document.querySelectorAll('.birthday-text span');
  textSpans.forEach((span, index) => {
      span.style.setProperty('--char-index', index);
  });
});