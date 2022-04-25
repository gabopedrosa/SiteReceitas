const express = require('express');
const serve = require('express-static');
const Receitas = require('./indexReceitas');


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
    console.log('Exibindo Receitas no Terminal acima.');
    console.log('Programa executado com sucesso...');

})

// Receitas no Terminal do Sistema
const receita1 = new Receitas(
    1, 
    "Lasanha á Bolonhesa", 
    "3 colheres de margarina, 4 colheres de farinha de trigo, 2 xícaras de leite, 2 xícaras de creme de leite, Sal e noz-moscada a gosto, 1 colher de óleo, 2 dentes de alho amassados, 1 cebola picada, 300 g de carne moída, 3 xícaras de polpa de tomate batida no liquidificador, ",
    "Derreta a margarina e doure a farinha em fogo baixo mexendo sempre, junte o leite aos poucos. Em um refratário grande, coloque uma camada de molho à bolonhesa, massa para lasanha, presunto, mussarela, molho branco. Adicione mais massa para lasanha presunto e mussarela e termine com molho à bolonhesa. Se quiser, polvilhe um pouco de queijo parmesão ralado e leve ao forno para gratinar por 20 minutos."
    );
const receita2 = new Receitas(
    2, 
    "Feijão Verde Cremoso",
    "lorem ipsum",
    "ipsum lorem"
    );
const receita3 = new Receitas(
    3,
    "Spaghetti alla carbonara",
    "Ingredientes 1, 2, 3, etc..",
    "Prerape o prato... etc"
    );
console.log(receita1);
console.log(receita2);
console.log(receita3);                                                                                                       