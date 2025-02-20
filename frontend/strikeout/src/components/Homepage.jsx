import Video from '../assets/videoHome.mp4'
import '../style/homepage.css'
import { Link } from "react-scroll"

function Homepage(){
    
    return(
        <div className='homepage'>
            <div className='cover'></div>
            <video src={Video} autoPlay muted loop></video>
            <div className='h1-button'>
            <h1>Bowling Strike <span>OUT</span></h1>
            <Link to="orari" smooth={true} duration={500}><button>Orari di apertura</button></Link>
            <Link to="promozioni" smooth={true} duration={500}><button>Promozioni</button></Link>
            </div>
        </div>
    )
}

export default Homepage