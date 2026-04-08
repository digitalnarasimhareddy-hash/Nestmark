from pydantic import BaseModel, Field
from typing import Optional
from datetime import datetime

class BlogBase(BaseModel):
    title: str
    excerpt: str
    content: str = ""
    author: str
    date: str
    read_time: str = Field(alias="readTime")
    slug: str
    featured: bool = False

class BlogCreate(BlogBase):
    pass

class Blog(BlogBase):
    id: str = Field(alias="_id")
    created_at: datetime = Field(default_factory=datetime.utcnow)
    updated_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        populate_by_name = True
        json_encoders = {datetime: lambda v: v.isoformat()}
