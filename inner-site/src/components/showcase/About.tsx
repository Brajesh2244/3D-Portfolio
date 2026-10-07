import React from 'react';
import me from '../../assets/pictures/workingAtComputer.jpg';
import meNow from '../../assets/pictures/currentme.jpg';
import { Link } from 'react-router-dom';
import ResumeDownload from './ResumeDownload';

export interface AboutProps {}

const About: React.FC<AboutProps> = (props) => {
    return (
        // add on resize listener
        <div className="site-page-content">
            {/* <img src={me} style={styles.topImage} alt="" /> */}
            <h1 style={{ marginLeft: -16 }}>Welcome</h1>
            <h3>I'm Brajesh Kumar</h3>
            <br />
            <div className="text-block">
                <p>
                    I'm a detail-oriented Java Full Stack Developer and MCA graduate based in Bengaluru, India.
                    Currently, I'm working as a Java Developer Intern at Tap Academy, developing full-stack web applications
                    and RESTful APIs using Core Java, Advanced Java, Spring Boot, Spring AI, Hibernate, MySQL, and React.js.
                </p>
                <br />
                <p>
                    Thank you for visiting my interactive 3D retro portfolio! I built this experience
                    to showcase my full-stack capabilities, academic projects, and passion for software engineering.
                    If you have an opportunity or want to collaborate, feel free to contact me using{' '}
                    <Link to="/contact">the contact window</Link> or shoot me an email at{' '}
                    <a href="mailto:brajesh552077@gmail.com">
                        brajesh552077@gmail.com
                    </a>
                    .
                </p>
            </div>
            <ResumeDownload />
            <div className="text-block">
                <h3>About Me</h3>
                <br />
                <p>
                    My passion for technology began with an innate curiosity for how software systems work and scale.
                    I pursued my Bachelor of Computer Applications (BCA) at Jharkhand Rai University, Ranchi (graduating with a 7.9 CGPA),
                    where I developed a strong foundation in Object-Oriented Programming (OOP), Data Structures, and Database Management.
                </p>
                <br />
                <p>
                    To deepen my technical expertise, I completed my Master of Computer Applications (MCA) at
                    Sir M. Visvesvaraya Institute of Technology (VTU, Bangalore) graduating with an outstanding 8.8 CGPA.
                    During my master's, I competed in the Sir MVIT Hackathon and won 2nd Place among 200+ participants by engineering
                    optimized Java algorithmic solutions under strict time constraints.
                </p>
                <br />
                <div className="captioned-image">
                    <img src={me} style={styles.image} alt="" />
                    <p>
                        <sub>
                            <b>Figure 1:</b> Coding, engineering APIs, and exploring cutting-edge AI-assisted developer workflows.
                        </sub>
                    </p>
                </div>

                <p>
                    In April 2026, I joined Tap Academy as a Java Developer Intern. My work involves designing and maintaining
                    enterprise-grade web applications and RESTful APIs using Spring Boot, Spring AI, JDBC, Hibernate, and MySQL,
                    while crafting responsive, interactive frontends using React.js, JavaScript, HTML5, and Tailwind CSS.
                    I specialize in applying OOP, Collections, Multithreading, Exception Handling, and Java 8 features to optimize
                    database queries and maximize application performance.
                </p>
                <br />
                <p>
                    I also actively embrace AI-assisted development tools—such as Cursor AI, Antigravity AI, Gemini, ChatGPT,
                    and GitHub Copilot—leveraging prompt engineering and agentic workflows to accelerate feature delivery,
                    debugging, and code quality. You can see examples of my applications in the{' '}
                    <Link to="/projects/software">Software Projects</Link> section.
                </p>
                <br />
                <br />
                <div>
                    <div
                        style={{
                            flex: 1,
                            textAlign: 'justify',
                            alignSelf: 'center',
                            flexDirection: 'column',
                        }}
                    >
                        <h3>My Focus & Soft Skills</h3>
                        <br />
                        <p>
                            Beyond writing clean, testable code, I value strong communication, teamwork, adaptability,
                            analytical thinking, and effective time management. I thrive in collaborative cross-functional
                            teams that tackle complex architectural problems.
                        </p>
                        <br />
                        <p>
                            In my free time, I participate in technical career webinars, explore emerging AI integrations (such as
                            Spring AI and LLM tool-calling), solve coding challenges, and experiment with creative 3D web technologies like Three.js.
                        </p>
                    </div>
                    <div style={styles.verticalImage}>
                        <img src={meNow} style={styles.image} alt="" />
                        <p>
                            <sub>
                                <b>Figure 2:</b> Bengaluru, India | 2026
                            </sub>
                        </p>
                    </div>
                </div>
                <br />
                <br />
                <p>
                    Thanks for exploring my portfolio! Feel free to test out the desktop apps, play classic DOOM or Oregon Trail,
                    or check out my resume and project repositories.
                </p>
                <br />
                <p>
                    If you'd like to get in touch, feel free to reach out via the{' '}
                    <Link to="/contact">contact page</Link>, drop an email at{' '}
                    <a href="mailto:brajesh552077@gmail.com">
                        brajesh552077@gmail.com
                    </a>
                    , or call <a href="tel:+919117252022">+91-9117252022</a>.
                </p>
            </div>
        </div>
    );
};

const styles: StyleSheetCSS = {
    contentHeader: {
        marginBottom: 16,
        fontSize: 48,
    },
    image: {
        height: 'auto',
        width: '100%',
    },
    topImage: {
        height: 'auto',
        width: '100%',
        marginBottom: 32,
    },
    verticalImage: {
        alignSelf: 'center',
        // width: '80%',
        marginLeft: 32,
        flex: 0.8,

        alignItems: 'center',
        // marginBottom: 32,
        textAlign: 'center',
        flexDirection: 'column',
    },
};

export default About;
