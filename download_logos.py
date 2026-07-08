import urllib.request
import os

logos = {
    "ford": "https://upload.wikimedia.org/wikipedia/commons/a/a0/Ford_Motor_Company_Logo.svg",
    "vw": "https://upload.wikimedia.org/wikipedia/commons/6/6d/Volkswagen_logo_2019.svg",
    "mercedes": "https://upload.wikimedia.org/wikipedia/commons/9/90/Mercedes-Logo.svg",
    "volvo": "https://upload.wikimedia.org/wikipedia/commons/2/29/Volvo_logo.svg",
    "man": "https://upload.wikimedia.org/wikipedia/commons/2/24/MAN_logo.svg",
    "daf": "https://upload.wikimedia.org/wikipedia/commons/5/52/DAF_logo.svg",
    "scania": "https://upload.wikimedia.org/wikipedia/commons/3/30/Scania_wordmark.svg",
    "agrale": "https://upload.wikimedia.org/wikipedia/commons/8/87/Agrale_logo.svg",
    "sinotruk": "https://upload.wikimedia.org/wikipedia/commons/4/4e/Sinotruk_logo.svg"
}

os.makedirs("/Users/hadi/dexter-embreagens/public/logos", exist_ok=True)

headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36'}

for name, url in logos.items():
    try:
        req = urllib.request.Request(url, headers=headers)
        with urllib.request.urlopen(req) as response:
            with open(f"/Users/hadi/dexter-embreagens/public/logos/{name}.svg", 'wb') as out_file:
                out_file.write(response.read())
        print(f"Downloaded {name}")
    except Exception as e:
        print(f"Failed {name}: {e}")
