from data_source_service.metadata.enums.data_source_enum import DataSourceEnum

class DataSourceService:
    def __init__(self):
        pass

    async def get_all_sources(self):
        return [source.value for source in DataSourceEnum]