from datetime import date

from django.views.decorators.csrf import csrf_exempt

from config.api import error, success
from events.models import Event


DEFAULT_EVENTS = [
    {
        "title": "Campus Hack Sprint",
        "event_date": date(2026, 6, 10),
        "event_type": "Hackathon",
        "description": "24-hour college hackathon focused on student innovation.",
        "location": "Main Auditorium",
    },
    {
        "title": "Startup Ideas Workshop",
        "event_date": date(2026, 6, 15),
        "event_type": "Workshop",
        "description": "Learn how to shape an idea into a pitchable project.",
        "location": "Seminar Hall",
    },
    {
        "title": "AI for Beginners",
        "event_date": date(2026, 6, 20),
        "event_type": "Talk",
        "description": "Simple introduction to AI tools useful for student projects.",
        "location": "Room 204",
    },
]


def ensure_default_events():
    if Event.objects.exists():
        return
    Event.objects.bulk_create([Event(**item) for item in DEFAULT_EVENTS])


@csrf_exempt
def events_view(request):
    if request.method != "GET":
        return error("Method not allowed.", status=405)

    ensure_default_events()
    events = Event.objects.all().order_by("event_date", "title")
    return success("Events fetched successfully.", {"events": [event.to_dict() for event in events]})
