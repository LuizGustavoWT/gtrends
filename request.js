const googleTrends = require('google-trends-api');
const HttpsProxyAgent = require('https-proxy-agent');


module.exports = {
    macroTendendcia(req, res) {

        googleTrends.interestByRegion({
            keyword: JSON.parse(req.body.palavrasChave),
            startTime: new Date(req.body.inicio),
            endTime: new Date(req.body.fim),
            geo: 'BR',
            hl: 'pt-BR',
            resolution: 'REGION'
        })
            .then((result) => {
                res.json(JSON.parse(result)).send();
            })
            .catch((err) => {
                console.log(err);
                res.status(404).send()
            })
    },

    microTendendcia(req, res) {
        googleTrends.interestByRegion({
            keyword: JSON.parse(req.body.palavrasChave),
            startTime: new Date(req.body.inicio),
            endTime: new Date(req.body.fim),
            geo: 'BR',
            hl: 'pt-BR',
            resolution: 'REGION'
        })
            .then((result) => {
                res.json(JSON.parse(result)).send();
            })
            .catch((err) => {
                console.log(err);
                res.status(404).send()
            })
    },
}