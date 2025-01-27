import { useState } from 'react'
import Logo from '../assets/logo.jpg'
import '../style/navbar.css'

function Navbar(){
    
    const [isOpen, setIsOpen] = useState(false)

    function Toggle(){
        setIsOpen(!isOpen)
    }
    
    return(
        <nav>
            <div className={`off-screen-menu ${isOpen ? 'active' : ''}`}>
                <ul>
                    <div>
                        <li><a href="/">HOME</a></li>
                        <li><a href="/">ORARI DI APERTURA</a></li>
                        <li><a href="/">PROMOZIONI</a></li>
                        <li><a href="/">ATTIVITA'</a></li>
                        <li><a href="/">PRENOTA IL TUO EVENTO</a></li>
                        <li><a href="/">CONTATTI</a></li>
                        <li><a href="/">AREA RISERVATA - TESSERATI</a></li>
                    </div>
                </ul>
            </div>
            <div className='nav'>
                <a href="/"><img src={Logo} alt="..." width={125} className={`${isOpen ? 'active' : ''}`} /></a>
                <div className='spazio'></div>
                <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={Toggle}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </nav>
    )
}

export default Navbar