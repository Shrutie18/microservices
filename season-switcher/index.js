const express = require('express');
const app = express();
const port = 3005;

const seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];
let currentSeason = 0;

app.get('/', (req, res) => {
    res.send(`Current Season: ${seasons[currentSeason]}`);
    currentSeason = (currentSeason + 1) % seasons.length;
});

app.listen(port, () => {
    console.log(`Season Switcher App listening at http://localhost:${port}`);
});
