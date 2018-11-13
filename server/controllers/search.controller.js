const client = require('../services/elasticsearch');

exports.getAllMovies = (req, res) => {
    console.log(req);
    client.search({  
        index: 'hypertube',
        type: 'movies',
        body: {
            from : 0, 
            size : 10000
        },
        "collapse" : {
            "field" : "imdb"
        }
    }, function (error, response, status) {
        if (error) {
            res.sendStatus(500);
        } else {
            res.json({movies: response.hits.hits})
        }
    })
}

exports.getMovies = (req, res) => {
    client.search({  
        index: 'hypertube',
        type: 'movies',
        body: {
            from : 0, 
            size : 10000,
            query: {
                match: { "title": req.body.input }
            }
        },
        "collapse" : {
            "field" : "imdb"
        }
    }, function (error, response, status) {
        if (error) {
            res.sendStatus(500);
        } else {
            res.json({movies: response.hits.hits})
        }
    })
}