
const express = require('express');
const bodyParser = require('body-parser');
const { sequelize } = require('./models');
const accountRoute = require('./routes/account.route')
const destinationRoute = require('./routes/destination.route')
const dataRoute = require('./routes/data.route')

const app = express();
app.use(bodyParser.json());


app.use('/accounts', accountRoute);
app.use('/destinations', destinationRoute);
app.use('/server', dataRoute);

app.listen(8000, () => {
    console.log('Server started on http://localhost:8000');
});
