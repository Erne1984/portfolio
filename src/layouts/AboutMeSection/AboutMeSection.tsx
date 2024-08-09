import './AboutMeSection.css';

import LanguageCard from '../../components/LanguageCard/LanguageCard';

export default function AboutMe() {

    const myTools = [
        {
            name: "HTML",
            urlImg: "/assets/HTML.svg"
        },
        {
            name: "CSS",
            urlImg: "/assets/CSS.svg"
        },
        {
            name: "Javascript",
            urlImg: "/assets/JS.svg"
        },
        {
            name: "React",
            urlImg: "/assets/REACT.svg"
        },
        {
            name: "NodeJS",
            urlImg: "/assets/NODEJS.svg"
        },
        {
            name: "MYSQL",
            urlImg: "/assets/MYSQL.svg"
        },
        {
            name: "MongoDB",
            urlImg: "/assets/MONGODB.svg"
        },
        {
            name: "Express",
            urlImg: "/assets/EXPRESS.svg"
        },
        {
            name: "GIT",
            urlImg: "/assets/GIT.svg"
        },
    ]

    return (
        <section className='about-me-container'>

            <article>

                <div className='left-column'>

                    <h2>Um pouco sobre mim</h2>

                    <p>Sou um  desenvolvedor FrontEnd focado em desenvolver soluções para fazer a websites e webapps. Busco sempre  criar soluções criativas e eficientes. Atualmente, estou cursando desenvolvimento de software multiplataforma na Fatec Zona Leste.</p>

                    <p>Estou aberto a oportunidades de trabalho onde possa contribuir, aprender e crescer. Se tiver uma boa oportunidade que corresponda às minhas competências, não hesite em me contactar.</p>

                </div>

                <div className='right-column'>

                    <h2>Minhas Habilidades</h2>

                    <div className='tools-container'>

                        {myTools && myTools.map((tool) => {
                            return (
                                <LanguageCard key={tool.name} toolImgUrl={tool.urlImg} toolName={tool.name} />
                            )
                        })}

                    </div>

                </div>

            </article>

        </section>
    )
}