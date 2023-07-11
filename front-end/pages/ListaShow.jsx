import { useState, useEffect } from 'react';
import * as ShowsServices from '../services/shows.services';
import '../public/css/Shows.css';


function Show(){
    const [shows, setShows] = useState([]);

    useEffect(() => {
        ShowsServices.traerShows()
        .then(data => {
            setShows(data);
        });
    }, []);


    const show = shows.map((elemento, index)=>{
        return(
          
        <div key={index} className='shows flex justify-between items-center gap-5 md:gap-20 text-white py-5'>
            <div className='flex flex-col justify-center items-center info'>
                <h3> <span className='text-red-600'>{elemento.lugar.toUpperCase()}</span> | {elemento.hora}hs </h3>
                <p> {elemento.dia} </p>
            </div>
            <div className='flex flex-col justify-center items-center info'>
                <p>{elemento.provincia}, {elemento.ciudad}</p>
                <p className='text-red-600'>{elemento.pais}</p>
            </div>
            <div className='flex flex-col justify-center items-center info'>
                <p>${elemento.precio}</p>
            </div>
        </div>

        )
    })


    return(
        <section className='section-show' id='showId'>
        <h2 className='text-2xl m-5 text-center text-red-600 pb-5'>PRÓXIMOS SHOWS</h2>
            <div className='text-center m-5 p-5'>
            <article className='flex flex-col justify-between flex-row'>
                {show}
            </article>
            </div>
        </section>
    )
}

export default Show