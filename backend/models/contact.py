from pydantic import BaseModel, Field, EmailStr
from typing import Optional
from datetime import datetime

class ContactBase(BaseModel):
    first_name: str = Field(alias="firstName")
    phone: str
    email: EmailStr
    message: str

class ContactCreate(ContactBase):
    pass

class Contact(ContactBase):
    id: str = Field(alias="_id")
    status: str = "new"  # new, read, responded
    created_at: datetime = Field(default_factory=datetime.utcnow)

    class Config:
        populate_by_name = True
        json_encoders = {datetime: lambda v: v.isoformat()}
