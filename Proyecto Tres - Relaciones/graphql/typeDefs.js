export const typeDefs = `
    type Query{
        ping: String
        mascotas: [Pet]
        duenos: [Dueno]
        visita: [Visita]
    }

    type Pet {
        id: ID!
        nombre: String!
        dueno: Dueno
        visita: [Visita!]!
    }

    type Dueno{
        id: ID!
        nombre: String
        mascota: [Pet]
    }

    type Visita{
        id: ID!
        comentario: String
        mascota: Pet
    }
`;