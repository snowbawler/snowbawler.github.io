document.addEventListener('DOMContentLoaded', function() {
  function handleScroll() {
    const scrollPercentage = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;

    const pinSpacer = document.querySelector('.pin-spacer');

    if (scrollPercentage >= 95) {
      pinSpacer.style.pointerEvents = 'none';
    } else {
      pinSpacer.style.pointerEvents = 'auto';
    }
  }

  window.addEventListener('scroll', handleScroll);
});