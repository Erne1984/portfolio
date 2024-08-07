import './ProjectsSection.css';

import ProjectsCarousel from '../../components/ProjectsCarousel/ProjectsCarousel';

import GitHubCalendar from 'react-github-calendar';

export default function ProjectsSection() {


    return (
        <div className='carousel-projects'>

            <ProjectsCarousel />


            <div className='github-graph'>
                <GitHubCalendar username="erne1984" />
            </div>

        </div>
    )
}