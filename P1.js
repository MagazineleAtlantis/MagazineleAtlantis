function smoothScroll(target) {
    const element = document.querySelector(target);
    const offset = 7 * parseFloat(getComputedStyle(document.documentElement).fontSize);
  
    if (element) {
      const targetPosition = element.offsetTop - offset;
      const currentPosition = window.pageYOffset;
      const distance = targetPosition - currentPosition;
      const duration = 1000; // Durata în milisecunde
  
      let start = null;
  
      function step(timestamp) {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        window.scrollTo(0, easeInOutCubic(progress, currentPosition, distance, duration));
        if (progress < duration) {
          window.requestAnimationFrame(step);
        }
      }
  
      function easeInOutCubic(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
      }
  
      window.requestAnimationFrame(step);
    }
  }

  function toggleLike(element) {
    element.classList.toggle('empty');
    element.classList.toggle('filled');

    var likeCountElement = element.nextElementSibling;

  }