const express = require('express');
const routerApi = require('./routes');

// midlawares
const {errorHandler,boomErrorHandler, ormErrorHandler} = require('./middlewares/error.middleware');

const app = express();
const port = process.env.PORT ||  3000;
app.use(express.json());
routerApi(app);

// Use middlewares
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, ()=> {
  console.log(`http://localhost:${port}`);
})
