const mongoose =require(`mongoose`)

async function connectDB(){
    await mongoose.connect(`mongodb://127.0.0.1/mahasiswa_db`)
    .then((result)=> {
        console.log(`Hubungkan ke Mongodb`)
    })
    .catch((err) => {
        console.log(err)
    })
}
module.exports = connectDB;