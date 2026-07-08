import urllib.request
import os

logos = {
    "scania.svg": "https://upload.wikimedia.org/wikipedia/commons/4/4b/Scania_logo.svg",
    "volvo.svg": "https://upload.wikimedia.org/wikipedia/commons/0/02/Volvo_Iron_Mark.svg",
    "iveco.svg": "https://upload.wikimedia.org/wikipedia/commons/7/7b/Iveco_logo.svg",
    "daf.svg": "https://upload.wikimedia.org/wikipedia/commons/9/9f/DAF_logo.svg",
    "man.svg": "https://upload.wikimedia.org/wikipedia/commons/1/1b/MAN_logo.svg"
}

os.makedirs("public/logos", exist_ok=True)

for name, url in logos.items():
    path = os.path.join("public/logos", name)
    try:
        urllib.request.urlretrieve(url, path)
        print(f"Downloaded {name}")
    except Exception as e:
        print(f"Failed to download {name}: {e}")
