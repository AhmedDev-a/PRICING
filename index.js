const xlsx = require('xlsx');
const fs = require('fs');

// قراءة الملف
const workbook = xlsx.readFile('Pricing.xlsx');

// تحويل كل ورقة إلى JSON
const privateSheet = xlsx.utils.sheet_to_json(workbook.Sheets["Private"]);
const umrahSheet = xlsx.utils.sheet_to_json(workbook.Sheets["Umrah"]);
const transitSheet = xlsx.utils.sheet_to_json(workbook.Sheets["Transit"]);

// كتابة البيانات إلى ملفات JSON لسهولة القراءة
fs.writeFileSync('private.json', JSON.stringify(privateSheet, null, 2));
fs.writeFileSync('umrah.json', JSON.stringify(umrahSheet, null, 2));
fs.writeFileSync('transit.json', JSON.stringify(transitSheet, null, 2));

console.log('Data has been written to private.json, umrah.json, and transit.json');