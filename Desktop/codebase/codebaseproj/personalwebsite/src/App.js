import './App.css';
import './css/About.css';
import './css/Experience.css';
import './css/Projects.css';
import './css/Contact.css';

import Card from './components/Card';
import ExperienceLeft from './components/ExperienceLeft';
import ExperienceRight from './components/ExperienceRight';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import me from './assets/me2.png';
import name from './assets/name.png';
import vietname from './assets/vietname.png';
import about1 from './assets/about1.png';
import about2 from './assets/about2.png';
import flower from './assets/flower.png';
import star from './assets/star.png';
import keyclub from './assets/keyclub.png';
import diversatech from './assets/diversatech.png';

import codebase from './assets/codebase.png';
import calhacks from './assets/codebaseexperience.png';
import code1front from './assets/projects/code1_front.png';
import code1back from './assets/projects/code1_back.png';
import code2front from './assets/projects/code2_front.png';
import code2back from './assets/projects/code2_back.png';
import code3front from './assets/projects/code3_front.png';
import code3back from './assets/projects/code3_back.png';


function App() {
  return (
    <div className="app">
      <Navbar/>
      <div className="content1">
        <div className="anchor-home" id="home"></div>
        <div className="home-about">
          <div className="home-intro">
            <h2>
              <span className="pink-intro">Hello, my name is</span> 
            </h2>
            <img src={name} alt="Enya Do" className="name"/>
            <img src={vietname} alt="Nguyet Anh" className="viet-name"/>
            <div className="intro-sub">
              <h2>
                I'm a student at <span class="green-intro">UC Berkeley</span> studying <br></br>
                <span className="green-intro"> computer science</span> excited to create and code!
              </h2>
              <h2>
              <span className="grey-intro">My Vietnamese name means </span><span class="yellow-intro">crescent moon</span><span class="grey-intro">.</span>
              </h2>
            </div>
          </div>
          <img src={me} alt="me" className="me-picture"/>
        </div>
      </div>

      <div className="content2">
        <div className="anchor" id="about"></div>
        <div className="about-content">
          <div className="about1">
            <img src={about1} alt="Enya Do" className="aboutimg1"/>
            <div className="about1-text">
              <h1 className="about-header">Who &nbsp;&nbsp; am &nbsp;&nbsp; I &nbsp;?</h1>
              <div className="about1-body">
                <h3 className="location">Currently Located: Berkeley, California</h3>
                <h3>I'm a creative and developer currently pursuing an education in computer science and design at UC Berkeley. I love exploring new ways to express myself creatively whether that be through code, graphic design, or video editing/post-production!</h3>
              </div>
            </div>
          </div>
          <div className="about2">
            <img src={about2} alt="Enya Do" className="aboutimg2"/>
            <div className="about2-text">
              <h2 className="about-subheader">Some things I love ~</h2>
              <div className="about-subheaderbox"> 
                <div className="lovelist-container">
                <ul className="lovelist">
                  <li>
                    <h3>&nbsp;&nbsp;&nbsp;The infinite horizon of possibility realized when art and technology intersect.</h3>
                  </li>
                  <li>
                    <h3>&nbsp;&nbsp;&nbsp;Memoirs and the invaluable lessons of empathy and compassion they provide.</h3>
                  </li>
                  <li>
                    <h3>&nbsp;&nbsp;&nbsp;My lovely cat, Pumpkin!</h3>
                  </li>
                </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flowercontain">
          <img src={flower} alt=" " className="flower"/>
        </div>
      </div>

      <div className="content3">
        <div className="anchor" id="experience"></div>
        <div className="experience-content">
          <div className="experience-title">
            <img src={star} alt=" " className="star"/>
            <h1 className="titletext">
              Here are some <span class="blue-experience">experiences</span> that have helped
              <span className="blue-experience"> shaped my journey</span>.
            </h1> 
            <img src={star} alt=" " className="star"/>
          </div>
          <div className="bluebox">
            <div className="experienceComponents">
              <div className="experienceColumn">
              <ExperienceLeft title={"Codebase"} position={"Mentored Developer"} link={'https://codebase.berkeley.edu/'} img={codebase} body={"This current Spring 2023 semester I joined Codebase as a mentored software developer! Over the next few weeks, I will be utilizing full-stack web development to design and build a web portal to for the Berkeley food and housing project."} />
              <ExperienceRight title={"Diversatech"} position={"Consultant"} link={'https://www.diversatech.org/'} img={diversatech} body={"This current Spring 2023 semester I joined Diversatech as consultant! Over the next few weeks, I will be conducting market research and utilizing full-stack web development to rebrand, design, and build a website for Indoxi Jewelry, a locally owned brand in Greenwich, Connecticut that is looking to expand."} />
              <ExperienceLeft title={"Cal Hacks"} position={"Director of Marketing & Design"} link={'https://www.calhacks.io/'} img={calhacks} body={"In Fall 2022, I joined Cal Hacks as a director of Marketing/Design to help make the world’s largest collegiate hackathon a reality! After successfully creating marketing materials and conducting outreach for Cal Hacks 9.0, I am now doing the same for Cal Hacks 10.0."} />
              <ExperienceRight title={"Division 12 South Key Club"} position={"Lieutenant Governor"} link={'https://www.keyclub.org/'} img={keyclub} body={"In HighSchool, I served as the Lieutenant Governor of my local Key Club division, consisting of community service clubs at 12 different high schools. Together we served over 20000 hours and raised $3000 for charity. I also served on a member recognition committee ensuring student’s efforts were rewarded at the national level."} />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="content4">
        <div className="anchor" id="projects"></div>
        <div className="projects-content">
          <div className="projects-title">
            <img src={star} alt=" " className="star"/>
            <h1 className="titletext">
              Explore some <span class="green-projects">projects</span> i've been working on.
            </h1> 
            <img src={star} alt=" " className="star"/>
          </div>

          <div className="greenbox">
            <div className="codeTitle">
              <h2>Code</h2>
            </div>
            <div className="codeCards">
              <div className="cardspacing"><Card front={code1front} back={code1back}/> </div>
              <div className="cardspacing"><Card front={code2front} back={code2back}/> </div>
              <div className="cardspacing"><Card front={code3front} back={code3back}/> </div>
            </div>
          </div>
        
          <div className="greenbox2">
            <div className="designTitle">
                <h2>Design</h2>
            </div>
            <div className="sliderContainer">
              <Slider/>
            </div>
          </div>
        </div>
      </div>

      <div className="content5">
        <div className="anchor" id="contact"></div>

        <div className="contact-title">
              <img src={star} alt=" " className="star"/>
              <h1 className="titletext">
                Don't Hesitate to <span className="yellow-contact"> Contact </span>Me !
              </h1> 
              <img src={star} alt=" " className="star"/>
            </div>

          <div className="contact-content">
            
             <div className="contacttextbox">
              <h1 className="contactTitle">Feel free to reach out!</h1>
              <h1 className="contactEmail">anhdo@berkeley.edu</h1>
             </div>
          </div>
      </div>
    </div>
  )
}

export default App;
