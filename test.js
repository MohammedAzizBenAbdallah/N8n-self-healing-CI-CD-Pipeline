const express = require('express');
const app = express();

// Basic test server setup on port 5000
app.get('/', (req, res) => {
res.status(200).send('OK');
});

const server = app.listen(5000, () => {
console.log('Smoke test running...');
})