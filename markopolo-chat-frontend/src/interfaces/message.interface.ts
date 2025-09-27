export interface IMessage {
    text: string;
    sender: "user" | "bot";
    success: boolean;
    sources?: string[];
}