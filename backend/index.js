// Express
const express = require('express')
const app = express()
const port = 4000

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE')
  res.setHeader('Access-Control-Allow-Headers', 'Content-type, Authorization')
  next()
})

var bodyParser = require('body-parser')

// body parserd
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

// Mongoose
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/dbBaracita', { useNewUrlParser: true, useUnifiedTopology: true });
}

// DB schema
const tutor = mongoose.model('Tutors', {
    nama: String,
    jeniskelamin: String,
    bidang: String,
    kategori: String,
    email: String,
    instagram: String,
    noHp: String,
    prestasi: String,
    tahunMasukKuliah: Number,
    programStudi: String,
    universitas: String,
})

app.get('/listTutor', async (req, res) => {
    const listTutor = await tutor.find({})
    if(listTutor) {
        const newListTutor = listTutor.map(tutor => { return {nama: tutor.nama, bidang: tutor.bidang, kategori: tutor.kategori, jeniskelamin: tutor.jeniskelamin} })
        res.send(newListTutor)
    }else{
        res.send("error")
    }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
