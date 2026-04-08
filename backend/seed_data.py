import asyncio
from motor.motor_asyncio import AsyncIOMotorClient
import os
from dotenv import load_dotenv
from pathlib import Path
from datetime import datetime

ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Seed data
services_data = [
    {
        "title": "Performance Marketing",
        "description": "Achieve unparalleled success with precision-driven strategies that boost conversions, enhance brand visibility, and deliver a tangible return on every investment.",
        "icon": "TrendingUp",
        "featured": True,
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "title": "Search Engine Optimization",
        "description": "Enhance your online visibility and attract organic traffic with our expert SEO strategies.",
        "icon": "Search",
        "featured": True,
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "title": "Social Media Marketing",
        "description": "Boost your brand visibility and engagement across leading social platforms. Increase website traffic and generate quality leads through strategic SMM.",
        "icon": "Share2",
        "featured": True,
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "title": "SEM Services (PPC, Google Adwords, Display Ads)",
        "description": "Boost brand visibility and drive qualified traffic with precision-targeted ads, resulting in increased lead generation, enhanced conversion rates, and maximized ROI for your real estate business.",
        "icon": "Target",
        "featured": False,
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "title": "Meta Ads (Facebook Ads, Instagram Ads)",
        "description": "Maximize your ROI with targeted campaigns that drive measurable results and growth. Driving Success with Meta Ads Conversions on Facebook and Instagram.",
        "icon": "Instagram",
        "featured": False,
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "title": "PR Marketing",
        "description": "Strategic PR marketing to build credibility and enhance visibility for our brands across key media channels.",
        "icon": "Newspaper",
        "featured": False,
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "title": "Website Development",
        "description": "Robust static website development focused on speed, security, and seamless user experience for real estate brands.",
        "icon": "Globe",
        "featured": False,
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "title": "Influencer Marketing",
        "description": "Influencer marketing that leverages trusted voices to expand reach and build authenticity for real estate brands.",
        "icon": "Users",
        "featured": False,
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "title": "Competitor Analysis",
        "description": "Gain actionable insights to outshine your rivals by analyzing competitor websites with tools like Ahrefs and Moz, helping you refine strategies, identify gaps, and boost your market position.",
        "icon": "BarChart3",
        "featured": False,
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "title": "Omnichannel Marketing",
        "description": "Boost engagement and drive conversions by leveraging bulk messaging across SMS, WhatsApp, and Email – reach the right audience with impactful precision.",
        "icon": "MessageSquare",
        "featured": False,
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "title": "Analytical Tools",
        "description": "Empower your business with actionable data, optimize website performance, and enhance user experience for better ROI.",
        "icon": "LineChart",
        "featured": False,
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    }
]

blogs_data = [
    {
        "title": "The rise of AI in digital marketing 2024 game changing strategies",
        "excerpt": "Rise of AI in Digital Marketing.",
        "content": "Explore how AI is transforming digital marketing with innovative strategies and tools.",
        "author": "Narasimha Reddy",
        "date": "7/31/2025",
        "readTime": "6 min read",
        "slug": "the-rise-of-ai-in-digital-marketing",
        "featured": True,
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "title": "SEO and Content Marketing in 2024: What worked and What to Expect next",
        "excerpt": "SEO and Content Marketing",
        "content": "Discover the latest SEO trends and content marketing strategies that are driving results.",
        "author": "Narasimha Reddy",
        "date": "1/29/2025",
        "readTime": "5 min read",
        "slug": "seo-and-content-marketing-in-2024",
        "featured": True,
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "title": "From Social Commerce to MetaVerse Ads: Digital Marketing Innovations of 2024",
        "excerpt": "Digital Marketing Innovation of 2024",
        "content": "Learn about the cutting-edge innovations shaping the future of digital marketing.",
        "author": "Narasimha Reddy",
        "date": "1/23/2025",
        "readTime": "5 min read",
        "slug": "from-social-commerce-to-metaverse-ads",
        "featured": False,
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    },
    {
        "title": "Making Data Privacy Updates Work for Your Marketing Moves in 2025",
        "excerpt": "Making Data Privacy updates",
        "content": "Navigate data privacy regulations while maintaining effective marketing strategies.",
        "author": "Narasimha Reddy",
        "date": "1/11/2025",
        "readTime": "6 min read",
        "slug": "making-data-privacy-updates-work",
        "featured": False,
        "created_at": datetime.utcnow(),
        "updated_at": datetime.utcnow()
    }
]

async def seed_database():
    print("Starting database seeding...")
    
    # Clear existing data
    await db.services.delete_many({})
    await db.blogs.delete_many({})
    print("✓ Cleared existing data")
    
    # Insert services
    result = await db.services.insert_many(services_data)
    print(f"✓ Inserted {len(result.inserted_ids)} services")
    
    # Insert blogs
    result = await db.blogs.insert_many(blogs_data)
    print(f"✓ Inserted {len(result.inserted_ids)} blogs")
    
    print("\n✅ Database seeding completed successfully!")
    client.close()

if __name__ == "__main__":
    asyncio.run(seed_database())
