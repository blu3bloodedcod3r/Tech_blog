const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const routes = require('./contollers');

const helpers = require('./utils/helpers')
const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);



const sess = {
  secret: 'super secret secret',
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

app.use(session(sess))


const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(routes);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, 'public')));

 app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  sequelize.sync({ force: false })
 })