const { createServer } = require('http');
const next = require('next');

const app = next({
    dev: process.env.NODE_ENV !== 'production'
});

const routes = require('./routes');
const handler = routes.getRequestHandler(app);

let https = require('https');
setInterval(function() {
    https.get('https://crowdcoin10.herokuapp.com/');
}, 1740000); // 29 minutes

app.prepare().then(() => {
    createServer(handler).listen(process.env.PORT || 3000, err => {
        if (err) throw err;
        console.log('Ready on localhost:3000');
    });
});
