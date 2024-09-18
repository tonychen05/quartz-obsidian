```python
### Uses CMU CS Academy Graphics Package

ground = Rect(0,375,400,25,fill='lightGrey')
player = Group(
    Rect(0,355,20,20, fill='green')
    )
shield = Group(
    )
blobs = Group(
    )
gameOverGroup = Group(
    )
instructions = Group(
    Rect(200,200,300,200, fill='white', align='center', border='black'),
    Label('Dodge!', 200, 160, size = 50, bold = True),
    Label('\"Arrows\" to Move // \"Space\" for Shield', 200,230, size = 15, bold = True),
    Label('Press \'s\' to Start', 200,270, size = 15, bold = True)
    )
shieldTimer = Arc(40,30,50,50,0,360,fill='blue', opacity = 60)
shieldLabel = Label('SHIELD',40,25,align = 'center', bold = True, font='orbitron',size = 15)
shieldLabel = Label('(space)',40,37,align = 'center', bold = False, italic = True, font='arial',size = 10)
app.start = False
livesLabel = Label('Lives:', 370, 30, size = 30, align='right', fill='darkred', bold = True)


def init():
    app.isGameOver = False
    app.stepsPerSecond = 20
    app.steps = 0
    app.timer = 0
    
    blobs.clear()
    player.left = 0
    player.bottom = 375
    gameOverGroup.clear()
   
    player.isJumping = False
    player.isFalling = False
    player.dx = 10
    player.dy = -17
    player.maxHeight = 295
    player.lives = 3
    
    app.maxBlobs = 5
    app.numBlobs = 0
    app.incMaxBlobSteps = 0
    app.incSpeedSteps = 0
    app.incSpeed = 0
    
    app.shieldCD = 60
    app.shieldUptime = 20
    app.isShieldUp = False
    shield.clear()
    app.shieldCDTimer = 0
    shieldTimer.sweepAngle = 360
    
    instructions.visible = False
    app.start = True
    pass

def onKeyHold(keys):
    if app.start == True:
        if ('left' in keys):
            if (player.left != 0):
                player.centerX -= player.dx
        if ('right' in keys): 
            if (player.right != 400):
                player.centerX += player.dx
        if ('up' in keys):
            if player.bottom == 375:
                player.isJumping = True
def onKeyPress(key):
    if app.start == True:
        if (key == 'space') and (app.shieldCDTimer <= 0) and (shieldTimer.sweepAngle >= 360):
                shieldsUp()
        if (key == 'r'):
                init()
    if key == 's':
        init()
        pass
    
def shieldsUp():
    shield.add(Circle(player.centerX,player.centerY, 50, fill=gradient(
        'powderBlue', 'powderBlue', 'powderBlue', 'powderBlue', 'powderBlue', 'blue')))
    shield.toBack()
    app.isShieldUp = True
    app.shieldUpTimer = app.shieldUptime
    pass

def shieldsDown():
    shieldTimer.fill = 'mediumSlateBlue'
    shield.clear()
    app.shieldCDTimer = app.shieldCD
    app.isShieldUp = False


def makeBlobs(x, y):
    if (app.numBlobs < app.maxBlobs):
        newBlobDx = 1
        newBlobDy = 1
        blob = Circle(x, y, 5, fill='orangeRed')
        newBlobDx = (randrange(-5, -1) - app.incSpeed)
        newBlobDy = (randrange(-5, -1) - app.incSpeed)
        blob.dx = newBlobDx 
        blob.dy = newBlobDy
        blobs.add(blob)
        app.numBlobs += 1
    pass

def moveBlobs():
    for blob in blobs.children:
        blob.centerX += blob.dx
        blob.centerY += blob.dy
        if (blob.left <= 0):
            blob.dx *= -1
            blob.left = 0
        if (blob.right >= 400):
            blob.dx *= -1
            blob.right = 400
        if (blob.top <= 0):
            blob.dy *= -1
            blob.top = 0
        if (blob.bottom >= 375):
            blob.bottom = 375
            blob.dy *= -1
            
def speedUp():
    app.incSpeed += 1
    for blob in blobs.children:
        if blob.dx <= 0:
            blob.dx -= 1
        else:
            blob.dx += 1
        if blob.dy <= 0:
            blob.dy -= 1
        else:
            blob.dy += 1
            
def checkIfHits():
    for blob in blobs.children:
        if blob.hitsShape(player):
            blobs.remove(blob)
            app.numBlobs -= 1
            app.maxBlobs -= 1
            player.lives -= 1
        if blob.hitsShape(shield):
            blobs.remove(blob)
            app.numBlobs -= 1
            app.maxBlobs -= 1
        # if blob.hitsShape(blob):
        #     blob.dx *= -1
        #     blob.dy *= -1
    pass

def checkIfJumping():
    if player.isJumping == True:
        player.centerY += player.dy
        if player.centerY <= player.maxHeight:
            player.isJumping = False
            player.isFalling = True
    if (player.isFalling == True):
        player.centerY -= player.dy
        if (player.bottom >= 375):
            player.bottom = 375
            player.isFalling = False
            player.isJumping = False

def onStep():
    if app.start == True:
        livesLabel.value = 'Lives: ' + str(player.lives)
        app.steps += 1
        if app.steps >= 20:
            app.timer += 1
            app.steps = 0
        app.incMaxBlobSteps += 1
        if (app.incMaxBlobSteps >= 40):
            app.incMaxBlobSteps = 0
            app.maxBlobs += 1
        app.incSpeedSteps += 1
        if (app.incSpeedSteps >= 80):
            speedUp()
            app.incSpeedSteps = 0
        if (app.isGameOver == False):
            moveBlobs()
        checkIfHits()
        checkIfJumping()
        makeBlobs(200,200)
        shield.centerX = player.centerX
        shield.centerY = player.centerY 
        if (app.isShieldUp == True):
            app.shieldUpTimer -= 1
            shieldTimer.fill = 'blue'
            if (shieldTimer.sweepAngle - (360/app.shieldUptime)) >= 0.1:
                shieldTimer.sweepAngle -= ((360/app.shieldUptime))
            if (app.shieldUpTimer <= 0):
                shieldsDown()
        elif (app.isShieldUp == False):
            if app.shieldCDTimer > 0:
                app.shieldCDTimer -= 1
            else:
                shieldTimer.fill = 'blue'
            if (shieldTimer.sweepAngle + (360/app.shieldCD)) <= 360:
                shieldTimer.sweepAngle += ((360/app.shieldCD))
        if (player.lives <= 0):
            gameOver()
        
        
def gameOver():
    app.isGameOver = True
    if (app.isGameOver == True):
        gameOverGroup.add(
            Rect(0,0,400,400, fill='white'),
            Label('Game Over!', 200, 130, size = 80, font='grenze', bold = True),
            Label('You survived for ' + str(app.timer) + ' seconds!', 200, 225, size = 25, font='arial'),
            Label('Press' + ' \'R\' ' + 'to Restart', 200, 300, size = 30, font='caveat')
            )
        gameOverGroup.toFront()
    blobs.clear()
    player.lives += 1
```

![[DodgeBlob.png]]

# ---
#python