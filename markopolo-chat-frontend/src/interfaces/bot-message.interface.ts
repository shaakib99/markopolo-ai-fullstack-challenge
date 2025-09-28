export interface IBotMessage{

    text: string
    target_time: string
    target_channel: string 
    success?: boolean
    phone_number?: string 
    whatsapp_id?: string 
    messenger_id?: string 
    push_id?: string 
    web_id?: string 
    email?: string 
    sources?: string[]
}
