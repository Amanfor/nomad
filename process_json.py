import json

data = json.load(open('/home/aman/nomad/TARGET_QUESTIONS.json'))

mapping = {
    200: {"chapter": "Kinematics", "topic": "Projectile Motion"},
    201: {"chapter": "Kinematics", "topic": "Projectile Motion"},
    202: {"chapter": "Newton's Laws of Motion", "topic": "Force and Acceleration"},
    203: {"chapter": "Newton's Laws of Motion", "topic": "Force and Acceleration"},
    204: {"chapter": "Newton's Laws of Motion", "topic": "Drag Force"},
    205: {"chapter": "Newton's Laws of Motion", "topic": "Variable Mass System"},
    206: {"chapter": "Newton's Laws of Motion", "topic": "Force and Acceleration"},
    207: {"chapter": "Newton's Laws of Motion", "topic": "Force and Acceleration"},
    208: {"chapter": "Newton's Laws of Motion", "topic": "Drag Force"},
    209: {"chapter": "Newton's Laws of Motion", "topic": "Resultant Force"},
    210: {"chapter": "Newton's Laws of Motion", "topic": "Momentum and Force"},
    211: {"chapter": "Newton's Laws of Motion", "topic": "Equilibrium"},
    212: {"chapter": "Newton's Laws of Motion", "topic": "Impulse"},
    213: {"chapter": "Newton's Laws of Motion", "topic": "Impulse"},
    214: {"chapter": "Newton's Laws of Motion", "topic": "Impulse and Momentum"},
    215: {"chapter": "Kinematics", "topic": "Equations of Motion in 2D"},
    216: {"chapter": "Newton's Laws of Motion", "topic": "Friction"},
    217: {"chapter": "Newton's Laws of Motion", "topic": "Resultant Force"},
    218: {"chapter": "Newton's Laws of Motion", "topic": "Variable Force"},
    219: {"chapter": "Newton's Laws of Motion", "topic": "Variable Force"},
    220: {"chapter": "Newton's Laws of Motion", "topic": "Force and Acceleration"},
    221: {"chapter": "Newton's Laws of Motion", "topic": "Variable Force"},
    222: {"chapter": "Newton's Laws of Motion", "topic": "Equilibrium"},
    223: {"chapter": "Newton's Laws of Motion", "topic": "Variable Force"},
    224: {"chapter": "Newton's Laws of Motion", "topic": "Pseudo Force"},
    225: {"chapter": "Newton's Laws of Motion", "topic": "Variable Mass System"},
    226: {"chapter": "Newton's Laws of Motion", "topic": "Force and Acceleration"},
    227: {"chapter": "Newton's Laws of Motion", "topic": "Force and Acceleration"},
    228: {"chapter": "Newton's Laws of Motion", "topic": "Equilibrium"},
    229: {"chapter": "Newton's Laws of Motion", "topic": "Variable Mass System"},
}

for item in data:
    if 'topic' in item:
        del item['topic']
    item['chapter'] = mapping[item['id']]['chapter']
    item['topic'] = mapping[item['id']]['topic']

with open('/home/aman/nomad/TARGET_UPDATED.json', 'w') as f:
    json.dump(data, f, indent=2)

print("Done")
