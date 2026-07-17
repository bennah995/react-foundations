# Day 4 Notes: Immutability in React

Why do we use [...tasks, newTask] instead of tasks.push(newTask)?
=> We use `[...tasks, newTask]` instead of `tasks.push(newTask)` because `push` mutates the original array in place. 

What happens if you mutate state directly?
=> If you mutate the state array directly, React will not detect the modification. React uses strict equality comparison (`Object.is`) on old and new state references to determine if a change occurred. 

Why does React need a new array reference to re-render?
=>Creating a completely new array reference ensures React catches the difference, triggers a re-render, and updates the user interface correctly.