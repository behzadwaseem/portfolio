import React, {useState, useEffect} from "react";
import { Tabs, ConfigProvider } from "antd";
import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";
import work from "../../data/work.json"
import AOS from 'aos';
import 'aos/dist/aos.css';

export const Experience = () => {
    useEffect(() => {
        AOS.init({duration: 1000});
    })
    return (
        <ConfigProvider
        theme={{
          components: {
            Tabs: {
              /* here is your component tokens */
              itemColor: "#ABA8A8",
              itemHoverColor: "#fff",
              itemSelectedColor: "#576cbc",
              inkBarColor: "#576cbc",
              titleFontSize: "1.5vw",
              cardPadding: "4px 8px",
              verticalItemPadding: 8,
              horizontalItemPadding: "4px 0",
              horizontalItemMargin: 0,
              horizontalMargin: 8,
            },
          },
        }}
      >
    
        <section className={styles.expSection} id={'experience'} data-aos={'fade-up'}>
        <container className={styles.expContainer}>
        <h1 className={styles.expTitle}>My Experience</h1>
        <div className={styles.expSectionCard}>
        <Tabs className={styles.expTable1}  tabPosition="left">
                    {work.map((job, id) => {
                        return (
                            <Tabs.TabPane tab={job.organization} className={styles.expPair} key={id}>
                                <div>
                                    {/* <img src={getImageUrl(job.logo)} alt="organization logo"/> */}
                                    <h1 className={styles.expPosition}>⭐️ {job.position}</h1>
                                    <p className={styles.expDates}>🗓️ {job.start} - {job.end}</p>
                                    <ul className={styles.expDescription}>
                                    {job.description1 && (
                                        <li>{job.description1}</li>
                                    )}
                                    {job.description2 && (
                                        <li>{job.description2}</li>
                                    )}
                                    </ul>
                                </div>
                            </Tabs.TabPane>
                        );
                    })}
                </Tabs>                   
                {/* table for smaller screens */}
                <Tabs className={styles.expTable2} centered>
                    {work.map((job, id) => {
                        return (
                            <Tabs.TabPane tab={job.organization} className={styles.expPair} key={id}>
                                <div>
                                    {/* <img src={getImageUrl(job.logo)} alt="organization logo"/> */}
                                    <h2 className={styles.expPosition}>⭐️ {job.position}</h2>
                                    <p className={styles.expDates}>🗓️ {job.start} - {job.end}</p>
                                    <ul className={styles.expDescription}>
                                    {job.description1 && (
                                        <li>{job.description1}</li>
                                    )}
                                    {job.description2 && (
                                        <li>{job.description2}</li>
                                    )}
                                    </ul>
                                </div>
                            </Tabs.TabPane>
                        );
                    })}
                </Tabs>
            </div>
            {work.map((job, id) => {
                return (
                    <div className={styles.expSectionCardSmall} key={id}>
                        <div>
                            {/* <img src={getImageUrl(job.logo)} alt="organization logo"/> */}
                            <h1 className={styles.expPosition}>{job.position}</h1>
                            <hr className={styles.bar}/>
                            <h3 className={styles.expOrg}>📍 {job.organization}</h3>
                            <p className={styles.expDates}>🗓️ {job.start} - {job.end}</p>
                            <ul className={styles.expDescription}>
                            {job.description1 && (
                                <li>{job.description1}</li>
                            )}
                            {job.description2 && (
                                <li>{job.description2}</li>
                            )}
                            </ul>
                        </div>
                    </div>
                );
            })}
        </container>
    </section>
    </ConfigProvider> 
    );
};