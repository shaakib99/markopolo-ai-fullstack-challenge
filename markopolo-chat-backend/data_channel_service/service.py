from .metadata.enums.data_channel_enum import DataChannelEnum

class DataChannelService:
    def __init__(self):
        pass
    async def get_all_channels(self):
        return [channel.value for channel in DataChannelEnum]