import '../style/components/Slider.css';
import arrowLeft from '../assets/arrow_left.png';
import arrowRight from '../assets/arrow_right.png';
import PropTypes from 'prop-types';
import { useState } from 'react';

function Slider(image) {
    const [index, setIndex] = useState(0)

    const handlerChangeSlide = (direction) => {
        let newIndex = index
        if (direction === 'right') {
            newIndex++
        }
        if (direction === 'left') {
            newIndex--
        }
        if (newIndex >= image.image.length) {
            newIndex = 0
        }
        else if (newIndex < 0) {
            newIndex = image.image.length - 1
        }
        setIndex(newIndex)
    }

    return (
        <div className='slider_wrapper'>
            <img src={ image.image[index] } alt="" className='slider_picture' />
            <img src={ arrowLeft } alt="" className='slider_arrow slider_arrowLeft' onClick={ () => { handlerChangeSlide('left')}} />
            <img src={ arrowRight } alt="" className='slider_arrow slider_arrowRight' onClick={ () => { handlerChangeSlide('right')}} />
        </div>
    )
}

Slider.propTypes = {
    image: PropTypes.array
}

export default Slider

