import { Link } from 'react-router-dom';
import './DesktopHeader.scss';
import navigationData from '../../../data/navigation.json';
import { handleDownload } from '../download-resume';

const DesktopHeader = () => {
    return (
        <nav className='main-nav'>
            { navigationData.map((data, index) => (
                <Link key={ index } to={ data.path }
                    onClick={ data.download ? handleDownload : undefined }>
                    { data.label }
                </Link>
                )
            )}
        </nav>
    );
}

export default DesktopHeader;