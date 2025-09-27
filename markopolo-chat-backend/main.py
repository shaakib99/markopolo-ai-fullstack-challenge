from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from query_service.router import router as query_router
from data_channel_service.router import router as channel_router
from data_source_service.router import router as data_source_router
app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(query_router)
app.include_router(channel_router)
app.include_router(data_source_router)