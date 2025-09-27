from enum import Enum

class DataSourceEnum(str, Enum):
    GTM = "GTM"
    FACEBOOK_ADS = "Facebook_Ads"
    SHOPIFY = "Shopify"