from django.http import HttpResponse

from config.api import json_response


EXPLORE_ITEMS = [
    {
        "id": "teammates",
        "title": "Find Teammates",
        "category": "People",
        "description": "Discover students with matching skills and interests.",
        "actionLabel": "Open matches",
        "actionType": "modal",
        "actionTarget": "teammates",
        "tags": ["skills", "match", "profile"],
    },
    {
        "id": "ideas",
        "title": "Explore Ideas",
        "category": "Projects",
        "description": "Browse and post startup or hackathon ideas.",
        "actionLabel": "Open ideas",
        "actionType": "modal",
        "actionTarget": "ideas",
        "tags": ["projects", "startup", "idea"],
    },
    {
        "id": "events",
        "title": "Campus Events",
        "category": "Events",
        "description": "See hackathons, workshops, and college events.",
        "actionLabel": "Open events",
        "actionType": "modal",
        "actionTarget": "events",
        "tags": ["hackathon", "workshop", "calendar"],
    },
    {
        "id": "tour",
        "title": "Guided Tour",
        "category": "Tour",
        "description": "Walk through the main parts of the platform step by step.",
        "actionLabel": "Start tour",
        "actionType": "tour",
        "actionTarget": "campus",
        "tags": ["guide", "help", "tour"],
    },
    {
        "id": "dashboard",
        "title": "Your Dashboard",
        "category": "Workspace",
        "description": "See your teammate suggestions, ideas count, and quick actions.",
        "actionLabel": "Open dashboard",
        "actionType": "page",
        "actionTarget": "dashboard",
        "tags": ["overview", "status", "profile"],
    },
    {
        "id": "profile",
        "title": "Build Profile",
        "category": "Workspace",
        "description": "Add your skills and interests for better matching.",
        "actionLabel": "Open profile",
        "actionType": "page",
        "actionTarget": "profile",
        "tags": ["skills", "bio", "setup"],
    },
]


API_ENDPOINTS = [
    {"path": "/register", "methods": ["POST"], "description": "Create a student account."},
    {"path": "/login", "methods": ["POST"], "description": "Log a student in."},
    {"path": "/profile", "methods": ["GET", "PUT", "PATCH", "POST"], "description": "Fetch or update a student profile."},
    {"path": "/students", "methods": ["GET"], "description": "Fetch all students for teammate matching."},
    {"path": "/ideas", "methods": ["GET", "POST"], "description": "List ideas or create a new idea."},
    {"path": "/ideas/<id>/upvote", "methods": ["POST", "PATCH"], "description": "Upvote an idea."},
    {"path": "/events", "methods": ["GET"], "description": "Fetch upcoming events."},
    {"path": "/recommended-members", "methods": ["GET", "POST"], "description": "Get teammate suggestions."},
    {"path": "/invites", "methods": ["GET", "POST"], "description": "List or create teammate invites."},
    {"path": "/help-posts", "methods": ["GET", "POST"], "description": "List or create help posts."},
    {"path": "/help-posts/<id>/toggle", "methods": ["POST", "PATCH"], "description": "Toggle help post status."},
    {"path": "/activity", "methods": ["GET", "POST"], "description": "List or add dashboard activity."},
    {"path": "/explore-items", "methods": ["GET"], "description": "Fetch explore cards."},
    {"path": "/tour-steps", "methods": ["GET"], "description": "Fetch guided tour steps."},
]

