
export default function Project(props) {
    const {small_image, large_image, title, skills, live_link, code_link} = props;


    return(
        <div className="project">
            <img className="project-image" src={`../assets/projectImages/${small_image}`} alt="image of project" />
            <h3 className="project-title">{title}</h3>
            <div className="project-skills">
                {skills.map(item => (<p key={skills.indexOf(item)}>{item}</p>))}
            </div>
            <div className="project-sources">
                <a href={`${live_link}`}><h2>View Project</h2></a>
                <a href={`${code_link}`}><h2>View Code</h2></a>
            </div>
        </div>
    )
}