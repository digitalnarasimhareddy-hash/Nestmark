from fastapi import APIRouter, HTTPException, status
from typing import List
from models.service import Service, ServiceCreate
from motor.motor_asyncio import AsyncIOMotorDatabase
import os
from bson import ObjectId

router = APIRouter()

# Database will be injected
db: AsyncIOMotorDatabase = None

def set_db(database):
    global db
    db = database

@router.get("", response_model=List[Service])
async def get_services():
    """Get all services"""
    try:
        services = await db.services.find().to_list(100)
        for service in services:
            service["_id"] = str(service["_id"])
        return services
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error fetching services: {str(e)}"
        )

@router.get("/{service_id}", response_model=Service)
async def get_service(service_id: str):
    """Get single service by ID"""
    try:
        service = await db.services.find_one({"_id": ObjectId(service_id)})
        if not service:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Service not found"
            )
        service["_id"] = str(service["_id"])
        return service
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error fetching service: {str(e)}"
        )

@router.post("", response_model=Service, status_code=status.HTTP_201_CREATED)
async def create_service(service: ServiceCreate):
    """Create new service"""
    try:
        service_dict = service.dict()
        result = await db.services.insert_one(service_dict)
        service_dict["_id"] = str(result.inserted_id)
        return service_dict
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error creating service: {str(e)}"
        )
