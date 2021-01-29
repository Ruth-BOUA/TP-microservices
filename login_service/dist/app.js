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
const login_1 = require("./login");
const app = express_1.default();
exports.app = app;
app.use(bodyParser.json({
    limit: '50mb',
    verify(req, res, buf, encoding) {
        req.rawBody = buf;
    }
}));
//Consulter la liste des utilisateurs connectés
app.get('/user', (req, res) => res.status(200).json(login_1.users_logged));
//connecter un utilisateur
app.post('/user', (req, res) => {
    login_1.users_logged.push(req.body);
    res.status(200).json(login_1.users_logged);
});
//rechercher un utilisateur par id 
app.get('/user/:id', (req, res) => {
    const id = parseInt(req.params.id);
    let user = login_1.users_logged.find(user => user.id === id);
    res.status(200).json(user);
});
//rechercher un utilisateur par role
app.get('/user/:role', (req, res) => {
    const role = req.params.role;
    let user = login_1.users_logged.filter(user => user.role === role);
    res.status(200).json(user);
});
//# sourceMappingURL=app.js.map