# 0x04. TypeScript Projects

This project consists of multiple TypeScript tasks, each focusing on specific concepts such as interfaces, classes, branded types, namespaces, decorators, context managers, and more. These tasks are organized in individual folders from `task_0` to `task_5`.

---

## 📁 Tasks Summary

### `task_0` — Interfaces & DOM Manipulation

* Define a `Student` interface.
* Create and render a table of student data using TypeScript and vanilla JS.
* **Highlights:** DOM manipulation, type safety, Webpack setup.

### `task_1` — Extended Interfaces

* Define a `Teacher` interface with optional and read-only properties.
* Implement a `Directors` interface that extends `Teacher`.
* Build function interfaces and classes using TypeScript.
* **Highlights:** Interface extension, dynamic properties, function typing.

### `task_2` — Class and Function Interfaces

* Implement `printTeacherFunction` interface and `StudentClass` class.
* Define teacher and director interfaces with methods like `workFromHome`, `getCoffeeBreak`, and subject-specific methods.
* **Highlights:** Class and method interfaces, type guards, factory functions.

### `task_3` — Ambient Declarations & Mock DB

* Define `RowID` and `RowElement` interfaces.
* Use a simulated CRUD library (`crud.js`) with ambient type declarations.
* Import and operate on typed data using functions like `insertRow`, `updateRow`, and `deleteRow`.
* **Highlights:** Declaration merging, type-safe external JavaScript usage.

### `task_4` — Namespaces & Merged Declarations

* Create a namespace `Subjects` that defines a `Teacher` interface and subject-specific classes (`Cpp`, `Java`, `React`).
* Add experience-related attributes using declaration merging.
* **Highlights:** Namespaces, subject-specific method implementations, polymorphism.

### `task_5` — Branded Types

* Define branded types `MajorCredits` and `MinorCredits`.
* Implement functions to sum up credits and return the respective branded type.
* **Highlights:** Advanced type safety using branding, custom type guards.

---

## 🛠️ Setup Instructions (All Tasks)

1. Clone this project.
2. Navigate into each task folder (e.g. `cd task_0`, `cd task_1`, etc.).
3. Run:

   ```bash
   npm install
   npm run build   # Or: npx tsc
   npm run start-dev  # if webpack-dev-server is configured
   ```

---

## 🔪 Technologies Used

* TypeScript
* Webpack
* ESLint
* ts-loader
* Node.js & npm

---

## 📝 License

This project is licensed under the [ISC License](https://opensource.org/licenses/ISC).

---

## ✍️ Author

Tsegawbeza Yohannes
[LinkedIn](https://www.linkedin.com/in/tsegawbeza-yohannes-3b7b61159)
