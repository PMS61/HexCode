// connecting to mongoose (mongo)
const connectToMongo = require ('./db')
connectToMongo();

// creating a express server
const express = require('express')
const app = express()
const port = process.env.PORT || 3000

// cors
var cors = require('cors')
app.use(cors())

// middleware
app.use(express.json())
app.get('/', (req, res) => {
  res.send('<h1>Hello World!<h1>')
})


// availaible routes (Routes are handled through express-router)
app.use('/api/auth' , require ('./routes/auth'))


app.listen(port, () => {
  console.log(` app listening on port ${port}`)
})
