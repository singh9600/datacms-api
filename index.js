const express = require('express')
var request = require('request');

const app = express()
const PORT = process.env.PORT || 3000

var headers = {
    'Authorization': 'c7d73d76afb731c293806939096821',
    'Content-Type': 'application/json',
    'Accept': 'application/json'
};

var dataString = '{ "query": "{ report { id, updatedate, updatedAt, titletext, maintext, redirectionurl { maintext } } }" }';

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
        let reportData = {
            "uid": "",
            "updateDate": "",
            "titleText": "",
            "mainText": "",
            "redirectionUrl": ""
        }
        
        reportData.uid = JSON.parse(body).data.report.id
        reportData.updateDate = JSON.parse(body).data.report.updatedAt
        reportData.titleText = JSON.parse(body).data.report.titletext
        reportData.mainText = JSON.parse(body).data.report.maintext
        reportData.redirectionUrl = JSON.parse(body).data.report.redirectionurl

        if (!error && response.statusCode == 200) {
            res.json(reportData)
        }
    })
})

app.post('/', function (req, res) {
    request(options, function(error, response, body) {
        let reportData = {
            "uid": "",
            "updateDate": "",
            "titleText": "",
            "mainText": "",
            "redirectionUrl": ""
        }
        
        reportData.uid = JSON.parse(body).data.report.id
        reportData.updateDate = JSON.parse(body).data.report.updatedAt
        reportData.titleText = JSON.parse(body).data.report.titletext
        reportData.mainText = JSON.parse(body).data.report.maintext
        reportData.redirectionUrl = JSON.parse(body).data.report.redirectionurl

        if (!error && response.statusCode == 200) {
            res.json(reportData)
        }
    })
})

app.get('/reportdata/:date', function (req, res) {
    main().catch((error) => console.error(error))
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})