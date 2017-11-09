let express = require('express');
let app = express();

let path = require('path');

let bodyParser = require('body-parser');

app.set('view engine', 'pug');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));

app.get('/', (req, res, next) => {
    res.render('index');
    next();
});

app.post('/postman', (req, res, next) => {
    console.log(req.headers);
    res.render('base', {msg: 'you will die'});
});

app.listen(8080, () => {
    console.log(`8080 port listening`);
});
