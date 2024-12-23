import styles from './ProjectsStyles.module.css';
import SortingVisualizer from '../../assets/sortingvisualizerpicture.jpg';
import ProjectCard from '../../common/ProjectCard';
import FileSharingSystem from '../../assets/filesharingpicture.jpg';
import Portfolio from '../../assets/portfolio1.jpeg';
import Calculator from '../../assets/calculator.jpg';
import todolist from '../../assets/to-doList.png';
import guessmynumber from '../../assets/guessmynumber.jpeg';
import colorflipper from '../../assets/changecolor.jpeg';

function Projects() {
  return (
   <section id="projects" className={styles.container}>
    <h1 className="sectionTitle">Projects</h1>
    <div className={styles.projectsContainer}>
       <ProjectCard 
       src={Calculator} link="https://github.com/Sumayya463/Calculator"
       h3="Calculator" 
       p="Javascript concepts used to create an interactive calculator."
       />

       <ProjectCard 
       src={todolist} link="https://github.com/Sumayya463/To-do-List" 
       h3="To-do List" 
       p="A project that can list your to-dos"
       />

       <ProjectCard 
       src={guessmynumber} link="https://github.com/Sumayya463/Guess-My-Number" 
       h3="Guess My Number Game" 
       p="A fun game where the user guesses a random number with hints given."
      
       />   

       <ProjectCard
       src={colorflipper} link="https://github.com/Sumayya463/Color-Flipper"
       h3="Color Flipper"
       p="script generates a random hex color when the button is clicked and updates the background color of the page."
       />

       <ProjectCard
       src={Portfolio} link=""
       h3="React Portfolio"
       p="My Portfolio"
       />
    </div>
   </section>
  );
}

export default Projects;