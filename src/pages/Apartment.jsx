import '../style/pages/Apartment.css';
import '../style/layouts/Body.css';
import '../style/assets/Font.css';
import Slider from '../components/Slider';
import TextBox from '../../src/components/TextBox';
import Tag from '../../src/components/Tag';
import Annonces from '../../src/annonces.json';
import { useParams } from 'react-router-dom';

function Apartment(title, text) {
  const { id } = useParams();
  const annonce = Annonces.find(a => a.id === id)

  console.log(annonce) 
  return (
    <div className='body'>
      <section className='apartment_slider'>
        <Slider />
      </section>
      <section className='apartment_description_wrapper'>
        <div className='apartment_title_wrapper'>
          <h1 className='apartment_title'>Titre du logement</h1>
          <span className='apartment_location'>Localisation du logement</span>
        </div>
        <div className='apartment_tag_wrapper'>
          <Tag />
          <Tag />
          <Tag />
        </div>
        <div className='apartment_textBox_wrapper'>
          <section className='apartment_textBox'>
            <TextBox
              title='Description'
              text={ annonce.description }
            />
          </section>
          <section className='apartment_textBox'>
            <TextBox
              title='Équipements'
              text='liste des équipements'
            />
          </section>
        </div>
      </section>
    </div>
  );
}

export default Apartment;


// {Annonces.map((profile, index) => (
//   <TextBox
//     key={`${profile.id}-${index}`}
//     title='Description'
//     text={profile.description}
//   />
//     ))}
