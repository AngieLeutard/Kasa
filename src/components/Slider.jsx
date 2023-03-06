import '../style/components/Slider.css';
import image from '../assets/IMG.png'
import arrowLeft from '../assets/arrow_left.png'
import arrowRight from '../assets/arrow_right.png'


function Slider() {
    return (
        <div className='slider_wrapper'>
            <img src={ image } alt="" className='slider_picture'/>
            <img src={ arrowLeft } alt="" className='slider_arrow slider_arrowLeft'/>
            <img src={ arrowRight } alt="" className='slider_arrow slider_arrowRight'/>
        </div>

    )
}

export default Slider
