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
                    edad
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


app.listen(port, () => {
    console.log(`Server en localhost ${port}`)
})