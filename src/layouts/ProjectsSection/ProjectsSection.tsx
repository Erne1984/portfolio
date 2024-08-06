import ProjectCard from "../../components/ProjectCard/ProjectCard"

export default function ProjectsSection() {

    return (
        <section>

            <div className='section-title'>
                <h1>Projetos</h1>
            </div>

            <ProjectCard 
            projectDescri="Projeto mais pica da história" 
            projectPrintUrl={'/assets/projectsPrints/globalExplorer.png'}
            projectTitle="Global Explorer"/>


        </section>
    )
}