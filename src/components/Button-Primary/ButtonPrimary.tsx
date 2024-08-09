import './ButtonPrimary.css';

interface ButtonPrimaryProps {
    btnText: string,
    type: "submit" | "reset" | "button"; 
}

export default function ButtonPrimary( props: ButtonPrimaryProps) {

    return (
        <button type={props.type}>
            { props.btnText }
        </button>
    )
}