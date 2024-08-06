import './LanguageCard.css';


interface LanguageCardProps{
    toolImgUrl: string,
    toolName: string,
}

export default function LanguageCard(props: LanguageCardProps){

    return(
        <div className='card-tool'>

            <img src={props.toolImgUrl}></img>

            <span>{props.toolName}</span>

        </div>
    )
}