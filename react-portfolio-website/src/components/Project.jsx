import { width } from "@mui/system"
// import imageLink from "../assets/projectImages"

export default function Project(props) {
    return(
        <div className="project">
            <img className="project-image" src={"./src/assets/projectImages/thumbnail-project-1-small.webp"} alt="image of project" />
            <h3 className="project-title">Project Title</h3>
            <div className="project-skills">
            </div>
            <div className="project-sources">
                <a href="#"><h2>Test</h2></a>
                <a href="#"><h2>Test2</h2></a>
            </div>
        </div>
    )
}