from abc import ABC, abstractmethod

class ChannelABC(ABC):
    def __init__(self) -> None:
        pass

    @abstractmethod
    async def notify(self, data: dict):
        pass