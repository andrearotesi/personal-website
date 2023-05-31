import { useState } from 'react';
import './MobileHeader.scss';
import { Link } from 'react-router-dom';
import Socials from '../../../components/Socials/Socials';

const MobileHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const menuItems = [
        { to: '/', label: 'Home' },
        { to: '/projects', label: 'Projects' },
        { to: '/resume', label: 'Résumé' },
        { to: '/contact', label: 'Contact' },
    ];
    
    return (
        <div>
            <span onClick={ toggleMenu } class='burger material-symbols-outlined'>
                menu
            </span>
            { isOpen && (
                <div className='MobileMenu'>
                    <span onClick={ toggleMenu } class='burger material-symbols-outlined'>
                        close
                    </span>
                    <div className='menu-items'>
                        { menuItems.map((item, index) => (
                                <Link key={ index } to={ item.to } onClick={ toggleMenu }>
                                    { item.label }
                                </Link>
                            )
                        )}
                    </div>
                    <Socials/>
                </div>
            )}
        </div>
    );
}

export default MobileHeader;