OPENAPI_SCHEMA = {
    "openapi": "3.0.3",
    "info": {
        "title": "CampusConnect API",
        "version": "1.0.0",
        "description": "Hackathon MVP API for auth, profiles, ideas, events, teammates, invites, help posts, and activity.",
    },
    "servers": [{"url": "http://127.0.0.1:8000"}],
    "paths": {
        "/register": {
            "post": {
                "summary": "Create a student account",
                "description": "Create a new student profile with email, password, skills, and interests.",
                "requestBody": {
                    "required": True,
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "required": ["name", "email", "password", "department", "year", "skills", "interests"],
                                "properties": {
                                    "name": {"type": "string", "example": "Smoke Test"},
                                    "email": {"type": "string", "format": "email", "example": "newstudent01@example.com"},
                                    "password": {"type": "string", "example": "pass12345"},
                                    "department": {"type": "string", "example": "CSE"},
                                    "year": {"type": "string", "example": "2nd Year"},
                                    "skills": {"type": "array", "items": {"type": "string"}, "example": ["Python", "Django"]},
                                    "interests": {"type": "array", "items": {"type": "string"}, "example": ["AI", "Backend"]},
                                    "bio": {"type": "string", "example": "Backend focused student."},
                                },
                            },
                            "examples": {
                                "demo": {
                                    "summary": "Demo student",
                                    "value": {
                                        "name": "Smoke Test",
                                        "email": "newstudent01@example.com",
                                        "password": "pass12345",
                                        "department": "CSE",
                                        "year": "2nd Year",
                                        "skills": ["Python", "Django"],
                                        "interests": ["AI", "Backend"],
                                        "bio": "Backend focused student.",
                                    },
                                }
                            },
                        }
                    },
                },
                "responses": {
                    "201": {"description": "Account created"},
                    "409": {"description": "Email already registered"},
                },
            }
        },
        "/login": {
            "post": {
                "summary": "Log a student in",
                "description": "Use one of the demo accounts or a newly registered student.",
                "requestBody": {
                    "required": True,
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "required": ["email", "password"],
                                "properties": {
                                    "email": {"type": "string", "format": "email", "example": "aarav@example.com"},
                                    "password": {"type": "string", "example": "123456"},
                                },
                            },
                            "examples": {
                                "demo": {
                                    "summary": "Demo login",
                                    "value": {"email": "aarav@example.com", "password": "123456"},
                                }
                            },
                        }
                    },
                },
                "responses": {"200": {"description": "Login successful"}},
            }
        },
        "/profile": {
            "get": {
                "summary": "Fetch a profile",
                "parameters": [
                    {
                        "name": "email",
                        "in": "query",
                        "required": False,
                        "schema": {"type": "string", "format": "email", "example": "aarav@example.com"},
                        "description": "Student email.",
                    },
                    {
                        "name": "user_id",
                        "in": "query",
                        "required": False,
                        "schema": {"type": "integer", "example": 1},
                        "description": "Numeric student id.",
                    },
                ],
            },
            "patch": {
                "summary": "Update a profile",
                "requestBody": {
                    "required": True,
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "email": {"type": "string", "format": "email", "example": "aarav@example.com"},
                                    "name": {"type": "string", "example": "Aarav"},
                                    "department": {"type": "string", "example": "CSE"},
                                    "year": {"type": "string", "example": "3rd Year"},
                                    "skills": {"type": "array", "items": {"type": "string"}, "example": ["React", "Python"]},
                                    "interests": {"type": "array", "items": {"type": "string"}, "example": ["Web Apps", "AI"]},
                                    "bio": {"type": "string", "example": "Updated profile bio."},
                                },
                            },
                            "examples": {
                                "demo": {
                                    "summary": "Profile update",
                                    "value": {
                                        "email": "aarav@example.com",
                                        "name": "Aarav",
                                        "department": "CSE",
                                        "year": "3rd Year",
                                        "skills": ["React", "Python"],
                                        "interests": ["Web Apps", "AI"],
                                        "bio": "Updated profile bio.",
                                    },
                                }
                            },
                        }
                    },
                },
            },
            "put": {"summary": "Update a profile"},
            "post": {"summary": "Update a profile"},
        },
        "/students": {
            "get": {
                "summary": "List students",
                "description": "Returns demo students plus any registered students.",
            }
        },
        "/ideas": {
            "get": {
                "summary": "List ideas",
                "parameters": [
                    {
                        "name": "category",
                        "in": "query",
                        "required": False,
                        "schema": {"type": "string", "example": "Utility"},
                        "description": "Filter by category.",
                    }
                ],
            },
            "post": {
                "summary": "Create a new idea",
                "requestBody": {
                    "required": True,
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "required": ["title", "description"],
                                "properties": {
                                    "title": {"type": "string", "example": "Smart Study Buddy"},
                                    "category": {"type": "string", "example": "EdTech"},
                                    "description": {"type": "string", "example": "An app that suggests study groups."},
                                    "author_email": {"type": "string", "format": "email", "example": "aarav@example.com"},
                                    "author": {"type": "string", "example": "Aarav"},
                                },
                            },
                            "examples": {
                                "demo": {
                                    "summary": "Demo idea",
                                    "value": {
                                        "title": "Smart Study Buddy",
                                        "category": "EdTech",
                                        "description": "An app that suggests study groups.",
                                        "author_email": "aarav@example.com",
                                    },
                                }
                            },
                        }
                    },
                },
            },
        },
        "/ideas/{idea_id}/upvote": {
            "post": {
                "summary": "Upvote an idea",
                "parameters": [
                    {
                        "name": "idea_id",
                        "in": "path",
                        "required": True,
                        "schema": {"type": "integer", "example": 1},
                    }
                ],
            },
        },
        "/events": {
            "get": {
                "summary": "List events",
                "description": "Returns the seeded hackathon/workshop events.",
            }
        },
        "/recommended-members": {
            "get": {
                "summary": "Get teammate recommendations",
                "parameters": [
                    {
                        "name": "email",
                        "in": "query",
                        "required": False,
                        "schema": {"type": "string", "format": "email", "example": "smoke@example.com"},
                        "description": "Student email for matching.",
                    },
                    {
                        "name": "skills",
                        "in": "query",
                        "required": False,
                        "schema": {"type": "string", "example": "Python,Django"},
                        "description": "Comma-separated fallback skills if email is not supplied.",
                    },
                    {
                        "name": "interests",
                        "in": "query",
                        "required": False,
                        "schema": {"type": "string", "example": "AI,Backend"},
                        "description": "Comma-separated fallback interests if email is not supplied.",
                    },
                ],
            },
            "post": {
                "summary": "Get teammate recommendations",
                "requestBody": {
                    "required": False,
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "properties": {
                                    "email": {"type": "string", "format": "email", "example": "smoke@example.com"},
                                    "skills": {"type": "array", "items": {"type": "string"}, "example": ["Python", "Django"]},
                                    "interests": {"type": "array", "items": {"type": "string"}, "example": ["AI", "Backend"]},
                                },
                            },
                        }
                    },
                },
            },
        },
        "/invites": {
            "get": {
                "summary": "List invites",
                "parameters": [
                    {
                        "name": "owner_email",
                        "in": "query",
                        "required": False,
                        "schema": {"type": "string", "format": "email", "example": "smoke@example.com"},
                    }
                ],
            },
            "post": {
                "summary": "Create an invite",
                "requestBody": {
                    "required": True,
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "required": ["email", "name"],
                                "properties": {
                                    "owner_email": {"type": "string", "format": "email", "example": "smoke@example.com"},
                                    "email": {"type": "string", "format": "email", "example": "aarav@example.com"},
                                    "name": {"type": "string", "example": "Aarav"},
                                    "status": {"type": "string", "example": "sent"},
                                },
                            },
                        }
                    },
                },
            },
        },
        "/help-posts": {
            "get": {"summary": "List help posts"},
            "post": {
                "summary": "Create a help post",
                "requestBody": {
                    "required": True,
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "required": ["title", "description"],
                                "properties": {
                                    "title": {"type": "string", "example": "Need UI help"},
                                    "category": {"type": "string", "example": "Team issue"},
                                    "description": {"type": "string", "example": "Looking for frontend help."},
                                    "author": {"type": "string", "example": "Smoke Test"},
                                },
                            },
                        }
                    },
                },
            },
        },
        "/help-posts/{post_id}/toggle": {
            "post": {
                "summary": "Toggle help post status",
                "parameters": [
                    {
                        "name": "post_id",
                        "in": "path",
                        "required": True,
                        "schema": {"type": "integer", "example": 1},
                    }
                ],
            },
        },
        "/activity": {
            "get": {"summary": "List activity"},
            "post": {
                "summary": "Create an activity item",
                "requestBody": {
                    "required": True,
                    "content": {
                        "application/json": {
                            "schema": {
                                "type": "object",
                                "required": ["text"],
                                "properties": {
                                    "type": {"type": "string", "example": "update"},
                                    "text": {"type": "string", "example": "Demo activity item."},
                                },
                            },
                        }
                    },
                },
            },
        },
        "/explore-items": {"get": {"summary": "List explore cards"}},
        "/tour-steps": {"get": {"summary": "List guided tour steps"}},
    },
}

