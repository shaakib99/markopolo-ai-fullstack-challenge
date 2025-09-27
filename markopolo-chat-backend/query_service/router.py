from fastapi import APIRouter
from starlette.responses import StreamingResponse
from .service import QueryService
from .models.create_model import CreateQueryRequest 
import asyncio

router = APIRouter(prefix="/query", tags=["query"])
service = QueryService()


@router.post("/")
async def create_query(data: CreateQueryRequest):
    return StreamingResponse(content=await service.process_query(data), media_type="application/event-stream")

