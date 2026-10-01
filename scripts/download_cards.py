import json
import os
import urllib.request

step_file = "/home/wei/.gemini/antigravity-cli/brain/3b89bce3-a132-40cd-9671-1cde762372c5/.system_generated/steps/64/content.md"
with open(step_file, "r", encoding="utf-8") as f:
    text = f.read()

json_str = text.split("---\n\n", 1)[1].strip()
cards = json.loads(json_str)

out_dir = "/home/wei/work/I-forgot-the-KT-goals/rulebook/cards"
os.makedirs(out_dir, exist_ok=True)

opener = urllib.request.build_opener()
opener.addheaders = [("User-Agent", "Mozilla/5.0")]
urllib.request.install_opener(opener)

for c in cards:
    name = c["name"]
    url = c["download_url"]
    dest = os.path.join(out_dir, name)
    if not os.path.exists(dest):
        print(f"Downloading {name}...")
        try:
            urllib.request.urlretrieve(url, dest)
            print(f"Downloaded {name}")
        except Exception as e:
            print(f"Failed {name}: {e}")

print("All card downloads completed.")
