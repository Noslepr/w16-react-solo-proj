const router = require('express').Router()
const asyncHandler = require('express-async-handler')

const db = require('../../db/models')

router.get('/', asyncHandler(async(req, res) => {
    const photos = await db.Photo.findAll()
    return res.json({ photos })
}))

router.post('/', asyncHandler(async(req, res) => {
    const { userId, photoUrl, description } = req.body;

    const photo = await db.Photo.create({ userId, photoUrl, description })

    if(photo) {
        res.json({message: 'success'})
    }
}))


module.exports = router
