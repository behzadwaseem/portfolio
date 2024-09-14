import React, {useEffect} from "react";
import styles from './Hero.module.css';
import { getImageUrl } from "../../utils";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Hero = () => {
    useEffect(() => {
        AOS.init({duration: 1000});
    })
    // return <section style="getImageUrl={portfolio-banner.jpeg}">
    return (<section className={styles.heroSection} id={'hero'} data-aos={'fade-in'}>
        <container className={styles.banner}>
            <div className={styles.heroSectionText}>
                <h1 className={styles.heroHeading}>Hi, I'm Behzad!</h1>
                <h1 className={styles.heroText}>
                <div className={styles.typeWriter}>
                    <span>
                    Software Engineer<br/>
                    Mechatronics Engineering Student @ UWaterloo<br/>
                    Full-Stack Developer<br/>
                    Robotics Enthusiast<br/>
                    Computer Vision Nerd
                    </span>
                </div>
                </h1>
                <p className={styles.heroParagraph}><span className={styles.highlight}>Surfing the internet can be tiring sometimes. 
                <br></br><br></br>Feel free to rest here as long as you need and take a look around!</span></p>
            </div>
            <img src={getImageUrl("hero/down-arrow.png")} alt="downward arrow"/>
        </container>
    </section>
    )
};
