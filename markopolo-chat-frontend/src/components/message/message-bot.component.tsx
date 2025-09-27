import { IMessage } from "../../interfaces";
const MessageBot = (props: IMessage) => {
    const { text, sources, success } = props;

    return (
        <div className="message bot">
            <section style={{ 
                    width: '100%', 
                    overflowWrap: 'break-word',
                    wordBreak: 'break-word',
                    whiteSpace: 'normal'
                }}
                 dangerouslySetInnerHTML={{ __html: text }} />
            {!success && <div className="error">Error: Couldn't retrieve information</div>}
        </div>
    );
}

export default MessageBot;
