import customtkinter as ctk
from tkinter import messagebox
import os
import csv
from PIL import Image

# File path for storing user details
script_dir = os.path.dirname(__file__)
csv_path = os.path.join(script_dir, 'users.csv')

def click(event):
    global email, password
    if event.widget == email and email.get() == 'email':
        email.delete(0, "end")
        email.insert(0, '')
        email.configure(text_color='white')
    elif event.widget == password and password.get() == 'password':
        password.delete(0, "end")
        password.insert(0, '')
        password.configure(show='*', text_color='white')

def focusout(event):
    global email, password
    if event.widget == email and email.get() == '':
        email.insert(0, 'email')
        email.configure(text_color='grey')
    elif event.widget == password and password.get() == '':
        password.insert(0, 'password')
        password.configure(show='', text_color='grey')

def signin():
    user_email = email.get()
    user_password = password.get()
    if validate_credentials(user_email, user_password):
        #messagebox.showinfo("Success", "Signed in")            #disabled to avoid lots of pop-ups
        demo_balance = "$4,000"
        real_balance = "$999,990"
        for widget in frame.winfo_children():
            widget.place_forget()

        #demo balance button with better styling
        demo_button = ctk.CTkButton(frame, text=f"Demo Balance: {demo_balance}", text_color='white', fg_color='#555', font=('Arial', 14), width=250, height=50, command=show_demo_balance_options)
        demo_button.place(relx=0.5, rely=0.4, anchor='center')

        #real balance button with better styling and function
        real_button = ctk.CTkButton(frame, text=f"Real Balance: {real_balance}", text_color='white', fg_color='#555', font=('Arial', 14), width=250, height=50, command=show_real_balance_options)
        real_button.place(relx=0.5, rely=0.6, anchor='center')

        #Added logout button
        logout_button = ctk.CTkButton(frame, text="Logout", fg_color="#E75480", text_color="white", font=('Arial', 14), width=252, command=logout)
        logout_button.place(relx=0.5, rely=0.85, anchor='center')
    else:
        messagebox.showinfo("Error", "Wrong Credentials")

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
            if len(row) >= 2 and row[0] == user_email and row[1] == user_password:
                return True
    return False

def create_login_widgets():
    global email, password, signin_button
    heading = ctk.CTkLabel(frame, text='Sign In', text_color='white', fg_color='#333', font=('Arial', 24, 'bold'))
    heading.place(x=75, y=40)

    email = ctk.CTkEntry(frame, width=252, placeholder_text='email', text_color='white', font=('Arial', 12))
    email.bind('<FocusIn>', click)
    email.bind('<FocusOut>', focusout)
    email.place(x=50, y=120)

    password = ctk.CTkEntry(frame, width=252, placeholder_text='password', text_color='white', font=('Arial', 12), show='*')
    password.bind('<FocusIn>', click)
    password.bind('<FocusOut>', focusout)
    password.place(x=50, y=170)

    signin_button = ctk.CTkButton(frame, text="Sign In", fg_color="#E75480", text_color="white", font=('Arial', 14), width=252, command=signin)
    signin_button.place(x=50, y=220)

def show_real_balance_options():
    for widget in frame.winfo_children():
        widget.place_forget()

    #Compounding button
    compounding_button = ctk.CTkButton(frame, text="Compounding", fg_color="#555", text_color="white", font=('Arial', 14), width=250, height=50, command=show_compounding_steps)
    compounding_button.place(relx=0.5, rely=0.4, anchor='center')

    #Martingale button
    martingale_button = ctk.CTkButton(frame, text="Martingale", fg_color="#555", text_color="white", font=('Arial', 14), width=250, height=50, command=show_martingale_steps)
    martingale_button.place(relx=0.5, rely=0.6, anchor='center')

    #Added back button
    back_button = ctk.CTkButton(frame, text="Back", fg_color="#E75480", text_color="white", font=('Arial', 14), width=252, command=signin)
    back_button.place(relx=0.5, rely=0.85, anchor='center')

