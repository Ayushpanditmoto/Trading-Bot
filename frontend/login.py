from tkinter import *
from tkinter import messagebox
import os

def on_entry_click(event):
    if email.get() == 'Email':
        email.delete(0, "end")
        email.insert(0, '')
        email.config(fg = 'black')

    if password.get() == 'Password':
        password.delete(0, "end")
        password.insert(0, '')
        password.config(show='*', fg = 'black')

def on_focusout(event):
    if email.get() == '':
        email.insert(0, 'Email')
        email.config(fg = 'grey')

    if password.get() == '':
        password.insert(0, 'Password')
        password.config(show='', fg = 'grey')


root = Tk()
root.title('Login')
root.geometry('900x500+300+200')
root.configure(bg='#fff')
root.resizable(False,False)
script_dir = os.path.dirname(__file__) 
img_path = os.path.join(script_dir, 'image.png')

img = PhotoImage(file=img_path)
Label(root, image=img, bg='#fff').place(x=60, y=50)

frame=Frame(root,width=350,height=500, bg='#E0B0FF')
frame.place(x=500,y=60)
heading=Label(frame, text='Sign In', fg='black',bg='#E0B0FF', font= ('Arial', 18, 'bold'))
heading.place(x=120, y=70)


email = Entry(frame, width=30, fg='grey', font=('Arial', 12))
email.insert(0, 'Email')
email.bind('<FocusIn>', on_entry_click)
email.bind('<FocusOut>', on_focusout)
email.place(x=70, y=150)

password = Entry(frame, width=30, fg='grey', font=('Arial', 12), show='*')
password.insert(0, 'Password')
password.bind('<FocusIn>', on_entry_click)
password.bind('<FocusOut>', on_focusout)
password.place(x=70, y=200)

root.mainloop()
