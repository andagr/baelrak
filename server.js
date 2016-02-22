var express = require('express');
var app = express();

app.use(express.static('public'));

app.get('/game/start', function (req, res) {
    res.send([]);
});

console.log("PORT: ", process.env.PORT)

app.listen(process.env.PORT || 8081, function () {
    console.log('App listening...');
});
