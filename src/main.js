const products = [
  { name: 'M-Sand', image: 'https://images.unsplash.com/photo-1517420812314-8e84b1173d9b?auto=format&fit=crop&q=80&w=600', desc: 'Sifted manufactured sand, perfect for structural strength.' },
  { name: 'P-Sand', image: 'https://images.unsplash.com/photo-1541888941255-081d746ed28c?auto=format&fit=crop&q=80&w=600', desc: 'Fine-grained plastering sand for the perfect wall finish.' },
  { name: 'River Sand (Poozhi)', image: 'https://images.unsplash.com/photo-1582294119803-08709420076a?auto=format&fit=crop&q=80&w=600', desc: 'Authentic, triple-washed natural river sand.' },
  { name: 'Gravel', image: 'https://images.unsplash.com/photo-1533221008682-fdb8a2b5e0c5?auto=format&fit=crop&q=80&w=600', desc: 'Natural crushed stone for drainage and strong foundations.' },
  { name: 'Earth (Mannu)', image: 'https://images.unsplash.com/photo-1463947628408-f8581a2f4acc?auto=format&fit=crop&q=80&w=600', desc: 'Raw red earth, ideal for landscaping and filling.' },
  { name: 'Hollow Bricks', image: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&q=80&w=600', desc: 'Durable, lightweight blocks for modern construction.' },
  { name: 'Traditional Bricks', image: 'https://images.unsplash.com/photo-1590069230002-70cc6a45bc2s?auto=format&fit=crop&q=80&w=600', desc: 'Kalin burnt red clay bricks for timeless builds.' },
  { name: 'Karikallu', image: 'https://images.unsplash.com/photo-1541976590-713945680c65?auto=format&fit=crop&q=80&w=600', desc: 'Natural laterite stones for a rugged, organic look.' },
  { name: 'Ishtika', image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&q=80&w=600', desc: 'A-Grade burnt bricks for load-bearing walls.' },
  { name: 'Roofing Tiles (Odu)', image: 'https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?auto=format&fit=crop&q=80&w=600', desc: 'Natural clay tiles for weather protection and beauty.' },
  { name: 'Cement', image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&q=80&w=600', desc: 'Premium grade cement for everlasting bonds.' },
];

const productsGrid = document.getElementById('products-grid');

function renderProducts() {
  if (!productsGrid) return;

  productsGrid.innerHTML = products.map(product => `
    <div class="product-card">
      <div class="product-image">
        <img src="${product.image}" alt="${product.name}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <div class="product-info">
        <h3>${product.name}</h3>
        <p>${product.desc}</p>
        <button class="btn" style="margin-top: 1rem; width: 100%;" onclick="window.open('https://wa.me/919876543210?text=I am interested in ${product.name}', '_blank')">Get Quote</button>
      </div>
    </div>
  `).join('');
}

// Reveal Animations on Scroll
function initScrollAnimations() {
  const revealElements = document.querySelectorAll('.reveal, .reveal-stagger');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });

  revealElements.forEach(el => observer.observe(el));
}

// Simple Testimonial Slider
let currentSlide = 0;
const slides = [
  { text: '"M&M Agencies is our go-to for all sand and brick requirements. Their punctuality is unmatched."', author: '- Rajesh Kumar, Contractor' },
  { text: '"Reliable, rugged, and always on time. Best material quality in the region."', author: '- Soman Nair, Builder' },
  { text: '"The on-site delivery saved us a lot of logistics headache. Highly recommended!"', author: '- Preeti Sharma, Architect' }
];

function renderTestimonials() {
  const container = document.querySelector('.testimonial-slider');
  if (!container) return;

  function updateSlide() {
    const slide = slides[currentSlide];
    container.style.opacity = 0;
    setTimeout(() => {
      container.innerHTML = `
        <div class="slide">
          <p>${slide.text}</p>
          <h4>${slide.author}</h4>
        </div>
      `;
      container.style.opacity = 1;
    }, 400);
    currentSlide = (currentSlide + 1) % slides.length;
  }

  setInterval(updateSlide, 5000);
  updateSlide();
}

// Smooth Header Change
window.addEventListener('scroll', () => {
  const header = document.querySelector('header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});

// Smooth scroll for nav links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  initScrollAnimations();
  renderTestimonials();
});
