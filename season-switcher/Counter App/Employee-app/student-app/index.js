const express = require('express');
const app = express();
const port = 3002;

app.get('/', (req, res) => {
    res.send('Student App');
});

app.listen(port, () => {
    console.log(`Student App listening at http://localhost:${port}`);
});