def show_demo_balance_options():
    for widget in frame.winfo_children():
        widget.place_forget()

    #Compounding button
    compounding_button = ctk.CTkButton(frame, text="Compounding", fg_color="#555", text_color="white", font=('Arial', 14), width=250, height=50, command=show_compounding_steps)
    compounding_button.place(relx=0.5, rely=0.4, anchor='center')

    #Martingale button
    martingale_button = ctk.CTkButton(frame, text="Martingale", fg_color="#555", text_color="white", font=('Arial', 14), width=250, height=50, command=show_martingale_steps)
    martingale_button.place(relx=0.5, rely=0.6, anchor='center')

    #Added back button
    back_button = ctk.CTkButton(frame, text="Back", fg_color="#E75480", text_color="white", font=('Arial', 14), width=252, command=signin)
    back_button.place(relx=0.5, rely=0.85, anchor='center')

# Accept compounding valuesss
def show_compounding_steps():
    for widget in frame.winfo_children():
        widget.place_forget()

    step_label = ctk.CTkLabel(frame, text='No. of Compounding Steps:', text_color='white', fg_color='#333', font=('Arial', 14))
    step_label.place(relx=0.5, rely=0.3, anchor='center')

    global step_entry
    step_entry = ctk.CTkEntry(frame, width=100, text_color='white', font=('Arial', 14))
    step_entry.place(relx=0.5, rely=0.4, anchor='center')

    next_button = ctk.CTkButton(frame, text="Next", fg_color="#E75480", text_color="white", font=('Arial', 14), width=100, command=collect_compounding_steps)
    next_button.place(relx=0.5, rely=0.5, anchor='center')

    back_button = ctk.CTkButton(frame, text="Back", fg_color="#E75480", text_color="white", font=('Arial', 14), width=100, command=show_real_balance_options)
    back_button.place(relx=0.5, rely=0.6, anchor='center')

def collect_compounding_steps():
    try:
        num_steps = int(step_entry.get())
        if num_steps <= 0:
            raise ValueError("Number of steps must be a positive integer.")

        for widget in frame.winfo_children():
            widget.place_forget()

        step_entries = []
        for i in range(num_steps):
            label = ctk.CTkLabel(frame, text=f'Step {i+1} Value:', text_color='white', fg_color='#333', font=('Arial', 14))
            label.place(x=50, y=50 + i*40)

            entry = ctk.CTkEntry(frame, width=100, height=20, text_color='white', font=('Arial', 14))
            entry.place(x=150, y=53 + i*40)
            step_entries.append(entry)

        submit_button = ctk.CTkButton(frame, text="Submit", fg_color="#E75480", text_color="white", font=('Arial', 14), width=100, command=lambda: get_target_values(step_entries)) #command=lambda: submit_compounding_steps(step_entries)
        submit_button.place(relx=0.5, rely=0.75, anchor='center')

        #Added back button
        back_button = ctk.CTkButton(frame, text="Back", fg_color="#E75480", text_color="white", font=('Arial', 14), width=100, command=show_compounding_steps)
        back_button.place(relx=0.5, rely=0.85, anchor='center')

    except ValueError:
        messagebox.showinfo("Error", "Please enter a valid positive integer for the number of steps.")

# def submit_compounding_steps(step_entries):
#     try:
#         steps_values = [int(entry.get()) for entry in step_entries]
#         # Here you can handle the steps_values as needed, for now, we just show a messagebox
#         messagebox.showinfo("Steps Submitted", f"Steps values: {steps_values}")
#     except ValueError:
#         messagebox.showinfo("Error", "Please enter valid integer values for all steps.")


#Accept martingale valuess
def show_martingale_steps():
    for widget in frame.winfo_children():
        widget.place_forget()

    step_label = ctk.CTkLabel(frame, text='No. of Martingale Steps:', text_color='white', fg_color='#333', font=('Arial', 14))
    step_label.place(relx=0.5, rely=0.3, anchor='center')

    global step_entry
    step_entry = ctk.CTkEntry(frame, width=100, text_color='white', font=('Arial', 14))
    step_entry.place(relx=0.5, rely=0.4, anchor='center')

    next_button = ctk.CTkButton(frame, text="Next", fg_color="#E75480", text_color="white", font=('Arial', 14), width=100, command=collect_martingale_steps)
    next_button.place(relx=0.5, rely=0.5, anchor='center')

    back_button = ctk.CTkButton(frame, text="Back", fg_color="#E75480", text_color="white", font=('Arial', 14), width=100, command=show_real_balance_options)
    back_button.place(relx=0.5, rely=0.6, anchor='center')

