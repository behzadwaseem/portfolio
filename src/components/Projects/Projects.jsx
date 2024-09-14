import React, {useState, useEffect} from "react";
import styles from "./Projects.module.css";
import { getImageUrl } from "../../utils";
import projects from "../../data/projects.json";
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Projects = () => {
    useEffect(() => {
        AOS.init({duration: 1000});
    })
    return (
    <section className={styles.projectsSection} id={'projects'} data-aos={'fade-up'}>
        <container className={styles.projectsContainer}>
        <h1 className={styles.projectsTitle}>Featured Project</h1>
            <div className={styles.projectsContent}>
                    {projects.map((project, id) => {
                        return (
                            <div className={styles.projectsCard} key={id}>
                                <img  className={styles.projectsCardImg} src={getImageUrl(project.image)} alt={`${project.name} image`}/>
                                <div className={styles.projectsCardContent}>
                                    <h1 className={styles.projectsCardTitle}>{project.name}</h1>
                                    <p>{project.description}</p>
                                </div>
                                    <a className={styles.projectsCardBtn} href={project.git}>Learn More</a>
                            </div>
                        )
                    })}
                </div>
        </container>
    </section>
    )
}