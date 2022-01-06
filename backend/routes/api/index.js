const asyncHandler = require('express-async-handler')
const router = require('express').Router();

const sessionRouter = require('./session')
const usersRouter = require('./users')

// const { setTokenCookie } = require('../../utils/auth.js')
// const { User } = require('../../db/models')
// const { restoreUser, requireAuth } = require('../../utils/auth.js')

router.use('/session', sessionRouter)
router.use('/uses', usersRouter)

//test api routes
router.post('/test', function(req, res) {
    res.json({ requestBody: req.body });
});



module.exports = router;