TOUR_STEPS = [
    {
        "title": "Start on the Home page",
        "text": "See the main idea, then use the buttons to jump into the app.",
        "actionLabel": "Go to Dashboard",
        "actionType": "page",
        "actionTarget": "dashboard",
    },
    {
        "title": "Set up your profile",
        "text": "Add your name, department, skills, and interests so the app can suggest better teammates.",
        "actionLabel": "Open Profile",
        "actionType": "page",
        "actionTarget": "profile",
    },
    {
        "title": "Find teammates",
        "text": "Click Find teammates to open the popup and choose a student with similar skills.",
        "actionLabel": "Open teammates",
        "actionType": "modal",
        "actionTarget": "teammates",
    },
    {
        "title": "Explore ideas",
        "text": "Browse ideas, post new ones, and upvote projects that look interesting.",
        "actionLabel": "Open ideas",
        "actionType": "modal",
        "actionTarget": "ideas",
    },
    {
        "title": "Check events and explore more",
        "text": "Use events for hackathons and workshops, or open the Explore page to see everything together.",
        "actionLabel": "Open Explore page",
        "actionType": "page",
        "actionTarget": "explore",
    },
]


def health_check(request):
    return json_response(
        {
            "success": True,
            "message": "CampusConnect API is running.",
            "routes": API_ENDPOINTS,
        }
    )


