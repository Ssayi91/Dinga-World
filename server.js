const express = require('express');
const multer = require('multer');
const path = require('path');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware for parsing form data
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (e.g., HTML, CSS, JS) from the "publics" directory
app.use(express.static('publics'));

// Serve uploaded images
app.use('/uploads', express.static('uploads'));

// Configure multer for file uploads
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/');
    },
    filename: function (req, file, cb) {
        cb(null, Date.now() + path.extname(file.originalname));
    }
});
const upload = multer({ storage: storage });

// Temporary store for submitted details
const submittedDetails = [];

// Route to submit car details
app.post('/submit-car-details', upload.array('carPhotos', 12), (req, res) => {
    const details = req.body;
    const files = req.files;

    // Combine form data with file paths
    const fullDetails = {
        ...details,
        carPhotos: files.map(file => '/uploads/' + file.filename), // Include file paths
        approved: false // Initialize as not approved    //new subject entered due to approve message on browser click
    };

    submittedDetails.push(fullDetails); // Save combined details for admin review
    res.json({ 
        message: 'Car details submitted successfully', 
        formDetails: fullDetails 
    });
});

// Route to fetch car details for the admin dashboard
app.get('/admin-dashboard', (req, res) => {
    res.json(submittedDetails); // Send all submitted details to the admin dashboard
});

// Route to fetch approved car details for the frontend
app.get('/approved-cars', (req, res) => {
    const approvedCars = submittedDetails.filter(detail => detail.approved);
    res.json(approvedCars); // Send only approved car details
}); // new entry.

// Route to approve a car detail
app.post('/approve-car', (req, res) => {
    const { carName } = req.body;
    // Find the car by carName
    const car = submittedDetails.find(detail => `${detail.carBrand} ${detail.carModel}` === carName);

    if (car) {
        // Mark the car as approved
        car.approved = true;
        res.json({ message: `Car ${carName} approved` });
    } else {
        res.status(404).json({ message: 'Car not found' });
    }
}); // changed to handle function

// Route to serve the index.html file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'publics', 'index.html'));
});

// Route to serve the admin.html file
app.get('/admin', (req, res) => {
    res.sendFile(path.join(__dirname, 'publics', 'admin.html'));
});

// Error handling for unsupported routes
app.use((req, res, next) => {
    res.status(404).json({ message: 'Endpoint not found' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
