import { useState, useEffect } from 'react'
import { useNavigate, useParams, Link } from 'react-router-dom'
import * as ShowsServices from '../services/shows.services'


function Editar(){

    const {id} = useParams()
    const navigate = useNavigate()
    const [publicacion, setPublicacion] = useState([])
    const [ dia, setDia ] = useState('')
    const [ hora, setHora ] = useState('')
    const [ lugar, setLugar ] = useState('')
    const [ ciudad, setCiudad ] = useState('')
    const [ provincia, setProvincia ] = useState('')
    const [ pais, setPais ] = useState('')
    const [ precio, setPrecio ] = useState('')
    const [ errores, setErrores ] = useState([])



    function cambiarDia(e){
        setDia(e.target.value)
    }
    function cambiarHora(e){
        setHora(e.target.value)
    } 
    function cambiarLugar(e){
        setLugar(e.target.value)
    } 
    function cambiarCiudad(e){
        setCiudad(e.target.value)
    } 
    function cambiarProvincia(e){
        setProvincia(e.target.value)
    } 
    function cambiarPais(e){
        setPais(e.target.value)
    } 
    function cambiarPrecio(e){
        setPrecio(e.target.value)
    }

    useEffect(()=>{
        ShowsServices.traerShow(id)
        .then((data)=>{
            setPublicacion(data)
        })
    }, [id])


    function onSubmit(e){
        e.preventDefault()
        ShowsServices.editarShow(id, {dia, hora, lugar, ciudad, provincia, pais, precio})
        .then(()=>{
            navigate("/shows") 
        })
        .catch((err)=>{
            setErrores(err.errors)
        })

    }



    return(
        <section className='section-form block p-6 rounded-lg shadow-lg m-5'>

        <h3 className='text-2xl mb-5 text-white'>EDITAR SHOW: {publicacion.lugar} | {publicacion.dia} </h3>

        <form onSubmit={onSubmit}>
            <div className='flex flex-col mb-4'>
                <label htmlFor="dia" className='mb-2 text-white'>Día</label>
                <input className='p-1 border border-gray-300 rounded' type="date" name='dia' id='dia' onChange={cambiarDia} value={dia}/>
            </div>

            <div className='flex flex-col mb-4'>
                <label className='mb-2 text-white' htmlFor="hora">Hora</label>
                <input className='p-1 border border-gray-300 rounded' type="time" name='hora' id='hora' onChange={cambiarHora} value={hora}/>
            </div>

            <div className='flex flex-col mb-4'>
                <label className='mb-2 text-white' htmlFor="lugar">Lugar</label>
                <input className='p-1 border border-gray-300 rounded' type="text" name='lugar' id='lugar' onChange={cambiarLugar} defaultValue={lugar} placeholder='Lugar del evento'/>
            </div>

            <div className='flex flex-col mb-4'>
                <label className='mb-2 text-white' htmlFor="ciudad">Ciudad</label>
                <input className='p-1 border border-gray-300 rounded' type="text" name='ciudad' id='ciudad' onChange={cambiarCiudad} value={ciudad} placeholder='Ciudad del evento'/>
            </div>

            <div className='flex flex-col mb-4'>
                <label className='mb-2 text-white' htmlFor="provincia">Provincia</label>
                <input className='p-1 border border-gray-300 rounded' type="text" name='provincia' id='provincia' onChange={cambiarProvincia} value={provincia} placeholder='Provincia del evento'/>
            </div>

            <div className='flex flex-col mb-4'>
                <label className='mb-2 text-white' htmlFor="pais">País</label>
                <input className='p-1 border border-gray-300 rounded' type="text" name='pais' id='pais' onChange={cambiarPais} value={pais} placeholder='País del evento'/>
            </div>

            <div className='flex flex-col mb-4'> 
                <label className='mb-2 text-white' htmlFor="precio">Precio</label>
                <input className='p-1 border border-gray-300 hover:border-red-500 rounded' type="number" name='precio' id='precio' onChange={cambiarPrecio} value={precio} placeholder='Precio de la entrada'/>
            </div>
            <div className='text-center'>
                <button className='bg-red-600 hover:bg-red-500 text-white p-2 mx-2 rounded'>CARGAR</button>
            </div>
        </form>
        <div>
            {errores.map((elemento, index)  => <p className='text-red-500' key={index}>{elemento}</p> )}
        </div>
        <div className='my-5 text-center'>
            <Link to={'/shows'} className='bg-red-600 hover:bg-red-500 text-white p-2 mx-2 rounded'>Volver</Link>
        </div>
    </section>
    )

}

export default Editar