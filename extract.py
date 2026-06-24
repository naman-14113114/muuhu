from bs4 import BeautifulSoup
import sys

def extract_text(file_path):
    with open(file_path, "r", encoding="utf-8", errors="ignore") as f:
        soup = BeautifulSoup(f, "html.parser")
        print(soup.get_text(separator="\n", strip=True)[:3000])

extract_text(r"C:\Users\sahil\.gemini\antigravity\brain\f29cb73d-dc8c-4575-841d-ccc1df791e42\.system_generated\steps\2152\content.md")
print("\n" + "="*50 + "\n")
extract_text(r"C:\Users\sahil\.gemini\antigravity\brain\f29cb73d-dc8c-4575-841d-ccc1df791e42\.system_generated\steps\2146\content.md")
