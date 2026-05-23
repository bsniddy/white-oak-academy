/* White Oak Children's Academy — main.js */

document.addEventListener('DOMContentLoaded', () => {

  /* ---- Mobile hamburger nav ---- */
  const hamburger = document.querySelector('.hamburger');
  const mobileNav = document.querySelector('.mobile-nav');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      const isOpen = mobileNav.classList.toggle('open');
      hamburger.classList.toggle('open', isOpen);
      hamburger.setAttribute('aria-expanded', isOpen);
    });

    // Close on nav link click
    mobileNav.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileNav.classList.remove('open');
        hamburger.classList.remove('open');
        hamburger.setAttribute('aria-expanded', false);
      });
    });
  }

  /* ---- Highlight active nav link ---- */
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.primary-nav a, .mobile-nav a').forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ---- FAQ accordion ---- */
  document.querySelectorAll('.faq-question').forEach(btn => {
    btn.addEventListener('click', () => {
      const answer = btn.nextElementSibling;
      const isOpen = btn.classList.contains('active');

      // Close all
      document.querySelectorAll('.faq-question').forEach(b => {
        b.classList.remove('active');
        b.nextElementSibling.classList.remove('open');
      });

      // Toggle clicked
      if (!isOpen) {
        btn.classList.add('active');
        answer.classList.add('open');
      }
    });
  });

  /* ---- Contact form ---- */
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', e => {
      e.preventDefault();
      let valid = true;

      form.querySelectorAll('[required]').forEach(field => {
        const err = field.parentElement.querySelector('.form-error');
        if (!field.value.trim()) {
          if (err) err.classList.add('visible');
          valid = false;
        } else {
          if (err) err.classList.remove('visible');
        }
      });

      const emailField = form.querySelector('[type="email"]');
      if (emailField && emailField.value.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailField.value)) {
        const err = emailField.parentElement.querySelector('.form-error');
        if (err) { err.textContent = 'Please enter a valid email address.'; err.classList.add('visible'); }
        valid = false;
      }

      if (valid) {
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending…';

        fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        })
        .then(res => res.json())
        .then(data => {
          if (data.success) {
            form.style.display = 'none';
            document.getElementById('form-success').classList.add('visible');
          } else {
            submitBtn.disabled = false;
            submitBtn.textContent = originalText;
            alert('Sorry, there was an issue sending your message. Please email us directly at whiteoakchildrensacademy@gmail.com.');
          }
        })
        .catch(() => {
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
          alert('Sorry, there was an issue sending your message. Please email us directly at whiteoakchildrensacademy@gmail.com.');
        });
      }
    });
  }

});
