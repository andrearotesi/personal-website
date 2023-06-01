import { Link } from 'react-router-dom';
import './DesktopHeader.scss';
import navigationData from '../../../data/navigation.json';
import { openResume } from '../open-resume';

const DesktopHeader = () => {
    return (
        <nav className='main-nav'>
            { navigationData.map((data, index) => (
                <Link key={ index } to={ data.path }
                    onClick={ data.download ? openResume : undefined }>
                        { data.label }
                </Link>
                )
            )}
        </nav>
    );
}

export default DesktopHeader;