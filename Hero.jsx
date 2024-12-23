import styles from './HeroStyles.module.css';
import heroImg from '../../assets/profilefemale.jpeg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Sumayya Fatima Resume.pdf';
import {useTheme} from '../../common/ThemeContext';

function Hero() {
  const {theme, toggleTheme} = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

    return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
         className={styles.hero} 
         src={heroImg} 
         alt="Profile picture of Sumayya fatima" 
        />
        <img
        className={styles.colorMode}
        src={themeIcon}
        alt="Color mode icon"
        onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
            Sumayya
            <br/>
            Fatima
        </h1>
        <h2>Frontend Developer</h2>
        <span>
            <a href="https://x.com/JaveedSumayya" target="_blank">
            <img src={twitterIcon} alt="Twitter Icon"/>
            </a>

            <a href="https://github.com/Sumayya463" target="_blank">
            <img src={githubIcon} alt="Github Icon"/>
            </a>

            <a href="https://linkedin.com/in/sumayya-fatima-20a965241" target="_blank">
            <img src={linkedinIcon} alt="LinkedIn Icon"/>
            </a>
             
        </span>
        <p className={styles.description}>
       Engineering graduate passionate about front-end development. I’m eager to learn and dedicated to honing my skills to deliver outstanding results.    </p>   

    <a href={CV} download>
      <button className="hove">
      Resume
      </button>   
    </a> 
      </div>
    </section>
  )
    
}

export default Hero;