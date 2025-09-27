import { IInput } from "../../interfaces";
    
const DefaultInput = (props: IInput) => {
    return (
        <input
            type="text"
            className={`default-input input-field ${props.classNames}`}
            value={props.value}
            onChange={(e) => props.onChange(e.target.value)}
            placeholder={props.placeholder}
            onBlur={props.onBlur}
            onFocus={props.onFocus}
        />
    );
}

export default DefaultInput;
