## 📌 2. Variables in JS

### 🟢 Variable Declarations: `var`, `let`, `const`

#### ✅ `var` (Old way - avoid in modern code)

- **Function-scoped**
- Can be **redeclared and updated**
- Hoisted (moved to the top of their scope, but not initialized)

```js
console.log(a); // undefined (due to hoisting)
var a = 10;
```

#### ✅ `let` (Modern way)

- **Block-scoped**
- Can be **updated**, but **not redeclared** in the same scope
- Hoisted but **not initialized** (temporal dead zone)

```js
let b = 20;
b = 30; // ✅
let b = 40; // ❌ Error: Identifier 'b' has already been declared
```

#### ✅ `const` (Modern, for constants)

- **Block-scoped**
- **Cannot be updated or redeclared**
- Must be **initialized** at declaration

```js
const PI = 3.14;
PI = 3.15; // ❌ TypeError: Assignment to constant variable
```

---