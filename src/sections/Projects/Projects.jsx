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
    <section id="projects">
      <h1 className="section-title">Projects</h1>
      <div className="projects-grid">
        <ProjectCard
          src={Calculator} 
          link="https://github.com/Sumayya463/Calculator"
          h3="Calculator"
          p="Interactive calculator demonstrating core JavaScript logic and DOM manipulation."
        />
        <ProjectCard
          src={todolist} 
          link="https://github.com/Sumayya463/To-do-List"
          h3="To-do List"
          p="A dynamic task management application to keep track of daily goals."
        />
        <ProjectCard
          src={guessmynumber} 
          link="https://github.com/Sumayya463/Guess-My-Number"
          h3="Guess My Number"
          p="A fun game where the user guesses a random number with hints provided."
        />
        <ProjectCard
          src={colorflipper} 
          link="https://github.com/Sumayya463/Color-Flipper"
          h3="Color Flipper"
          p="A script that generates random hex colors and updates the page background."
        />
        <ProjectCard
          src={Portfolio} 
          link="https://github.com/Sumayya463/React-Portfolio"
          h3="React Portfolio"
          p="My personal portfolio website featuring a modern design and smooth animations."
        />
      </div>
    </section>
  );
}

export default Projects;