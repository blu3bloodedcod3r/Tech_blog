const router = require('express').Router();
const homeRoutes = require('./homeRoutes');
const userRoutes = require('./userRoutes');

router.use('/user', userRoutes);
router.use('/blogs', blogRoutes);
router.use('/userRoutes', userRoutes);

module.exports = router;