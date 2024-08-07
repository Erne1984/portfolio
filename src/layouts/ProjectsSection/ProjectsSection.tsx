import './ProjectsSection.css';

import ProjectCard from "../../components/ProjectCard/ProjectCard"

export default function ProjectsSection() {

    return (
        <section className="project-section-container">

            <div className='section-title'>
                <h1>Projetos</h1>
            </div>

            <div className='projects-cards'>

                <ProjectCard
                    projectDescri="Aplicação desenvolvida em React que lista todos os países do mundo com várias informações a respeito de cada um. É um desafio do site Frontend Mentor."
                    projectPrintUrl={'/assets/projectsPrints/globalExplorer.png'}
                    projectTitle="Global Explorer"
                    previewUrl='https//:google.com'
                    repoUrl='htteps' />

            </div>

        </section>
    )
}