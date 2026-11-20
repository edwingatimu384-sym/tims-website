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
  const form = document.getElementById('inquiry-form');
  const status = document.getElementById('inquiry-status');
  const submit = document.getElementById('inquiry-submit');
  if (!emailValid) submit.textContent = 'Copy my inquiry ↗';
  function textForInquiry(data) {
    return `Hello Tim,\n\nMy name is ${data.name}. I would like to discuss a project with TIMS.\n\nService: ${data.service}\n\nProject details:\n${data.details}\n\nYou can reach me at ${data.email}.\n\nThanks!`;
  }
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    if (!form.reportValidity()) return;
    const data = Object.fromEntries(new FormData(form).entries());
    const body = textForInquiry(data);
    if (emailValid) {
      const subject = encodeURIComponent('TIMS project inquiry — ' + data.service);
      window.location.href = 'mailto:' + email + '?subject=' + subject + '&body=' + encodeURIComponent(body);
      status.textContent = 'Your email app should open with the inquiry. Please send it from there.';
    } else {
      try {
        if (!navigator.clipboard || !navigator.clipboard.writeText) throw new Error('Clipboard unavailable');
        await navigator.clipboard.writeText(body);
        status.textContent = 'Inquiry copied. Paste it into an email or message to TIMS. Website owner: add your contact email in site-config.js to enable direct inquiries.';
      } catch (_) {
        const blob = new Blob([body], {type:'text/plain'});
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a'); link.href = url; link.download = 'tims-inquiry.txt'; document.body.appendChild(link); link.click(); link.remove(); URL.revokeObjectURL(url);
        status.textContent = 'Your inquiry was downloaded as a text file. Website owner: add your contact email in site-config.js to enable direct inquiries.';
      }
    }
  });
})();
