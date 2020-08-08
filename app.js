const express = require('express');

const app = express();

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    next();
  });

const productsRouter = require('./routes/products');
app.use('/products',productsRouter);

app.listen(9000, () => {
    console.log('Server started');
})