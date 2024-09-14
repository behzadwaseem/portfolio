import React, { useEffect } from "react";
import styles from "./Skills.module.css";
import { getImageUrl } from "../../utils";
import skills from "../../data/skills.json";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Skills = () => {
    useEffect(() => {
        AOS.init({duration: 1000});
    })
    return ( 
    <section className={styles.skillsSection} id={'skills'} data-aos={'fade-up'}>
        <container className={styles.skillsContainer}>
            <h1 className={styles.skillsTitle}>Some <span>Skills</span> I've Picked Up</h1>
            <div className={styles.skillsContent}>
                {skills.map((skill, id) => {
                    return (
                        <div className={styles.skillsPair} key={id}>
                            <div>
                                <img src={getImageUrl(skill.logo)} alt={skill.skill}/>
                            </div>
                            <p>{skill.skill}</p>
                        </div>
                    );
                })}
            </div>
        </container>
    </section>
    )
};