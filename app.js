const express = require('express')
const exphbs = require('express-handlebars')
const bodyParser = require('body-parser')
const verifyAccount = require('./verifyAccount')
const app = express()
const port = 3000
const session = require('express-session')

// set template engine
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// set body-parser
app.use(bodyParser.urlencoded({ extended: true }))

// set session
app.use(session({
  secret: 'copyCat',
  resave: true,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 5,
  },
}));

// set express static 
app.use(express.static('public'))

// set routes
app.get('/', (req, res) => {
  console.log(req.session)
  console.log(session.userName)
  if (req.session.userName) {
    res.render('verify', { userName: req.session.userName })
  }
  else {
    res.render('index')
  }

})

app.post('/', (req, res) => {
  const errorMsg = verifyAccount(req.body).errorMsg
  const loginStatus = verifyAccount(req.body).loginStatus
  if (loginStatus === 'verified') {
    const user = verifyAccount(req.body).verifiedAcct
    const userName = user[0].firstName
    req.session.userName = userName
    res.render('verify', { userName })
  }
  else {
    res.render('index', { errorMsg })
  }

})

app.get('/logout', (req, res) => {
  req.session.destroy()
  res.redirect('/')
})
app.listen(port, () => {
  console.log(`The server is running on localhost: ${port}`)
})