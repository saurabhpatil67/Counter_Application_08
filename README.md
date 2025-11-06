# 🔢 Counter Application

A simple and responsive **Counter App** built using **HTML, CSS, and JavaScript**.  
It allows users to **increase**, **decrease**, and **reset** a number dynamically with smooth color changes based on the value.

---

## 🧩 Features

- Increase, Decrease, and Reset the counter value.  
- Dynamic text color:
  - 🔺 Green when positive  
  - 🔻 Red when negative  
  - 🔹 Blue (default) when zero  
- Simple and beginner-friendly JavaScript logic.  
- Fully responsive design.

---

## 💻 Tech Stack

- **HTML5** – Structure  
- **CSS3** – Styling and layout  
- **JavaScript (Vanilla)** – Functionality and event handling

---

### 🔹 Why we use `e.currentTarget.id`

We use **`e.currentTarget.id`** to get the **id of the button that was clicked**.  
`currentTarget` always refers to the element that the event listener is attached to (in this case, each button), so it helps identify whether the user clicked **increase**, **decrease**, or **reset**.

---

### 🔹 Short Workflow of the JavaScript Code

1. **Initialize `count = 0`** — starting value of the counter.  

2. **Select elements:**
   - `value` → displays the counter number.  
   - `btns` → selects all the buttons.  

3. **Loop through buttons** using `forEach()` and add a click event listener to each.  

4. When a button is clicked, get its **id** using `e.currentTarget.id`.  

5. **Check which button was clicked** and perform the action:  
   - `increase` → increment the count.  
   - `decrease` → decrement the count.  
   - `reset` → set the count back to 0.  

6. **Update the displayed number** using `value.textContent = count;`.  

7. **Change text color dynamically:**
   - 🟢 **Green** → when count > 0  
   - 🔴 **Red** → when count < 0  
   - 🔵 **Blue** → when count = 0  
