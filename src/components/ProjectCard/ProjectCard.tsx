import './ProjectCard.css';

interface ProjectCardProps{
    projectTitle: string,
    projectDescri: string,
    projectPrintUrl: string
}

export default function ProjectCard(props: ProjectCardProps){

    return(
        <div className="card-project">

            <img src={props.projectPrintUrl}></img>

            <h3>{props.projectTitle}</h3>

            <p>{props.projectDescri}</p>
            
        </div>
    )
}