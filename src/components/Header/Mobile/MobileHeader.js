import { useState } from 'react';
import './MobileHeader.scss';
import { Link } from 'react-router-dom';
import Socials from '../../../components/Socials/Socials';
import navigationData from '../../../data/navigation.json';
import { openResume } from '../open-resume';


const MobileHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    
    return (
        <div className={`MobileMenu ${isOpen ? 'open' : ''}`}>
            <span onClick={toggleMenu} className='burger material-symbols-outlined'>
                {isOpen ? 'close' : 'menu'}
            </span>
            {isOpen && (
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
            )}
        </div>
    );
}

export default MobileHeader;
