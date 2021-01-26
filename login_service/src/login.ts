
export type user = {
    id : number
    nom : string
    role: string
}

export type users = [user]

export let myUser : user = {
    id : 1,
    nom : "client1",
    role : "client"
}

export let users_logged : users = [myUser]

