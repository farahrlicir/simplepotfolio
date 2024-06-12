document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('nav ul li a');
    links.forEach(link => {
        link.addEventListener('click', smoothScroll);
    });

    function smoothScroll(e) {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href').substring(1);
        const targetPosition = document.getElementById(targetId).offsetTop;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }

    // Carousel
    const prev = document.querySelector('.carousel-control.prev');
    const next = document.querySelector('.carousel-control.next');
    const items = document.querySelectorAll('.carousel-item');
    let index = 0;

    function showItem(idx) {
        items.forEach(item => item.classList.remove('active'));
        items[idx].classList.add('active');
    }

    prev.addEventListener('click', () => {
        index = (index > 0) ? index - 1 : items.length - 1;
        showItem(index);
    });

    next.addEventListener('click', () => {
        index = (index < items.length - 1) ? index + 1 : 0;
        showItem(index);
    });

    showItem(index); // Initialize first item as active
});


//test



document.addEventListener("DOMContentLoaded", function() {
    const skills = document.querySelectorAll('.skill');
  
    skills.forEach(skill => {
      const width = getRandomInt(80, 120); // Random width between 80px and 120px
      const height = getRandomInt(80, 120); // Random height between 80px and 120px
  
      skill.style.width = `${width}px`;
      skill.style.height = `${height}px`;
    });
  });
  
  function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  
  
