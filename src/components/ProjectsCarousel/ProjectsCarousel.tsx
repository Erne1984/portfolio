import './ProjectsCarousel.css';
import cards from "../../data/myProjects.json";
import ProjectCard from "../../components/ProjectCard/ProjectCard";


import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


export default function ProjectsCarousel() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1034,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 834,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };


    return (

        <div className='carousel-box'>

            <Slider {...settings}>


                {cards && cards.map((card) => {

                    return (
                        <ProjectCard
                            projectDescri={card.projectDescri}
                            projectPrintUrl={card.projectPrintUrl}
                            projectTitle={card.projectTitle}
                            previewUrl={card.previewUrl}
                            repoUrl={card.repoUrl}
                        />
                    )

                })}




            </Slider>


        </div>


    )

}