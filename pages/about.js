import { CgProfile } from "react-icons/cg";
import { FaLaptopCode } from "react-icons/fa6";
import { IoMailUnreadOutline } from "react-icons/io5";
import { CiLinkedin } from "react-icons/ci";
import { MdPhoneAndroid } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import SkillsPage from "./skills";
import { useEffect, useState } from "react";
export default function About({isDarkBg, ref}) {

   const [scrollY, setScrollY] = useState(0);

   useEffect(() => {
      const handleScroll = () => {
        if (window.innerWidth > 600) {
          setScrollY(window.scrollY);
        }
      };
  
      const handleResize = () => {
        if (window.innerWidth > 600) {
          setScrollY(0);
        }
      };
  
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
        window.removeEventListener('resize', handleResize);
      };
    }, []);
  

  
    return (
     <div className={`${isDarkBg ? 'yellow-bg' : 'blue-bg'} about-parent-div`} id='about-parent-div' ref={ref}>
         <div className="f-d-r about-internal-div">
         <div className="f-d-c al-center justify-center mobile-about-div">
                  
                  <div className="my-profile-icon m-all-10 profile-bg">
                     <img src='https://port2bucket.s3.amazonaws.com/girl-work.gif' style={{'height':'20rem', 'width':'15rem'}}/>
                  </div>
                  <div className="">
                     <div style={{'margin':'1rem'}} className="f-d-r al-fs justify-sb">
                        <div>
                              <div className="f-d-r"> 
                                 <CgProfile style={{'height':'3.5rem', 'width':'3rem','margin-right':'0.5rem'}}/>
                                 <p>Jyothisree Malleswarapu</p>
                              </div>
                              <div className="f-d-r"> 
                                 <FaLaptopCode style={{'height':'3.5rem', 'width':'3rem', 'margin-right':'1rem'}}/>
                                 <p>SDE @ Zivame</p>
                              </div>
                              <div className="f-d-r"> 
                                 <IoMailUnreadOutline style={{'height':'3.5rem', 'width':'3rem', 'margin-right':'1rem'}}/>
                                 <p>jyothisree327@gmail.com</p>
                              </div>
                              <div className="f-d-r"> 
                                 <a className="f-d-r" href="https://www.linkedin.com/in/jyothisree327/" target="__blank" style={{'text-decoration':'underline'}}>
                                    <CiLinkedin style={{'height':'3.5rem', 'width':'3rem', 'margin-right':'1rem'}}/>
                                    <p>LinkedIn Profile</p>
                                 </a> 
                              </div>
                              <div className="f-d-r"> 
                                 <MdPhoneAndroid style={{'height':'3.5rem', 'width':'3rem', 'margin-right':'1rem'}}/>
                                 <p>+91 9959633718</p>
                              </div>
                              <div className="f-d-r"> 
                                 <CiLocationOn style={{'height':'3.5rem', 'width':'3rem', 'margin-right':'1rem'}}/>
                                 <p>Bengaluru</p>
                              </div>
                        </div>
                     </div>   
                  </div>
               </div>
               <div  className='side-bar' style={{ top: scrollY + 'px' }} >
                  <SkillsPage />

               </div>
            
            <div className="f-d-c">
               <div className="f-d-r al-center justify-sb desktop-about-div">
                  <div className="">
                     <div style={{'margin':'1rem'}} className="f-d-r al-fs justify-sb">
                        <div>
                              <div className="f-d-r al-center"> 
                                 <CgProfile style={{'height':'3.5rem', 'width':'3rem','margin-right':'1rem'}}/>
                                 <p>Jyothisree Malleswarapu</p>
                              </div>
                              <div className="f-d-r al-center"> 
                                 <FaLaptopCode style={{'height':'3.5rem', 'width':'3rem', 'margin-right':'1rem'}}/>
                                 <p>SDE @ Zivame</p>
                              </div>
                              <div className="f-d-r al-center"> 
                                 <IoMailUnreadOutline style={{'height':'3.5rem', 'width':'3rem', 'margin-right':'1rem'}}/>
                                 <p>jyothisree327@gmail.com</p>
                              </div>
                              <div className="f-d-r al-center"> 
                                 <a className="f-d-r" href="https://www.linkedin.com/in/jyothisree327/" target="__blank" style={{'text-decoration':'underline'}}>
                                    <CiLinkedin style={{'height':'3.5rem', 'width':'3rem', 'margin-right':'1rem'}}/>
                                    <p>LinkedIn Profile</p>
                                 </a> 
                              </div>
                              <div className="f-d-r al-center"> 
                                 <MdPhoneAndroid style={{'height':'3.5rem', 'width':'3rem', 'margin-right':'1rem'}}/>
                                 <p>+91 9959633718</p>
                              </div>
                              <div className="f-d-r al-center"> 
                                 <CiLocationOn style={{'height':'3.5rem', 'width':'3rem', 'margin-right':'1rem'}}/>
                                 <p>Bengaluru</p>
                              </div>
                        </div>
                     </div>   
                  </div>
                  <div className="my-profile-icon m-all-10 profile-bg">
                     <img src='https://port2bucket.s3.amazonaws.com/girl-work.gif' style={{'height':'30rem', 'width':'25rem'}}/>
                  </div>
               </div>
               <div>
               <div style={{'margin':'1rem'}}>
                     <div className="f-d-r abt-company-div m-all-15 al-center justify-sb">
                        <p>AJIO : Apr 2022  - Today</p>
                     </div>
                     
                     <ul className="ul-disc desc">
                           <li className="m-all-10">
                           As a web developer at AJIO, I focus on feature development and maintaining code integrity while using React and Node.js frameworks.
                           I tackle production issues promptly, implement error-handling strategies, and contribute to enhancing AJIO's website technology stack.
                           </li>
                        </ul>
                  </div>
                  <div style={{'margin':'1rem'}}>
                     <div className="f-d-r abt-company-div m-all-15 al-center justify-sb">
                        <p>Zivame : June 2022 - Mar 2024</p>
                     </div>
                     
                     <ul className="ul-disc desc">
                           <li className="m-all-10">
                              As a Web developer of the Zivame's Tech team, Taking on various tasks such as feature development, ensuring code consistency, implementing
                              robust error handling mechanisms, and swiftly addressing production issues and bugs. Utilizing React and Node.js frameworks to build and maintain
                              features, contributing to the overall technological advancement of Zivame's Website.
                           </li>
                           <li className="m-all-10 ">
                              Contributing to the creation of impactful widgets like "View Similar," "NPS," and "Bank Downtime", enhancing the overall user experience on
                              the platform. I also led the integration of GrowthBooks, an A/B testing tool, to drive continuous improvement and optimization efforts.
                           </li>
                           <li className="m-all-10 ">
                              Commitment to excellence and focus on delivering high-quality solutions have been pivotal in maintaining a seamless and reliable user
                              experience on the platform. I aim to continue enhancing Zivame's technological capabilities through meticulous and innovative coding practices.
                           </li>
                        </ul>
                  </div>
                  <div style={{'margin':'1rem'}}>
                     <div className="f-d-r abt-company-div m-all-15 al-center justify-sb">
                        <p>Infosys : Jan 2020 - May 2022</p>
                     </div>
                    <ul className="ul-disc desc">
                    <li className="m-all-10">
                        Managed Talend installed LINUX servers, including maintaining and upgrading remote engines and Talend Studio. This involves ensuring
                        the smooth operation of these systems and promoting jobs to the Production environment after assessing their feasibility for success.
                    </li>
                    <li className="m-all-10 ">
                        Managed Talend installed LINUX servers, including maintaining and upgrading remote engines and Talend Studio. This involves ensuring the
                        smooth operation of these systems and promoting jobs to the Production environment after assessing their feasibility for success.
                    </li>
                    </ul>
                </div>
            </div> 
            </div>
         </div>
     </div>
    );
  }