import Card from '../../components/Card/Card'
import './Home.scss';
import portraitImg from '../../assets/images/portrait.webp';
import mountainImg from '../../assets/images/carezza-min.webp';


const Home = () => {
  const cardTitle = (
    <span>
      Software Engineer 
      @<a href='https://www.revevol.com/'><u>Revevol</u></a>
      <br/>
      CS Student
      <br/>
      Mentor
    </span>
  );
  const cardSubtitle = 'JS & CSS lover';

  return (
    <div className='Home'>
      <section className='center vert-spacing'>
        <img src={ portraitImg } alt='Andrea Rotesi, SWE, CS Student'/>
        <div className='intro__card'>
          <Card title={ cardTitle } subtitle={ cardSubtitle }/>
        </div>
      </section>

      <section className='center vert-spacing'>
        <div className='about-me-info'>
          <h3>Who am I?</h3>
          Ciao! I'm Andrea, a Software Engineer with a vibrant passion for coding and design. 
          I love to push my limits with coding projects and I study to pursue my dream of becoming an amazing coder!

          <h3>What do I do?</h3>
          Many things! After my nine-to-five, I work on my bachelor's in computer science or on my projects, and I
          go on hikes. I love mountains and skiing, as well as cooking and wine tasting!
        </div>
        <img src={ mountainImg } alt='Carezza valley, Alto Adige, ski'/>
      </section>
      
    </div>
  );
}

export default Home;