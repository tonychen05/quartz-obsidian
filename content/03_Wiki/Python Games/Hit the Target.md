```python
### Uses CMU CS Academy Graphics Package

import time

target = Group(
    Circle(200, 200, 30, fill='red'),
    Circle(200, 200, 25, fill='white'),
    Circle(200, 200, 20, fill='red'),
    Circle(200, 200, 15, fill='white'),
    Circle(200, 200, 10, fill='red')
    )
    
    
## Change numClicks for number of targets ##
numClicks = 25
# -------------------------------------------


clicks = Label(numClicks, 0, 0, visible=False)
correct = Label(0, 0, 0, visible=False)
instructions = Label('Click Target!', 200, 20, size = 20, align='center')
startTime = time.perf_counter()

def GameOver():
    Label('GAME OVER', 200, 150, size=60, fill='red', bold=True)
    Label('Accuracy:', 190, 200, size=30, align='right')
    Label('Time:', 190, 240, size=30, align='right')

def onMousePress(mouseX, mouseY):
    if(clicks.value > 0):
        if(target.top < mouseY < target.bottom) and (target.right > mouseX > target.left):
            instructions.visible = False
            target.centerX=randrange(50, 350)
            target.centerY=randrange(50, 350)
            clicks.value-=1
            correct.value+=1
        else:
            clicks.value-=1
    else:
        endTime = time.perf_counter()
        target.visible = False
        GameOver()
        Label(str(correct.value) + ' / ' + str(numClicks), 210, 200, size=30, align='left')
        Label(str(pythonRound(endTime-startTime,3))+' s', 210, 240, size=30, align='left')
        app.stop()
```

![[Hit the Target.png]]
# ---
#python