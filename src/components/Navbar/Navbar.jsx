import React, {useState, useEffect} from 'react';
import {Link} from 'react-scroll';
import styles from './Navbar.module.css';
import {getImageUrl} from '../../utils';
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Navbar = () => {
    useEffect(() => {
        AOS.init({startEvent: 'DOMContentLoaded', duration: 1000});
    })
   const [menuOpen, setMenuOpen] = useState(false);
 
    return (
        <section className={styles.navsection}>
            <nav className={styles.navbar} id="nav">
                <Link className={styles.title} to="hero" spy={true} smooth={true} offset={-100} duration={500} href='/'>Behzad Waseem</Link>
                <container className={styles.menu}>
                    <img className={styles.menuBtn} src={menuOpen
                    ? getImageUrl('navbar/menuClose-icon.png')
                    : getImageUrl('navbar/menu-icon.png')
                    } alt='menu-button'
                    onClick={() => setMenuOpen(!menuOpen)}
                    />
                        <ul className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
                        onClick={() => setMenuOpen(false)} id="nav" data-aos={'fade-up'}>
                            <li className={styles.notConnect}><Link to="about" spy={true} smooth={true} offset={-110} duration={500} href='#about'>About</Link></li>
                            <li className={styles.notConnect}><Link to="skills" spy={true} smooth={true} offset={-50} duration={500} href='#skills'>Skills</Link></li>
                            <li className={styles.notConnect}><Link to="experience" spy={true} smooth={true} offset={-150} duration={500} href='#experience'>Experience</Link></li>
                            <li className={styles.notConnect}><Link to="projects" spy={true} smooth={true} offset={-50} duration={500} href='#projects'>Projects</Link></li>
                            <li className={styles.listConnect}><a href='mailto:behzadwaseem05@gmail.com'>Connect</a></li>
                        </ul>
                    <button className={styles.connectBtn}>
                        <a href='mailto:testemail@gmail.com'>Let's Connect</a>
                        {/* <a href='#connect'><span className={styles.connectBtnText}>Let's Connect</span></a> */}
                    </button>
                </container>
            </nav>
        </section>
    )
}
