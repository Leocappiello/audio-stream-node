const { MongoClient } = require('mongodb')

let db 

MongoClient.connect('mongodb://localhost/tracksdb', (err, client) => {
    if(err) {
        console.log(err)
        process.exit(0)
    }
    db = client.db('tracksdb')
    console.log("database is conected");
})

const getConnection = () => db

module.exports = getConnection