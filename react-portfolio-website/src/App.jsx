import './App.css'
import Skill from './components/Skill'
import { experienceData , projectData} from './data/data'
import Project from './components/Project';

function App() {
  const skillsData = experienceData();
  const projectsData = projectData();
  const skills = skillsData.map(item => 
    <Skill 
      key = {item.id}
      skill = {item.skill}
      years = {item.years}
    />
  )

  const projects = projectsData.map(item =>
    <Project 
      key = {item.project_id}
      small_image = {item.project_thumbnail_small}
      large_image = {item.project_thumbnail_large}
      title = {item.project_title}
      skills = {item.project_skills}
      live_link = {item.live_link}
      code_link = {item.code_link}
    />
    )

  return (
   <div className='container'>
      <div className='page-head'>
        <div className='logo-plus-social-media'>
          <div className='logo'>
            <p>claudiu<span>vladean</span></p>
          </div>
          <div className='social-media'>
            <ul>
              <li className='git'></li>
              <li className='linkedIn'></li>
              <li className='frontendMentor'></li>
              <li className='twitter'></li>
            </ul>
          </div>
        </div>
        <div className='head-image'>
        </div>
        <div className='head-intro'>
          <h1>Nice to meet you!<br/>I'm <span>Claudiu</span>.</h1>
          <p>Based in Bray, Ireland. I'm a front-end developer working at Danu Sports. I'm passionate about writing reusable code and learning new skills.</p>
          <h2 className='head-contact-button'>CONTACT ME</h2>
        </div>
      </div>
      <div className='skills'>
        {skills}
        <div className='skills-divider'>
        </div>
      </div>
      <div className='projects'>
        <div className='projects-head'>
          <h2>Projects</h2>
          <h2 className='head-contact-button'>CONTACT ME</h2>
        </div>
        <div className='projects-components'>
          {projects}
        </div>
      </div>

   </div>
  )
}

export default App
