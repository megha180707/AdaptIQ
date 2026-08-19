# AdaptIQ
## AI-Powered Adaptive Assessment & Personalized Learning Platform
AdaptIQ is a web-based adaptive assessment platform designed to transform static assessments into personalized learning experiences.
Instead of presenting every student with the same fixed sequence of questions, AdaptIQ continuously analyzes assessment performance, estimates concept-level mastery, adapts question difficulty, identifies learning gaps, and provides targeted AI-assisted explanations and practice.
## Problem Statement
**Omni_EdTech_16 — Adaptive Assessment Based on Real-Time Performance**
Traditional assessments often use fixed question sequences and provide aggregate scores without identifying the specific concepts a student understands or struggles with.
AdaptIQ addresses this by dynamically adapting assessment difficulty and generating personalized learning interventions based on observed student performance.
## Key Features
- Adaptive assessment
- Elo-inspired skill estimation
- Concept-level mastery tracking
- Cold-start diagnostic assessment
- Dynamic question difficulty selection
- AI-generated question explanations
- AI-assisted question generation
- Learning-gap detection
- Targeted remediation
- Personalized learning paths
- Student performance dashboard
## Core Approach
AdaptIQ separates deterministic assessment logic from generative AI.
The adaptive engine is responsible for:
- Student skill estimation
- Question difficulty selection
- Concept mastery calculation
- Performance tracking
- Next-question routing
Generative AI is used for:
- Question generation
- Explanations
- Hints
- Learning-gap interpretation
- Personalized recommendations
This separation makes the adaptive assessment process predictable while using AI where natural-language reasoning and content generation provide value.
## Technology Stack
### Frontend
- Next.js
- React
- Tailwind CSS
- shadcn/ui
### Backend
- Next.js API / Server Actions
### Database & Authentication
- Supabase
- PostgreSQL
- Supabase Authentication
- Row Level Security
### AI
- LLM API
- Vercel AI SDK
### Visualization
- Recharts
### Deployment
- Vercel
## Project Status
Currently in the Round 1 concept and planning stage.
The adaptive assessment engine, AI integration, database architecture, and web application will be developed during the implementation phase.
## Team
### Megha
Team Leader
### Ritesh Taparia
Team Member
> Team roles and contribution descriptions will reflect the actual contributions made by each registered team member.
## AI Usage Disclosure
Generative AI tools are used during development for code assistance, UI/component prototyping, debugging support, documentation assistance, and prompt engineering.
AI-generated outputs are reviewed, modified, tested, and integrated by the project team.
The adaptive assessment logic, system architecture, and product decisions are designed and controlled by the project team.
Specific AI development tools and services used during implementation will be documented as the project progresses.
## Third-Party Technologies & Attribution
AdaptIQ uses open-source libraries and third-party services.
The project will maintain appropriate attribution and comply with the respective licenses and usage requirements of all third-party technologies used.
Major technologies currently planned include:
- Next.js
- React
- Tailwind CSS
- shadcn/ui
- Supabase
- Recharts
- Vercel AI SDK
- LLM API provider
A complete dependency and attribution list will be maintained as implementation progresses.
## License
This project is licensed under the MIT License.
