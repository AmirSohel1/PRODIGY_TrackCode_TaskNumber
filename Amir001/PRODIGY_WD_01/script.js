const navigation = document.querySelector('.navigation');

window.addEventListener('scroll', () => {
  if (window.scrollY > 0) {
    navigation.classList.add('scrolled');
  } else {
    navigation.classList.remove('scrolled');
  }
});
