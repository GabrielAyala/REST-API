const express = require('express');
const cors = require('cors');
const routes = require('./routes');

const app = express();

app.use(cors()); //Dizer quem vai poder utilizar o Back-End
app.use(express.json());
app.use(routes);

app.listen(8000);
