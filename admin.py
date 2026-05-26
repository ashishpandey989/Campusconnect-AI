from django.contrib import admin

from events.models import Event


@admin.register(Event)
class EventAdmin(admin.ModelAdmin):
    list_display = ("title", "event_type", "event_date", "location")
    list_filter = ("event_type", "event_date")
    search_fields = ("title", "description", "location")
