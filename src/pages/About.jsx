import '../style/layouts/Body.css';
import '../style/pages/About.css'
import Banner from '../components/Banner';
import image from '../assets/IMG2.png';
import TextBox from '../../src/components/TextBox';


function About() {
  return (
    <div className="body">
      <Banner 
        picture={ image }
      />
      <aside className='about_textWrapper'>
        <TextBox 
          title='Fiabilité'
        />
        <TextBox 
          title='Respect'
          text='La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'
        />
        <TextBox 
          title='Service'
        />
        <TextBox 
          title='Responsabilité'
        />
      </aside>
    </div>
  );
}

export default About;
