# 💻 Introduction to JavaScript

> **Summary:** JavaScript is a high-level, interpreted programming language primarily used to create **interactive and dynamic** behavior on websites. It is a core technology of the web, alongside HTML and CSS, and has evolved to power full-stack applications.

---

## 🟨 0. **Core Definitions**

### 📌 What is JavaScript?

- **Definition:** JavaScript is a **high-level, interpreted, object-oriented, multi-paradigm, scripting language**.
- It is one of the **core technologies of the web** (HTML, CSS, JS).
- It can be used on the **client side (frontend)** as well as the **server side (backend)**.
- **Key Characteristics:** **event-driven**, **prototype-based**, and **multi-paradigm** (supports object-oriented, functional, and imperative styles).

---

## 🔗 Ways to Connect JavaScript to HTML

There are three main ways to incorporate JavaScript code into a webpage:

1.  **Inline JavaScript:**
    * Writing JS code directly within an **HTML tag** using attributes like `onclick`, `onmouseover`, etc.
    * **Usage:** Generally discouraged for complex tasks; best for very simple, one-off event handlers.
    * **Example:**
        ```html
        <button onclick="alert('Hello!')">Click Me</button>
        ```

2.  **Internal JavaScript:**
    * Placing the JavaScript code within a pair of `<script>` tags directly inside the HTML file.
    * The `<script>` tags are typically placed in the **`<head>`** or, more commonly, just before the closing **`</body>`** tag for better performance.
    * **Usage:** Useful for small, page-specific scripts.
    * **Example:**
        ```html
        <body>
          <script>
            console.log("Internal script running.");
          </script>
        </body>
        ```

3.  **External JavaScript (Best Practice):**
    * Writing all JavaScript code in a **separate file** (e.g., `script.js`).
    * Linking the external file to the HTML document using the `src` attribute of the `<script>` tag.
    * **Usage:** **Recommended standard** for all projects as it makes the code organized, reusable, and easier to maintain.
    * **Example:**
        ```html
        <head>
          <script src="path/to/script.js"></script>
        </head>
        ```
    * **Note:** If you use the `src` attribute, the script tag should be **empty** and should not contain any inline code.

---

## 🔑 **Important Key Terms**

| Term | Definition |
| :--- | :--- |
| **Programming Language** | A structured set of instructions, rules, and syntax that allows humans to communicate with computers. |
| **High-Level Language** | Uses **human-readable syntax**, making code easy to understand, write, and maintain. Hides hardware details and focuses on problem-solving. Provides mechanisms to catch and handle errors effectively. |
| **Interpreter** | Translates and executes code **line-by-line**. It does not produce a separate executable file. (JavaScript is primarily interpreted). |
| **Compiler** | Translates the **entire program** into machine code and generates an executable file before execution. |
| **Scripting Language** | A type of programming language designed for automating tasks, controlling applications, or scripting the behavior of an existing system (e.g., inside a browser). |

---

## 💡 What Is JavaScript Used For?

JavaScript's versatility allows it to be used across the entire development stack:

### **Client-side (Frontend)**
- **DOM Manipulation:** Modifying the structure, style, and content of a webpage in real-time.
- **Event Handling:** Responding to user actions (clicks, keypresses, mouseovers).
- **Animations and Effects:** Creating visual flair and transitions.
- **Form Validation:** Checking user input before submission.
- **Storing Data:** Managing temporary or persistent client data (**Cookies, LocalStorage, etc.**).
- **Single Page Applications (SPA):** Building modern web applications using frameworks like **React, Vue, and Angular**.

### **Server-side (Backend)**
- **Creating APIs and Web Services:** Using runtimes like **Node.js** and **Deno**.
- **Asynchronous Requests (AJAX/Fetch):** Communicating with servers to get or send data without a full page reload.

### **Other Domains**
- **Data Manipulation:** Logic for sorting, filtering, and processing data.
- **Mobile Apps** (React Native), **Desktop Apps** (Electron.js), **Game Development** (Phaser).

---

## 🚀 Why Learn JavaScript?

| Reason | Description |
| :--- | :--- |
| **Popularity** | It is consistently one of the most in-demand and widely used programming languages globally. |
| **Versatility** | It is a **full-stack language** (frontend, backend, mobile, desktop, IoT). Learn one language, develop everywhere. |
| **Relatively Easy to Learn** | It has a gentler learning curve for beginners compared to some compiled languages. |
| **Huge Community & Tools Support** | An massive ecosystem of libraries, frameworks, tools, tutorials, and immediate help for any issue. |

---

## 🕰️ History & Naming

| Year | Event |
| :--- | :--- |
| **1995** | Created by **Brendan Eich** at Netscape in just 10 days; initially called **Mocha**, then **LiveScript**, then **JavaScript**. |
| **1996** | Microsoft introduced **JScript** (its own implementation of JavaScript). |
| **1997** | JavaScript was standardized under **ECMAScript (ECMA-262)** by **ECMA International**. |
| **2009** | **Node.js** was created by Ryan Dahl, enabling JavaScript to run on servers. |
| **2015** | **ES6 (ECMAScript 2015)** introduced major features (e.g., `let`, `const`, arrow functions, classes, promises). |

### ❓ Why is it called "JavaScript"?

- The name was a **marketing strategy** by Netscape to capitalize on the popularity of **Java**.
- **Java and JavaScript are completely different languages**—they share only a similar C-style syntax, but differ in use cases, engines, and architecture.