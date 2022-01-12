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
        res.json({ photo })
    }
}))

router.patch('/', asyncHandler(async(req, res) => {
    const { id, photoUrl, description } = req.body;

    const photo = await db.Photo.findByPk(id)
    const updatedPhoto = await photo.update({id, photoUrl, description})

    if(updatedPhoto) {
        res.json({ photo })
    }
}))

router.delete('/', asyncHandler(async(req, res) => {
    const { id } = req.body;

    const photo = await db.Photo.findByPk(id)
    await photo.destroy()

    res.json({ photo })
}))


module.exports = router
