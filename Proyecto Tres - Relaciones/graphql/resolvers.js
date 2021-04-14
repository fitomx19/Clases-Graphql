import { duenos } from "../data/duenos";
import { mascotas } from "../data/mascotas"
import { visitas } from "../data/visitas"

export const resolvers = {
    Query: {
        ping(){
            return "hello world";
        },
        mascotas(){
            return mascotas;
        },
        duenos(){
            return duenos;
        },
        visita(){
            return visitas;
        }
    },
    Pet:{
        dueno: ({dueno}) =>{
          return duenos.find(d =>{
              return d.id === dueno
          })  
           
        },
        visita: (parent) =>{
            return visitas.filter(v =>{
                return v.mascota == parent.id
            })
        }
    },
    Dueno:{
        mascota: (parent) => {
            return mascotas.filter(m =>{
                return m.dueno === parent.id;
            })
        }
    },
    Visita: {
        mascota: (parent) =>{
            return mascotas.find(m =>{
                return m.id === parent.mascota
            })
        }
    }
}