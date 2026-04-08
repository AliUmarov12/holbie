from pydantic import BaseModel
from typing import List, Optional

class Skill(BaseModel):
    name: str
    category: str

class Role(BaseModel):
    title: str
    description: str

class StudentProfile(BaseModel):
    id: str
    name: str
    current_skills: List[str]
    target_role: str
    completed_courses: List[str]

class Recommendation(BaseModel):
    type: str  # "course", "certification", "project"
    title: str
    description: str

class ReadinessScore(BaseModel):
    student_id: str
    role: str
    score: int
    missing_skills: List[str]
    recommendations: List[Recommendation]
    explanation: str

class MarketInsight(BaseModel):
    top_roles: List[str]
    top_skills: List[dict]
    trend_summary: str

class CohortInsight(BaseModel):
    cohort_id: str
    alignment_score: int
    oversupplied_skills: List[str]
    undersupplied_skills: List[str]

class UserAuth(BaseModel):
    username: str
    password: str
