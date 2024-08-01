const express = require('express');

const app = express(); 
const port = 3000;

// for parsing application/json
app.use(express.json()) 
app.use(express.urlencoded({ extended: true }))

// routes
const productRoutes = require('./api/routes/products');
app.use('/products', productRoutes);

app.listen(port, () => {
    console.log(`Running at http://localhost:${port}`);
});