import express from 'express';
import * as bodyParser from 'body-parser';
import {myCatalog}  from './catalog';


const app = express();



app.use(bodyParser.json({
    limit: '50mb',
    verify(req: any, res, buf, encoding) {
        req.rawBody = buf;
    }
}));

// Récupére le catalogue de tous les films, personnes et genres de films
app.get('/catalog', (req, res) => res.status(200).json(myCatalog));


// Récupère la liste des films sur la plateforme
app.get('/catalog/movies',(req,res) => res.status(200).jsonp(myCatalog.movies))


// Récupère le film correspondant à l'id
app.get('/catalog/movies/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let movie = myCatalog.movies.find(movie => movie.id === id)
    res.status(200).json(movie)
})


// Ajoute un film à la liste
app.post('/catalog/movies', (req,res) => {
    myCatalog.movies.push(req.body)
    res.status(200).json(myCatalog.movies)
})


// Modifie un film d'id
app.put('/catalog/movies/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let movie = myCatalog.movies.find(movie => movie.id === id)
    movie =  req.body
    res.status(200).json(myCatalog.movies)
})

export {app};