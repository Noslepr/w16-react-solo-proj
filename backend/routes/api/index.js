const asyncHandler = require('express-async-handler')
const router = require('express').Router();

const { setTokenCookie } = require('../../utils/auth.js')
const { User } = require('../../db/models')
const { restoreUser, requireAuth } = require('../../utils/auth.js')


// //test api routes
// router.post('/test', function(req, res) {
//     res.json({ requestBody: req.body });
// });

// // test route for setting token cookie
// router.get('/set-token-cookie', asyncHandler(async (req, res) => {
//     const user = await User.findOne({
//         where: {
//             username: 'Demo-lition'
//         }
//     })
//     setTokenCookie(res, user);
//     return res.json({ user })
// }))

// // test route for restoreUser middleware
// router.get('/restore-user', restoreUser, (req, res) => {
//     return res.json(req.user)
// })

// // test route for requireAuth
// router.get('/require-auth', requireAuth, (req, res) => {
//     return res.json(req.user)
// })


module.exports = router;
