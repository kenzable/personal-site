const express = require('express');
const app = express();

app.use(express.static(__dirname + '/bower_components'));

app.get('/*', function(req, res, next){
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/*', function (req, res) {
    res.sendFile(app.get('indexHTMLPath'));
});

app.listen(8080, () => console.log('Server is listening on port 8080'));
