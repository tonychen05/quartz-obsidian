```python
### Uses CMU CS Academy Graphics Package

boards = Group()
boards.speed = 2
app.stepsPerSecond = 20
app.steps = 0
app.drawBoardSteps = 30
app.score = 0
app.isGameOver = False
gameOverGroup = Group()
background = Group(
    Rect(0, 370, 400, 30, fill='gainsboro', border='darkGray', borderWidth = 3),
    Rect(370, 370, 400, 30, fill='gray', border='darkGray', borderWidth = 3),
    Line(395, 377, 395, 392, fill='black', lineWidth = 3),
    Line(396, 391, 380 ,391, lineWidth=3),
    Line(377,391, 380,391, arrowStart=True, lineWidth =1)
    )
app.textBox = Label('', 200, 385, fill='black', font='arial', align='center', size = 25, bold = False)
cursor = Line(200, 375, 200, 395)
livesLabel = Label('Lives: ', 5, 360, size = 20, align='left')
lives = Label(5, 60, 360, size = 20, align='left')
def drawBoard():
    operators = '+-*/'
    randnum1 = randrange(0,13)
    randnum2 = randrange(0,13)
    randOp = operators[randrange(0,len(operators))]
    randX = randrange(50, 350)
    if randOp == '+':
        board = Group(
            Rect(randX,0,115,50, fill='black', align = 'center'),
            Rect(randX,0,115,50, fill=None, border='darkGreen', borderWidth = 5, align = 'center'),
            Label(str(randnum1) + ' + ' + str(randnum2) + ' =', randX, 0, fill='white', font ='arial', align = 'center', size = 25)
            )
        answer = (randnum1+randnum2)
        board.answer = str(answer)
        boards.add(board)
    if randOp == '-':
        board = Group(
            Rect(randX,0,110,50, fill='black', align = 'center'),
            Rect(randX,0,110,50, fill=None, border='darkGreen', borderWidth = 5, align = 'center'),
            Label(str(randnum1) + ' - ' + str(randnum2) + ' =', randX, 0, fill='white', font ='arial', align = 'center', size = 25)
            )
        answer = (randnum1-randnum2)
        board.answer = str(answer)
        boards.add(board)
    if randOp == '*':
        board = Group(
            Rect(randX,0,110,50, fill='black', align = 'center'),
            Rect(randX,0,110,50, fill=None, border='darkGreen', borderWidth = 5, align = 'center'),
            Label(str(randnum1) + ' x ' + str(randnum2) + ' =', randX, 0, fill='white', font ='arial', align = 'center', size = 25)
            )
        answer = (randnum1*randnum2)
        board.answer = str(answer)
        boards.add(board)
    if (randOp == '/') and (randnum2 != 0) and (randnum1%randnum2==0):
        board = Group(
            Rect(randX,0,110,50, fill='black', align = 'center'),
            Rect(randX,0,110,50, fill=None, border='darkGreen', borderWidth = 5, align = 'center'),
            Label(str(randnum1) + ' / ' + str(randnum2) + ' =', randX, 0, fill='white', font ='arial', align = 'center', size = 25)
            )
        answer = (randnum1//randnum2)
        board.answer = str(answer)
        boards.add(board)
def onKeyPress(key):
    if (key.isdigit() == True) or (key == '-'):
        app.textBox.value += key
    if (key == 'backspace'):
        newvalue = ''
        for i in range(0, len(app.textBox.value)-1):
            newvalue += app.textBox.value[i]
        app.textBox.value = newvalue
    if (key == 'enter') and (app.textBox.value != ''):
        response = app.textBox.value
        app.textBox.value = ''
        for board in boards:
            if response == board.answer:
                app.score += 1
                boards.remove(board)
def onStep():
    if app.isGameOver == False:
        app.steps += 1
        if (app.steps % 10 == 0) and (app.textBox.value == ''):
            if cursor.visible == True:
                cursor.visible = False
            else:
                cursor.visible = True
        elif app.textBox.value != '':
            cursor.visible = False
        if app.steps % app.drawBoardSteps == 0:
            drawBoard()
        if app.steps % 300 == 0:
            boards.speed+=1
        if app.steps * 50 == 0:
            app.drawBoardSteps -= 5
        for board in boards:
            board.centerY += boards.speed
            if board.top >= 400:
                lives.value -= 1
                boards.remove(board)
        if lives.value <= 0:
            gameOver()

def gameOver():
    app.isGameOver = True
    if (app.isGameOver == True):
        gameOverGroup.add(
            Rect(0,0,400,400, fill='white'),
            Label('Game Over!', 200, 130, size = 80, font='grenze', bold = True),
            Label('You solved ' + str(app.score) + ' problems!', 200, 225, size = 25, font='arial'),
            )
        gameOverGroup.toFront()
    boards.clear()
```

![[MathFall.png]]
# ---
#python