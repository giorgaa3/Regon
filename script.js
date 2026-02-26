document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('.services__list');
  const indicator = document.querySelector('.services__indicator');
  const items = document.querySelectorAll('.services__item');

  const titleEl = document.getElementById('servicesTitle');
  const imgEl = document.getElementById('servicesImage');
  const textEl = document.getElementById('servicesText');

  if (!list || !indicator || items.length === 0) return;

  
  const data = {
    concept: {
      title: 'Concept Stage Consultation',
      img: 'assets/images/service-1.png',
      text: 'We are nationwide distributors of all major insulation brands to the construction industry...'
    },
    system: {
      title: 'System Selection',
      img: 'assets/images/service-1.png',
      text: 'System Selection description goes here...'
    },
    value: {
      title: 'Value Engineering',
      img: 'assets/images/service-1.png',
      text: 'Value Engineering description goes here...'
    },
    cost: {
      title: 'Cost Optimization',
      img: 'assets/images/service-1.png',
      text: 'Cost Optimization description goes here...'
    },
    shop: {
      title: 'Shop Drawings',
      img: 'assets/images/service-1.png',
      text: 'Shop Drawings description goes here...'
    },
    supply: {
      title: 'Supply',
      img: 'assets/images/service-1.png',
      text: 'Supply description goes here...'
    },
    support: {
      title: 'Site Support',
      img: 'assets/images/service-1.png',
      text: 'Site Support description goes here...'
    },
    author: {
      title: 'Author Supervision',
      img: 'assets/images/service-1.png',
      text: 'Author Supervision description goes here...'
    }
  };

  const setIndicatorTo = (el) => {
    const listRect = list.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    const y = (elRect.top - listRect.top) + (elRect.height / 2) - (indicator.offsetHeight / 2);
    indicator.style.transform = `translateY(${y}px)`;
  };

  const setActive = (item) => {
    const current = document.querySelector('.services__item--active');
    if (current) current.classList.remove('services__item--active');
    item.classList.add('services__item--active');
  };

  const setContent = (key) => {
    const d = data[key];
    if (!d) return;
    titleEl.textContent = d.title;
    imgEl.src = d.img;
    imgEl.alt = d.title;
    textEl.textContent = d.text;
  };

 
  const active = document.querySelector('.services__item--active') || items[0];
  setIndicatorTo(active);
  setContent(active.dataset.service);

 
  items.forEach(item => {
    item.addEventListener('mouseenter', () => setIndicatorTo(item));
  });


  list.addEventListener('mouseleave', () => {
    const cur = document.querySelector('.services__item--active') || items[0];
    setIndicatorTo(cur);
  });

  items.forEach(item => {
    item.addEventListener('click', () => {
      setActive(item);
      setIndicatorTo(item);
      setContent(item.dataset.service);
    });
  });

  window.addEventListener('resize', () => {
    const cur = document.querySelector('.services__item--active') || items[0];
    setIndicatorTo(cur);
  });
});