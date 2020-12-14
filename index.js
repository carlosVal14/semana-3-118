const express = require('express');
const morgan = require('morgan');
const apiRouter = require('./routes')
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use('/api',apiRouter);

app.get('/',(req,res)=>{
    res.send('Hello world server about')
});
/*
app.get('*',(req,res)=>{
    res.status(404).send('Nothing here')
});

*/

app.set('port',process.env.PORT || 3000);

app.listen(app.get('port'),()=>{
    console.log('server up');
})