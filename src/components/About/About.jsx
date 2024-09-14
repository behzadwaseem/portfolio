import React, { useEffect } from "react";
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import AOS from 'aos';
import 'aos/dist/aos.css';


export const About = () => {
    useEffect(() => {
        AOS.init({duration: 1000});
    })
    return (
        <section className={styles.aboutSection} id={'about'} data-aos={'fade-up'}>
            <container className={styles.aboutContainer}>
                <h1 className={styles.aboutTitle}>About Me</h1>
                <div className={styles.aboutSectionCard}>
                    <div className={styles.aboutContents}>
                        <img src={getImageUrl("about/avatar-2.png")} alt="memoji typing on laptop"/>
                        <div>
                            <p className={styles.aboutIntro}>I'm a Mechatronics Engineering student at UWaterloo. I'm passionate about <span>software engineering</span> and <span>robotics</span>.
                                <br/><br/>I'm especially interested in <span>computer vision</span> and its applications in robotics.
                                <br/><br/>In my free time, I'm either:</p>
                            <ul className={styles.aboutHobbies}>
                                <li>📚 Reading books</li>
                                <li>⚽️ Playing soccer</li>
                                <li>🚲 Bike Riding</li>
                                <li>😅 Regretting not buying NVIDIA when it was low...</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </container>
        </section>
    )
};