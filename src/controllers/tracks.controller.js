const getTrack = (req, res) => {
    res.send("track")
}

const uploadTrack = (req, res) => {
    res.send("track saved")
}

module.exports = {
    getTrack,
    uploadTrack
}