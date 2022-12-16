 export default function Skill(props){
    console.log(props.skill)
    const {skill, years} = props;
    return (
        <div className='skill'>
            <h3 className='skill-title'>{skill}</h3>
            <p className='skill-experience'>{years} years Experience</p>
        </div>
    )
 }