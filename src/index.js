import express from 'express'

const PORT = process.env.PORT || 5000
const app = express()

app.get('/', (req, res) => {
    res.send('so if gg a ??')
})
.listen(PORT, () => {
    console.log('app ready to listen to port ', PORT)
})