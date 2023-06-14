import { useState } from 'react';
import './MobileHeader.scss';
import { Link } from 'react-router-dom';
import Socials from '../../../components/Socials/Socials';
import navigationData from '../../../data/navigation.json';
import { openResume } from '../open-resume';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';


const MobileHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <div>
            <MenuIcon onClick={toggleMenu} className='toggle'/>
            <div className={`MobileMenu ${isOpen ? 'open' : ''}`}>
                {isOpen && (
                    <div>
                        <CloseIcon onClick={toggleMenu} className='toggle'/>
                        <section className='center'>
                            <div className='menu-items'>
                                {navigationData.map((data, index) => (
                                <p key={index} onClick={toggleMenu}>
                                    <Link to={data.path}
                                    onClick={data.download ? openResume : undefined}>
                                    {data.label}
                                    </Link>
                                </p>
                                ))}
                            </div>
                            <Socials />
                        </section>
                    </div>
                )}
            </div>
        </div>
    );
}

export default MobileHeader;
