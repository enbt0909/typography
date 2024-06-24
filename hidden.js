(function() {
    const popupElement = document.createElement('div');
    popupElement.classList.add('popup');
    popupElement.textContent = 'Nach Oben';
    document.body.appendChild(popupElement);
  
    const buttons = document.querySelectorAll('.tooltip__scroll, .tooltiptext__scroll');
    buttons.forEach(button => {
      button.addEventListener('click', () => {
        popupElement.style.visibility = 'visible';
        popupElement.style.opacity = '1';
      });
    });
  
    window.addEventListener('scroll', () => {
      const scrollPosition = window.scrollY || document.documentElement.scrollTop;
  
      if (scrollPosition === 0) {
        popupElement.style.visibility = 'hidden';
        popupElement.style.opacity = '0';
      }
    });
  })();