
async function cargarUsuario(usuario){
    return fetch('http://localhost:3000/api/usuarios/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario)
    })
        .then(async response => {
            if (response.ok) {
                return response.json()
            } 
            else if (response.status === 400){
                throw await response.json()
            }
            else {
                throw new Error('No se pudo cargar el usuario')
            }
        })
}





export {
    cargarUsuario
}