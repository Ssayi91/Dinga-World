let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = () =>{
    if(window.screenY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
window.onload = () =>{
    if(window.screenY > 0){
        document.querySelector('.header').classList.add('active');
    }else{
        document.querySelector('.header').classList.remove('active');
    }
}
document.querySelector('#login-btn').onclick = () =>{
    document.querySelector('.login-form-container').classList.toggle('active')
}
document.querySelector('#close-login-form').onclick = () =>{
    document.querySelector('.login-form-container').classList.remove('active')
}


var swiper = new Swiper(".vehicles-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });
  var swiper = new Swiper(".featured-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1040: {
        slidesPerView: 3,
      },
    },
  });
  var swiper = new Swiper(".review-slider", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop:true,
    grabCursor:true,
    centeredSlides:true,
    autoplay: {
        delay: 8500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1040: {
        slidesPerView: 3,
      },
    },
  });
  //header
let header = document.querySelector('header');
window.addEventListener('scroll', () =>{
    header.classList.toggle('shadow', window.scrollY > 0)
})
document.addEventListener("DOMContentLoaded", () => {
  const minInput = document.querySelector(".min-input");
  const maxInput = document.querySelector(".max-output");
  const minRange = document.querySelector(".min-range");
  const maxRange = document.querySelector(".max-range");
  const progress = document.querySelector(".progress");

  const setRangeValues = () => {
      const minValue = parseInt(minInput.value);
      const maxValue = parseInt(maxInput.value);

      if (minValue > maxValue) {
          minInput.value = maxValue;
      }

      minRange.value = minValue;
      maxRange.value = maxValue;

      const minPercent = (minValue / minRange.max) * 100;
      const maxPercent = (maxValue / maxRange.max) * 100;

      progress.style.left = `${minPercent}%`;
      progress.style.right = `${100 - maxPercent}%`;
  };

  minInput.addEventListener("input", setRangeValues);
  maxInput.addEventListener("input", setRangeValues);

  minRange.addEventListener("input", () => {
      minInput.value = minRange.value;
      setRangeValues();
  });

  maxRange.addEventListener("input", () => {
      maxInput.value = maxRange.value;
      setRangeValues();
  });

  setRangeValues();
});
const carBrands = [
  'Toyota',
  'Honda',
  'Ford',
  'BMW',
  'Mercedes',
  'Volkswagen',
  'Mazda',
  'Subaru',
  'Nissan',
  'Audi',
  'Bentley',
  'Chevrolet',
  'Chrysler',
  'Citreon',
  'Daihatsu',
  'Honda',
  'Hyundai',
  'Isuzu',
  'Jaguar',
  'Jeep',
  'Kia',
  'Landrover',
  'Lexus',
  'Mini',
  'Mitsubishi',
  'Peugeot',
  'Porsche',
  'Renault',
  'Suzuki',
  'Volkswagen',
  'Volvo',  
];

