const createError = require('http-errors')
const express = require('express')
const path = require('path')
// const cookieParser = require('cookie-parser')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
// const fs = require('fs')
const rfs = require('rotating-file-stream')

const indexRotativo = require('./routes/rotativoController')

// const indexRouter = require('./routes/index')
// const usersRouter = require('./routes/users')

const app = express()

// create a rotating write stream
const accessLogStream = rfs.createStream('accesos.log', { interval: '1d', path: path.join(__dirname, './logs') })
// const accessLogStream = fs.createWriteStream(path.join(__dirname, './logs/access.log'), { flags: 'a' })
// configuro el logger
app.use(logger(':date[clf] - :remote-addr - :status - :method - :url - :response-time ms - :user-agent', { stream: accessLogStream }))

// view engine setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')

app.set(cors())
app.set('etag', false)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
// app.use(cookieParser())
app.use(express.static(path.join(__dirname, 'public')))

app.use('/rotativo', indexRotativo)

// app.use('/', indexRouter)
// app.use('/users', usersRouter)

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404))
})

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
