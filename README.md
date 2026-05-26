# CampusConnect Backend

Minimal Django backend for the CampusConnect hackathon MVP.

## What is included
- Student registration and login
- Profile fetch and update
- Idea creation and listing
- Teammate recommendation logic
- Event listing

## Run locally
```bash
cd backend
python manage.py migrate
python manage.py runserver
```

## API routes
- `POST /register`
- `POST /login`
- `GET /profile?email=student@example.com`
- `PUT /profile`
- `PATCH /profile`
- `GET /students`
- `GET /ideas`
- `POST /ideas`
- `POST /ideas/<id>/upvote`
- `GET /events`
- `GET /recommended-members?email=student@example.com`
- `GET /invites`
- `POST /invites`
- `GET /help-posts`
- `POST /help-posts`
- `POST /help-posts/<id>/toggle`
- `GET /activity`
- `POST /activity`
- `GET /explore-items`
- `GET /tour-steps`

## Request format
The API accepts JSON and standard form submissions.

## Sample payloads

### Register
```json
{
  "name": "Test User",
  "email": "newstudent02@example.com",
  "password": "pass12345",
  "department": "CSE",
  "year": "2nd Year",
  "skills": ["Python", "Django"],
  "interests": ["AI", "Backend"],
  "bio": "Backend focused student."
}
```

Use a fresh email like `newstudent02@example.com` for register tests so you avoid the expected duplicate-email `409` response if the same account was already created.

### Login
```json
{
  "email": "test@example.com",
  "password": "pass12345"
}
```

### Post idea
```json
{
  "title": "Smart Study Buddy",
  "category": "EdTech",
  "description": "An app that suggests study groups.",
  "author_email": "test@example.com"
}
```
