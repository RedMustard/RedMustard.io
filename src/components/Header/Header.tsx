import React from 'react';
import Link from 'next/link';
import Nav from '../Nav/Nav';


const Header = () => (
    <header className="header">
        <Link href="/">
            <div className="header__title">
                RedMustard.io
            </div>
        </Link>
        <div className="header__nav">
            <Nav />
        </div>
    </header>
);

export default Header;
