from enum import Enum 

class DataChannelEnum(str, Enum):
    WHATSAPP = "WhatsApp"
    WEB = "Web"
    EMAIL = "Email"
    SMS = "SMS"
    VOICE = "Voice"