import { makeExecutableSchema } from "graphql-tools";
import { resolvers } from "./resolver";

const typeDefs = `
    type Query{
        hello:String
        saludar(nombre:String!) : String
        tasks: [Task]
        search(number: Int) : [Task]
    }
    type Task {
        _id: ID
        title: String!
        number: Int
    }
    type Usuario {
        _id: ID
        nombre: String!
        password: String!
        edad: Int
    }
    type Mutation {
        createTask(input: Taskinput): Task
        createUser(input: UsuarioInput) : Usuario
    }

    input Taskinput{
        _id: ID
        title: String!
        number: Int
    }

    input UsuarioInput{
        nombre: String!
        password: String!
        edad: Int
    }

`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})