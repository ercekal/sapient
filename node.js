var express =
require('express')

var cors =
require('cors')

var app =
express()



var corsOptions = {

"origin": ["http://localhost:7000"],

"credentials":
true

};



app.use(cors(corsOptions));



app.post('/getTokens',
function (req,
res) {

    res.json({

        "token1":
"pest",

        "token2":
"test",

        "token3":
"jest",

        "token4":
"test"

    });

});

app.listen(3020,
function () {

console.log('CORS-enabled web server listening on port 3020')

});