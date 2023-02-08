import { MongoClient, ObjectId } from 'mongodb'
const client = new MongoClient('mongodb://127.0.0.1:27017')  


//TRAER USUARIOS
async function usuarios(){
    return client.connect()
    .then(() =>{
       return client.db('DB_RENZO_PIERI').collection('Usuarios').find().toArray()
    })
}



//TRAER USUARIO POR ID
async function usuarioPorId(id){
    return client.connect()
    .then(() =>{
       return client.db('DB_RENZO_PIERI').collection('Usuarios').findOne({_id: new ObjectId(id)})
    })
}



//CARGAR USUARIO A LA BASE
async function registrar(usuario){

    const nuevoUsuario = {
        ...usuario
    }

    await client.connect()

    //Verifico que no se repita el email
    const usuarioExistente = await client.db('DB_RENZO_PIERI').collection('Usuarios').findOne({email: nuevoUsuario.email})
    
    if(usuarioExistente){
        throw new Error('El email existe')
    }

    return client.db('DB_RENZO_PIERI').collection('Usuarios').insertOne(nuevoUsuario)
}



//EDITAR USUARIO
async function editar(id, usuario){

    await client.connect()

    return client.db('DB_RENZO_PIERI').collection('Usuarios').updateOne({_id: new ObjectId(id)}, {$set: usuario})
}



//ELIMINAR USUARIO
async function eliminar(id){
    return client.connect()
    .then(() =>{
       return client.db('DB_RENZO_PIERI').collection('Usuarios').deleteOne({_id: new ObjectId(id)})
    })
}




export {
    usuarios,
    usuarioPorId,
    registrar,
    editar,
    eliminar,
}