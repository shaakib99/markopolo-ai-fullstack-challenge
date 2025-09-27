export interface IInput{
    value: string;
    onChange: (newValue: string) => void;
    placeholder?: string;
    classNames?: string;
    onBlur?: () => void;
    onFocus?: () => void;
}