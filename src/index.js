import express from 'express'

const PORT = process.env.PORT || 5000
const app = express()

app.get('/', (req, res) => {
    res.send('ca marche ?? ba oui  MOUAIS ...!! :-) ' + process.env.FEFE)
})
.listen(PORT, () => {
    console.log('app ready to listen to port ', PORT)
})