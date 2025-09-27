from abc import ABC, abstractmethod
from common.models.message_model import Message

class DataSourceABC(ABC):
    @abstractmethod
    def fetch_data(self):
        pass

    @abstractmethod
    def normalize(self) -> list[Message]:
        pass