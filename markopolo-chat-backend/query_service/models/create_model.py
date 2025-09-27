from pydantic import BaseModel
from common.models.message_model import Message

class CreateQueryRequest(BaseModel):
    query: str
    sources: list[str] = []
    history: list[Message] = []
    channels: list[str] = []