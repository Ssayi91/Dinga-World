

// Fetch car details from the backend and populate the admin dashboard
fetch('http://localhost:3000/admin-dashboard')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok ' + response.statusText);
        }
        return response.json();
    })
    .then(data => {
        const detailsList = document.getElementById('car-details-list');
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
                    ${detail.carPhotos.map(photo => `<img src="${photo}" alt="${detail.carModel}" />`).join('')}
                </div>
                <button onclick="approveCar('${detail.carBrand} ${detail.carModel}')">Approve</button>
            `;
            detailsList.appendChild(detailDiv);
        });
    })
    .catch(error => {
        console.error('Error:', error);
        const detailsList = document.getElementById('car-details-list');
        detailsList.innerHTML = '<p>Failed to load car details. Please try again later.</p>';
    });

// Function to handle car approval
function approveCar(carName) {
    fetch('http://localhost:3000/approve-car', {
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
        alert('Approved: ' + carName);
        // Optionally, you can remove the approved item from the list or refresh the page
        location.reload(); // Reload the page to update the list
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Failed to approve car.');
    });
}