const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// قراءة البيانات من ملفات JSON
const privateData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'private.json')));
const umrahData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'umrah.json')));
const transitData = JSON.parse(fs.readFileSync(path.join(__dirname, 'data', 'transit.json')));

// إعداد المسارات للنماذج
app.get('/data/private', (req, res) => {
    res.json(privateData);
});

app.get('/data/umrah', (req, res) => {
    res.json(umrahData);
});

app.get('/data/transit', (req, res) => {
    res.json(transitData);
});

app.post('/submit', (req, res) => {
    const formData = req.body;
    console.log('Form data received:', formData);
    res.send('Form data received');
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});