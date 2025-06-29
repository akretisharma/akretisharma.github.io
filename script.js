const canvas = document.getElementById('particles-bg');
const ctx = canvas.getContext('2d');
let particles = [];

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
window.addEventListener('resize', resizeCanvas);
resizeCanvas();

class Particle {
  constructor() {
    this.reset();
  }

  reset() {
    this.x = Math.random() * canvas.width;
    this.y = Math.random() * canvas.height;
    this.radius = Math.random() * 1.5 + 0.5;
    this.speedX = Math.random() * 0.3 - 0.15;
    this.speedY = Math.random() * 0.3 - 0.15;
    this.alpha = Math.random() * 0.3 + 0.1;
  }

  update() {
    this.x += this.speedX;
    this.y += this.speedY;

    if (
      this.x < 0 || this.x > canvas.width ||
      this.y < 0 || this.y > canvas.height
    ) {
      this.reset();
    }
  }

  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(255, 192, 203, ${this.alpha})`; // light pink
    ctx.fill();
  }
}

for (let i = 0; i < 100; i++) {
  particles.push(new Particle());
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}

animate();



const buttons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('#grid-container > div');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const selected = button.getAttribute('data-filter');

    // Update button state
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');

    // Animate out all visible cards
    cards.forEach(card => {
      card.classList.remove('show');
    });

    // Wait for fade-out to finish before hiding/showing
    setTimeout(() => {
      cards.forEach(card => {
        const match = selected === 'all' || card.dataset.category === selected;

        card.style.display = match ? 'block' : 'none';

        if (match) {
          // Trigger reflow to restart transition
          void card.offsetWidth;
          card.classList.add('show');
        }
      });
    }, 300); // Match this to your CSS transition duration
  });
});
