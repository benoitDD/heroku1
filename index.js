const app = require('express')()

const PORT = process.env.PORT || 5000

app.get('/', (req, res) => {
    res.send('so if gg ??')
})
.listen(PORT, () => {
    console.log('app ready to listen to port ', PORT)
})