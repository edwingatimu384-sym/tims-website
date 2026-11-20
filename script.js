(() => {
  'use strict';
  const config = window.TIMS_CONFIG || {};
  const email = typeof config.contactEmail === 'string' ? config.contactEmail.trim() : '';
  const whatsapp = typeof config.whatsappNumber === 'string' ? config.whatsappNumber.replace(/\D/g,'') : '';
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const navToggle = document.getElementById('nav-toggle');
  const nav = document.getElementById('site-nav');
  function closeMenu() { nav.classList.remove('open'); navToggle.setAttribute('aria-expanded','false'); navToggle.setAttribute('aria-label','Open navigation'); }
  navToggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); navToggle.setAttribute('aria-expanded',String(open)); navToggle.setAttribute('aria-label',open?'Close navigation':'Open navigation'); });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (e) => { if(e.key === 'Escape') closeMenu(); });
  document.getElementById('year').textContent = new Date().getFullYear();
  if (emailValid) {
    const el = document.getElementById('contact-email');
    el.href = 'mailto:' + email;
    el.classList.remove('is-hidden');
  }
  if (whatsapp.length >= 10 && whatsapp.length <= 15) {
    const el = document.getElementById('contact-whatsapp');
    el.href = 'https://wa.me/' + whatsapp + '?text=' + encodeURIComponent('Hello Tim, I found TIMS online and would like to discuss a project.');
    el.classList.remove('is-hidden');
  }
  const select = document.getElementById('service-choice');
  document.querySelectorAll('.service-inquire').forEach(button => {
    button.addEventListener('click', () => { select.value = button.dataset.service; document.getElementById('contact').scrollIntoView({behavior:'smooth'}); window.setTimeout(() => document.getElementById('customer-name').focus({preventScroll:true}),550); });
  });
})();