const carModels = {
  'Toyota': [ 'Allex', 'Allion', 'Alphard', 'Altezza', 'Aqua',
              'Aristo', 'Auris', 'Avanza', 'Avensis', 'Aygo', 'Bb', 'Belta', 'Blade',
              'Brevis', 'C-HR', 'Carib', 'Cami', 'Coaster', 'Corona', 'Corsa', 'Cresta', 'Crown', 'Corolla', 
              'Camry', 'Caldina', 'Camry', 'Carina', 'Celica', 'Century', 'Chaser',
              'Duet', 'Dyna', 'Esquire', 'Estima', 'FJ-cruiser', 'Fielder', 'Fortuner', 'Funcargo', 'Gaia', 'Hiace', 'GT 86', 'Harrier',
              'Hilux', 'Hilux Surf', 'Ipsum', 'IQ', 'Isis', 'Ist', 'Kluger', 'Landcruiser', 'LiteAce', 'Magesty', 'Mark II',
              'Mark II Blitz', 'Mark X', 'Mark X Zio', 'MR-2', 'Nadia', 'Noah', 'Nze', 'Opa', 'Passo', 'Picnic', 'Prado', 'Pixie', 'Platz', 'Porte', 'Prius',
              'Premio', 'Probox', 'Ractis', 'Raum', 'Runx', 'Rav 4', 'Regius Ace', 'Rumion', 'Rush', 'Sienta', 'Spacia', 
              'Spade', 'Sprinter', 'Starlet', 'Succeed', 'Supra', 'TownAce', 'Tundra', 'Urban Cruizer', 'Vanguard', 'Vellfire', 'Verossa',
              'Vios', 'Vista', 'Vitz', 'Voxy', 'Voltz', 'Wish', 'Yaris'],
  'Honda':  ['Civic', 'Accord', 'Fit', 'CR-V', 'Odyssey', 'Insight', 'CR-Z', 'Civic Type-R', 'Stream', 'Crossroad', 'Freed',
            'Airwave', 'Step Wagon', 'HR-V', 'Ballade', 'Fit Shuttle', 'Jade', 'Vezel', 'Grace'],
  'Ford':   ['Fiesta', 'Mustang', 'Explorer', 'Ranger', 'Fusion', 'Escape', 'Kuga', 'Focus', 'Eco Sport'],
  'BMW':    ['X1','X2', 'X3', 'X5', 'X6', '1 Series', '3 Series', '5 Series', '7 Series', 'M Series'],
  'Mercedes': [ 'A-Class', 'B-Class', 'Cla-Class','C-Class', 'E-Class', 'S-Class', 'G-class', 'Gle-Class', 'Gla-Class', 'Gls-class', 'M-class'],
  'Subaru':[ 'Forester', 'Legacy', 'Outback', 'Impreza', 'Exiga', 'XV', 'Tribeca', 'Br-z', 'Trezia', 'Crosstrek', 'Levorg', 'Pleo', 'WRX'],
  'Nissan':[ 'Advan', 'Almera', 'Bluebird', 'Caravan', 'Cube', 'Dayz', 'Dualis', 'Elgrand', 'Fairlady', 'Fuga', 'Hardbody', 'Lafesta','Latio',
              'leaf', 'Liberty', 'March', 'Murano', 'Navara', 'NP 200', 'NP 300', 'NV-Series', 'Pathfinder', 'Patrol', 'Pino', 'Primera','Rogue',
              'Skyline', 'Sylphy', 'Sunny', 'Teanna', 'Tiida', 'Vanette', 'Wingroad', 'Juke', 'X-trail', 'Note', 'Serena'],
  'Mazda':['Atenza', 'Axela', 'CX-3', 'CX-5', 'CX-7', 'CX-8', 'CX-9', 'Biante', 'Bongo', 'BT-50', 'Carol', 'Demio', 'Familia','Flair',
            'MPV', 'MX-5', 'Premacy', 'RX-8', 'Scrum','Tribute', 'Verisa'],
  'Alfa Rome': ['Gulia','MiTo'],
  'Audi': ['Audi A1', 'Audi A3, Audi A4', 'Audi A5', 'Audi A6', 'Audi A7', 'Audi A8', 'Audi Q2', 'Audi Q3', 'Audi Q5', 'Audi Q7', 'Audi Q8',
          'Audi S3','Audi S4','Audi S5','Audi S6','Audi SQ5','Audi TT',],
  'Bentley': ['Bentayga', 'Continental', 'S-type'],
  'Chevrolet':['Captiva', 'Cruze','Trailblazer'],
  'Chrysler':['300C', 'PT-Cruiser'],
  'Citreon':['C3', 'C4', 'DS3'],
  'Daihatsu':['B-Go', 'Boon', 'Cast', 'Copen', 'Cuore', 'Esse', 'Hijet', 'Mira', 'Move', 'Rocky', 'Tanto', 'Terios'],
  'Hyundia':['Accent', 'Elantra', 'I-30', 'I-40', 'Ix-35', 'Santa-Fe', 'Sonata', 'Tuscon'],
  'Isuzu':['D-Max', 'MU-X', 'Tropper', 'Tougher'],
  'Jaguar':[ 'F-Pace', 'F-Type', 'S-Type', 'XE', 'XF', 'XJ', 'XK'],
  'Jeep':['Cherokee', 'Grand Cherokee', 'Compass', 'Liberty', 'Patriot', 'Renegade', 'Wrangler'],
  'Kia':['Optima', 'Sorento', 'Sportage'],
  'Landrover':['Defender', 'Discovery', 'Freelander', 'RangerRover Sport','RangerRover Velar','RangerRover Vogue','RangerRover Evoque','RangerRover SVR'],
  'Lexus':['LX-Series', 'NX-Series', 'RX-Series', 'CT-Series', 'GS', 'IS','LS', 'UX'],
  'Mini':['Clubman', 'Cooper', 'Countryman'],
  'Mitsubishi':['Delica', 'Mirage', 'Outlander', 'Pajero', 'RVR', 'Airtrek', 'ASX','Canter', 'Chariot', 'Colt', 'Colt Rs', 'Dion', 'Eclipse Cross',
                'EK Wagon', 'Fuso', 'Galant', 'L200', 'Lancer', 'Cedia', 'Lancer Evolution', 'Legnum', 'Rosa', 'Shogun', 'Space wagon','Warrior',
                'Pajero IO'],
  'Peugeot':['Jet', 'Partner', 'RC', '5008', '2008', '3008', '208', '308', '508', '202', '206', '207','306', '307', '404', '405','406','407',
              '504', '505', '308 GTI', '208 GTI'],
  'Porsche':['911', 'Carrera', 'Cayenne','Macan', 'Panamera', 'Boxter'],
  'Renault':['Captur', 'Clio', 'Duster', 'Fluence', 'Qwid','Lutecia', 'Megan', 'Twingo'],
  'Suzuki':['Alto', 'Escudo', 'Solio', 'Swift', 'Wagon-R', 'An', 'Baleno', 'Bandit','Carry Truck','EV', 'Every Wagon', 'Grand Vitara', 'Vitara', 'Hustler',
            'Ignis','Jimny', 'Landy', 'LS','Maruti', 'SE', 'Sierra', 'SP', 'Spacia', 'Splash', 'SR', 'Super carry', 'SX4', 'Gypsy'],
  'Volkswagen':['Golf', 'Golf GTI', 'Passat', 'Arteon', 'Polo', 'Tiguan', 'Touareg', 'Amarok', 'Beetle', 'Bora', 'Caddy', 'Passat CC', 'Golf R', 
                'Golf Sport Wagen','Variant', 'Jetta', 'Combi','Sharan', 'Touran', 'UP'],
  'Volvo':['240', '244', '940', 'S60', 'S80', 'S90', 'V40', 'V60', 'V70', 'XC40', 'XC60', 'XC90'],

};

// Populate car brands dropdown
const carBrandSelect = document.getElementById('carBrand');
carBrands.forEach(brand => {
  const option = document.createElement('option');
  option.value = brand;
  option.textContent = brand;
  carBrandSelect.appendChild(option);
});

// Populate car models dropdown based on selected brand
const carModelSelect = document.getElementById('carModel');
carBrandSelect.addEventListener('change', (event) => {
  const selectedBrand = event.target.value;
  const models = carModels[selectedBrand];

  // Clear existing options
  carModelSelect.innerHTML = '<option value="" disabled selected>Model</option>';

  // Populate new options
  models.forEach(model => {
      const option = document.createElement('option');
      option.value = model;
      option.textContent = model;
      carModelSelect.appendChild(option);
  });
});


