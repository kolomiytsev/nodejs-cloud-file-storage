var express     = require('express'),
    app         = express(),
    bodyParser  = require('body-parser'),
    mongo       = require('./app/models/db');

// config files
var port = process.env.PORT || 5999;
if (!process.env.dbUrl) {
    throw new Error('Please, specify variable dbUrl in your local environment');
}
var dbUrl = process.env.dbUrl;


app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/json' }));
app.use(bodyParser.urlencoded({ extended: true }));

//app.use(express.static(__dirname + '/public'));

app.use(function(req, res, next) {
    console.log('%s - %s %s', new Date().toISOString(), req.method, req.url);
    next();
});
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: err
    });
});

// start app
mongo.connect(dbUrl, function() {
    console.log('Connected to mongo');
    require('./app/routes')(app);
    app.listen(port, function() {

    });
});
