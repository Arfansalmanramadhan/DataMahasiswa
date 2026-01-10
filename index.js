const connectDB = require(`./server`)
const {Student,kampus} = require(`./model`)
// const { get } = require("mongoose")
connectDB()
const makeKampus = async () => {

    const student  = await Student.create({
        Mahasiswa:`Arfan Salman`,
        Alamat:`bandung`
    })
    const Kampus  = await kampus.create({
        student: student._id,
        prodi: 'D3 Teknologi Telekomunikasi',
        ipk: 3.5,
        gelar: 'A.Md.T'
    })
    // students.save()
    // Kampus.save()
    console.log(`Data behasil `)
}
// makeKampus()
const Get = async () => {
    const data = await kampus.find().populate("student");

    data.forEach(item => {
        console.log(
        item.student.Mahasiswa,
        item.student.Alamat,
        item.prodi,
        item.ipk
        );
    });
// const tweets = await kampus.find().populate(`student`)
//     console.log(tweets)
};
Get()