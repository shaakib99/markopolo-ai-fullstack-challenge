from fastapi import APIRouter
from .metadata.enums.data_source_enum import DataSourceEnum
from .service import DataSourceService

router = APIRouter(prefix="/data-source", tags=["data-source"])
service = DataSourceService()

@router.get("")
async def get_all():
    return await service.get_all_sources()