"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const bodyParser = __importStar(require("body-parser"));
const catalog_1 = require("./catalog");
const app = express_1.default();
exports.app = app;
app.use(bodyParser.json({
    limit: '50mb',
    verify(req, res, buf, encoding) {
        req.rawBody = buf;
    }
}));
//app.get('/', (req, res) => res.send('Hello World!'));
app.get('/catalog', (req, res) => res.status(200).json(catalog_1.myCatalog));
//-----------movies-----------
app.get('/catalog/movies', (req, res) => res.status(200).jsonp(catalog_1.myCatalog.movies));
app.get('/catalog/movies/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let movie = catalog_1.myCatalog.movies.find(movie => movie.id === id);
    res.status(200).json(movie);
});
app.post('/catalog/movies', (req, res) => {
    catalog_1.myCatalog.movies.push(req.body);
    res.status(200).json(catalog_1.myCatalog.movies);
});
app.put('/catalog/movies/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let movie = catalog_1.myCatalog.movies.find(movie => movie.id === id);
    movie = req.body;
    res.status(200).json(catalog_1.myCatalog.movies);
});
//-----------genres-----------
app.get('/catalog/genres', (req, res) => res.status(200).json(catalog_1.myCatalog.genres));
app.get('/catalog/genres/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let genre = catalog_1.myCatalog.genres.find(genre => genre.id === id);
    res.status(200).json(genre);
});
app.post('/catalog/genres', (req, res) => {
    catalog_1.myCatalog.genres.push(req.body);
    res.status(200).json(catalog_1.myCatalog.genres);
});
app.put('/catalog/genres/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let genre = catalog_1.myCatalog.genres.find(genre => genre.id === id);
    genre = req.body;
    res.status(200).json(catalog_1.myCatalog.genres);
});
//-----------people-----------
app.get('/catalog/pepole', (req, res) => res.status(200).json(catalog_1.myCatalog.people));
app.get('/catalog/people/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let person = catalog_1.myCatalog.people.find(person => person.id === id);
    res.status(200).json(person);
});
app.post('/catalog/people', (req, res) => {
    catalog_1.myCatalog.people.push(req.body);
    res.status(200).json(catalog_1.myCatalog.people);
});
app.put('/catalog/people/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let person = catalog_1.myCatalog.people.find(person => person.id === id);
    person = req.body;
    res.status(200).json(catalog_1.myCatalog.people);
});
//# sourceMappingURL=app.js.map