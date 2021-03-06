// const express = require('express')
// const app = express()
// const PORT = 3000

const express = require('express');
const morgan = require('morgan');
const path = require('path');
const session = require('express-session');
const FileStore = require('session-file-store')(session);
require('dotenv').config();
const userRouter = require('./routes/user.router');
const teaRouter = require('./routes/tea.router');
// const checkAuth = require('./middlewares/checkAuth');

const PORT = 3000;
const app = express();

app.set('view engine', 'hbs');
app.set('views', path.resolve(process.env.PWD, 'views'));

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

app.use(
  session({
    secret: 'oh klahoma',
    resave: false,
    store: new FileStore(),
    saveUninitialized: false,
    name: 'tea',
    cookie: { httpOnly: true, maxAge: 60 * 60 * 1000 },
  }),
);

app.use((req, res, next) => {
  console.log(req.session.status);
  res.locals.userId = req.session?.userId; // глобальная переменная userId теперь доступна во всех hbs
  res.locals.status = req.session?.status;
  console.log(res.locals.status);
  next();
});

app.use('/all_teas', teaRouter);
app.use('/', userRouter);

// app.use('/user', userRouter);

// app.get('/', checkAuth, (req, res) => {
//   res.render('index');
// });

app.listen(PORT, () => {
  console.log(`vse horoso${PORT}`);
});
