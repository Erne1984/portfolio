import "./TitleSection.css";

interface TitleSectionProps{
    title: string,
}

export default function TitleSection( props: TitleSectionProps ) {

    return (
        <div className='section-title'>
            <h1>{props.title}</h1>
        </div>
    )
}