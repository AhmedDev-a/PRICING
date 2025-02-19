const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fs = require('fs');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// قراءة البيانات من ملفات JSON
const privateData = JSON.parse(fs.readFileSync('private.json'));
const umrahData = JSON.parse(fs.readFileSync('umrah.json'));
const transitData = JSON.parse(fs.readFileSync('transit.json'));

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