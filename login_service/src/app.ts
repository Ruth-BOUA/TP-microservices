import express from 'express';
import * as bodyParser from 'body-parser';
import {users_logged}  from './login';


const app = express();

app.use(bodyParser.json({
    limit: '50mb',
    verify(req: any, res, buf, encoding) {
        req.rawBody = buf;
    }
}));

//Consulter la liste des utilisateurs connectés
app.get('/user', (req, res) => res.status(200).json(users_logged))

//connecter un utilisateur
app.post('/user', (req,res) => {
    users_logged.push(req.body)
    res.status(200).json(users_logged)
})


//rechercher un utilisateur par id 
app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id)
    let user = users_logged.find(user => user.id === id)
    res.status(200).json(user)})

//rechercher un utilisateur par role
app.get('/user/:role', (req, res) => {
    const role = req.params.role
    let user = users_logged.filter(user => user.role === role)
    res.status(200).json(user)})  


export {app};
 