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