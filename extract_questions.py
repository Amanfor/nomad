import re
import json

with open('/home/aman/nomad/src/components/NomadApp.tsx', 'r') as f:
    content = f.read()

def extract_array(array_name):
    pattern = r"export const " + array_name + r" = (\[.*?\]);"
    match = re.search(pattern, content, re.DOTALL)
    if match:
        # Evaluate as JSON by replacing single quotes with double quotes? No, the file seems to have valid JS arrays which might be JSON.
        # Let's write the matched string to a JS file and run node to dump it.
        js_code = f"const fs = require('fs');\nconst data = {match.group(1)};\nfs.writeFileSync('/home/aman/nomad/{array_name}.json', JSON.stringify(data, null, 2));"
        with open(f"/home/aman/nomad/dump_{array_name}.js", "w") as js_f:
            js_f.write(js_code)
        return True
    return False

if extract_array("MICRO_QUESTIONS") and extract_array("TARGET_QUESTIONS"):
    print("Successfully dumped.")
else:
    print("Failed to dump.")
