let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onload = () => {
  if (window.scrollY > 0) {
      document.querySelector('.header').classList.add('active');
  } else {
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

// sell your car form
document.getElementById("btn1").addEventListener("click", function (event) {
  event.preventDefault();
  document.getElementById("sell-car-form").style.display = "flex";
});

document.getElementById("close-form").addEventListener("click", function () {
  document.getElementById("sell-car-form").style.display = "none";
});


//form submission server side
document.getElementById("sell-car-form").addEventListener("submit", function(event) {
  event.preventDefault();
  
  const formData = new FormData(this);

  fetch('http://localhost:3000/submit-car-details', {
      method: 'POST',
      body: formData
  })
  .then(response => {
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
})
.then(data => {
  const feedbackMessage = document.getElementById("feedback-message");
  feedbackMessage.style.display = "block";
  feedbackMessage.textContent = data.message; // Show success message
  feedbackMessage.style.color = "darkred"; // Optional: Change color to green for success
  this.reset(); // Optionally reset the form after successful submission
    // Fade out after 5 seconds
    setTimeout(() => {
      feedbackMessage.style.opacity = 0;
      setTimeout(() => {
          feedbackMessage.style.display = "none";
          feedbackMessage.style.opacity = 1; // Reset opacity for future messages
      }, 2000); // Duration for the fade-out effect
  }, 30000); // Duration for showing the message
})
.catch(error => {
  console.error('Error:', error);
  const feedbackMessage = document.getElementById("feedback-message");
  feedbackMessage.style.display = "block";
  feedbackMessage.textContent = 'Submission failed. Please try again.';
  feedbackMessage.style.color = "darkblue"; // Change color to darkblue for errors
});
});

// Fetch approved car details from the backend and populate the frontend
fetch('http://localhost:3000/approved-cars')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        const carList = document.getElementById('approved-car-list');
        approvedList.innerHTML = ''; // Clear any existing content
        data.forEach(detail => {
            const detailDiv = document.createElement('div');
            detailDiv.classList.add('car-detail'); // Use existing or new class
            detailDiv.innerHTML = `
                <h3>${detail.carBrand} ${detail.carModel}</h3>
                <p>Model: ${detail.carModel}</p>
                <p>Engine Capacity: ${detail.engineCapacity}</p>
                <p>Transmission: ${detail.transmission}</p>
                <p>Drivetrain: ${detail.drivetrain}</p>
                <p>Year: ${detail.carYear}</p>
                <p>Body Type: ${detail.bodyType}</p>
                <div class="car-photos">
                    ${detail.carPhotos.map(photo => `<img src="${photo}" alt="${detail.carModel}" onerror="this.onerror=null; this.src='/path/to/default/image.jpg'" />`).join('')}
                </div>
            `;
            approvedList.appendChild(detailDiv);
        });
    })
    .catch(error => {
        console.error('Error:', error);
        const carList = document.getElementById('approved-car-list');
        carList.innerHTML = '<p>Failed to load approved car details. Please try again later.</p>';
    });

    // Function to handle car approval
function approveCar(carName) {
  console.log(`Approving car: ${carName}`); // Log approval action
  fetch('http://localhost:3000/approved-car', {
      method: 'POST',
      headers: {
          'Content-Type': 'application/json',
      },
      body: JSON.stringify({ carName })
  })
  .then(response => {
      if (!response.ok) {
          throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
  })
  .then(data => {
      console.log('Approval response:', data); // Log response data
      alert('Approved: ' + carName);
      // Optionally, you can remove the approved item from the list or refresh the page
      location.reload(); // Reload the page to update the list
  })
  .catch(error => {
      console.error('Error approving car:', error);
      alert('Failed to approve car.');
  });
}
