# Security Policy
## Data Handling
AdaptIQ is designed to collect only the information required for authentication, assessment functionality, and learning progress tracking.
Potentially stored data may include:
- Account information
- Assessment attempts
- Concept-level mastery scores
- Learning progress
The project does not intentionally collect sensitive personal information that is not required for application functionality.
## Authentication
Authentication is planned to be handled using Supabase Authentication.
## Database Security
Supabase Row Level Security (RLS) will be used to restrict access to user-specific learning data.
Users should only be able to access their own private assessment and learning records.
## API Key Security
API keys and other secrets will be stored using environment variables and will not be committed to the public repository.
## AI Data Handling
Only the minimum information required for generating assessment feedback, explanations, or recommendations should be sent to external AI services.
Sensitive personal information should not be included in AI prompts.
## Reporting a Vulnerability
If you discover a security vulnerability, please report it privately to the project maintainers rather than publicly disclosing the vulnerability before it can be investigated.
