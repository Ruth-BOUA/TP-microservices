export type client = {
    id : number
    nom : string
}

export type service_admin = {
    id : number
}

export type catalog_admin = {
    id : number
}

export type suggestion_bot = {
    id : number
} 

export type accountant = {
    id : number
}

export type stats_bot = {
    id : number
}

export type developper = {
    id : number
}

export type user = client | service_admin | catalog_admin | suggestion_bot |accountant | stats_bot | developper



//-----------------------------------------------------------------------------------------------------------------
export type Catalog = {
    movies:Movies
    genres: Genres
    people:People
}

export type Movies = [Movie] 

export type Movie = {
    id : number
    title: string
    director: Person 
    cast: string
    age_rating: number
    duration:number
    genre: Genre


}

export type Genres = [Genre]

export type Genre = {
    id: number
    description: string
}

export type People = [Person]

export type Person = {
    id: number
    name: string
    role:string
}


let person1:Person = {
    id: 1,
    name: "person1",
    role: "role1"
}

let genre1:Genre = {
    id: 1,
    description: "genre1"
}

let movie1:Movie = {
    id: 1,
    title: "movie1",
    director: person1, 
    cast: "string",
    age_rating: 1,
    duration:1,
    genre: genre1
}

export let myCatalog :Catalog= {
    movies: [movie1],
    genres: [genre1],
    people: [person1]
}