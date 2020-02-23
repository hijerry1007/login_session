const express = require('express')
const app = express()
const exphbs = require('express-handlebars')
const port = 3000
const bodyParser = require('body-parser')
const verifyAccount = require('./verifyAccount')

// set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// set body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// set express static 
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})

app.post('/', (req, res) => {
  const userName = verifyAccount(req.body)
  res.render('verify', { userName: userName })
})

app.listen(port, () => {
  console.log(`The server is running on localhost: ${port}`)
})