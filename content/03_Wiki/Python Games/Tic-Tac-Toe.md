```python
### Uses CMU CS Academy Graphics Package

#------------------------------
#TIC-TAC-TOE
#------------------------------

#variables
app.winner=False
app.count=0
app.turn='X'
app.Xcolor= rgb(101,100,219)
app.Ocolor= rgb(238,132,52)
app.gridColor=rgb(188,196,219)
app.blockColor=None
#Gridlines
Rect(200, 137.5, 375, 15, fill=app.gridColor, align='center')
Rect(200, 262.5, 375, 15, fill=app.gridColor, align='center')
Rect(137.5, 200, 15, 375, fill=app.gridColor, align='center')
Rect(262.5, 200, 15, 375, fill=app.gridColor, align='center')

#blocks to register clicking
block1=Rect(75, 75, 100, 100, fill=app.blockColor, align='center')
block2=Rect(200, 75, 100, 100, fill=app.blockColor, align='center')
block3=Rect(325, 75, 100, 100, fill=app.blockColor, align='center')
block4=Rect(75, 200, 100, 100, fill=app.blockColor, align='center')
block5=Rect(200, 200, 100, 100, fill=app.blockColor, align='center')
block6=Rect(325, 200, 100, 100, fill=app.blockColor, align='center')
block7=Rect(75, 325, 100, 100, fill=app.blockColor, align='center')
block8=Rect(200, 325, 100, 100, fill=app.blockColor, align='center')
block9=Rect(325, 325, 100, 100, fill=app.blockColor, align='center')

#block messages
block1Message=Label('', 75, 75, fill='white', align='center', size=110)
block2Message=Label('', 200, 75, fill='white', align='center', size=110)
block3Message=Label('', 325, 75, fill='white', align='center', size=110)
block4Message=Label('', 75, 200, fill='white', align='center', size=110)
block5Message=Label('', 200, 200, fill='white', align='center', size=110)
block6Message=Label('', 325, 200, fill='white', align='center', size=110)
block7Message=Label('', 75, 325, fill='white', align='center', size=110)
block8Message=Label('', 200, 325, fill='white', align='center', size=110)
block9Message=Label('', 325, 325, fill='white', align='center', size=110)

#Game Over Screen
def gameOver():
    Rect(200, 200, 255, 105, fill='white', align='center', border=gradient(app.Xcolor, app.Ocolor, start='left'), borderWidth=3)
    Label('Press Run to Restart', 200, 230, size=20, align='center')
    if app.turn == 'O':
        Label('X Won!', 200, 185, size=60, align='center', fill=app.Xcolor, bold=True)
    else:
        Label('O Won!', 200, 185, size=60, align='center', fill=app.Ocolor, bold=True)
    app.stop()
def gameOverDraw():
    Rect(200, 200, 255, 105, fill='white', align='center', border=gradient(app.Xcolor, app.Ocolor, start='left'), borderWidth=3)
    Label('Press Run to Restart', 200, 230, size=20, align='center')
    Label('DRAW!', 200, 185, size=60, align='center', fill=gradient(app.Xcolor, app.Ocolor, start='left'), bold=True)
    app.stop()

def onMousePress(mouseX, mouseY):
    #register click for each block
    if block1.contains(mouseX, mouseY):
        if block1Message.value=='':
            block1Message.value=app.turn
            if app.turn == 'O':
                block1Message.fill=app.Ocolor
            else:
                block1Message.fill=app.Xcolor
            app.count+=1
            if app.turn == 'O':
                app.turn='X'
                print(app.turn+' Turn')
            else:
                app.turn='O'
                print(app.turn+' Turn')

    elif block2.contains(mouseX, mouseY):
        if block2Message.value=='':
            block2Message.value=app.turn
            if app.turn == 'O':
                block2Message.fill=app.Ocolor
            else:
                block2Message.fill=app.Xcolor
            app.count+=1
            if app.turn == 'O':
                app.turn='X'
                print(app.turn+' Turn')
            else:
                app.turn='O'
                print(app.turn+' Turn')
    elif block3.contains(mouseX, mouseY):
        if block3Message.value=='':
            block3Message.value=app.turn
            if app.turn == 'O':
                block3Message.fill=app.Ocolor
            else:
                block3Message.fill=app.Xcolor
            app.count+=1
            if app.turn == 'O':
                app.turn='X'
                print(app.turn+' Turn')
            else:
                app.turn='O'
                print(app.turn+' Turn')
    elif block4.contains(mouseX, mouseY):
        if block4Message.value=='':
            block4Message.value=app.turn
            if app.turn == 'O':
                block4Message.fill=app.Ocolor
            else:
                block4Message.fill=app.Xcolor
            app.count+=1
            if app.turn == 'O':
                app.turn='X'
                print(app.turn+' Turn')
            else:
                app.turn='O'
                print(app.turn+' Turn')
    elif block5.contains(mouseX, mouseY):
        if block5Message.value=='':
            block5Message.value=app.turn
            if app.turn == 'O':
                block5Message.fill=app.Ocolor
            else:
                block5Message.fill=app.Xcolor
            app.count+=1
            if app.turn == 'O':
                app.turn='X'
                print(app.turn+' Turn')
            else:
                app.turn='O'
                print(app.turn+' Turn')
    elif block6.contains(mouseX, mouseY):
        if block6Message.value=='':
            block6Message.value=app.turn
            if app.turn == 'O':
                block6Message.fill=app.Ocolor
            else:
                block6Message.fill=app.Xcolor
            app.count+=1
            if app.turn == 'O':
                app.turn='X'
                print(app.turn+' Turn')
            else:
                app.turn='O'
                print(app.turn+' Turn')
    if block7.contains(mouseX, mouseY):
        if block7Message.value=='':
            block7Message.value=app.turn
            if app.turn == 'O':
                block7Message.fill=app.Ocolor
            else:
                block7Message.fill=app.Xcolor
            app.count+=1
            if app.turn == 'O':
                app.turn='X'
                print(app.turn+' Turn')
            else:
                app.turn='O'
                print(app.turn+' Turn')
    if block8.contains(mouseX, mouseY):
        if block8Message.value=='':
            block8Message.value=app.turn
            if app.turn == 'O':
                block8Message.fill=app.Ocolor
            else:
                block8Message.fill=app.Xcolor
            app.count+=1
            if app.turn == 'O':
                app.turn='X'
                print(app.turn+' Turn')
            else:
                app.turn='O'
                print(app.turn+' Turn')
    if block9.contains(mouseX, mouseY):
        if block9Message.value=='':
            block9Message.value=app.turn
            if app.turn == 'O':
                block9Message.fill=app.Ocolor
            else:
                block9Message.fill=app.Xcolor
            app.count+=1
            if app.turn == 'O':
                app.turn='X'
                print(app.turn+' Turn')
            else:
                app.turn='O'
                print(app.turn+' Turn')
    #check for winner
    if 5 <= app.count <= 9:
        if block1Message.value == block2Message.value == block3Message.value != '': #top row
            gameOver()
            app.winner=True
        elif block4Message.value == block5Message.value == block6Message.value != '': #middle row
            gameOver()
            app.winner=True
        elif block7Message.value == block8Message.value == block9Message.value != '': #bottom row
            gameOver()
            app.winner=True
        elif block1Message.value == block4Message.value == block7Message.value != '': #left column
            gameOver()
            app.winner=True
        elif block2Message.value == block5Message.value == block8Message.value != '': #middle column
            gameOver()
            app.winner=True
        elif block3Message.value == block6Message.value == block9Message.value != '': #right column
            gameOver()
            app.winner=True
        elif block1Message.value == block5Message.value == block9Message.value != '': #top-left diagonal
            gameOver()
            app.winner=True
        elif block3Message.value == block5Message.value == block7Message.value != '': #top-right diagonal
            gameOver()
            app.winner=True
    #check for draw
    if (app.count >= 9) and (app.winner==False):
        gameOverDraw()
        pass
```

![[Tic-Tac-Toe.png]]
# ---
#python