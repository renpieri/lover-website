import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import * as ShowsServices from '../services/shows.services'
import '../public/css/Shows.css'


function Show(){
    const [shows, setShows] = useState([])

    useEffect(() => {
        ShowsServices.traerShows()
        .then(data => {
            setShows(data)
        })
    }, [])


    const show = shows.map((elemento, index)=>{
        return(
          
        <div key={index} className='shows flex justify-between items-center gap-5 md:gap-20 text-white py-5'>
            <div className='flex flex-col info'>
                <h3> <span className='text-red-600'>{elemento.lugar.toUpperCase()}</span> | {elemento.hora}hs </h3>
                <p> {elemento.dia} </p>
            </div>
            <div className='flex flex-col info'>
                <p>{elemento.provincia}, {elemento.ciudad}</p>
                <p className='text-red-600'>{elemento.pais}</p>
            </div>
            
            <div className='flex justify-center botones'>
                <Link to={`/shows/${elemento._id}/editar`} className='bg-red-600 hover:bg-red-500 p-2 mx-2 text-white rounded'>Editar</Link>
                <Link to={`/shows/${elemento._id}/eliminar`} className='bg-red-600 p-2 mx-2 text-white rounded hover:bg-red-500'>Eliminar</Link>
            </div>
        </div>

        )
    })


    return(
        
            <article className='flex flex-col justify-between flex-row'>
                {show}
            </article>
  
    )
}

export default Show