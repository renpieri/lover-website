import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import ListaShow from '../pages/ListaShow';
import Footer from '../pages/Footer';
import Videos from '../pages/Videos';
import Historia from '../pages/Historia';
import '../public/css/App.css';
import { FiMenu } from 'react-icons/fi';

function App() {

  const [open, setOpen] = useState(false);

  return (
     
    <BrowserRouter> 
        <header>
          <div className='flex items-center justify-between xl:max-w-10xl xl:mx-auto max-w-full lg:p-5 flex-wrap w-full back p-5'>
          <a href="/"><img src="/img/logo.png" alt='Lover logo en color rojo' width='150' className='mx-10'/></a>

          <FiMenu className='lg:hidden block h-8 w-8 cursor-pointer text-white' onClick={() => setOpen(!open)} />

          <nav className={`${open ? 'block' : 'hidden'} lg:flex lg:justify-between items-center py-2 lg:w-auto w-full lg:bg-transparent`}>
            <ul className='lg:flex px-3 text-white lg:justify-between mx-10'>
              <li className='mx-3 hover:text-red-600'><a className='block p-3 lg:p-0' href="#showId" onClick={() => setOpen(!open)}>Shows</a></li>
              <li className='mx-3 hover:text-red-600'><a className='block p-3 lg:p-0' href="#historiaId" onClick={() => setOpen(!open)}>Nosotros</a></li>
              <li className='mx-3 hover:text-red-600'><a className='block p-3 lg:p-0' href="#contactoId" onClick={() => setOpen(!open)}>Contacto</a></li>
            </ul>
          </nav>
            <div className='sp-yt flex justify-center items-center md:justify-end'>
              <a href="https://www.youtube.com/@LOVEROFICIAL" target={'_blank'}><img src="/img/yt.png" alt="Canal de youtube de lover"/></a>
              <a href="https://open.spotify.com/artist/0nzsltkTyg2YyjfhVQBSSR" target={'_blank'}><img src="/img/sp.png" alt="canal de spotify de lover" /></a>
              <a href="https://www.instagram.com/SomosLover" target={'_blank'} className='ig md:mr-12'><img src="/img/ig.png" alt="Pagina de instagram de lover"/></a>
            </div>
          </div>
        </header>  
        <main>
          <Videos></Videos>
          <ListaShow></ListaShow>
          <Historia></Historia>
        </main>
        <Footer/>
      </BrowserRouter>

    
  )
}

export default App
