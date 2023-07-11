import '../public/css/Footer.css';
import { BiLogoInstagram, BiLogoFacebookSquare, BiLogoSpotify, BiLogoYoutube } from "react-icons/bi";

function Footer(){

    return(
        <footer className='text-white flex flex-col items-center justify-center' id='contactoId'>
            <h4 className='text-2xl text-center mt-20'>¡PONETE EN CONTACTO CON NOSOTROS!</h4>
                <div className='py-5 text-center redes flex justify-center sm:justify-center items-center items-center info-redes'>
    
                    <ul className='py-5 redesUl'>
                        <li className='py-5'>
                            <a href="https://open.spotify.com/artist/0nzsltkTyg2YyjfhVQBSSR" target={'_blank'}>
                                <BiLogoSpotify />
                            </a>
                        </li>
                        <li className='py-5'>
                            <a href="https://www.youtube.com/@LOVEROFICIAL" target={'_blank'}>
                            <BiLogoYoutube/>
                            </a>
                        </li>
                        <li className='py-5'>
                            <a href="https://www.instagram.com/SomosLover" target={'_blank'}>
                            <BiLogoInstagram />
                            </a>
                        </li>
                        <li className='py-5'>
                            <a href="https://www.facebook.com/SomosLover" target={'_blank'}>
                            <BiLogoFacebookSquare/>
                            </a>
                        </li>
                    </ul>
                </div>
            <div className='md:p-8 p-5'>
                <p className="block text-white text-center">L.O.V.E.R | © 2022</p>
                <p className="block text-white text-center">Todos los derechos reservados.</p>
            </div>
        </footer>
    )
}

export default Footer