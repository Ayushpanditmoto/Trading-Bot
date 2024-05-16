from tkinter import *
from tkinter import messagebox
import os
import csv

# File path for storing user details
script_dir = os.path.dirname(__file__) 
csv_path = os.path.join(script_dir, 'users.csv')

def click(event):
    if event.widget == email and email.get() == 'email':
        email.delete(0, "end")
        email.insert(0, '')
        email.config(fg='black')
    elif event.widget == password and password.get() == 'password':
        password.delete(0, "end")
        password.insert(0, '')
        password.config(show='*', fg='black')
    elif event.widget == signup_email and signup_email.get() == 'email':
        signup_email.delete(0, "end")
        signup_email.insert(0, '')
        signup_email.config(fg='black')
    elif event.widget == signup_password and signup_password.get() == 'password':
        signup_password.delete(0, "end")
        signup_password.insert(0, '')
        signup_password.config(show='*', fg='black')

def focusout(event):
    if event.widget == email and email.get() == '':
        email.insert(0, 'email')
        email.config(fg='grey')
    elif event.widget == password and password.get() == '':
        password.insert(0, 'password')
        password.config(show='', fg='grey')
    elif event.widget == signup_email and signup_email.get() == '':
        signup_email.insert(0, 'email')
        signup_email.config(fg='grey')
    elif event.widget == signup_password and signup_password.get() == '':
        signup_password.insert(0, 'password')
        signup_password.config(show='', fg='grey')

def enter(event):
    event.widget.config(bg="#874C62", fg='white')

def leave(event):
    event.widget.config(bg="#E75480", fg='#E0B0FF')

def signin():
    user_email = email.get()
    user_password = password.get()
    if validate_credentials(user_email, user_password):
        messagebox.showinfo("Good to go!", "Signed in")
        demo_balance = "$4,000"
        real_balance = "$400,000"
        for widget in frame.winfo_children():
            widget.place_forget()
        demo_label = Label(frame, text=f"Demo Balance: {demo_balance}", fg='white', bg='black', font=('Arial', 14))
        demo_label.place(x=70, y=200)
        real_label = Label(frame, text=f"Real Balance: {real_balance}", fg='#E0B0FF', bg='black', font=('Arial', 14))
        real_label.place(x=70, y=240)
        signin_button.config(text="Logout", command=logout)
        signin_button.config(bg='#E75480', fg='black')
        signin_button.place(x=70, y=340)
    else:
        messagebox.showinfo("Oh no!", "Wrong Credentials")

def logout():
    messagebox.showinfo("Logout", "Logged out")
    for widget in frame.winfo_children():
        widget.destroy()
    create_login_widgets()

def validate_credentials(user_email, user_password):
    if not os.path.isfile(csv_path):
        return False
    with open(csv_path, mode='r') as file:
        reader = csv.reader(file)
        for row in reader:
            if row[0] == user_email and row[1] == user_password:
                return True
    return False

def create_signup_widgets():
    global signup_email, signup_password, signup_button
    heading = Label(frame, text='Sign Up', fg='black', bg='#E0B0FF', font=('Arial', 18, 'bold'))
    heading.place(x=120, y=60)

    signup_email = Entry(frame, width=30, fg='grey', font=('Arial', 12))
    signup_email.insert(0, 'email')
    signup_email.bind('<FocusIn>', click)
    signup_email.bind('<FocusOut>', focusout)
    signup_email.place(x=70, y=150)

    signup_password = Entry(frame, width=30, fg='grey', font=('Arial', 12), show='*')
    signup_password.insert(0, 'password')
    signup_password.bind('<FocusIn>', click)
    signup_password.bind('<FocusOut>', focusout)
    signup_password.place(x=70, y=200)

    signup_button = Button(frame, text="Sign Up", bg="#874C62", fg="white", font=('Arial', 12), width=20, command=signup)
    signup_button.bind("<Enter>", enter)
    signup_button.bind("<Leave>", leave)
    signup_button.place(x=70, y=250)

    switch_to_signin = Button(frame, text="Back to Sign In", bg="#E75480", fg="white", font=('Arial', 12), width=20, command=show_signin)
    switch_to_signin.bind("<Enter>", enter)
    switch_to_signin.bind("<Leave>", leave)
    switch_to_signin.place(x=70, y=300)

def email_exists(user_email):
    if not os.path.isfile(csv_path):
        return False
    with open(csv_path, mode='r') as file:
        reader = csv.reader(file)
        for row in reader:
            if row[0] == user_email:
                return True
    return False

def signup():
    user_email = signup_email.get()
    user_password = signup_password.get()
    if user_email == 'email' or user_password == 'password' or user_email == '' or user_password == '':
        messagebox.showinfo("Error", "Please enter valid email and password")
    elif email_exists(user_email):
        messagebox.showinfo("Error", "Email already exists")
    else:
        with open(csv_path, mode='a', newline='') as file:
            writer = csv.writer(file)
            writer.writerow([user_email, user_password])
        messagebox.showinfo("Success", "Signed up successfully")
        show_signin()

def show_signin():
    for widget in frame.winfo_children():
        widget.destroy()
    create_login_widgets()

def show_signup():
    for widget in frame.winfo_children():
        widget.destroy()
    create_signup_widgets()

def create_login_widgets():
    global email, password, signin_button
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

    switch_to_signup = Button(frame, text="Sign Up", bg="#E75480", fg="white", font=('Arial', 12), width=20, command=show_signup)
    switch_to_signup.bind("<Enter>", enter)
    switch_to_signup.bind("<Leave>", leave)
    switch_to_signup.place(x=70, y=300)

root = Tk()
root.title('Login')
root.geometry('900x500+300+200')
root.configure(bg='#fff')
root.resizable(False, False)

img_path = os.path.join(script_dir, 'image.png')
img = PhotoImage(file=img_path)
Label(root, image=img, bg='#fff').place(x=60, y=50)

frame = Frame(root, width=350, height=500, bg='#E0B0FF')
frame.place(x=500, y=60)

create_login_widgets()

root.mainloop()
