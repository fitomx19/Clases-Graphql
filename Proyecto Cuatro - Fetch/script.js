const nombreSelect = document.getElementById('name-select')
const visitasList = document.getElementById('visitas-list')

queryFetch(`
query{
    duenos{
      id
      nombre
    }
  }
`).then(data =>{
    data.data.duenos.forEach(element => {
        const option = document.createElement('option')
        option.value = element.id 
        //ayudar en la busqueda
        option.innerHTML = element.nombre
        //imprimir valor en el select
        nombreSelect.append(option)
      //  console.log(data)

    });
})


nombreSelect.addEventListener('change' , async e =>{
    const Codigo = e.target.value;
    const duenosmascotas = await getDuenos(Codigo)
    console.log(duenosmascotas)

    visitasList.innerHTML = ''
    duenosmascotas.forEach(e => {
        const element = document.createElement('div')
        element.innerText = "Dueño:" + e.nombre;
        visitasList.append(element)
        
        e.mascota.forEach(b =>{
        const element = document.createElement('div')
        element.innerText =   b.nombre;
        visitasList.append(element) 
        })
    })

})


function getDuenos(Codigo){
    return queryFetch(`
    query getDuenos($code: ID!){
        duenosBuscar(id: $code){
          id
          nombre
          mascota{
              nombre
          }
        }
      }
    
    `
, {code: Codigo}).then(data => {
        return data.data.duenosBuscar
    })
}





function queryFetch(query, variables){
    return fetch('http://localhost:3000/',{
        method: 'POST',
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
            query:query,
            variables: variables
        })
    }).then(res => res.json())
}