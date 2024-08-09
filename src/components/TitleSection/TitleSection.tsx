import "./TitleSection.css";

interface TitleSectionProps{
    title: string,
    id: string
}

export default function TitleSection( props: TitleSectionProps ) {

    return (
        <div id={props.id} className='section-title'>
            <h1>{props.title}</h1>
        </div>
    )
}