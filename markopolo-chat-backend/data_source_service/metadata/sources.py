from .abc.data_source_abc import DataSourceABC
from common.models.message_model import Message
from data_channel_service.metadata.enums.data_channel_enum import DataChannelEnum
from data_source_service.metadata.enums.data_source_enum import DataSourceEnum
from datetime import datetime
import random

class FacebookAdsDataSource(DataSourceABC):
    def fetch_data(self):
        # Implementation for fetching data from Facebook Ads
        pass

    def normalize(self) -> list[Message]:
        result = []
        for i in range(random.randint(1, 5)):
            result.append(
                Message(
                    text=f"Facebook Ads data item {i+1}",
                    target_time=datetime.now().isoformat(),
                    target_channel=random.choice([source.value for source in DataChannelEnum]),
                    sources=[DataSourceEnum.FACEBOOK_ADS.value]
                )
            )
        return result


class GTMDataSource(DataSourceABC):
    def fetch_data(self):
        # Implementation for fetching data from GTM
        pass

    def normalize(self) -> list[Message]:
        result = []
        for i in range(random.randint(1, 5)):
            result.append(
                Message(
                    text=f"GTM data item {i+1}",
                    target_time=datetime.now().isoformat(),
                    target_channel=random.choice([source.value for source in DataChannelEnum]),
                    sources=[DataSourceEnum.GTM.value]
                )
            )
        return result

class ShopifyDataSource(DataSourceABC):
    def fetch_data(self):
        # Implementation for fetching data from Shopify
        pass

    def normalize(self) -> list[Message]:
        result = []
        for i in range(random.randint(1, 5)):
            result.append(
                Message(
                    text=f"Shopify data item {i+1}",
                    target_time=datetime.now().isoformat(),
                    target_channel=random.choice([source.value for source in DataChannelEnum]),
                    sources=[DataSourceEnum.SHOPIFY.value]
                )
            )
        return result