def collect_martingale_steps():
    try:
        num_steps = int(step_entry.get())
        if num_steps <= 0:
            raise ValueError("Number of steps must be a positive integer.")

        for widget in frame.winfo_children():
            widget.place_forget()

        step_entries = []
        for i in range(num_steps):
            label = ctk.CTkLabel(frame, text=f'Step {i+1} Value:', text_color='white', fg_color='#333', font=('Arial', 14))
            label.place(x=50, y=50 + i*40)

            entry = ctk.CTkEntry(frame, width=100, height=20, text_color='white', font=('Arial', 14))
            entry.place(x=150, y=53 + i*40)
            step_entries.append(entry)

        submit_button = ctk.CTkButton(frame, text="Submit", fg_color="#E75480", text_color="white", font=('Arial', 14), width=100, command=lambda: get_target_values(step_entries)) #command=lambda: submit_martingale_steps(step_entries)
        submit_button.place(relx=0.5, rely=0.75, anchor='center')

        #Added back button
        back_button = ctk.CTkButton(frame, text="Back", fg_color="#E75480", text_color="white", font=('Arial', 14), width=100, command=show_martingale_steps)
        back_button.place(relx=0.5, rely=0.85, anchor='center')

    except ValueError:
        messagebox.showinfo("Error", "Please enter a valid positive integer for the number of steps.")

# def submit_martingale_steps(step_entries):
#     try:
#         steps_values = [int(entry.get()) for entry in step_entries]
#         # Here you can handle the steps_values as needed, for now, we just show a messagebox
#         messagebox.showinfo("Steps Submitted", f"Steps values: {steps_values}")
#     except ValueError:
#         messagebox.showinfo("Error", "Please enter valid integer values for all steps.")


# ========================= ENDS HERE ==========================================

def show_compounding():
    messagebox.showinfo("Info", "Compounding selected")

def show_martingale():
    messagebox.showinfo("Info", "Martingale selected")
# -------------------------------------------------------------------------
def get_target_values(step_entries):
    try: 
        steps_values = [int(entry.get()) for entry in step_entries] # make use of these later on when setting up strategies

        for widget in frame.winfo_children():
            widget.place_forget()

        target_values = []
        label = ctk.CTkLabel(frame, text=f'Enter Profit target:', text_color='white', fg_color='#333', font=('Arial', 14))
        label.place(x=50, y=50)

        label = ctk.CTkLabel(frame, text=f'Enter Loss target:', text_color='white', fg_color='#333', font=('Arial', 14))
        label.place(x=50, y=50 + 40)
        
        for i in range(2):
            entry = ctk.CTkEntry(frame, width=100, height=20, text_color='white', font=('Arial', 14))
            entry.place(x=180, y=53 + i*40)
            target_values.append(entry)

        next_button = ctk.CTkButton(frame, text="Next", fg_color="#E75480", text_color="white", font=('Arial', 14), width=100, command=lambda: show_strategies(steps_values, target_values))
        next_button.place(relx=0.5, rely=0.5, anchor='center')

        back_button = ctk.CTkButton(frame, text="Abort", fg_color="#E75480", text_color="white", font=('Arial', 14), width=100, command=signin)
        back_button.place(relx=0.5, rely=0.6, anchor='center')
    except ValueError:
        messagebox.showinfo("Error", "Please enter valid integer values for all steps.")

def show_strategies(step_values, target_values):
    # make use of step_values and target_values.
    # target_values[0] = profit target
    # target_values[1] = loss target
    messagebox.showinfo("Alert", "Baadme aana munna, abhi its under construction")

#main window
root = ctk.CTk()
root.title('Login')
root.geometry('900x500+300+200')
root.configure(bg='#222')
root.resizable(False, False)

#Image for the logo
img_path = os.path.join(script_dir, 'image.png')
image = Image.open(img_path).resize((512, 512), Image.LANCZOS)  
img = ctk.CTkImage(light_image=image, dark_image=image, size=(480, 480)) # Increased size and zoomed
img_label = ctk.CTkLabel(root, image=img, text="")
img_label.place(relx=0.25, rely=0.5, anchor='center')

#Create the frame
frame = ctk.CTkFrame(root, width=350, height=400, fg_color='#333')
frame.place(relx=0.75, rely=0.5, anchor='center')

#Initialize the login interface
create_login_widgets()

# Run the main loop
root.mainloop()
