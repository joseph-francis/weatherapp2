
const hbs = require('express-handlebars');
const router = express.Router()



app.get('/', (req, res, next) => {
    res.render('index.hbs', {title: 'Joseph Francis'})
}) 