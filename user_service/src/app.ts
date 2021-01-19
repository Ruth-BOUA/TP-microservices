import express from 'express';
import * as bodyParser from 'body-parser';
import {myUser}  from './catalog';


const app = express();

app.use(bodyParser.json({
    limit: '50mb',
    verify(req: any, res, buf, encoding) {
        req.rawBody = buf;
    }
}));
//app.get('/', (req, res) => res.send('Hello World!'));

app.get('/user', (req, res) => res.status(200).json(myUser));


/*
//-----------movies-----------
app.get('/catalog/movies',(req,res) => res.status(200).jsonp(myCatalog.movies))

app.get('/catalog/movies/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let movie = myCatalog.movies.find(movie => movie.id === id)
    res.status(200).json(movie)
})

app.post('/catalog/movies', (req,res) => {
    myCatalog.movies.push(req.body)
    res.status(200).json(myCatalog.movies)
})

app.put('/catalog/movies/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let movie = myCatalog.movies.find(movie => movie.id === id)
    movie =  req.body
    res.status(200).json(myCatalog.movies)
})
//-----------genres-----------
app.get('/catalog/genres',(req,res) => res.status(200).json(myCatalog.genres))

app.get('/catalog/genres/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let genre = myCatalog.genres.find(genre => genre.id === id)
    res.status(200).json(genre)
})

app.post('/catalog/genres', (req,res) => {
    myCatalog.genres.push(req.body)
    res.status(200).json(myCatalog.genres)
})

app.put('/catalog/genres/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let genre = myCatalog.genres.find(genre => genre.id === id)
    genre =  req.body
    res.status(200).json(myCatalog.genres)
})
//-----------people-----------
app.get('/catalog/pepole',(req,res) => res.status(200).json(myCatalog.people))

app.get('/catalog/people/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let person = myCatalog.people.find(person => person.id === id)
    res.status(200).json(person)
})

app.post('/catalog/people', (req,res) => {
    myCatalog.people.push(req.body)
    res.status(200).json(myCatalog.people)
})

app.put('/catalog/people/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let person = myCatalog.people.find(person => person.id === id)
    person =  req.body
    res.status(200).json(myCatalog.people)
})
*/
export {app};
 