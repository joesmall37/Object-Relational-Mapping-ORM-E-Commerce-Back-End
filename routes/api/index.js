const router = require('express').Router();
const categoryRoutes = require('./category');
const productRoutes = require('./products');
const tagRoutes = require('./tags');

router.use('/categories', categoryRoutes);
router.use('/products', productRoutes);
router.use('/tags', tagRoutes);

module.exports = router;
