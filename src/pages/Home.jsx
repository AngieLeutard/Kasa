import '../style/layouts/Body.css';
import '../style/pages/Home.css'
import Card from '../components/Card'
import Banner from '../components/Banner'
import image from '../assets/IMG.png'

function Home() {
  return (
    <div className="body">
      <Banner 
        title='Chez vous, partout et ailleurs'
        picture={ image }
      />
      <aside className='home_cardList_wrapper'>
      <Card 
        title='Titre de la location'
      />
      <Card 
        title='Titre de la location'
      />
      <Card 
        title='Titre de la location'
      />
      <Card 
        title='Titre de la location'
      />
      <Card 
        title='Titre de la location'
      />
      <Card 
        title='Titre de la location'
      />
      </aside>
    </div>
  );
}

export default Home;
