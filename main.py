import customtkinter

customtkinter.set_appearance_mode("dark")  # Modes: system (default), light, dark
customtkinter.set_default_color_theme("green")  # Themes: blue (default), dark-blue, green

app = customtkinter.CTk()
app.geometry("600x400")
app.title("Binary Trading Bot")

# Username Label and Entry
username_label = customtkinter.CTkLabel(app, text="Username:")
username_label.grid(row=0, column=0, padx=20, pady=10)
username_entry = customtkinter.CTkEntry(app)
username_entry.grid(row=0, column=1, padx=20, pady=10)

# Password Label and Entry
password_label = customtkinter.CTkLabel(app, text="Password:")
password_label.grid(row=1, column=0, padx=20, pady=10)
password_entry = customtkinter.CTkEntry(app, show="*")
password_entry.grid(row=1, column=1, padx=20, pady=10)

def login():
    username = username_entry.get()
    password = password_entry.get()
    # Here you would typically implement your login logic
    # For this example, let's just print the username and password
    print("Username:", username)
    print("Password:", password)

# Login Button
login_button = customtkinter.CTkButton(app, text="Login", command=login)
login_button.grid(row=2, column=0, columnspan=2, pady=10)

app.mainloop()
