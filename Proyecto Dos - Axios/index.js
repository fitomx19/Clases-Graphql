const express = require('express');
const port = 8080;
const axios = require('axios');

const url = "http://localhost:5000/graphql";

const app = express()

app.use(express.urlencoded({
    extended: true
}))

app.set('view engine' , 'ejs');

app.get('/', (req,res) =>{

    axios({
        url: url,
        method: 'post',
        data: {
            query: `
            query{
                Users{
                    _id
                    nombre
                    password
                    
                  }
              }
            `
        }
    }).then((result)=>{
        console.log(result.data);
        var datos = result.data;
        res.render('index' , {data: datos});
    });

   
});

app.post('/formulario' , (req,res)=>{
    //recoger datos del formulario
    const body = req.body;
    let {nombre , password} = body;
    //asignamos una variable
    let firstname = nombre;
    let contrasena = password;
    //metodo axios
    axios.post('http://localhost:5000/graphql',{
        query: `mutation CrearUsuario($nombre:String! , $password:String!){
            createUser(input:{
              nombre: $nombre,
              password: $password
            }){
              _id
              nombre
              password
            }
          }`
          ,variables: {
            nombre: firstname,
            password: contrasena
          }
    }).catch(err => console.log(err));
    res.redirect("/");
})

app.listen(port, () => {
    console.log(`Server en localhost ${port}`)
})