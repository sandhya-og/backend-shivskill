// backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql2');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error('Error connecting to the database:', err);
        process.exit(1);
    }
    console.log('Connected to the MySQL database');
});

// Endpoint to handle form submissions
app.post('/join-us', (req, res) => {
    const formData = req.body;

    // Define the SQL query to insert form data into the database
    const query = 'INSERT INTO form_submissions (fullName, email, phoneNumber, companyName) VALUES (?, ?, ?, ?)';

    // Execute the SQL query
    db.query(query, [formData.fullName, formData.email, formData.phoneNumber, formData.companyName], (err, result) => {
        if (err) {
            console.error('Error saving data', err);
            res.status(500).send({ message: 'Error saving data' });
        } else {
            res.status(200).send({ message: 'Form submitted successfully' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
/*Store Information in formData.json
//backend/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.post('/join-us', (req, res) => {
    const formData = req.body;

    fs.appendFile('formData.json', JSON.stringify(formData) + '\n', err => {
        if (err) {
            console.error('Error saving data', err);
            res.status(500).send({ message: 'Error saving data' });
        } else {
            res.status(200).send({ message: 'Form submitted successfully' });
        }
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});*/