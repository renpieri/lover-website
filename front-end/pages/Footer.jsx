import '../public/css/Footer.css'
import { useState } from 'react'
import * as UsuariosServices from '../services/usuarios.services'


function Footer(){
    const [ nombre, setNombre ] = useState('')
    const [ email, setEmail ] = useState('')
    const [ errores, setErrores ] = useState([])
 


    function cambiarNombre(e){
        setNombre(e.target.value)
    }
    function cambiarEmail(e){
        setEmail(e.target.value)
    } 


    function onSubmit(e) {
        e.preventDefault()
        UsuariosServices.cargarUsuario({nombre, email})
        .then(()=>{ 
            setNombre('')
            setEmail('')
            setErrores([])
        })
        .catch((err)=>{
            setErrores(err.errors)
        })
    }
    

    return(
        <footer className='text-white flex flex-col justify-center' id='contactoId'>
            <h4 className='text-2xl text-center mt-20'>¡PONETE EN CONTACTO CON NOSOTROS!</h4>
            <div className='divForm flex flex-col xl:flex-row justify-around items-center'>
            
                
                <form onSubmit={onSubmit} className='text-center p-10'>
                <h3 className='text-center p-5'>REGISTRATE PARA ESTAR AL TANTO DE LAS NOVEDADES</h3>

                    <div className='flex flex-col mb-4 text-left'>
                        <label htmlFor="nombre" className='mb-2'>Nombre</label>
                        <input className='p-1 border border-gray-300 rounded text-black' type="text" name='nombre' id='nombre' onChange={cambiarNombre} value={nombre} placeholder='Nombre'/>
                    </div>

                    <div className='flex flex-col mb-4 text-left'>
                        <label className='mb-2' htmlFor="email">Email</label>
                        <input className='p-1 border border-gray-300 rounded text-black' type="email" name='email' id='email' onChange={cambiarEmail} value={email} placeholder='Email'/>
                    </div>
                    <button className='p-2 px-5 my-2 text-white bg-red-600 rounded hover:bg-red-500 focus:outline-none'>Enviar</button>
                <div>
                    {errores ? errores.map((elemento, index)  => <p className='text-white' key={index}>*{elemento}*</p> ): null}
                </div>
                

                </form>

                <div className='py-5 text-center redes'>
                    <div className='p-5'>
                        <p className='text-center'>MANAGING:</p>
                        <p className='text-center'>JORGE FERNANDEZ | (+54) 46116-93517</p>
                    </div>
    
                    <ul className='py-5 redesUl'>
                        <li className='py-5'>
                            <a href="https://open.spotify.com/artist/0nzsltkTyg2YyjfhVQBSSR" target={'_blank'}>
                                <img src="/img/sp-byn.png" alt="Canal de spotify de lover" width="50"/>
                            </a>
                        </li>
                        <li className='py-5'>
                            <a href="https://www.youtube.com/@LOVEROFICIAL" target={'_blank'}>
                                <img src="/img/yt-byn.png" alt="Canal de youtube de lover" width="45"/>
                            </a>
                        </li>
                        <li className='py-5'>
                            <a href="https://www.instagram.com/SomosLover" target={'_blank'}>
                                <img src="/img/ig-byn.png" alt="Pagina de instagram de lover" width="45"/>
                            </a>
                        </li>
                        <li className='py-5'>
                            <a href="https://www.facebook.com/SomosLover" target={'_blank'}>
                                <img src="/img/fb-byn.png" alt="Pagina de facebook de lover" width="45"/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            

            <div className='md:p-8 p-5'>
                <p className="block text-white text-center">L.O.V.E.R | © 2022</p>
                <p className="block text-white text-center">Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer