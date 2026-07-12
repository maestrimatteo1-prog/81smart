const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});

document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  });
});

const companyForm = document.getElementById('companyForm');
if (companyForm) {
  companyForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(companyForm);
    const subject = `Richiesta 81Smart - ${data.get('servizio') || 'Informazioni'}`;
    const body = [
      `Ragione sociale: ${data.get('azienda') || ''}`,
      `Numero lavoratori: ${data.get('lavoratori') || ''}`,
      `Telefono: ${data.get('telefono') || ''}`,
      `Email: ${data.get('email') || ''}`,
      `Servizio richiesto: ${data.get('servizio') || ''}`,
      '',
      'Messaggio:',
      `${data.get('messaggio') || ''}`
    ].join('\n');
    window.location.href = `mailto:info@solelu.net?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
