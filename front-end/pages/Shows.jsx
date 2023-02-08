import { useState, useEffect } from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import * as ShowsServices from '../services/shows.services'
import NuevoShow from '../pages/NuevoShow'
import Editar from '../pages/Editar'
import ListaShow from '../pages/ListaShow'
import Eliminar from '../pages/Eliminar'
import '../public/css/Shows.css'

function Shows(){
    const [shows, setShows] = useState([])

    useEffect(() => {
        ShowsServices.traerShows()
        .then(data => {
            setShows(data)
        })
    }, [])
 

    return(
        <section className='section-show' id='showId'>
            <h2 className='text-2xl m-5 text-center text-red-600 pb-5'>PRÓXIMOS SHOWS</h2>
            <div className='text-center m-5 p-5'>
                <Link to={'/shows'} className='bg-red-600 hover:bg-red-500 text-white p-2 mx-2 mb-5 rounded'> Ver shows </Link>
                <Link to={'/shows/nuevo'} className='bg-red-600 hover:bg-red-500 text-white p-2 mx-2 mb-5 rounded'> Cargar nuevo show </Link>
            </div>
              
            <Routes>
                <Route path={'/shows'} element={<ListaShow/>}/>
                <Route path={'/shows/nuevo'} element={<NuevoShow/>}/>
                <Route path={'/shows/:id/editar'} element={<Editar/>}/>
                <Route path={'/shows/:id/eliminar'} element={<Eliminar/>}/>
            </Routes>

        </section>
    )


}

export default Shows