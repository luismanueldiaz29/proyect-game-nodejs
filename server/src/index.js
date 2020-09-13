const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const swagger = require('./middlewares/swagger');
const routerIndex = require('./routers/index.router.js');
const routerGame = require('./routers/game.router.js');

const app = express();

//const of the port
const PORT = process.env.PORT || 4000;
app.set('port', PORT);

//middleWares
app.use(bodyParser.json());
app.use('dev', morgan);
swagger(app);

//routers
app.use(routerIndex);
app.use('/api/game', routerGame);

//port listen
app.listen(app.get('port'), () => {
    console.log("server listen in port "+PORT);
});