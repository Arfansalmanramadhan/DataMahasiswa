const mongoose = require(`mongoose`)


const studentSchema = new mongoose.Schema({
    Mahasiswa: String,
    Alamat: String
})
const KampusSchema = new mongoose.Schema({
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: `Student`,
    },
    prodi: String,
    ipk: Number,
    gelar:String
})
const Student = mongoose.model(`Student`, studentSchema)
const kampus = mongoose.model(`Kampus`, KampusSchema)

module.exports = {
    Student,
    kampus
}