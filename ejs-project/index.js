const express = require('express');
const serve = require('express-static');

const app = express();
const port = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/receitaBolonhesa', (req, res) => {
    res.render('receitaBolonhesa');
})

app.get('/receitaFeijaoVerde', (req, res) => {
    res.render('receitaFeijaoVerde');
})

app.get('/receitaSpaghettiCarbonara', (req, res) => {
    res.render('receitaSpaghettiCarbonara');
})

app.get('/cadastroReceita', (req, res) => {
    res.render('cadastroReceita');
})


app.listen(port, () => {    
    console.log('Aplicativo de exemplo está em execução');
})