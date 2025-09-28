import asyncio
from typing import AsyncGenerator
from query_service.models.create_model import CreateQueryRequest
from data_source_service.metadata.enums.data_source_enum import DataSourceEnum
from data_source_service.metadata.sources import GTMDataSource, FacebookAdsDataSource, ShopifyDataSource
import json

class QueryService:
    def __init__(self):
        pass

    async def process_query(self, data: CreateQueryRequest) -> AsyncGenerator[str, None]:
        sources = data.sources if data.sources else []
        result = []
            
        for source in sources:
            if source == DataSourceEnum.GTM:
                ds = GTMDataSource()
            elif source == DataSourceEnum.FACEBOOK_ADS:
                ds = FacebookAdsDataSource()
            elif source == DataSourceEnum.SHOPIFY:
                ds = ShopifyDataSource()
            else: continue
            
            ds.fetch_data()
            normalized_data = ds.normalize()
            result.extend(normalized_data)

        async def event_stream():
            msg_str = json.dumps([res.dict() for res in result])
            for i in range(0, len(msg_str), 50):
                yield msg_str[i:i+50]
                await asyncio.sleep(0.2)
        return event_stream()