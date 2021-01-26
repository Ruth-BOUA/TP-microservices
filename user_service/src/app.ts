import express from 'express';
import * as bodyParser from 'body-parser';
import {user_list}  from './user';


const app = express();

app.use(bodyParser.json({
    limit: '50mb',
    verify(req: any, res, buf, encoding) {
        req.rawBody = buf;
    }
}));

//Consulter la liste des utilisateurs
app.get('/user', (req, res) => res.status(200).json(user_list))

//ajouter un utilisateur
app.post('/user', (req,res) => {
    user_list.push(req.body)
    res.status(200).json(user_list)
})

//modifier un utilisateur
app.put('/user/:id', (req,res) => {
    const id = parseInt(req.params.id)
    let user = user_list.find(user => user.id === id)
    user =  req.body
    res.status(200).json(user_list)
})

//rechercher un utilisateur par id 
app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id)
    let user = user_list.find(user => user.id === id)
    res.status(200).json(user)})

//rechercher un utilisateur par role
app.get('/user/:role', (req, res) => {
    const role = req.params.role
    let user = user_list.filter(user => user.role === role)
    res.status(200).json(user)})  


export {app};
 