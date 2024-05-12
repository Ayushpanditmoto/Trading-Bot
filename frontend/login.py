from tkinter import *
from tkinter import messagebox
import os

def click(event):
    if email.get() == 'email':
        email.delete(0, "end")
        email.insert(0, '')
        email.config(fg='black')

    if password.get() == 'password':
        password.delete(0, "end")
        password.insert(0, '')
        password.config(show='*', fg='black')

def focusout(event):
    if email.get() == '':
        email.insert(0, 'email')
        email.config(fg='grey')

    if password.get() == '':
        password.insert(0, 'password')
        password.config(show='', fg='grey')

def enter(event):
    signin_button.config(bg="#874C62", fg='white')

def leave(event):
    signin_button.config(bg="#E75480", fg='#E0B0FF')

def signin():
    if email.get() == 'janedoe@demo.com' and password.get() == '123456':
        messagebox.showinfo("Good to go!", "Signed in")
        demo_balance = "$4,000"
        real_balance = "$400,000"
        demo_label = Label(frame, text=f"Demo Balance: {demo_balance}", fg='#E75480', bg='#E0B0FF', font=('Arial', 14))
        demo_label.place(x=70, y=200)
        real_label = Label(frame, text=f"Real Balance: {real_balance}", fg='black', bg='#E0B0FF', font=('Arial', 14))
        real_label.place(x=70, y=240)
        email.place_forget()
        password.place_forget()
        signin_button.config(text="Logout", command=logout)
        signin_button.config(bg='#E75480', fg='black')
        signin_button.place(x=70, y=340) 
    else:
        messagebox.showinfo("Oh no!", "Wrong Credentials")

def logout():
    global email, password, signin_button
    messagebox.showinfo("Logout", "Logged out")
    
    
    for widget in frame.winfo_children():
        widget.destroy()
    
    # Re-display email and password Entry widgets
    email.place(x=70, y=150)
    password.place(x=70, y=200)
    
    signin_button.config(text="Sign In", command=signin)
    signin_button.config(bg="#874C62", fg="white")
    
    # Create new email and password Entry widgets
    email = Entry(frame, width=30, fg='grey', font=('Arial', 12))
    email.insert(0, 'email')
    email.bind('<FocusIn>', click)
    email.bind('<FocusOut>', focusout)
    email.place(x=70, y=150)

    password = Entry(frame, width=30, fg='grey', font=('Arial', 12), show='*')
    password.insert(0, 'password')
    password.bind('<FocusIn>', click)
    password.bind('<FocusOut>', focusout)
    password.place(x=70, y=200)

    signin_button = Button(frame, text="Sign In", bg="#874C62", fg="white", font=('Arial', 12), width=20, command=signin)
    signin_button.bind("<Enter>", enter)
    signin_button.bind("<Leave>", leave)
    signin_button.place(x=70, y=250)


root = Tk()
root.title('Login')
root.geometry('900x500+300+200')
root.configure(bg='#fff')
root.resizable(False, False)
script_dir = os.path.dirname(__file__) 
img_path = os.path.join(script_dir, 'image.png')

img = PhotoImage(file=img_path)
Label(root, image=img, bg='#fff').place(x=60, y=50)

frame = Frame(root, width=350, height=500, bg='#E0B0FF')
frame.place(x=500, y=60)
heading = Label(frame, text='Sign In', fg='black', bg='#E0B0FF', font=('Arial', 18, 'bold'))
heading.place(x=120, y=60)

email = Entry(frame, width=30, fg='grey', font=('Arial', 12))
email.insert(0, 'email')
email.bind('<FocusIn>', click)
email.bind('<FocusOut>', focusout)
email.place(x=70, y=150)

password = Entry(frame, width=30, fg='grey', font=('Arial', 12), show='*')
password.insert(0, 'password')
password.bind('<FocusIn>', click)
password.bind('<FocusOut>', focusout)
password.place(x=70, y=200)

signin_button = Button(frame, text="Sign In", bg="#874C62", fg="white", font=('Arial', 12), width=20, command=signin)
signin_button.bind("<Enter>", enter)
signin_button.bind("<Leave>", leave)
signin_button.place(x=70, y=250)

root.mainloop()
