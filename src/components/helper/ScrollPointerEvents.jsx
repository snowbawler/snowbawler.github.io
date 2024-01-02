document.addEventListener('DOMContentLoaded', function() {
  function handleScroll() {
    // Calculate the scroll percentage
    const scrollPercentage = (window.scrollY + window.innerHeight) / document.documentElement.scrollHeight * 100;

    // Get the element with the class 'pin-spacer'
    const pinSpacer = document.querySelector('.pin-spacer');

    // Check if the scroll percentage is at the bottom (adjust the threshold as needed)
    if (scrollPercentage >= 95) {
      pinSpacer.style.pointerEvents = 'none';
    } else {
      pinSpacer.style.pointerEvents = 'auto';
    }
  }

  // Attach the scroll event listener
  window.addEventListener('scroll', handleScroll);
});