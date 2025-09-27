export interface IButton {
    label: string;
    onClick: () => void;
    disabled?: boolean;
    isLoading?: boolean;
    classNames?: string;
}
