const mongoose = require('mongoose')

const connectToDatabase= () => {
    mongoose.connect(process.env.DATABASE_URL,{
    useNewUrlParser: true
    })
    const db = mongoose.connection
    db.on("error", (error) => console.log(error))
    db.once('open', () => console.log('Database is running...'))
}

module.exports = connectToDatabase