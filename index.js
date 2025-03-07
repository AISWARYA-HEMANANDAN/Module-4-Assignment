const express = require('express')
const app = express()
const bookRoutes = require('./routes/bookRoutes')

app.use(express.json())
app.use("/book", bookRoutes)

app.listen(4000, () => {
    console.log('Server starts on port 4000');

})