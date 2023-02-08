import { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import * as ShowsServices from '../services/shows.services'


function Eliminar(){

    const {id} = useParams()
    const [publicacion, setPublicacion] = useState([])
    const navigate = useNavigate()

    useEffect(()=>{
        ShowsServices.traerShow(id)
        .then((data)=>{
            setPublicacion(data)
        })
    }, [id])

    function onSubmit(e){
        e.preventDefault()
        ShowsServices.eliminarShow(id)
        .then(()=>{
            navigate("/shows")
        })
    }

    return(
        <section className='text-center'>
            <div className='p-6 mb-5'>
                <h3 className='text-2xl mb-2 text-2xl font-semibold tracking-tight text-white'> ¿Estas seguro de eliminar el show de  <span className='text-red-600'>"{publicacion.lugar}"</span> del calendario?</h3>
                <p className='mb-2 font-normal text-white'> {publicacion.dia} | {publicacion.hora}hs</p>
                <p className='mb-2 font-normal text-white'>{publicacion.direccion}</p>
                <p className='mb-2 font-normal text-white'>{publicacion.provincia}, {publicacion.ciudad}</p>
                <p className='mb-2 font-normal text-white'>{publicacion.pais}</p>
                <p className='mb-2 font-normal text-white'>${publicacion.precio}</p>
            </div>
            <form onSubmit={onSubmit}>
                <button className='bg-red-600 hover:bg-red-500 text-white p-2 mx-2 rounded'>Eliminar</button>
            </form>
            <div className='my-5'>
                <Link to={'/shows'} className='bg-red-600 hover:bg-red-500 text-white p-2 mx-2 rounded'>Volver</Link>
            </div>

        </section>
    )

}

export default Eliminar