// Server for Bermano site to run on Heroku


const express = require('express');
const app = express();


app.use(express.static('./dist/bermano'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/bermano/'}),
);

app.listen(process.env.PORT || 8080);
