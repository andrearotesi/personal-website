import './Projects.scss';
import Card from '../../components/Card/Card';
import { projectData } from '../../data/projects';

const Projects = () => {
  return (
    <div className='center Projects'>
      { projectData.map((data, index) => (
        <div className='center data-wrapper' key={ index }>
          <img src={ data.img } alt={ data.alt } />
          <Card title={ data.label } subtitle={ data.info } />
        </div>
        )
      )}
    </div>
  );
}

export default Projects;