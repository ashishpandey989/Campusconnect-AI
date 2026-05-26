import json

from django.http import JsonResponse


def json_response(payload, status=200):
    safe = isinstance(payload, dict)
    return JsonResponse(payload, status=status, safe=safe)


def success(message, data=None, status=200):
    payload = {"success": True, "message": message}
    if data is not None:
        payload.update(data)
    return json_response(payload, status=status)


def error(message, status=400, **extra):
    payload = {"success": False, "message": message}
    payload.update(extra)
    return json_response(payload, status=status)


def parse_request_data(request):
    if request.body:
        content_type = request.headers.get("Content-Type", "")
        if "application/json" in content_type:
            try:
                return json.loads(request.body.decode("utf-8"))
            except json.JSONDecodeError:
                return {}

    data = {}
    if request.POST:
        data.update(request.POST.dict())
    if request.GET:
        data.update(request.GET.dict())
    return data


def split_values(value):
    if value is None:
        return []
    if isinstance(value, list):
        return [str(item).strip() for item in value if str(item).strip()]
    return [item.strip() for item in str(value).split(",") if item.strip()]


def parse_bool(value):
    if isinstance(value, bool):
        return value
    return str(value).lower() in {"1", "true", "yes", "on"}
