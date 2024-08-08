import './ButtonPrimary.css';

interface ButtonPrimaryProps {
    btnText: string
}

export default function ButtonPrimary( props: ButtonPrimaryProps) {

    return (
        <button>
            { props.btnText }
        </button>
    )
}