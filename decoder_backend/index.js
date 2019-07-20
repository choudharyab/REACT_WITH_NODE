var app = require('./init/express');
var  https = require('https');
var http=require('http');
var fs = require('fs');

 app.get('/', (req, res) => {
    res.send('server is up...')
});

app.use((req, res, next) => {
    var error = new Error('Not found');
    error.status = 404;
    next(error);
});

app.use(( error, req, res, next) =>{
    res.status(error.status || 500);
    res.json({
        error: {
            message: error.message
        }
    });
});

app.listen(app.get('port'), () => console.log('Express server listening on port :'+ app.get('port')));
