
import '../public/css/Videos.css'

function Video() {

  return (

    <section className='section-video'>
        <h1 className='text-red-600 pb-5'>MIRA NUESTRO NUEVO VIDEO OFICIAL</h1>
        <figure className='mb-20'>
            <div className='videoEstreno'>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/vqtJWp1sHS8" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
            </div>
        </figure>
    </section>

    
  )
}

export default Video
