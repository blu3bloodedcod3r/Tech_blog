const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const routes = require('./controllers');
const session = require('express-session')
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const helpers = require('./utils/helpers')
const app = express();
const PORT = process.env.PORT || 3001;

const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {
    maxAge: 40000,

    httpOnly: true,
    secure: 'false',
    sameSite: 'strict',
  }, 
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({ 
    db: sequelize
   }) 
};

app.use(session(sess));
console.log(sess)


const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  })
});
