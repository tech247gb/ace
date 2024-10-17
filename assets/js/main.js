
(function() {
  "use strict";
  function toggleScrolled() {
    const selectBody = document.querySelector('body');
    const selectHeader = document.querySelector('#header');
    if (!selectHeader.classList.contains('scroll-up-sticky') && !selectHeader.classList.contains('sticky-top') && !selectHeader.classList.contains('fixed-top')) return;
    window.scrollY > 100 ? selectBody.classList.add('scrolled') : selectBody.classList.remove('scrolled');
  }

  document.addEventListener('scroll', toggleScrolled);
  window.addEventListener('load', toggleScrolled);

  document.querySelectorAll('#navmenu a').forEach(navmenu => {
    navmenu.addEventListener('click', () => {
      if (document.querySelector('.mobile-nav-active')) {
        mobileNavToogle();
      }
    });

  });


  const navBtn = document.getElementById('nav-btn');
  const navIcon = document.getElementById('nav-icon');
  const navbar = document.querySelector('.navbar'); // Get the navbar element
  navBtn.addEventListener('click', function() {
      navIcon.classList.toggle('bi-list');
      navIcon.classList.toggle('bi-x');
      
      // Check if navIcon has the 'bi-x' class
      if (navIcon.classList.contains('bi-x')) {
          // Add style when the navbar is opened
          navbar.style.borderBottom = '8px solid color-mix(in srgb, black 20%, var(--heading-color) 80%)';
      } else {
          // Remove the border when the navbar is closed
          navbar.style.borderBottom = 'none'; // You can also set it to transparent if needed
      }
  });
  

  /**
   * Scroll top button
   */
  let scrollTop = document.querySelector('#scroll-top');

  function toggleScrollTop() {
    if (scrollTop) {
      window.scrollY > 100 ? scrollTop.classList.add('active') : scrollTop.classList.remove('active');
    }
  }
  scrollTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });

  window.addEventListener('load', toggleScrollTop);
  document.addEventListener('scroll', toggleScrollTop);

  /**
   * Animation on scroll function and init
   */
  function aosInit() {
    AOS.init({
      duration: 600,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    });
  }
  window.addEventListener('load', aosInit);
  window.addEventListener("load", initSwiper);
  window.addEventListener('load', function(e) {
    if (window.location.hash) {
      if (document.querySelector(window.location.hash)) {
        setTimeout(() => {
          let section = document.querySelector(window.location.hash);
          let scrollMarginTop = getComputedStyle(section).scrollMarginTop;
          window.scrollTo({
            top: section.offsetTop - parseInt(scrollMarginTop),
            behavior: 'smooth'
          });
        }, 100);
      }
    }
  });
})();