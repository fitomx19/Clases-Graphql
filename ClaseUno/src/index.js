import express from "express";
import { graphqlHTTP} from "express-graphql";
import schema from './schema';
//añadi dos imports
import {connect} from "../db/database";

const app = express();
connect();


app.get('/', (req,res)=>{
    res.json({
        message: 'Hola mundo'
    })
});

app.use('/graphql', graphqlHTTP({
    graphiql: true,
    schema: schema
}));

app.listen(5000, () => console.log('Servidor en el puerto 5000'));


