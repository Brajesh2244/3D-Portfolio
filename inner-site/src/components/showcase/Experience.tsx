import React from 'react';
import ResumeDownload from './ResumeDownload';

export interface ExperienceProps {}

const Experience: React.FC<ExperienceProps> = (props) => {
    return (
        <div className="site-page-content">
            <ResumeDownload />
            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Tap Academy</h1>
                        <a
                            rel="noreferrer"
                            target="_blank"
                            href={'https://tapacademy.com/'}
                        >
                            <h4>www.tapacademy.com</h4>
                        </a>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Java Developer Intern</h3>
                        <b>
                            <p>April 2026 – Present | Bengaluru, India</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <p>
                    Full stack Java development encompassing backend enterprise architecture and responsive modern frontends.
                    Leveraging Core Java, Spring Boot, Spring AI, Hibernate, MySQL, and React.js.
                </p>
                <br />
                <ul>
                    <li>
                        <p>
                            Developed and maintained scalable full-stack web applications and RESTful APIs using Core Java, Advanced Java, Spring Boot, Spring AI, JDBC, Hibernate, and MySQL.
                        </p>
                    </li>
                    <li>
                        <p>
                            Built responsive and interactive frontend interfaces using React.js, JavaScript, HTML5, and Tailwind CSS, integrating them seamlessly with backend services and REST APIs.
                        </p>
                    </li>
                    <li>
                        <p>
                            Applied Object-Oriented Programming (OOP), Collections framework, Multithreading, Exception Handling, and Java 8 functional features (Streams & Lambdas).
                        </p>
                    </li>
                    <li>
                        <p>
                            Optimized complex database queries, conducted application debugging, and managed code collaboration with Git and GitHub, improving reliability and performance.
                        </p>
                    </li>
                </ul>
            </div>

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Education</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Academic Qualifications</h3>
                        <b>
                            <p>2020 – 2025</p>
                        </b>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <ul>
                    <li>
                        <p>
                            <b>Master of Computer Applications (MCA)</b> — Nov 2023 – Nov 2025
                        </p>
                        <p>
                            Sir M. Visvesvaraya Institute of Technology, VTU, Bangalore, India | <b>CGPA: 8.8 / 10.0</b>
                        </p>
                    </li>
                    <br />
                    <li>
                        <p>
                            <b>Bachelor of Computer Applications (BCA)</b> — Jun 2020 – Jul 2023
                        </p>
                        <p>
                            Jharkhand Rai University, Ranchi, India | <b>CGPA: 7.9 / 10.0</b>
                        </p>
                    </li>
                </ul>
            </div>

            <div style={styles.headerContainer}>
                <div style={styles.header}>
                    <div style={styles.headerRow}>
                        <h1>Achievements & Certifications</h1>
                    </div>
                    <div style={styles.headerRow}>
                        <h3>Honors & Continuous Learning</h3>
                    </div>
                </div>
            </div>
            <div className="text-block">
                <ul>
                    <li style={styles.row}>
                        <p>• <b>2nd Place Winner, Sir MVIT Hackathon</b></p>
                        <p>[ 200+ Participants ]</p>
                    </li>
                    <p style={{ marginLeft: 16 }}>
                        Engineered optimized Java-based algorithmic solutions under strict time constraints, securing 2nd place.
                    </p>
                    <br />
                    <li style={styles.row}>
                        <p>• <b>Web Development Certification — Internshala</b></p>
                        <p>[ HTML5 & CSS3 ]</p>
                    </li>
                    <p style={{ marginLeft: 16 }}>
                        Completed comprehensive technical training and practical application in modern responsive web design.
                    </p>
                    <br />
                    <li style={styles.row}>
                        <p>• <b>Campus Hero Webinar — Coding Ninjas</b></p>
                        <p>[ Advanced Coding ]</p>
                    </li>
                    <p style={{ marginLeft: 16 }}>
                        Participated in specialized technical career development sessions focused on advanced coding insights and system design.
                    </p>
                </ul>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        width: '100%',
    },
    skillRow: {
        flex: 1,
        justifyContent: 'space-between',
    },
    skillName: {
        minWidth: 56,
    },
    skill: {
        flex: 1,
        padding: 8,
        alignItems: 'center',
    },
    progressBar: {
        flex: 1,
        background: 'red',
        marginLeft: 8,
        height: 8,
    },
    hoverLogo: {
        height: 32,
        marginBottom: 16,
    },
    headerContainer: {
        alignItems: 'flex-end',
        width: '100%',
        justifyContent: 'center',
    },
    hoverText: {
        marginBottom: 8,
    },
    indent: {
        marginLeft: 24,
    },
    headerRow: {
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    row: {
        display: 'flex',
        justifyContent: 'space-between',
    },
};

export default Experience;
