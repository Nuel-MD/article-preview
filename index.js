document.addEventListener('DOMContentLoaded', function() {
  const clickElement = document.getElementById('click');
  const firstElement = document.getElementById('first');
  const flexElement = document.querySelector('.flex');
  const secondElement = document.getElementById('second');
  const activeElement = document.getElementById('active');

  function handleResize() {
      if (window.innerWidth >= 600) {
          firstElement.classList.remove('pop');
      }
  }

  function handleClick() {
      if (window.innerWidth < 600) {
          firstElement.classList.toggle('pop');
          flexElement.classList.toggle('invisible');
      } else {
          secondElement.classList.toggle('main-pop');
      }
  }

  function handleActiveClick() {
      if (window.innerWidth < 600) {
          firstElement.classList.remove('pop');
          flexElement.classList.remove('invisible');
      } else {
          secondElement.classList.remove('main-pop');
      }
  }

  clickElement.addEventListener('click', handleClick);
  activeElement.addEventListener('click', handleActiveClick);
  window.addEventListener('resize', handleResize);

  // Initial check to remove 'pop' class if in desktop view
  handleResize();
});
