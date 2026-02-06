// This is all you.

// Burger Menu Start

  const btn = document.getElementById('menu-btn');
  const menu = document.getElementById('menu');

  function toggleMenu() {
    const isOpening = !btn.classList.contains('open');
    btn.classList.toggle('open', isOpening);
    btn.setAttribute('aria-expanded', isOpening ? 'true' : 'false');

    menu.classList.toggle('-translate-x-[105%]', !isOpening);
    menu.classList.toggle('translate-x-0', isOpening);
  }

  btn.addEventListener('click', toggleMenu);

  // Close menu when a link is clicked (mobile)
  menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
    if (btn.classList.contains('open')) toggleMenu();
  }));

// Burger Menu End


// Accordion Start

document.addEventListener('DOMContentLoaded', function () {
  const accordionHeaders = document.querySelectorAll('.accordion-header');

  accordionHeaders.forEach(header => {
    const content = header.nextElementSibling;

    // Ensure each content panel starts hidden
    content.style.maxHeight = '0';
    content.style.overflow = 'hidden';

    header.addEventListener('click', function () {
      // Close any currently open items
      accordionHeaders.forEach(h => {
        if (h !== this) {
          h.setAttribute('aria-expanded', 'false');
          h.nextElementSibling.style.maxHeight = '0';
        }
      });

      // Toggle this item
      const expanded = this.getAttribute('aria-expanded') === 'true';
      this.setAttribute('aria-expanded', !expanded);

      content.style.maxHeight = expanded ? '0' : `${content.scrollHeight}px`;
    });
  });
});

// Accordion End

document.addEventListener('DOMContentLoaded', () => {
  const navLogo = document.querySelector('.nav-logo');
  const banner = document.querySelector('.banner');

  // Function to toggle the logo visibility based on scroll position
  function toggleNavLogo() {
    const bannerBottom = banner.getBoundingClientRect().bottom;

    if (bannerBottom <= 0) {
      // User has scrolled past the banner; show the logo in the nav
      navLogo.classList.remove('hidden');
      navLogo.classList.add('block');
    } else {
      // User is above the banner; hide the logo in the nav
      navLogo.classList.remove('block');
      navLogo.classList.add('hidden');
    }
  }

  // Listen for scroll events
  window.addEventListener('scroll', toggleNavLogo);
});


// slide Start

(function () {
      const root = document.getElementById('testi');
      const track = root.querySelector('.track');
      const viewport = root.querySelector('.relative.overflow-hidden') || track.parentElement;
      const slides = Array.from(root.querySelectorAll('.slide'));
      const prev = root.querySelector('.prev');
      const next = root.querySelector('.next');
      const dotsWrap = root.querySelector('.dots');

      let index = 0;
      let slideW = 0;

      // Build dots
      slides.forEach((_, i) => {
        const dot = document.createElement('button');
        dot.type = 'button';
        dot.className = 'h-2 w-2 rounded-full bg-[var(--primary_colour)]/30 hover:bg-[var(--primary_colour)]/60 transition';
        dot.setAttribute('aria-label', 'Go to slide ' + (i + 1));
        dot.addEventListener('click', () => go(i));
        dotsWrap.appendChild(dot);
      });

      function setActiveDot(i) {
        dotsWrap.querySelectorAll('button').forEach((d, di) => {
          d.className = 'h-2 w-2 rounded-full transition ' + (di === i ? 'bg-[var(--primary_colour)]' : 'bg-[var(--primary_colour)]/30 hover:bg-[var(--primary_colour)]/60');
        });
      }

      function measure() {
        slideW = viewport.clientWidth;                 // width of the visible box
        slides.forEach(s => s.style.width = slideW+'px'); // prevent sub-pixel drift
        track.style.transform = `translateX(${-index * slideW}px)`; // snap
      }

      function go(i) {
        index = (i + slides.length) % slides.length;
        track.style.transform = `translateX(${-index * slideW}px)`;
        setActiveDot(index);
      }

      prev.addEventListener('click', () => go(index - 1));
      next.addEventListener('click', () => go(index + 1));
      window.addEventListener('resize', measure);

      // init
      measure();
      setActiveDot(0);
    })();

// Slide End

// Header Transparent

document.addEventListener("DOMContentLoaded", function() {
  const header = document.querySelector(".site-header"); // Adjust selector if needed

  window.addEventListener("scroll", function() {
    if (window.scrollY > 50) { // adjust trigger distance
      header.classList.add("scrolled");
    } else {
      header.classList.remove("scrolled");
    }
  });
});

// Header Transparent End