import redis

redis_client = redis.StrictRedis(
    host='redis_server', 
    port=6379,
    db=0,
    decode_responses=True
)