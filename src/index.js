const express = require('express');
const request = require('request-promise-native');

const app = express();

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.get('/itens', async function(req, res){
    const ret = await request.get('http://localhost:3000/api/v1/itens');
    const itens = JSON.parse(ret).data;
    res.render( 'itens.ejs', { itens: itens } );
})

app.listen(3001, function() {
    console.log('Servidor inicializado');

})