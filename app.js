const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");

// Load routes
const index = require("./routes/index");

// Handlebars helpers
const {
  truncate,
  stripTags,
  formatDate,
  select,
  editIcon
} = require('./helpers/hbs');


// Set up express
const app = express();

// Handlebars Middleware
app.engine('handlebars', exphbs({
  helpers: {
    truncate: truncate,
    stripTags: stripTags,
    formatDate: formatDate,
    select: select,
    editIcon: editIcon
  },
  defaultLayout: 'main'
}));
app.set('view engine', 'handlebars');

//TODO set global vars

//Set static folder
app.use(express.static(path.join(__dirname, 'public')));

//Use routes
app.use('/', index);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server started on port ${port}`)
});
