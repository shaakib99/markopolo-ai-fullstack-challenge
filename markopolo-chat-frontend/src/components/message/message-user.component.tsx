import { IMessage } from "../../interfaces";
const MessageUser = (props: IMessage) => {
    const { text, success } = props;

    return (
        <div className="message user">
            {text}
            {!success && <div className="error">Error: Couldn't retrieve information</div>}
        </div>
    );
}

export default MessageUser;
