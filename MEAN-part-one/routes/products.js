var express = require('express');
var router = express.Router();
const ProductDB = require('../modules/productDB');
const db = new ProductDB();
const CartDB = require('../modules/cartDB');
const cdb = new CartDB();


// get all
router.get('/', async (req, res, next) => {
  let productData = await db.readProduct();
  res.render('products', {
    title: 'Products', products: productData,
  });
});




// Create new product
router.get('/new', async (req, res, next) => {
  res.render('new-product');
});

router.post('/', async (req, res, next) => {
  let result = await db.createProduct(req.body);
  res.json(result);
  res.redirect('/products');
});

// update product
router.get('/update/:id', async (req, res, next) => {
  let selectedProduct = await db.readOneProduct(req.params.id);
  res.render('update-product', { product: selectedProduct[0] });
});

router.post('/update', async (req, res, next) => {
  let result = await db.updateProduct(req.body);
  res.json(result);
  res.redirect('/products');
});

router.get('/delete/:id', async (req, res, next) => {
  let result = await db.deleteProduct(req.params.id);
  res.json(result);
});

// router.get('/:productId', async (req, res, next) => {
//   res.render('/cart');
// });

router.get('/post/:productId', async (req, res, next) => {
  let result = await cdb.createItem(req.params.productId);
  res.json(result);
  res.redirect('/products');
});

// let addToCart = `products/post/${product.id}`; a products.pug-ról
module.exports = router;