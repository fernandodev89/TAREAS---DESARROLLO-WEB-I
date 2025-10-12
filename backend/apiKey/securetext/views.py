from django.shortcuts import render

import uuid
from django.http import JsonResponse
from .redis_client import redis_client
from django.views.decorators.csrf import csrf_exempt
import json

@csrf_exempt
def hide_text(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        text = data.get('text')

        if not text:
            return JsonResponse({'error': 'No text provided'}, status=400)

        key = str(uuid.uuid4())

        redis_client.setex(key, 600, text)

        return JsonResponse({'key': key})

    return JsonResponse({'error': 'Invalid method'}, status=405)


@csrf_exempt
def reveal_text(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        key = data.get('key')

        if not key:
            return JsonResponse({'error': 'No key provided'}, status=400)

        text = redis_client.get(key)

        if not text:
            return JsonResponse({'text': 'Clave no encontrada o ya utilizada'})

        redis_client.delete(key)

        return JsonResponse({'text': text})

    return JsonResponse({'error': 'Invalid method'}, status=405)
