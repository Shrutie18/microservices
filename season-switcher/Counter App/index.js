const express = require('express');
const app = express();
const port = 3004;

let counter = 0;

app.get('/', (req, res) => {
    counter++;
    res.send(`Counter: ${counter}`);
});

app.listen(port, () => {
    console.log(`Counter App listening at http://localhost:${port}`);
});
