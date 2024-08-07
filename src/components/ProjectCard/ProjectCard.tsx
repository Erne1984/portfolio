import './ProjectCard.css';

interface ProjectCardProps {
    projectTitle: string,
    projectDescri: string,
    projectPrintUrl: string,
    repoUrl: string,
    previewUrl: string
}

export default function ProjectCard(props: ProjectCardProps) {
    return (
        <div className="card-wrapper">
            <div className="card-project">
                <div className="card-front">
                    <img src={props.projectPrintUrl} alt={props.projectTitle} />
                    <h3>{props.projectTitle}</h3>
                    <p>{props.projectDescri}</p>
                </div>
                <div className="card-back">
                    <a href={props.repoUrl} target="_blank" rel="noopener noreferrer">Ver Repositório</a>
                    <a href={props.previewUrl} target="_blank" rel="noopener noreferrer">Ver Preview</a>
                </div>
            </div>
        </div>
    );
}
