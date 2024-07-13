'use client';
import React, {useState} from 'react';
import ParticlesComponent from './partcilesComponent';
import { Animate } from 'react-simple-animate';


export default function HomeComponent({ isDarkBg }) {
  const [isDownloading, setIsDownloading] = useState(false);

  const onHandleDownloadCV = () => {
    setIsDownloading(true);
    const cvUrl = 'https://drive.google.com/uc?export=download&id=1yNh9X_HcsY5JoF2BDsoF_2Xnsf5yrOAR'; // Ensure this URL allows direct download
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'jyothisree_resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setIsDownloading(false);
  };

  const onHandleHireme = () => {
    const email = 'jyothisree327@gmail.com';
    const subject = 'Job Opportunity: [Position] at [Company]';
    const body = `  Dear Jyothisree,
  I am interested in discussing a job opportunity with you for the [Position] role at [Company].
  Please let me know your availability for a meeting.

  Thank you,
  [Your Name]
  [Your Contact Information]`;
  
    const gmailLink = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailLink, '_blank');
  };
  

  return (
    <div className={`home-parent-div ${isDarkBg ? 'yellow-c' : 'blue-c'} position-fixed`}>
      <div className='home-head'>
        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: 'translateY(-300px)', opacity: 0 }}
          end={{ transform: 'translateY(0px)', opacity: 1 }}
        >
          <div>
            <h1>
              Hello, I'm Jyothisree
              <br />
              Front End Developer
            </h1>
          </div>
        </Animate>
      </div>

      <div className='home-btn-parent-div'>
        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: "translateY(550px)" }}
          end={{ transform: "translatex(0px)" }}
        >
          <button className={`home-btn ${isDarkBg ? '' : 'home-btn-yellow'}`} onClick={onHandleHireme}>HIRE ME</button>
        </Animate>
        <Animate
          play
          duration={1}
          delay={0}
          start={{ transform: "translateY(550px)" }}
          end={{ transform: "translatex(0px)" }}
        >
          <button className={`home-btn ${isDarkBg ? '' : 'home-btn-yellow'}`} onClick={onHandleDownloadCV} disabled={isDownloading}>
            {isDownloading ? 'Downloading...' : 'Download CV'}
          </button>
        </Animate>
      </div>
      <ParticlesComponent isDarkBg={isDarkBg} />
    </div>
  );
}
