import React, { useEffect, useState } from 'react';
import './Header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    const [mobileMenu, setMobileMenu] = useState<boolean>(false);

    return (
        <header>

            <div className='header-box'>

                <h2>Ernesto Amorim</h2>

                <nav className='header-menu'>
                    <span className='list-item selected'>Home</span>
                    <span className='list-item'>Projects</span>
                    <span className='list-item'>About</span>
                    <span className='list-item'>Contact</span>
                </nav>

                <FontAwesomeIcon className='mobile-menu' icon={faBars} />

            </div>

        </header>
    )
}