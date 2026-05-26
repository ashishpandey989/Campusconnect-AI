from django.contrib import admin
from django.urls import include, path

from config.views import explore_items_view, health_check, home_view, openapi_schema_view, swagger_ui_view, tour_steps_view

urlpatterns = [
    path("", home_view),
    path("health/", health_check),
    path("admin/", admin.site.urls),
    path("docs/", swagger_ui_view),
    path("api/", swagger_ui_view),
    path("api/docs/", swagger_ui_view),
    path("api/schema/", openapi_schema_view),
    path("", include("users.urls")),
    path("", include("ideas.urls")),
    path("", include("teams.urls")),
    path("", include("events.urls")),
    path("explore-items", explore_items_view),
    path("tour-steps", tour_steps_view),
]
