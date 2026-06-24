import re
import sys
import os

def process_file(path):
    with open(path, 'r', encoding='utf-8') as f:
        text = f.read()
    
    def replace_all(t):
        t = t.replace('Buudy LED Mask', 'Muuhu IPL')
        t = t.replace('buudy-led-mask', 'muuhu-ipl-hair-removal')
        t = t.replace('LED Face Mask', 'IPL Hair Removal')
        t = t.replace('LED face mask', 'IPL hair removal')
        t = t.replace('LED Mask', 'IPL')
        t = t.replace('Buudy', 'Muuhu')
        t = t.replace('buudy', 'muuhu')
        return t
        
    new_text = ''
    
    pattern = r'(/images/[^\"\'\s]+|/media/[^\"\'\s]+)'
    segments = re.split(pattern, text)
    
    for i, segment in enumerate(segments):
        if i % 2 == 1:
            # This is the protected path
            new_text += segment
        else:
            new_text += replace_all(segment)
            
    with open(path, 'w', encoding='utf-8') as f:
        f.write(new_text)

files = [
    r'src\app\page.tsx',
    r'src\app\not-found.tsx',
    r'src\app\layout.tsx',
    r'src\data\about.ts',
    r'src\data\contact.ts',
    r'src\data\faqs.ts',
    r'src\lib\site.ts',
    r'src\lib\seo.ts',
    r'src\lib\market.ts'
]

for f in files:
    full_path = os.path.join(r'e:\1st YEAR DTU\New folder\muuhu\apps\uk', f)
    if os.path.exists(full_path):
        process_file(full_path)
    else:
        print(f"File not found: {full_path}")

print('Done replacing.')
