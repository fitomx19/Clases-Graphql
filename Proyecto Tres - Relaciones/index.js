import {GraphQLServer} from "graphql-yoga";
import {typeDefs} from "./graphql/typeDefs";
import {resolvers} from "./graphql/resolvers";

const server = new GraphQLServer({
    typeDefs,
    resolvers
});

server.start({port:3000},({port})=>{
    console.log('Server en ', port);
})