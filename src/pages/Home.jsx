import '../style/layouts/Body.css';
import '../style/pages/Home.css';
import Annonces from '../annonces.json';
import Card from '../components/Card';
import Banner from '../components/Banner';
import image from '../assets/IMG.png';

function Home() {

  return (
    <div className="body">
      <Banner
        title='Chez vous, partout et ailleurs'
        picture={ image }
      />
      <section className='home_cardList_wrapper'>
        {Annonces.map((profile, index) => (
            <Card
            key={`${profile.id}-${index}`}
            picture={profile.pictures[0]}
            title={profile.title}
            id={profile.id}
            />
        ))}
      </section>
    </div>
  );
}

export default Home;
