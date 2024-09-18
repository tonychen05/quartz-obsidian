```python
### Uses CMU CS Academy Graphics Package

#pneumonoultramicroscopicsilicovolcanoconiosis
# txt = 'able about account acid across act addition adjustment advertisement after again against agreement among amoung amusement angry animal answer apparatus attention attraction brother bottle boiling bone cook building business button camera canvas carriage certain chance change chemical church circle competition condition conscious dependent destruction distribution education existence expansion experience feather fiction government healthy hearing history important impulse increase industry knowledge language learning library measure material medical meeting military morning noise normal necessary observation office organization pleasure poison political position possible potato present quality question quiet rain range reaction receipt record relation request responsible reward science scissors secretary selection separate strech straight table teaching tendency thought through thunder ticket together tomorrow transport umbrella value violent waiting weather whistle window writing wrong year yellow yesterday zebra'
# x = txt.split()
# print(x)
hangman = Group(
    Line(20, 285, 125, 285, lineWidth = 5),
    Line(60, 285, 60, 80, lineWidth = 5),
    Line(60, 80, 150, 80, lineWidth = 5),
    Line(150, 80, 150, 115, lineWidth = 5)
    )

head = Circle(150, 140, 20, fill=None, borderWidth = 5, border = 'black')
body = Line(150, 165, 150, 210, lineWidth = 5)
leg1 = Line(145, 215, 130, 240, lineWidth = 5)
leg2 = Line(155, 215, 170, 240, lineWidth = 5)
arm1 = Line(140, 175, 130, 200, lineWidth = 5)
arm2 = Line(160, 175, 170, 200, lineWidth = 5)
head.visible = False
body.visible = False
leg1.visible = False
leg2.visible = False
arm1.visible = False
arm2.visible = False
wordList = ['able', 'about', 'account', 'acid', 'across', 'act', 'addition', 'adjustment', 'advertisement', 'after', 'again', 'against', 'agreement', 'among', 'amoung', 'amusement', 'angry', 'animal', 'answer', 'apparatus', 'attention', 'attraction', 'brother', 'bottle', 'boiling', 'bone', 'cook', 'building', 'business', 'button', 'camera', 'canvas', 'carriage', 'certain', 'chance', 'change', 'chemical', 'church', 'circle', 'competition', 'condition', 'conscious', 'dependent', 'destruction', 'distribution', 'education', 'existence', 'expansion', 'experience', 'feather', 'fiction', 'government', 'healthy', 'hearing', 'history', 'important', 'impulse', 'increase', 'industry', 'knowledge', 'language', 'learning', 'library', 'measure', 'material', 'medical', 'meeting', 'military', 'morning', 'noise', 'normal', 'necessary', 'observation', 'office', 'organization', 'pleasure', 'poison', 'political', 'position', 'possible', 'potato', 'present', 'quality', 'question', 'quiet', 'rain', 'range', 'reaction', 'receipt', 'record', 'relation', 'request', 'responsible', 'reward', 'science', 'scissors', 'secretary', 'selection', 'separate', 'strech', 'straight', 'table', 'teaching', 'tendency', 'thought', 'through', 'thunder', 'ticket', 'together', 'tomorrow', 'transport', 'umbrella', 'value', 'violent', 'waiting', 'weather', 'whistle', 'window', 'writing', 'wrong', 'year', 'yellow', 'yesterday', 'zebra']
allowedKeys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
app.word = choice(wordList)
app.attempts = 0
app.success = 0
app.maxAttempts = 6
app.word = app.word.upper()
lines = Group()
attempts = Group()
app.lines = []
app.triedLetters = []
Label('Guessed: ', 10, 10, align = 'left')
for i in range(len(app.word)):
    lines.add(Label('_', (400//len(app.word))*i, 390, size = 400//len(app.word), align = 'bottom'))
lines.centerX = 200
for line in lines:
    app.lines.append(line)
def drawAttempts():
    attempts.clear()
    attempt = ''
    for l in app.triedLetters:
        attempt += l
        attempt += ', '
    attempts.add(Label(attempt, 10, 30, align = 'left'))
def onKeyPress(key):
    key = key.upper()
    if  ((key in app.triedLetters) == False) and ((key in allowedKeys) == True):
        if (key in app.word):
            for i in range(len(app.word)):
                if key == app.word[i]:
                    cx = app.lines[i].centerX
                    cy = app.lines[i].centerY
                    Label(key, cx, cy - (150//len(app.word)), size = (400//len(app.word)))
                    app.success += 1
            app.triedLetters.append(key)
        else:
            app.attempts += 1
            app.triedLetters.append(key)
    drawAttempts()
    if app.attempts >= 1:
        head.visible = True
    if app.attempts >= 2:
        body.visible = True
    if app.attempts >= 3:
        leg1.visible = True
    if app.attempts >= 4:
        leg2.visible = True
    if app.attempts >= 5:
        arm1.visible = True
    if app.attempts >= 6:
        arm2.visible = True
    if app.success == len(app.word):
        Rect(200,200,400, 150, align='center', opacity = 75)
        Label('YOU WIN!', 200, 170, size = 50, fill='white', bold = True)
        Label('The word was: ', 200, 210, size = 20, fill='white', align = 'center', bold = True)
        Label(app.word, 200, 240, size = 14, fill='white', align = 'center')
        app.paused = True
    elif app.attempts >= app.maxAttempts:
        Rect(200,200,400, 150, align='center', opacity = 75)
        Label('YOU LOSE!', 200, 170, size = 50, fill='white', bold = True)
        Label('The word was: ', 200, 210, size = 20, fill='white', align = 'center', bold = True)
        Label(app.word, 200, 240, size = 14, fill='white', align = 'center')
        app.paused = True
        pass
    pass
```

![[Hangman.png]]
# ---
#python