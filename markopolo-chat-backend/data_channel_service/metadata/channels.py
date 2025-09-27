from .abc.channel_abc import ChannelABC

class WebChannel(ChannelABC):
    def __init__(self) -> None:
        pass

    async def notify(self, data: dict):
        pass

class EmailChannel(ChannelABC):
    def __init__(self) -> None:
        pass

    async def notify(self, data: dict):
        pass

class SMSChannel(ChannelABC):
    def __init__(self) -> None:
        pass

    async def notify(self, data: dict):
        pass


class VoiceChannel(ChannelABC):
    def __init__(self) -> None:
        pass

    async def notify(self, data: dict):
        pass


class WhatsAppChannel(ChannelABC):
    def __init__(self) -> None:
        pass

    async def notify(self, data: dict):
        pass