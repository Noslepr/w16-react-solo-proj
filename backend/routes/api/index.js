const asyncHandler = require('express-async-handler')
const router = require('express').Router();

const sessionRouter = require('./session')
const usersRouter = require('./users')
const photosRouter = require('./photos')

router.use('/session', sessionRouter)
router.use('/users', usersRouter)
router.use('/photos', photosRouter)



module.exports = router;
