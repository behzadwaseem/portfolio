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
                <h1 className={styles.heroText}>I'm an aspiring
                <div className={styles.typeWriter}>
                    <span>
                    Creator<br/>
                    Software Developer<br/>
                    UWaterloo Mathematics Student<br/>
                    Robot Builder
                    </span>
                </div>
                </h1>
                <p className={styles.heroParagraph}><span className={styles.highlight}>Surfing the internet can be tiring sometimes. 
                <br></br><br></br>Feel free to rest here as long as you need and take a look around!</span></p>
            </div>
                {/* <img className={styles.banner} src={getImageUrl("portfolio-banner.jpeg")} alt="campfire-banner-image"/> */}
        </container>
    </section>
    )
};