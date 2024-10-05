document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    const centeredTextH2 = document.querySelector('.centered-text h2'); 
    const centeredTextH3 = document.createElement('h3'); 
    centeredTextH3.style.marginTop = '0.5rem'; 
    centeredTextH2.insertAdjacentElement('afterend', centeredTextH3); 
  

    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      hamburger.classList.toggle('active');
      hamburger.innerHTML = hamburger.classList.contains('active') ? 'X' : '&#9776;';
    });
  
    window.addEventListener('resize', () => {
      if (window.innerWidth > 1000) { 
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.innerHTML = '&#9776;';
      }
    });
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > 100) {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
        hamburger.innerHTML = '&#9776;';
      }
    });
  
    const temples = [
      {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedicated: "2005, August, 7",
        area: 11500,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
      },
      {
        templeName: "Manti Utah",
        location: "Manti, Utah, United States",
        dedicated: "1888, May, 21",
        area: 74792,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
      },
      {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedicated: "2015, June, 7",
        area: 96630,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
      },
      {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedicated: "2020, May, 2",
        area: 6861,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
      },
      {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedicated: "1974, November, 19",
        area: 156558,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
      },
      {
        templeName: "Lima Perú",
        location: "Lima, Perú",
        dedicated: "1986, January, 10",
        area: 9600,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
      },
      {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
      },
      {
        templeName: "St. George Utah Temple",
        location: "St. George, Utah",
        dedicated: "1877, April, 6",
        area: 143969,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/st-george-utah/400x250/st-george-temple-lds-894724-wallpaper.jpg"
      },
      {
        templeName: "Bountiful Utah Temple",
        location: "Bountiful, Utah",
        dedicated: "1995, January, 8",
        area: 104000,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bountiful-utah/400x250/bountiful-temple-766347-wallpaper.jpg"
      },
      {
        templeName: "Taipei Taiwan Temple",
        location: "Taipei, Taiwan ",
        dedicated: "1984, November, 17",
        area: 9945,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/taipei-taiwan/400x250/taipei-taiwan-temple-lds-459051-wallpaper.jpg"
      },
      {
        templeName: "Frankfurt Germany Temple",
        location: "Frankfurt, Germany",
        dedicated: "1987, August, 28",
        area: 32895,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/frankfurt-germany/400x250/frankfurt-temple-3-2278181.jpg"
      },
      {
        templeName: "Fukuoka Japan Temple",
        location: "Fukuoka, Japan",
        dedicated: "2000, June, 11",
        area: 10700,
        imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fukuoka-japan/400x250/fukuoka-japan-temple-lds-306863-wallpaper.jpg"
      },
    ];
  
    
  function renderTemples(filteredTemples) {
    const templeGrid = document.getElementById('temples-grid');
    templeGrid.innerHTML = '';
    filteredTemples.forEach(temple => {
      const templeCard = document.createElement('figure');
      templeCard.innerHTML = `
        <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
        <figcaption>${temple.templeName}</figcaption>
        <p>Location: ${temple.location}</p>
        <p>Dedicated: ${temple.dedicated}</p>
        <p>Area: ${temple.area} sq. ft.</p>
      `;
      templeGrid.appendChild(templeCard);
    });
  }

  function filterTemples(filter) {
    switch (filter) {
      case 'old':
        return temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
      case 'new':
        return temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
      case 'large':
        return temples.filter(temple => temple.area > 90000);
      case 'small':
        return temples.filter(temple => temple.area < 10000);
      default:
        return temples;
    }
  }

  function updateCenteredText(filter) {
    switch (filter) {
      case 'old':
        centeredTextH2.textContent = 'Old Temples';
        centeredTextH3.textContent = 'Temples dedicated before 1900.';
        break;
      case 'new':
        centeredTextH2.textContent = 'New Temples';
        centeredTextH3.textContent = 'Temples dedicated after 2000.';
        break;
      case 'large':
        centeredTextH2.textContent = 'Large Temples';
        centeredTextH3.textContent = 'Temple area is greater than 90,000 square feet.';
        break;
      case 'small':
        centeredTextH2.textContent = 'Small Temples';
        centeredTextH3.textContent = 'Temple area is less than 10,000 square feet.';
        break;
      default:
        centeredTextH2.textContent = 'All Temples';
        centeredTextH3.textContent = 'Displaying all temples without any filter.';
        break;
    }
  }

  document.querySelectorAll('#nav-menu a').forEach(link => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      const filter = event.target.dataset.filter;
      document.querySelectorAll('#nav-menu a').forEach(link => link.classList.remove('active'));
      event.target.classList.add('active');
      renderTemples(filterTemples(filter));
      updateCenteredText(filter);
    });
  });

  renderTemples(temples);
  updateCenteredText('all');

  const currentYearElement = document.getElementById("currentyear");
  const currentYear = new Date().getFullYear();
  currentYearElement.textContent = currentYear;

  const lastModifiedElement = document.getElementById("lastModified");
  const lastModifiedDate = document.lastModified;
  lastModifiedElement.textContent = lastModifiedDate;
});