// Navbar scroll effect
const navbar = document.querySelector('.navbar');
if (navbar) {
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
  // Trigger on load in case page is already scrolled
  navbar.classList.toggle('scrolled', window.scrollY > 50);
}

// Mobile menu
const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');
const mobileClose = document.querySelector('.mobile-close');

if (hamburger && mobileMenu) {
  hamburger.addEventListener('click', () => mobileMenu.classList.add('open'));
  mobileClose?.addEventListener('click', () => mobileMenu.classList.remove('open'));
  mobileMenu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });
}

// Pricing toggle (annual/monthly)
const toggle = document.querySelector('.toggle-switch');
const monthlyLabel = document.querySelector('.monthly-label');
const annualLabel = document.querySelector('.annual-label');

if (toggle) {
  let isAnnual = true;

  const prices = {
    essentials: { monthly: 199, annual: 149 },
    professional: { monthly: 349, annual: 292 },
    enterprise: { monthly: 499, annual: 416 },
  };

  function updatePrices() {
    const period = isAnnual ? 'annual' : 'monthly';
    const suffix = isAnnual ? '/mo' : '/mo';

    document.querySelectorAll('[data-plan]').forEach(el => {
      const plan = el.dataset.plan;
      if (prices[plan]) {
        el.textContent = '$' + prices[plan][period];
      }
    });

    document.querySelectorAll('.price-note').forEach(el => {
      el.textContent = isAnnual ? 'per month, billed annually' : 'billed monthly';
    });

    monthlyLabel?.classList.toggle('active', !isAnnual);
    annualLabel?.classList.toggle('active', isAnnual);
    toggle.classList.toggle('active', isAnnual);
  }

  toggle.addEventListener('click', () => {
    isAnnual = !isAnnual;
    updatePrices();
  });

  updatePrices();
}

// Signup form handling
const signupForm = document.getElementById('signup-form');
if (signupForm) {
  signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(signupForm);
    const data = Object.fromEntries(formData);

    // Show success message
    const card = signupForm.closest('.signup-form-card');
    card.innerHTML = `
      <div style="text-align:center; padding: 40px 0;">
        <div style="font-size: 3rem; margin-bottom: 16px;">&#10003;</div>
        <h3 style="margin-bottom: 12px;">Thank You!</h3>
        <p style="color: #6b7280;">We've received your information and will be in touch within 1 business day to get you started.</p>
        <p style="color: #6b7280; margin-top: 12px;">A confirmation has been sent to <strong>${data.email || 'your email'}</strong>.</p>
      </div>
    `;
  });
}

// Scroll reveal animation
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -40px 0px' };
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

document.querySelectorAll('.feature-card, .testimonial-card, .showcase-item, .pricing-card, .value-card, .addon-card').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(24px)';
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  observer.observe(el);
});
