import Video from '../assets/videoHome.mp4'
import '../style/homepage.css'

function Homepage(){
    return(
        <div className='homepage'>
            <div className='cover'></div>
            <video src={Video}></video>
            <div className='h1-button'>
            <h1>Bowling Strike <span>OUT</span></h1>
            <button>Orari di apertura</button>
            <button>Promozioni</button>
            </div>
        </div>
    )
}

export default Homepage