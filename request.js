const googleTrends = require('google-trends-api');
const HttpsProxyAgent = require('https-proxy-agent');


module.exports = {
    teste(req, res) {

        let query = {
            keyword: req.params.chave,
            startTime: new Date('2019-10-14'),
            endTime: new Date(),
            hl: 'pt-BR',
            geo: 'BR'
        };


        googleTrends.interestByRegion({
            keyword: [req.params.chave, 'Intolerancia a lactose'],
            startTime: new Date('2019-10-10'),
            endTime: new Date('2019-10-15'),
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
    }
}