const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const sequelize = require('./config/connection');
const routes = require('./contollers')

const app = express();
const PORT = process.env.PORT || 3001;

//set handlevars as default template engine
const hbs = exphbs.create({ helpers });
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  })
});
