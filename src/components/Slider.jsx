import '../style/components/Slider.css';
import arrowLeft from '../assets/arrow_left.png';
import arrowRight from '../assets/arrow_right.png';
import PropTypes from 'prop-types';
import Annonces from '../../src/annonces.json';
import { useParams } from 'react-router-dom';
import { useState } from 'react';


function Slider(image) {
    const { id } = useParams();
    const annonce = Annonces.find(a => a.id === id)

    // exemple 
    // image.setAttribute("src", "./assets/images/slideshow/" + slides[i].image);

    return (
        <div className='slider_wrapper'>
            {annonce.pictures.map((image) => (
                <img src={ image } alt="" className='slider_picture' key={`${image}`}/>
            ))}
            <img src={ arrowLeft } alt="" className='slider_arrow slider_arrowLeft' />
            <img src={ arrowRight } alt="" className='slider_arrow slider_arrowRight' />
        </div>

    )
}

Slider.propTypes = {
    image: PropTypes.array
}

export default Slider
