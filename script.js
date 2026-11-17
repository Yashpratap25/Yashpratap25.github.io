const texts = [
  'Frontend Developer',
  'Backend Developer',
  'Data Analyst'
];

const typingElement = document.querySelector('.typing-text');

if (typingElement) {
  let textIndex = 0;
  let charIndex = 0;
  let isDeleting = false;

  const type = () => {
    const currentText = texts[textIndex];

    if (!isDeleting) {
      charIndex += 1;
      typingElement.textContent = currentText.slice(0, charIndex);

      if (charIndex === currentText.length) {
        isDeleting = true;
        setTimeout(type, 1200);
        return;
      }
    } else {
      charIndex -= 1;
      typingElement.textContent = currentText.slice(0, charIndex);

      if (charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length;
      }
    }

    const speed = isDeleting ? 60 : 120;
    setTimeout(type, speed);
  };

  type();
}

const menuToggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    nav.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-xmark');
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      nav.classList.remove('active');
      const icon = menuToggle.querySelector('i');
      icon.classList.remove('fa-xmark');
      icon.classList.add('fa-bars');
    });
  });
}
