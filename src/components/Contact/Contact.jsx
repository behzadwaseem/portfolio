import React, {useState, useEffect} from "react";
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Contact = () => {
    useEffect(() => {
        AOS.init({duration: 1000});
    })
    return (
        <section className={styles.contact}>
            <div className={styles.contactClosing} data-aos={'zoom-in'}>
                <h2>Feel free to reach out!</h2>
                <p>I'm always looking for opportunities to challenge myself and apply my skills.</p>
                <p>Send me an email and I'll get back to you as soon as possible!</p>
                <br/>
                <a  className={styles.contactMeBtn} href={"mailto:behzadwaseem05@gmail.com"}>Contact Me</a>
            </div>
            <footer className={styles.contactFooter}>
                    <ul clasName={styles.contactSocial}>
                        <li className={styles.contactSocialLink}><a href="https://linkedin.com/in/behzadwaseem">LinkedIn</a></li>
                        <li className={styles.contactSocialLink}><a href="https://github.com/behzadwaseem">GitHub</a></li>
                    </ul>
                    <hr/>
                    <h4>Made by Behzad Waseem.</h4>
            </footer>
        </section>
    )
}