def home_view(request):
    html = """
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>CampusConnect API</title>
    <style>
      :root {
        color-scheme: light;
        --bg: #f8efe2;
        --panel: #fffaf3;
        --card: #fffdf9;
        --text: #2b1b12;
        --muted: #5d4330;
        --accent: #2563eb;
        --accent-2: #1d4ed8;
        --border: rgba(119, 82, 56, 0.16);
      }
      * { box-sizing: border-box; }
      body {
        margin: 0;
        min-height: 100vh;
        display: grid;
        place-items: center;
        font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
        background:
          radial-gradient(circle at top left, rgba(219, 178, 120, 0.2), transparent 32%),
          radial-gradient(circle at bottom right, rgba(59, 130, 246, 0.12), transparent 28%),
          var(--bg);
        color: var(--text);
        padding: 24px;
      }
      .card {
        width: min(720px, 100%);
        background: linear-gradient(180deg, rgba(255, 250, 243, 0.98), rgba(252, 244, 232, 0.98));
        border: 1px solid var(--border);
        border-radius: 24px;
        box-shadow: 0 24px 80px rgba(55, 34, 14, 0.12);
        padding: 32px;
      }
      .eyebrow {
        display: inline-flex;
        align-items: center;
        gap: 8px;
        color: var(--accent-2);
        text-transform: uppercase;
        letter-spacing: 0.18em;
        font-size: 12px;
        font-weight: 800;
      }
      h1 {
        margin: 14px 0 10px;
        font-size: clamp(2rem, 5vw, 3.5rem);
        line-height: 1.05;
        color: #2b1b12;
        font-weight: 800;
      }
      p {
        margin: 0;
        color: var(--muted);
        line-height: 1.6;
        font-size: 1rem;
        font-weight: 700;
      }
      .links {
        display: flex;
        flex-wrap: wrap;
        gap: 12px;
        margin-top: 24px;
      }
      a {
        color: #1d4ed8;
        text-decoration: none;
        background: rgba(255, 250, 243, 0.98);
        border: 1px solid var(--border);
        padding: 12px 16px;
        border-radius: 14px;
        transition: transform 120ms ease, border-color 120ms ease;
        font-weight: 800;
      }
      a:hover {
        transform: translateY(-1px);
        border-color: rgba(37, 99, 235, 0.4);
      }
      code {
        display: inline-block;
        margin-top: 18px;
        padding: 10px 12px;
        border-radius: 12px;
        background: rgba(255, 248, 238, 0.98);
        color: #1d4ed8;
        border: 1px solid var(--border);
        font-weight: 800;
      }
      .status {
        margin-top: 22px;
        color: var(--muted);
        font-size: 0.95rem;
        font-weight: 700;
      }
    </style>
  </head>
  <body>
    <main class="card">
      <div class="eyebrow">CampusConnect API</div>
      <h1>Backend is running.</h1>
      <p>
        This is the browser-friendly home page for the Django backend.
        The API endpoints are still available for your frontend and tests.
      </p>
      <div class="links">
        <a href="/docs/">Open API Docs</a>
        <a href="/api/schema/">View OpenAPI Schema</a>
        <a href="/health/">Check JSON Health</a>
      </div>
      <code>Backend server: http://127.0.0.1:8000</code>
      <div class="status">Tip: use the docs page for the full list of routes and payloads.</div>
    </main>
  </body>
</html>
"""
    return HttpResponse(html)


def explore_items_view(request):
    return json_response({"success": True, "message": "Explore items fetched successfully.", "explore_items": EXPLORE_ITEMS})


def tour_steps_view(request):
    return json_response({"success": True, "message": "Tour steps fetched successfully.", "tour_steps": TOUR_STEPS})


def openapi_schema_view(request):
    return json_response(OPENAPI_SCHEMA)


def swagger_ui_view(request):
    html = """
<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>CampusConnect API Docs</title>
    <link rel="stylesheet" href="https://unpkg.com/swagger-ui-dist@5/swagger-ui.css" />
    <style>
      body { margin: 0; background: #0b1020; }
      .swagger-ui .topbar { display: none; }
    </style>
  </head>
  <body>
    <div id="swagger-ui"></div>
    <script src="https://unpkg.com/swagger-ui-dist@5/swagger-ui-bundle.js"></script>
    <script>
      window.onload = function() {
        window.ui = SwaggerUIBundle({
          url: '/api/schema/',
          dom_id: '#swagger-ui',
          deepLinking: true,
          presets: [SwaggerUIBundle.presets.apis],
          layout: 'BaseLayout'
        });
      };
    </script>
  </body>
</html>
"""
    return HttpResponse(html)
