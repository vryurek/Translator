
const express = require('express');
const app = express();

app.use(express.static(__dirname + '/app'));

app.get('/', function(request, response){
    response.sendfile('index.html');
});

console.log("Listening on 3000");
app.listen(3000);
