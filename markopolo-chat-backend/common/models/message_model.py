from pydantic import BaseModel
from datetime import datetime

class Message(BaseModel):
    text: str
    target_time: str = datetime.now().isoformat()
    target_channel: str | None = None
    success: bool = True
    phone_number: str | None = None
    whatsapp_id: str | None = None
    messenger_id: str | None = None
    push_id: str | None = None
    web_id: str | None = None
    email: str | None = None
    sources: list[str] = []
