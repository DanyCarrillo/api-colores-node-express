const express = require('express');
const cors = require("cors");
const routerApi = require('./routes');
const port = process.env.PORT ||  3000;

// midlawares
const {errorHandler,boomErrorHandler, ormErrorHandler} = require('./middlewares/error.middleware');

const app = express();

app.use(cors());
app.use(express.json());
routerApi(app);

// Use middlewares
app.use(ormErrorHandler);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, ()=> {
  console.log(`http://localhost:${port}`);
})
