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
                        { navigationData.map((data, index) => (
                            <p onClick={ toggleMenu }>
                                <Link key={ index } to={ data.path }
                                    onClick={ data.download ? openResume : undefined }>
                                    { data.label }
                                </Link>
                            </p>
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
