function showForm(){
	const showForm = document.querySelector('.booking-form');
	showForm.style.display = 'flex';
}

function hideForm(){
	const showForm = document.querySelector('.booking-form');
	showForm.style.display = 'none';
}

function showBar(){
	const showForm = document.querySelector('.side-menu');
	showForm.style.display = 'flex';
}

function hideBar(){
	const showForm = document.querySelector('.side-menu');
	showForm.style.display = 'none';
}

const nav = document.getElementById('nav');
let lastScrollY = window.scrollY;

window.addEventListener('scroll', () => {
  const currentScrollY = window.scrollY;
  const scrollDirection = currentScrollY > lastScrollY ? 'down' : 'up';

  if (scrollDirection === 'down') {
    nav.classList.add('hidden');
  } else if (scrollDirection === 'up') {
    nav.classList.remove('hidden');
  }

  lastScrollY = currentScrollY;
});

// Hide the sidebar overlay when scrolling
const sidebar = document.getElementById('side-menu')

window.addEventListener('scroll', () => {
  if (window.scrollY > 0 && sidebar.style.display === 'flex') {
    sidebar.style.display = 'none';
  }
});

const seeMoreBtn = document.getElementById('see-more-btn');
const hiddenImages = document.querySelectorAll('.hidden');

seeMoreBtn.addEventListener('click', () => {
  hiddenImages.forEach((image) => {
    image.classList.remove('hidden');
  });
  seeMoreBtn.style.display = 'none';
}
);


const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    console.log(entry)
    if (entry.isIntersecting) {
      entry.target.classList.add('show')
    } else {
      entry.target.classList.remove(show)
    }
  })
})

const hiddenElements = document.querySelectorAll('.animate')
hiddenElements.forEach((el) => observer.observe(el))


function sendToWhatsapp() {
  const number = "+2348142429807";
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const venue = document.getElementById('venue').value.trim();
  const event = document.getElementById('specialize').value.trim();
  const date = document.getElementById('date').value.trim();
  const message = document.getElementById('message').value.trim();

  const url = `https://wa.me/${number}?text=Name: ${name}%0aEmail: ${email}%0aVenue: ${venue}%0aEvent: ${event}%0aDate: ${date}%0aAdditional Information: ${message}%0a`;

  window.open(url, '_blank').focus();
}
