/**
 * TENJU SOLUTIONS — SCRIPT
 * Minimal JavaScript for smooth scroll and reveal animations
 */

(function() {
  'use strict';

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /**
   * SMOOTH SCROLL FOR ANCHOR LINKS
   */
  function initSmoothScroll() {
    const anchorLinks = document.querySelectorAll('a[href^="#"]');

    anchorLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        const href = this.getAttribute('href');

        // Skip if href is just "#"
        if (href === '#') return;

        const targetId = href.substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
          e.preventDefault();

          // Smooth scroll to target
          targetElement.scrollIntoView({
            behavior: prefersReducedMotion ? 'auto' : 'smooth',
            block: 'start'
          });

          // Update URL without jumping
          if (history.pushState) {
            history.pushState(null, null, href);
          }

          // Focus target for accessibility
          targetElement.focus({ preventScroll: true });
        }
      });
    });
  }

  /**
   * INTERSECTION OBSERVER FOR REVEAL ANIMATIONS
   */
  function initRevealOnScroll() {
    // Skip animations if user prefers reduced motion
    if (prefersReducedMotion) {
      const sections = document.querySelectorAll('.section');
      sections.forEach(section => section.classList.add('reveal'));
      return;
    }

    // Create intersection observer
    const observerOptions = {
      root: null, // viewport
      rootMargin: '0px 0px -100px 0px', // trigger slightly before element enters viewport
      threshold: 0.1 // trigger when 10% of element is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          // Add reveal class to trigger animation
          entry.target.classList.add('reveal');

          // Stop observing this element after it's revealed
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => observer.observe(section));
  }

  /**
   * INITIALIZE ALL FEATURES
   */
  function init() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', function() {
        initSmoothScroll();
        initRevealOnScroll();
      });
    } else {
      // DOM is already ready
      initSmoothScroll();
      initRevealOnScroll();
    }
  }

  // Run initialization
  init();

  /**
   * NAVBAR TRANSPARENCY ON SCROLL (Optional enhancement)
   * Uncomment if you want the nav to become more opaque on scroll
   */
  /*
  let lastScrollTop = 0;
  const nav = document.querySelector('.nav');

  window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 100) {
      nav.style.background = 'rgba(11, 12, 14, 0.98)';
    } else {
      nav.style.background = 'rgba(11, 12, 14, 0.95)';
    }

    lastScrollTop = scrollTop;
  }, { passive: true });
  */

})();
