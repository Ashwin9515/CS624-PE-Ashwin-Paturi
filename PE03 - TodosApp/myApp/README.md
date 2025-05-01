# PE03 – todos App

## Input

The app accepts input from a text field "What needs to be done?" where the user can type in a task he wants to track and press the "Add" button to save. The app also has tab bar buttons that have the titles "All", "Active", and "Completed" as filters that decide which todos to show. Also, there are two action buttons on every todo: "Done" and "Delete," by which users can delete or modify the item. 

## Process

It is saved in a `todos` array with React Native state when the user inputs the task and clicks the Add button. The app renders only the todos conditionally based on the clicked tab (filter type). "Done" tapping toggles the todo as done and reverses its color and filter category. "Delete" removes it. All the components share data with each other via props and have unidirectional data flow.

## Output

The application displays todos in a scroll list. New todos show up immediately after the text area. Finished ones show strikethrough and green. Tasks get filtered dynamically by the tab bar to show All, Active, or Completed todos. The UI is refreshed in real time upon user input. The terminal console also shows the present list of todos when adding a new item.

---
## Analysis

The code in this guide shows the implementation of how an end-to-end React Native "todos" application is feasible with Expo and functional components. Input processing, displaying a list, managing state, propagating props, and conditionally showing UI are key points illustrated in this example. The user, in **Part 1**, is typing away and playing with initial functionalities like inserting tasks and displaying them on a list. In **Part 2**, interaction aspects of activities such as marking completed, deletion, and filtering by a tab bar are being implemented. The application is making use of such components as `ScrollView`, `TextInput`, custom buttons, and Dynamic lists, following best practices of component reuse and data-driven rendering. Component-based design—each component having a well-defined responsibility of input, todo item, or UI control—serves to make debugging easier and scaling simpler. The filtering behavior is controlled by straightforward state conditions and the tab bar provides intuitive task state navigation. This application demonstrates basic principles of Chapter 3 of course book and React Native component-based programming.