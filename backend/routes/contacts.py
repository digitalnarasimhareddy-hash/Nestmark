from fastapi import APIRouter, HTTPException, status
from typing import List
from models.contact import Contact, ContactCreate
from motor.motor_asyncio import AsyncIOMotorDatabase
from bson import ObjectId

router = APIRouter()

# Database will be injected
db: AsyncIOMotorDatabase = None

def set_db(database):
    global db
    db = database

@router.post("", status_code=status.HTTP_201_CREATED)
async def submit_contact(contact: ContactCreate):
    """Submit contact form"""
    try:
        contact_dict = contact.dict(by_alias=True)
        contact_dict["status"] = "new"
        result = await db.contacts.insert_one(contact_dict)
        return {
            "message": "Contact submitted successfully",
            "contactId": str(result.inserted_id)
        }
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error submitting contact: {str(e)}"
        )

@router.get("", response_model=List[Contact])
async def get_contacts():
    """Get all contact submissions (Admin only)"""
    try:
        contacts = await db.contacts.find().sort("created_at", -1).to_list(100)
        for contact in contacts:
            contact["_id"] = str(contact["_id"])
        return contacts
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error fetching contacts: {str(e)}"
        )
