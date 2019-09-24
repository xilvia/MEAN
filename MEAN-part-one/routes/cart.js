var express = require('express');
var router = express.Router();
const CartDB = require('../modules/cartDB');
const cdb = new CartDB();


// get all
router.get('/', async (req, res, next) => {
  let cartData = await cdb.readCartForUser();
  let totalPrice = await cdb.getPrice();

  res.render('cart', {
    title: 'Carts', carts: cartData, price: totalPrice[0].amount,
  });
});

// Create new cart items
// router.get('/create/:id', async (req, res, next) => {
//   res.render('/cart');
// });

// router.post('/create/:productId', async (req, res, next) => {
//   let result = await cdb.createItem(req.params.productId);
//   res.json(result);
//   res.redirect('/products');
// });


// update cort
// router.get('/', async (req, res, next) => {
//   let selectedItem = await cdb.readCart(req.params.id);
//   res.render('/cart', { item: selectedItem[0] });
// });


// delete item
router.get('/delete/:productId', async (req, res, next) => {
  let result = await cdb.deleteItem(req.params.productId);
  res.json(result);
});

module.exports = router;