const express = require('express');
const app = express();
const port = 3003;

app.get('/', (req, res) => {
    res.send('Employee App');
});

app.listen(port, () => {
    console.log(`Employee App listening at http://localhost:${port}`);
});
