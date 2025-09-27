import { IButton } from "../../interfaces";

const DefaultButton = (props: IButton) => {
    return (
        <button className={`send-button ${props.classNames}`} onClick={props.onClick} disabled={props.disabled}>
            {props.isLoading ? "Loading..." : props.label}
        </button>
    );
}

export default DefaultButton;
