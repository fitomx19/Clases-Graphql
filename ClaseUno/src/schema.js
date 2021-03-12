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
    type Mutation {
        createTask(input: Taskinput): Task
    }

    input Taskinput{
        _id: ID
        title: String!
        number: Int
    }
`;

export default makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
})