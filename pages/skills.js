import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaLinux, FaGit } from 'react-icons/fa';
import { SiJquery, SiMysql, SiC, SiCplusplus, SiVisualstudio, SiEclipseide } from 'react-icons/si';

export default function SkillsPage() {
    return (
        <div className="skills-container">
            <div className='f-d-r'>
                <div>
                    <div className="f-d-c al-center justify-sb skills-div">
                        <h2 className="">Techs</h2>
                        <ul className="">
                            <li className="skill-item">
                                <FaReact className="skill-icon" />
                                <p>React JS</p>
                            </li>
                            <li className="skill-item">
                                <FaNodeJs className="skill-icon" />
                                <p>Node JS</p>
                            </li>
                            <li className="skill-item">
                                <SiJquery className="skill-icon" />
                                <p>jQuery</p>
                            </li>
                            <li className="skill-item">
                                <FaPython className="skill-icon" />
                                <p>Python</p>
                            </li>
                            <li className="skill-item">
                                <SiMysql className="skill-icon" />
                                <p>MySQL</p>
                            </li>
                            <li className="skill-item">
                                <FaLinux className="skill-icon" />
                                <p>Linux</p>
                            </li>
                        </ul>
                    </div>
                    <div className="f-d-c al-center justify-sb skills-div">
                            <h2 className="">IDE</h2>
                            <ul className="">
                                <li className="skill-item">
                                    <SiVisualstudio className="skill-icon" />
                                    <p>Visual Studio</p>
                                </li>
                                <li className="skill-item">
                                    <SiEclipseide className="skill-icon" />
                                    <p>Eclipse</p>
                                </li>
                            </ul>
                    </div>
                    <div className="f-d-c al-center justify-sb skills-div">
                            <h2 className="">Version Control</h2>
                            <ul className="">
                                <li className="skill-item">
                                    <FaGit className="skill-icon" />
                                    <p>Git</p>
                                </li>
                            </ul>
                        </div>
                        <div className="f-d-c al-center justify-sb skills-div">
                        <h2 className="">Languages</h2>
                        <ul className="">
                            <li className="skill-item">
                                <SiC className="skill-icon" />
                                <p>C</p>
                            </li>
                            <li className="skill-item">
                                <SiCplusplus className="skill-icon" />
                                <p>C++</p>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>        
        </div>
    );
}
