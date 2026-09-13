# DevStack - Technologies Stack Builder

A simple react landing page website where users can build their own custom technology stack by selecting technologies. They can add/remove stack with a single click.

---

## Tech Stack

- React
- TypeScript
- Tailwind CSS
- React Toastify

---

## Features

- Add technologies to your stack
- Prevent duplicate additions with warning messages
- Remove single technology or clear entire stack
- Dynamic UI updates using React state



---

# React Concepts Explained

## 1. What is JSX, and why is it used in React?

JSX stands for javascript xml. It makes ui structure easier to read and write in React.

---

## 2. What is the difference between props and state?

Props are used to pass data from parent to child components and are read-only. State is used to manage data inside a component that can change over time.

---

## 3. What does the useState hook do, and where did you use it in this project?

useState is used to store and update dynamic data inside a component. In this project I used useState to manage the selected stack.

we use useEffect to perform side effect in react application. It is used to load data when the component first loads, such as fetching or reading json data.

## 5. Why does every item in a .map() list need a unique key prop?

The key helps to identify each item uniquely in react app. it improves performance and help react understand which item is changed.

## 6. What is conditional rendering? Show one place you used it.

Conditional rendering means showing different ui based on a condition.
this is the code below i used in my react app.

```ts
{selectedStack.length > 0 ? (
  <div>Stack Items</div>
) : (
  <div>Your stack is empty</div>
)}

```

## 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

data flows in a unidirectional way in react. We pass data from a parent component to a child component using props.

and for sending data from child to parent first we pass function as a prop from parent to child then we call it under child component. that how we pass data from parent to child and child to parent.
