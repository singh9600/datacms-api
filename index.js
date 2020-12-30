const express = require('express')
var request = require('request');

const app = express()
const PORT = process.env.PORT || 3000

var headers = {
    'Authorization': 'c7d73d76afb731c293806939096821',
    'Content-Type': 'application/json',
    'Accept': 'application/json'
};

var dataString = '{ "query": "{ report { reportDetail } }" }';

var options = {
    url: 'https://graphql.datocms.com/',
    method: 'POST',
    headers: headers,
    body: dataString
};

// function callback(error, response, body) {
//     if (!error && response.statusCode == 200) {
//         console.log(body);
//     }
// }

app.get('/', function (req, res) {
    request(options, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            res.json(JSON.parse(body))
        }
    })
})

app.get('/reportdata/:date', function (req, res) {
    main().catch((error) => console.error(error))
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})