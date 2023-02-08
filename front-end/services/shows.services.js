

async function traerShows(){
    return fetch('http://localhost:3000/api/shows/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(async response => {
            if (response.ok) {
                return response.json()
            } 
            else if (response.status === 400){
                throw await response.json()
            }
            else {
                throw new Error('No se pudo cargar la publicacion')
            }
        })
}



async function traerShow(id){
    return fetch(`http://localhost:3000/api/shows/${id}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(async response => {
            if (response.ok) {
                return response.json()
            } 
            else if (response.status === 400){
                throw await response.json()
            }
            else {
                throw new Error('No se pudo cargar la publicacion')
            }
        })
}



async function cargarShow(show){
    return fetch('http://localhost:3000/api/shows/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(show)
    })
        .then(async response => {
            if (response.ok) {
                return response.json()
            } 
            else if (response.status === 400){
                throw await response.json()
            }
            else {
                throw new Error('No se pudo cargar la publicacion')
            }
        })
}


async function eliminarShow(id){
    return fetch(`http://localhost:3000/api/shows/${id}`, {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        }
    })
        .then(async response => {
            if (response.ok) {
                return response.json()
            } 
            else if (response.status === 400){
                throw await response.json()
            }
            else {
                throw new Error('No se pudo cargar la publicacion')
            }
        })
}


async function editarShow(id, show){
    return fetch(`http://localhost:3000/api/shows/${id}`, {
        method: 'PATCH',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(show)
    })
        .then(async response => {
            if (response.ok) {
                return response.json()
            } 
            else if (response.status === 400){
                throw await response.json()
            }
            else {
                throw new Error('No se pudo cargar la publicacion')
            }
        })
}



export {
    traerShows,
    traerShow,
    cargarShow,
    eliminarShow,
    editarShow
}