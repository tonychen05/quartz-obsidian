```python
### Uses CMU CS Academy Graphics Package

app.rows = 9
app.cols = 9
app.size = 35
app.grid = makeList(app.rows, app.cols)
app.isMineHit = False
app.firstClick = False
app.mouseX = 0
app.mouseY = 0
app.mineCount = 0
app.isGameOver = False

instructions = Group(
    Rect(0, 50, 400, 300, fill='lightBlue'),
    Label('Welcome to Minesweeper!', 200, 100, align='center', size = 30, bold = True),
    Label('Click on a box,', 20, 135, align = 'left', size = 20),
    Label('the number indicates how many of the squares around have mines', 20, 155, align ='left', size = 12),
    Label('Press \"F\" over a square to flag where you think a mine is', 20, 180, align ='left', size = 15),
    Label('Dont Click A Mine!', 20, 230, align ='left', size = 30, fill = 'red', bold = True),
    Label('Good Luck!', 20, 270, align ='left', size = 30, fill = 'blue', bold = True),
    Label('Press \"space\" to begin', 80, 315, align ='left', size = 20, fill = 'black', bold = True)
    )

Rect(42.5, 35, 315, 30, fill='navy', border='black')
Label('Minesweeper', 128, 52, fill='white', size = 14, bold=True, font='orbitron')
minesweeperIcon = Image('cmu://219906/22546189/pngwing.com.png', 50, 42)
minesweeperIcon.width /= 50
minesweeperIcon.height /= 50


def makeGrid():
    for row in range(app.rows):
        for col in range(app.cols):
            x = 42.5 + app.size * col
            y = 65 + app.size * row
            rect = Rect(x, y, app.size, app.size, fill='gray', border='black', borderWidth = 1)
            rect.value = 0
            rect.status = 'notClicked'
            rect.row = row
            rect.col = col
            app.grid[row][col] = rect
makeGrid()
instructions.toFront()

def placeBombs(num, row, col):
    while (app.mineCount < num):
        randRow = randrange(app.rows)
        randCol = randrange(app.cols)
        if ((app.grid[row][col]) != (app.grid[randRow][randCol])):
            app.grid[randRow][randCol].value = -1
            app.grid[randRow][randCol].status = 'mine'
            app.mineCount += 1
    for row in range(app.rows):
        for col in range(app.cols):
            if app.grid[row][col].value == None:
                app.grid[row][col].value = 0
    checkAdjacent()
                
def checkAdjacent():
    for row in range(app.rows):
        for col in range(app.cols):
            if app.grid[row][col].value == -1:
                cRow = row
                cCol = col
                for i in range(-1,2,1):
                    for j in range(-1,2,1):
                        newRow = cRow + i
                        newCol = cCol + j
                        if (newRow >= 0) and (newRow < 9) and (newCol >= 0) and (newCol < 9):
                            if app.grid[newRow][newCol].value != -1:
                                app.grid[newRow][newCol].value += 1


def checkAdjacentZeros(cell):
    adjacentList = findAdjacent(cell)
    for adjacent in adjacentList:
        if adjacent.value != -1:
            adjacent.status = 'clicked'
            showValue(adjacent)

def findAdjacent(cell):
        adjacentList = [ ]
        cRow = cell.row
        cCol = cell.col
        for i in range(-1,2,1):
            for j in range(-1,2,1):
                newRow = cRow + i
                newCol = cCol + j
                if (newRow >= 0) and (newRow < 9) and (newCol >= 0) and (newCol < 9):
                    if app.grid[newRow][newCol].status == 'notClicked':
                        adjacentList.append(app.grid[newRow][newCol])
        return adjacentList
        
def revealMines():
    for row in range(app.rows):
        for col in range(app.cols):
            cell = app.grid[row][col]
            if (cell.status == 'mine') or (cell.status == 'mineFlagged') :
                cell.fill='red'
                cell.border = 'red'
                Circle(cell.centerX, cell.centerY , 8, fill='black', align = 'center')
                Star(cell.centerX, cell.centerY, 12, 6, fill='black', roundness = 50)
    gameOver()
                
def gameOver():
    app.isGameOver = True
    if app.isMineHit == False:
        Rect(0, 100, 400, 200, opacity = 60)
        Label('YOU WIN!', 200, 200, align = 'center', fill='white', size = 60, opacity = 100, bold = True)
    elif app.isMineHit == True:
        Rect(0, 100, 400, 200, opacity = 60)
        Label('OOPS!', 200, 160, align = 'center', fill='white', size = 60, opacity = 30, bold = True)
        Label('You hit a mine :(', 200, 235, align = 'center', fill='white', size = 40, opacity = 30, bold = True)
    pass

def showValue(cell):
    value = cell.value
    cx = cell.centerX
    cy = cell.centerY
    if value == 1:
        Label(value, cx, cy, fill='blue', bold = True)
    elif value == 2:
        Label(value, cx, cy, fill='green', bold = True)
    elif value == 3:
        Label(value, cx, cy, fill='red', bold = True)
    else:
        if (value != 0) and (value != -1):
            Label(value, cx, cy, fill='deepPink', bold = True)
    pass

def updateStatus():
    for row in range(app.rows):
        for col in range(app.cols):
            if app.grid[row][col].status == 'clicked':
                app.grid[row][col].fill='lightGray'
                app.grid[row][col].border = None
            elif (app.grid[row][col].status == 'flagged') or (app.grid[row][col].status == 'mineFlagged'):
                app.grid[row][col].fill='green'
                app.grid[row][col].border = 'black'
            elif app.grid[row][col].status == 'notClicked':
                app.grid[row][col].fill='gray'
                app.grid[row][col].border = 'black'
            elif app.grid[row][col].status == 'mine':
                app.grid[row][col].fill='gray'
                app.grid[row][col].border = 'black'
                
def findCell(x, y):
    for row in range(app.rows):
        for col in range(app.cols):
            cell = app.grid[row][col]
            if cell.hits(x, y):
                return app.grid[row][col]
                
def checkIfWon():
    zeros = 0
    for row in range(app.rows):
        for col in range(app.cols):
            if app.grid[row][col].status == 'clicked':
                zeros += 1
                if zeros == (81 - app.mineCount):
                    revealMines()
    
def onMousePress(mouseX, mouseY):
    if (app.isGameOver == False) and (instructions.visible == False):
        cell = findCell(mouseX, mouseY)
        if app.firstClick == True:
            if (cell != None) and (cell.status != 'flagged') and (cell.status != 'mineFlagged'):
                if cell.status != 'mine':
                    cell.status = 'clicked'
                    showValue(cell)
                    if cell.value == 0:
                        checkAdjacentZeros(cell)
                    updateStatus()
                elif cell.status == 'mine':
                    app.isMineHit = True
                    updateStatus()
                    revealMines()
        elif app.firstClick == False:
            if (cell != None) and (cell.status != 'flagged') and (cell.status != 'mineFlagged'):
                placeBombs(10, cell.row, cell.col)
                cell.status = 'clicked'
                showValue(cell)
                checkAdjacentZeros(cell)
                updateStatus()
                app.firstClick = True
            # debug()
        checkIfWon()
        
def onMouseMove(mouseX, mouseY):
    app.mouseX = mouseX
    app.mouseY = mouseY
    
def onKeyPress(key):
    if key == 'space':
        instructions.visible = False
    if (key == 'f') and (app.firstClick == True):
        cell = findCell(app.mouseX, app.mouseY)
        if cell != None:
            if (cell.status == 'notClicked'):
                cell.status = 'flagged'
            elif cell.status == 'mine':
                cell.status = 'mineFlagged'
            elif cell.status == 'flagged':
                cell.status = 'notClicked'
            elif cell.status == 'mineFlagged':
                cell.status = 'mine'
        updateStatus()
        
def debug():
    for row in range(app.rows):
        for col in range(app.cols):
            showValue(app.grid[row][col])
```

![[Minesweeper.png]]
# ---
#python