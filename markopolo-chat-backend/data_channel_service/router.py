from fastapi import APIRouter
from .service import DataChannelService

router = APIRouter(prefix="/channel", tags=["channel"])
service = DataChannelService()

@router.get("")
async def get_all():
    return await service.get_all_channels()