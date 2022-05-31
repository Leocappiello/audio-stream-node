const {Router} = require('express')
const router = Router()
const {getTrack, uploadTrack} = require('../controllers/tracks.controller')

router.get('/tracks/:trackid', getTrack)

router.post('/tracks', uploadTrack)


module.exports = router