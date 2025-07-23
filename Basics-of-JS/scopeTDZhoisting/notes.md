# JavaScript Scope, Hoisting, and Temporal Dead Zone

Understanding these concepts is fundamental to writing robust and predictable JavaScript code.

## Scope

**Scope** in JavaScript defines the accessibility of variables, functions, and other resources within a particular part of your code. It dictates where you can refer to a variable or function name and use its value. Think of it as the "visibility" of variables.

### Types of Scope

1.  **Global Scope:**
    * Variables declared outside of any function or block.
    * Accessible from anywhere in your code.
    * Example:
        ```javascript
        const globalVar = "I'm a global variable";

        function printGlobal() {
          console.log(globalVar);
        }

        printGlobal(); // Accessible
        console.log(globalVar); // Accessible
        ```

2.  **Function Scope (Local Scope):**
    * Variables declared inside a function.
    * Only accessible within that specific function and any nested functions.
    * Example:
        ```javascript
        function myFunction() {
          const localVar = "I'm a local variable";
          console.log(localVar);
        }

        myFunction();
        // console.log(localVar); // Error: localVar is not defined
        ```

3.  **Block Scope (Introduced with `let` and `const` in ES6):**
    * Variables declared with `let` and `const` inside a block (e.g., `if` statements, `for` loops, `{}`).
    * Only accessible within that specific block.
    * Example:
        ```javascript
        if (true) {
          const blockVar = "I'm a block-scoped variable";
          console.log(blockVar);
        }
        // console.log(blockVar); // Error: blockVar is not defined

        for (let i = 0; i < 3; i++) {
          console.log(i);
        }
        // console.log(i); // Error: i is not defined
        ```

## Hoisting

**Hoisting** is a JavaScript mechanism where variable and function declarations are conceptually moved to the top of their containing scope during the compilation phase, *before* the code is executed. Only declarations are hoisted, not initializations.

### Hoisting with `var`

* `var` declarations are hoisted to the top of their function or global scope.
* They are initialized with `undefined`.

    ```javascript
    console.log(varVariable); // Output: undefined
    var varVariable = "Hello, Var!";
    console.log(varVariable); // Output: Hello, Var!
    ```

### Hoisting with `let` and `const`

* `let` and `const` declarations are also hoisted, but they are *not* initialized.
* They are placed in the **Temporal Dead Zone (TDZ)** until their declaration is executed.
* Accessing them before declaration results in a `ReferenceError`.

    ```javascript
    // console.log(letVariable); // ReferenceError: Cannot access 'letVariable' before initialization
    let letVariable = "Hello, Let!";
    console.log(letVariable);
    ```

### Function Hoisting

* **Function Declarations** are fully hoisted:
    ```javascript
    greet(); // Output: Hello from a function declaration!

    function greet() {
      console.log("Hello from a function declaration!");
    }
    ```
* **Function Expressions** behave like variable hoisting (depending on `var`, `let`, or `const`):
    ```javascript
    // sayHello(); // Error (if let/const) or TypeError (if var before assignment)

    var sayHello = function() {
      console.log("Hello from a function expression!");
    };
    sayHello();
    ```

## Temporal Dead Zone (TDZ)

The **Temporal Dead Zone (TDZ)** is a period during which `let` and `const` variables cannot be accessed. It starts at the beginning of the variable's scope and ends when the variable's declaration is executed.

* Accessing a `let` or `const` variable within its TDZ will throw a `ReferenceError`.
* It prevents using variables before they are properly initialized, promoting more robust code.

    ```javascript
    // console.log(foo); // ReferenceError: Cannot access 'foo' before initialization (foo is in TDZ)

    let foo = "bar"; // TDZ ends here, foo is initialized

    console.log(foo); // Output: bar

    function exampleTDZ() {
      // TDZ for 'baz' starts here
      // console.log(baz); // ReferenceError: Cannot access 'baz' before initialization

      const baz = 123; // TDZ for 'baz' ends here

      console.log(baz);
    }

    exampleTDZ();
    ```