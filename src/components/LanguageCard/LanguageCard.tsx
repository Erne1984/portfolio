import './LanguageCard.css';


interface LanguageCard{
    toolImgUrl: string,
    toolName: string,
}

export default function LanguageCard(props: LanguageCard){

    return(
        <div className='card-tool'>

            <img src={props.toolImgUrl}></img>

            <span>{props.toolName}</span>

        </div>
    )
}