const Categories = {
  MATERIALS: 'Material Supply',
  EXCAVATION: 'Deep Excavation',
  RENTALS: 'Heavy Equipment Rent System'
};

const products = [
  // Material Supply
  { name: 'M-Sand', category: Categories.MATERIALS, image: 'm-sand.webp', desc: 'Sifted manufactured sand, perfect for structural strength.' },
  { name: 'P-Sand', category: Categories.MATERIALS, image: 'p-sand.webp', desc: 'Fine-grained plastering sand for the perfect wall finish.' },
  { name: 'River Sand (Poozhi)', category: Categories.MATERIALS, image: 'river-sand.jpg', desc: 'Authentic, triple-washed natural river sand.' },
  { name: 'Ordinary Earth', category: Categories.MATERIALS, image: 'https://images.unsplash.com/photo-1463947628408-f8581a2f4acc?auto=format&fit=crop&q=80&w=600', desc: 'Fine red earth ideal for landscaping and filling.' },
  { name: 'Silica Sand', category: Categories.MATERIALS, image: 'https://images.unsplash.com/photo-1533221008682-fdb8a2b5e0c5?auto=format&fit=crop&q=80&w=600', desc: 'Pure silica sand for specialized industrial applications.' },
  { name: 'WMM', category: Categories.MATERIALS, image: 'https://images.unsplash.com/photo-1541888941255-081d746ed28c?auto=format&fit=crop&q=80&w=600', desc: 'Wet Mix Macadam for superior pavement base.' },
  { name: 'GSB', category: Categories.MATERIALS, image: 'https://images.unsplash.com/photo-1582266255765-fa5cf1a1d501?auto=format&fit=crop&q=80&w=600', desc: 'Granular Sub Base for robust road infrastructure.' },
  { name: 'Rubble', category: Categories.MATERIALS, image: 'https://images.unsplash.com/photo-1541976590-713945680c65?auto=format&fit=crop&q=80&w=600', desc: 'Hard rock rubble for foundations and retaining walls.' },
  { name: 'Rubble C-Wall', category: Categories.MATERIALS, image: 'https://images.unsplash.com/photo-1551029506-080764a217ad?auto=format&fit=crop&q=80&w=600', desc: 'High-quality rubble specifically for C-wall construction.' },
  { name: 'Hollow Bricks', category: Categories.MATERIALS, image: 'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?auto=format&fit=crop&q=80&w=600', desc: 'Durable, lightweight blocks for modern construction.' },
  { name: 'Traditional Bricks', category: Categories.MATERIALS, image: 'https://images.unsplash.com/photo-1590069230002-70cc6a45bc2s?auto=format&fit=crop&q=80&w=600', desc: 'Kalin burnt red clay bricks for timeless builds.' },

  // Deep Excavation
  { name: 'Filling the Land', category: Categories.EXCAVATION, image: 'https://images.unsplash.com/photo-1585914641050-fa9883c4e21c?auto=format&fit=crop&q=80&w=600', desc: 'Professional land leveling and filling services with quality earth.' },
  { name: 'Land Development', category: Categories.EXCAVATION, image: 'https://images.unsplash.com/photo-1503387762-592fdb0f4268?auto=format&fit=crop&q=80&w=600', desc: 'Comprehensive site preparation and plot development services.' },

  // Heavy Equipment Rent System
  { name: 'Diesel Generator', category: Categories.RENTALS, image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&q=80&w=600', desc: 'High-capacity silent diesel generators for backup power.' },
  { name: 'Heavy Crane', category: Categories.RENTALS, image: 'https://images.unsplash.com/photo-1517030330234-94c4fa948ebc?auto=format&fit=crop&q=80&w=600', desc: 'Versatile cranes for lifting heavy construction materials.' },
  { name: 'JCB', category: Categories.RENTALS, image: 'https://images.unsplash.com/photo-1579762590130-1017e8c07e03?auto=format&fit=crop&q=80&w=600', desc: 'Multi-purpose backhoe loaders for all your digging needs.' },
  { name: 'Hitachi Excavators', category: Categories.RENTALS, image: 'https://images.unsplash.com/photo-1533106418989-88406c7cc8ca?auto=format&fit=crop&q=80&w=600', desc: 'All type Hitachi excavators for heavy-duty earthmoving.' },
  { name: 'Roller', category: Categories.RENTALS, image: 'https://images.unsplash.com/photo-1621905252507-b354bcadcabc?auto=format&fit=crop&q=80&w=600', desc: 'Efficient road rollers for soil and asphalt compaction.' },
  { name: 'Grader', category: Categories.RENTALS, image: 'https://images.unsplash.com/photo-1585503865961-24bc39247192?auto=format&fit=crop&q=80&w=600', desc: 'Precision motor graders for road leveling and drainage.' },
  { name: 'Bulldozer', category: Categories.RENTALS, image: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&fit=crop&q=80&w=600', desc: 'Powerful dozers for clearing and heavy-duty grading.' },
  { name: 'Tipper / Torrez', category: Categories.RENTALS, image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=600', desc: 'Strong tippers and multi-axle Torrez trucks for logistics.' },
];

const productsGrid = document.getElementById('products-grid');

function renderProducts() {
  if (!productsGrid) return;

  const categorisedHTML = Object.values(Categories).map(cat => {
    const items = products.filter(p => p.category === cat);
    if (items.length === 0) return '';

    return `
      <div class="category-section reveal">
        <h3 class="category-title">${cat}</h3>
        <div class="products-grid-inner">
          ${items.map(product => `
            <div class="product-card">
              <div class="product-image">
                <img src="${product.image}" alt="${product.name}" loading="lazy">
              </div>
              <div class="product-info">
                <h3>${product.name}</h3>
                <p>${product.desc}</p>
                <button class="btn" onclick="window.open('https://wa.me/919876543210?text=I am interested in ${product.name}', '_blank')">Get Quote</button>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  }).join('');

  productsGrid.innerHTML = categorisedHTML;
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
