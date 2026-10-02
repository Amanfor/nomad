import re

with open('src/components/NomadApp.tsx', 'r') as f:
    content = f.read()

# 1. [ tasks ]
# Let's find the tasks div.
tasks_pattern = r'''(<div[^>]*?)style={{([^}]*)}}([^>]*>)\s*\[ tasks \]\s*</div>'''
def tasks_repl(m):
    pre = m.group(1)
    style = m.group(2)
    post = m.group(3)
    # inject className="nomad-btn"
    if 'className=' in pre:
        pass # Handle if there is already a className, but there isn't.
    
    # Let's remove font-related inline styles if possible, or just append className
    new_div = pre + 'className="nomad-btn" style={{' + style + '}}' + post + '\n        ⟨ tasks ⟩\n      </div>'
    return new_div

# Actually a safer way is to just do straight string replacements for the known instances.
