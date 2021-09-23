import React, { useState } from 'react';
import Link from 'next/link';
import Nav from '../Nav/Nav';
import { LogoIcon } from '../Icons/Logo';


const Header = () => {
    const [showNav, setShowNav] = useState(true);
    const [isShadowed, setIsShadowed] = useState(false);
    const [scrollPos, setScrollPos] = useState(global.pageYOffset);

    global.onscroll = () => {
        const currentScrollPos = global.pageYOffset;
        if (currentScrollPos < 40) {
            setShowNav(true);
            setIsShadowed(false);
        } else if (scrollPos > currentScrollPos) {
            setShowNav(true);
            setIsShadowed(true);
        } else {
            setShowNav(false);
            setIsShadowed(true);
        }
        setScrollPos(currentScrollPos);
    };

    return (
        <header data-scroll-header className={`header ${showNav ? 'header--visible' : ''} ${isShadowed ? 'header--shadowed' : ''}`}>
            <div className="header__container l-padding-horz-lg l-padding-vert-md">
                <Link href="/">
                    <div className="header__logo">
                        <LogoIcon />
                    </div>
                </Link>
                <div className="header__nav h-h3">
                    <Nav />
                </div>
            </div>
        </header>
    );
};

export default Header;
