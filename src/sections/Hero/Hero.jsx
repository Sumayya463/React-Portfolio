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
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className="hero-section">
      <div className="hero-content">
        <h1>
          Sumayya<br />Fatima
        </h1>
        <h2>Frontend Developer</h2>
        
        <div className="social-links">
          <a href="https://x.com/JaveedSumayya" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter Icon" />
          </a>
          <a href="https://github.com/Sumayya463" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="Github Icon" />
          </a>
          <a href="https://linkedin.com/in/sumayya-fatima-20a965241" target="_blank" rel="noopener noreferrer">
            <img src={linkedinIcon} alt="LinkedIn Icon" />
          </a>
        </div>
        
        <p>
          Engineering graduate passionate about front-end development. I’m eager to learn and dedicated to honing my skills to deliver outstanding results.
        </p>

        <a href={CV} download>
          <button className="btn-primary">
            Download Resume
          </button>
        </a>
      </div>
      
      <div className="hero-image-container">
        <img
          className="hero-image"
          src={heroImg}
          alt="Profile picture of Sumayya Fatima"
        />
        <img
          className="theme-toggle"
          src={themeIcon}
          alt="Color mode toggle icon"
          onClick={toggleTheme}
        />
      </div>
    </section>
  );
}

export default Hero;