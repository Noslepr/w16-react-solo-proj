const router = require('express').Router()
const asyncHandler = require('express-async-handler')
const { check } = require('express-validator')

const { handleValidationErrors } = require('../../utils/validation')
const db = require('../../db/models')


const imgEnding = string => {
    if (string.endsWith('jpg') ||
    string.endsWith('jpeg') ||
    string.endsWith('png')) {
        return true
    } else {
        return false;
    }
    
}

const photoErrors = [
    check('photoUrl')
        .custom(value => {
            if (!imgEnding(value)) {
                throw new Error('Please use .png, .jpg, or .jpeg file type')
            }else return true
        }),
    handleValidationErrors,
]

router.get('/', asyncHandler(async(req, res) => {
    const photos = await db.Photo.findAll({
        order: [['id', 'DESC']]
    })

    return res.json({ photos })
}))

router.post('/', photoErrors, asyncHandler(async(req, res) => {
    const { userId, photoUrl, description } = req.body;

    const photo = await db.Photo.create({ userId, photoUrl, description })

    if(photo) {
        res.json({ photo })
    }
}))

router.patch('/', photoErrors, asyncHandler(async(req, res) => {
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
