#for graphical user interface
from Tkinter import *

x = 500
y = 500

main = Tk()

#creating a canvas(drawing board)
canvas = Canvas(main, height=1000, width=1000)

#function for drawing rectangle to the left
def leftKey(event):
    print "Left key pressed"
    global x
    global y
    line = canvas.create_rectangle(x,y+2,x-4,y-2)
    x=x-8

#function for drawing rectangle to the right
def rightKey(event):
    print "Right key pressed"
    global x
    global y
    line = canvas.create_rectangle(x,y+2,x+4,y-2)
    x=x+8
   
#function for drawing rectangle upward
def upKey(event):
    print "Up key pressed"
    global x
    global y
    line = canvas.create_rectangle(x-2,y,x+2,y-4)
    y=y-8
    
#function for drawing rectangle downward 
def downKey(event):
    print "Down key pressed"
    global x
    global y
    line = canvas.create_rectangle(x-2,y,x+2,y+4)
    y=y+8

#function to erase the contents of the canvas
def enterKey(event):
    print "Return key is pressed"
    canvas.delete("all")

#binding the respective keys to their functions and to the canvas
main.bind('<Left>', leftKey)
main.bind('<Right>', rightKey)
main.bind('<Up>', upKey)
main.bind('<Down>', downKey)
main.bind('<Return>',enterKey)

#for printing the output onto the canvas
canvas.pack()

#for repeated execution of the above code
main.mainloop()
