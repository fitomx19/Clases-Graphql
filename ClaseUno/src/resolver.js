import {task} from './sample';

export const resolvers = {
    Query:{
        hello: () => {
            return 'Hello world con Graphql '
        },
        saludar(root,args){
            console.log(args)
            return args.nombre
        },
        tasks(){
            return task
        },
        search(root,args){
            var resultado = task.filter(r =>{
                return r.number == args.number
            });

            return resultado;
        }
       
    },
    Mutation:{
        createTask(_, {input}){
            input._id = task.length;
            //creaamos un Id
            task.push(input);
            //agregar input en el task
            console.log(task);
            return input;
        }
    }
};