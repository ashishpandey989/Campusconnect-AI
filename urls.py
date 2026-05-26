from django.urls import path

from events.views import events_view

urlpatterns = [
    path("events", events_view),
]
