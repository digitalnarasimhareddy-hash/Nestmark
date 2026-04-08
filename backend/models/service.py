from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime

class ServiceBase(BaseModel):
    title: str
    description: str
    icon: str
    featured: bool = False

class ServiceCreate(ServiceBase):
    pass

class Service(ServiceBase):
    id: str = Field(alias="_id")
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        populate_by_name = True
        json_encoders = {datetime: lambda v: v.isoformat()}
