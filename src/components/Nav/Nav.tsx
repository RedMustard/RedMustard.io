import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';


const Nav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOnClick = () => {
        if (isOpen) {
            setIsOpen(false);
        } else {
            setIsOpen(true);
        }
    };

    return (

        <nav className="nav">
            <button
                type="button"
                className={`nav__menu h-link-like ${isOpen ? 'nav__menu--open' : ''}`}
                onClick={handleOnClick}
            >
                <Image className="nav__menu-icon l-padding-horz-sm" src="/images/menu.svg" alt="Menu" width="40" height="40" />
            </button>

            <div className={`nav__links-container ${isOpen ? 'nav__links-container--open' : ''}`}>
                <div className="nav-links">
                    <Link href="/#about">
                        <button onClick={handleOnClick} type="button" className="nav-links__link h-link-like">About</button>
                    </Link>
                    <Link href="/#work">
                        <button onClick={handleOnClick} type="button" className="nav-links__link h-link-like">Work</button>
                    </Link>
                    <Link href="/#projects">
                        <button onClick={handleOnClick} type="button" className="nav-links__link h-link-like">Projects</button>
                    </Link>
                    <Link href="/blog">
                        <button onClick={handleOnClick} type="button" className="nav-links__link h-link-like">Blog</button>
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Nav;
