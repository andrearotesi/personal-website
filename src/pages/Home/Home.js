import Card from '../../components/Card/Card'
import './Home.scss';
import portraitImg from '../../assets/images/portrait.webp';
import mountainImg from '../../assets/images/carezza-min.webp';

const isMobile = window.innerWidth <= 650;

const Home = () => {
  const cardTitle = (
    <span>
      Full Stack Engineer 
      @<a href='https://www.aodocs.com/'><u>AODocs</u></a>
      <br/>
      CS Student
    </span>
  );
  const cardSubtitle = 'JS & CSS lover';

  return (
    <div className='Home'>
      <section className='center vert-spacing'>
        <img src={ portraitImg } alt='Andrea Rotesi, SWE, CS Student'
          width={ isMobile ? '455' : '325' }
          height={ isMobile ? '300' : '373' } />
        <div className='intro__card'>
          <Card title={ cardTitle } subtitle={ cardSubtitle }/>
        </div>
      </section>

      <section className='center vert-spacing'>
        <div className='about-me-info'>
          <h3>Who am I?</h3>
          Ciao! I'm Andrea, a Full Stack Engineer with a vibrant passion for coding, design and travelling. I love to push my limits
          with coding projects and I always work hard to pursue my dream of becoming an amazing coder.
          My preferred technologies are Angular and React. I also love CSS for some reason.
          
          <h3>What do I do?</h3>
          Many things! After my nine-to-five, I work on my bachelor's in computer science or on my projects, and I
          go on hikes. I love mountains and skiing, as well as cooking and wine tasting!
        </div>
        <img src={ mountainImg } alt='Carezza valley, Alto Adige, ski'
          width={ isMobile ? '455' : '325' }
          height={ isMobile ? '200' : '240' }/>
      </section>
      
    </div>
  );
}

export default Home;