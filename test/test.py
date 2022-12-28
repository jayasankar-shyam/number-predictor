import requests

resp = requests.post(" https://getprediction-gzrkj7ydfa-uc.a.run.app", files={'file': open('9.png', 'rb')})

print(resp.json())
