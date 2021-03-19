import {task} from './sample';
import User from "../models/User";
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
        async Users(){
            return await User.find();
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
        },
        async createUser(_, {input}){
            //log input
            const newUser =  User(input)
            await newUser.save(); //haces la consulta y luego continuas
            console.log(newUser);
             return newUser;
        },
        async deleteUser(_,{_id} ){
            return await User.findByIdAndDelete(_id);
        },
        async updateUser(_, {_id,input}){
            return await User.findByIdAndUpdate(_id, input, {new:true});
        }

    }
};