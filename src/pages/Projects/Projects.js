import './Projects.scss';
import Card from '../../components/Card/Card';
import { projectData } from '../../data/projects';

const isMobile = window.innerWidth <= 650;

const Projects = () => {
  return (
    <div className='center Projects'>
      { projectData.map((data, index) => (
        <div className='center data-wrapper' key={ index }>
          <img src={ data.img } alt={ data.alt }
            width={ isMobile ? '300' : '325' }
            height={ isMobile ? '220' : '240' } />
          <Card title={ data.label } 
            subtitle={ data.info } 
            link={ data.link.url }
            linkLabel={ data.link.label }
          />
        </div>
        )
      )}
    </div>
  );
}

export default Projects;