"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myCatalog = void 0;
let person1 = {
    id: 1,
    name: "person1",
    role: "role1"
};
let genre1 = {
    id: 1,
    description: "genre1"
};
let movie1 = {
    id: 1,
    title: "movie1",
    director: person1,
    cast: "string",
    age_rating: 1,
    duration: 1,
    popularity: 1,
    genre: genre1
};
exports.myCatalog = {
    movies: [movie1],
    genres: [genre1],
    people: [person1]
};
//# sourceMappingURL=catalog.js.map