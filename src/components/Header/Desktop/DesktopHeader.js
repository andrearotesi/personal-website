import { Link } from 'react-router-dom';
import './DesktopHeader.scss';

const DesktopHeader = () => {
    return (
        <nav className='main-nav'>
            <Link to='/'>Home</Link>
            <Link to='/projects'>Projects</Link>
            <Link to='/resume'>Résumé</Link>
            <Link to='/contact'>Contact</Link>
        </nav>
    );
}

export default DesktopHeader;