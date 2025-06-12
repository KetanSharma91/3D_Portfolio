import { useEffect, useState } from "react";
import { navLinks } from "../constants";

const NavBar = () => {

    const [scrolled, setscrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const isScrolled = window.scrollY > 10;
            setscrolled(true);
        }

        window.addEventListener('scroll', handleScroll);

        return () => window.addEventListener('scroll', handleScroll);
    }, [])

    return (
        <header className={`navbar ${scrolled ? 'scrolled' : 'not-scrolled'}`} >
            <div className="inner">
                <a className="logo" href="#hero">Adrian | JSM</a>

                <nav className="desktop">
                    <ul>
                        {navLinks.map(({ link, name }) => (
                            <li className="group">
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className="underline" />
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>

                <a href="#contact" className="contact-btn group">
                    <div className="inner">Contact me</div>
                </a>
            </div>
        </header>
    )
}

export default NavBar;