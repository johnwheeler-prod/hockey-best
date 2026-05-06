const deck = document.getElementById('deck');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const currentLabel = document.getElementById('current-slide');
const totalLabel = document.getElementById('total-slides');

const slides = Array.from(deck.querySelectorAll('.slide'));
totalLabel.textContent = slides.length;

function currentIndex() {
  const midY = deck.scrollTop + deck.clientHeight / 2;
  let closest = 0;
  let closestDist = Infinity;
  slides.forEach((s, i) => {
    const dist = Math.abs(s.offsetTop - deck.scrollTop);
    if (dist < closestDist) { closestDist = dist; closest = i; }
  });
  return closest;
}

function goTo(index) {
  const i = Math.max(0, Math.min(slides.length - 1, index));
  slides[i].scrollIntoView({ behavior: 'smooth' });
}

function updateCounter() {
  currentLabel.textContent = currentIndex() + 1;
}

prevBtn.addEventListener('click', () => goTo(currentIndex() - 1));
nextBtn.addEventListener('click', () => goTo(currentIndex() + 1));

deck.addEventListener('scroll', updateCounter, { passive: true });

// Keyboard navigation
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === ' ') {
    e.preventDefault();
    goTo(currentIndex() + 1);
  } else if (e.key === 'ArrowUp' || e.key === 'PageUp') {
    e.preventDefault();
    goTo(currentIndex() - 1);
  }
});
