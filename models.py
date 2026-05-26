from django.db import models


class Event(models.Model):
    title = models.CharField(max_length=200)
    event_date = models.DateField()
    event_type = models.CharField(max_length=100, default="Event")
    description = models.TextField()
    location = models.CharField(max_length=200, blank=True, default="")

    def __str__(self):
        return self.title

    def to_dict(self):
        return {
            "id": self.id,
            "title": self.title,
            "date": self.event_date.isoformat(),
            "type": self.event_type,
            "description": self.description,
            "location": self.location,
        }
