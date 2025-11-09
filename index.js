const sections = [
  {
    title: "Discover innovative ways to decorate",
    text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
    src: "./images/desktop-image-hero-1.jpg"
  },
  {
    title: "We are available all across the globe",
    text: "With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
    src: "./images/desktop-image-hero-2.jpg"
  },
  {
    title: "Manufactured with the best materials",
    text: "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
    src: "./images/desktop-image-hero-3.jpg"
  }
];

let currentIndex = 0;

function createSlider(index) {
  const hero = document.querySelector('.hero');
  const cards = hero.querySelector('.cards');

  const existingImage = hero.querySelector('.hero-image');
  const existingContent = hero.querySelector('.hero-content');
  if (existingImage) existingImage.remove();
  if (existingContent) existingContent.remove();

  const section = sections[index];

  const heroImage = document.createElement('div');
  heroImage.classList.add('hero-image');
  heroImage.innerHTML = `<img src="${section.src}" alt="${section.title}">`;

  const heroContent = document.createElement('div');
  heroContent.classList.add('hero-content');
  heroContent.innerHTML = `
    <h1>${section.title}</h1>
    <p>${section.text}</p>
    <a href="#">Shop now <img src="./images/icon-arrow.svg" alt=""></a>
    <div class="buttons">
      <button class="prev"><img src="./images/icon-angle-left.svg" alt=""></button>
      <button class="next"><img src="./images/icon-angle-right.svg" alt=""></button>
    </div>
  `;

  hero.insertBefore(heroImage, cards);
  hero.insertBefore(heroContent, cards);

  heroContent.querySelector('.next').addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % sections.length;
    createSlider(currentIndex);
  });

  heroContent.querySelector('.prev').addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + sections.length) % sections.length;
    createSlider(currentIndex);
  });
};

createSlider(currentIndex);

const openNav = document.querySelector('.open-nav');
const nav = document.querySelector('nav');
const closeNav = document.querySelector('.close-nav');

openNav.addEventListener('click', () => {
  nav.classList.add('active');
});

closeNav.addEventListener('click', () => {
  nav.classList.remove('active');
});
