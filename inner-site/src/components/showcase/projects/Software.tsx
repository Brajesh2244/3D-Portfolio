import React from 'react';
// @ts-ignore
import ecommerce from '../../../assets/pictures/projects/software/ecommerce.mp4';
// @ts-ignore
import computer from '../../../assets/pictures/projects/software/computer.mp4';
// @ts-ignore
import foodiehub from '../../../assets/pictures/projects/software/foodiehub.mp4';
import ResumeDownload from '../ResumeDownload';
import VideoAsset from '../../general/VideoAsset';

export interface SoftwareProjectsProps {}

const SoftwareProjects: React.FC<SoftwareProjectsProps> = (props) => {
    return (
        <div className="site-page-content">
            <h1>Software</h1>
            <h3>Projects</h3>
            <br />
            <p>
                Below are some of my favorite software projects I have worked on
                over the last few years.
            </p>
            <br />
            <ResumeDownload />
            <br />
            <div className="text-block">
                <h2>Interactive 3D Portfolio Website</h2>
                <br />
                <p>
                    This is my interactive 3D retro portfolio website, running live right in front of you.
                    Built to combine an immersive isometric 3D workspace with a nostalgic Windows 98-inspired OS,
                    this project challenged me both creatively and technically in modern frontend engineering.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={computer} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 1:</b> 3D CRT monitor, desk environment, and real-time WebGL rendering pipeline.
                        </sub>
                    </p>
                </div>
                <p>
                    The project consists of two seamlessly integrated layers:
                    The 3D outer environment is powered by Three.js with custom GLSL shaders, camera animation controls,
                    and spatial audio. Inside the CRT monitor, a full React operating system is rendered into 3D space
                    using Three.js CSS3DRenderer with two-way pointer event propagation.
                </p>
                <br />
                <h3>Tech Stack & Tools:</h3>
                <ul>
                    <li>
                        <p><b>Three.js & WebGL</b> - 3D Scene, lighting, shadows, and camera management</p>
                    </li>
                    <li>
                        <p><b>React & TypeScript</b> - Retro OS desktop, window manager, and interactive apps</p>
                    </li>
                    <li>
                        <p><b>Webpack & CSS3D</b> - Modular bundling and 3D screen matrix projection</p>
                    </li>
                </ul>
            </div>

            <div className="text-block">
                <h2>AI-Enhanced E-Commerce Platform | Full Stack Java</h2>
                <br />
                <p>
                    An end-to-end full-stack e-commerce web platform engineered with Core Java, Servlets, JSP, JDBC, SQL,
                    and a dynamic React.js frontend styled with Tailwind CSS. It supports robust role-based authentication,
                    searchable product catalog, cart persistence, and order processing.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={ecommerce} />
                    <div style={styles.caption}>
                        <p>
                            <sub>
                                <b>Figure 2: </b> E-Commerce platform walkthrough & demo.
                            </sub>
                        </p>
                    </div>
                </div>
                <p>
                    The platform implements a clean MVC architecture that strictly separates UI presentation from business
                    and data-access layers. JDBC connectivity and optimized SQL queries handle high-concurrency CRUD operations
                    with connection pooling for minimal latency.
                </p>
                <br />
                <h3>Key Highlights:</h3>
                <ul>
                    <li>
                        <p><b>Architecture:</b> MVC design pattern with decoupled DAO and service layers for maintainability.</p>
                    </li>
                    <li>
                        <p><b>Frontend:</b> Responsive SPA crafted with React.js, Tailwind CSS, and HTML5/CSS3.</p>
                    </li>
                    <li>
                        <p><b>Database:</b> Relational MySQL schema with indexed tables and ACID-compliant transactional integrity.</p>
                    </li>
                    <li>
                        <p><b>AI-Assisted:</b> Leveraged AI-powered developer tooling for accelerated debugging, testing, and schema design.</p>
                    </li>
                </ul>
            </div>

            <div className="text-block">
                <h2>AI-Assisted Food Delivery Application | Full Stack Java</h2>
                <br />
                <p>
                    A scalable web application built for restaurant browsing, interactive menu management, and real-time order tracking.
                    Designed with an intuitive user interface using React.js and Tailwind CSS, backed by a resilient Java/JDBC data layer.
                </p>
                <br />
                <div className="captioned-image">
                    <VideoAsset src={foodiehub} />
                    <p style={styles.caption}>
                        <sub>
                            <b>Figure 3:</b> FoodieHub food delivery application live demo.
                        </sub>
                    </p>
                </div>
                <p>
                    Engineered to handle high-throughput order updates and status notifications. Utilized JDBC batch processing
                    to optimize database transactions for peak order volumes. Comprehensive test cases were applied to core flows
                    to eliminate state synchronization issues and ensure exceptional reliability.
                </p>
                <br />
                <h3>Key Highlights:</h3>
                <ul>
                    <li>
                        <p><b>Order Lifecycle:</b> End-to-end order tracking from restaurant kitchen dispatch to customer delivery.</p>
                    </li>
                    <li>
                        <p><b>Performance:</b> Optimized query execution and caching to keep API response times under 100ms.</p>
                    </li>
                    <li>
                        <p><b>Version Control:</b> Git and GitHub feature-branch workflows with continuous integration standards.</p>
                    </li>
                </ul>
            </div>
            <ResumeDownload />
        </div>
    );
};

const styles: StyleSheetCSS = {
    video: {
        width: '100%',
        padding: 12,
    },
    caption: {
        width: '80%',
    },
};

export default SoftwareProjects;
