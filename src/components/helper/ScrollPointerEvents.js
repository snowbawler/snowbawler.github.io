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

document.addEventListener("DOMContentLoaded", function(){

  let elements = document.getElementsByTagName('lottie-player');

  for (var i = 0; i < elements.length; i++) {
  
    elements[i].addEventListener('play', (event) => {
      // console.log(event.target.shadowRoot.querySelector('svg').style.transform);
      event.target.shadowRoot.querySelector('svg').style.transform = '';
    });
    elements[i].play(); // trigger (again)

  }
});