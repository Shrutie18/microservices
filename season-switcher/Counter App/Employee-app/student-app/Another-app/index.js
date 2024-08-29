const express = require('express');
const app = express();
const port = 3006;

app.get('/', (req, res) => {
    res.send('Another App');
});

app.listen(port, () => {
    console.log(`Another App listening at http://localhost:${port}`);
});
