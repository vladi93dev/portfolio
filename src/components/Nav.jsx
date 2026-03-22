import { useEffect } from 'react';

function Nav() {
    useEffect(() => {
        // Nav scroll effect
        const nav = document.getElementById("nav");
        window.addEventListener("scroll", () => {
        nav.classList.toggle("scrolled", window.scrollY > 40);    });
    }, []);
    
    return (
        <nav id="nav">
            <a className="nav-logo" href="#">
                VK
            </a>
            <ul className="nav-links">
                <li>
                <a href="#stack">Stack</a>
                </li>
                <li>
                <a href="#projects">Projects</a>
                </li>
                <li>
                <a href="#contact">Contact</a>
                </li>
            </ul>
        </nav>
    )
}

export default Nav;