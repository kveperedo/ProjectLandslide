const dweetClient = require('node-dweetio');
const five = require('johnny-five');
const restify = require('restify');
const corsMiddleware = require('restify-cors-middleware');
const rjwt = require('restify-jwt-community');
const mongoose = require('mongoose');

const config = require('./config');


const cors = corsMiddleware({
  origins : ['*'],
  methods : ['GET', 'POST', 'PUT', 'OPTIONS', 'DELETE']
});

const server = restify.createServer();

//middleware
server.pre(cors.preflight);
server.use(cors.actual);
server.use(restify.plugins.bodyParser({multiples : true}));
// server.opts('/.*/',optionsRoute);
//authentication
server.use(rjwt({ secret : config.JWT_SECRET }).unless({path : ['/authenticate','/register']}));

server.listen(config.PORT, () => {
  mongoose.connect(config.MONGODB_URI, 
          {useNewUrlParser  : true}
      );
});

const db = mongoose.connection;
db.on('error', err => console.log(err));
db.once('open', () => {
  require('./routes/users')(server);
  console.log(`server started on port ${config.PORT}`);
});


// let board = new five.Board({
//     port: "COM10"
// });

// board.on("ready", function() {
//   let led = new five.Led(13);
//   led.blink(100);
// });