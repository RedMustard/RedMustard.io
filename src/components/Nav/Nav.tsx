import React from 'react';
import Link from 'next/link';


const Nav = () => {
    // const [isOpen, setIsOpen] = useState(false);

    return (

        <nav className="nav">
            <Link href="/">
                <button type="button" className="nav__link h-link-like">Home</button>
            </Link>
            <Link href="/projects">
                <button type="button" className="nav__link h-link-like">Projects</button>
            </Link>
            <Link href="/about">
                <button type="button" className="nav__link h-link-like">About</button>
            </Link>
            <Link href="/blog">
                <button type="button" className="nav__link h-link-like">Blog</button>
            </Link>
        </nav>
    );
};

export default Nav;
