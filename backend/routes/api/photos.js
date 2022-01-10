const router = require('express').Router()
const asyncHandler = require('express-async-handler')

const db = require('../../db/models')

router.get('/', asyncHandler(async(req, res) => {
    const photos = await db.Photo.findAll()
    return res.json({ photos })
}))


module.exports = router
