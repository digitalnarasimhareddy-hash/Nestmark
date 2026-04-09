from fastapi import APIRouter, HTTPException, Query, status
from typing import List, Optional
from models.blog import Blog, BlogCreate
from motor.motor_asyncio import AsyncIOMotorDatabase
from bson import ObjectId

router = APIRouter()

# Database will be injected
db: AsyncIOMotorDatabase = None

def set_db(database):
    global db
    db = database

@router.get("", response_model=List[Blog])
async def get_blogs(
    limit: int = Query(default=10, ge=1, le=100),
    featured: Optional[bool] = None
):
    """Get all blogs with optional filters"""
    try:
        query = {}
        if featured != None:
            query["featured"] = featured
        
        blogs = await db.blogs.find(query).limit(limit).to_list(limit)
        for blog in blogs:
            blog["_id"] = str(blog["_id"])
        return blogs
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error fetching blogs: {str(e)}"
        )

@router.get("/{slug}", response_model=Blog)
async def get_blog(slug: str):
    """Get single blog by slug"""
    try:
        blog = await db.blogs.find_one({"slug": slug})
        if not blog:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND,
                detail="Blog not found"
            )
        blog["_id"] = str(blog["_id"])
        return blog
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error fetching blog: {str(e)}"
        )

@router.post("", response_model=Blog, status_code=status.HTTP_201_CREATED)
async def create_blog(blog: BlogCreate):
    """Create new blog post"""
    try:
        blog_dict = blog.dict(by_alias=True)
        result = await db.blogs.insert_one(blog_dict)
        blog_dict["_id"] = str(result.inserted_id)
        return blog_dict
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"Error creating blog: {str(e)}"
        )
