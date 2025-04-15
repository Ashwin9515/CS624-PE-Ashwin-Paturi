# Input
The program accepts multiple forms of input:
1. A logo image file, named `icon.png`, located in the `./assets` directory.
2. A set of predefined course categories including core courses, depth of study courses, and a capstone course, which are hardcoded in the program.
3. User input, where the user can type their favorite course into a text box.

# Process
The program processes data as follows:
- The application initializes with hardcoded course names categorized into three groups: core courses, depth of study courses, and a capstone course.
- It dynamically updates state using React's `useState` to capture the user’s favorite course from the input box.
- The scrollable interface ensures all content is easily navigated, while styles applied via React Native's `StyleSheet` enhance the visual experience.
- It displays the image and text elements cohesively within a structured layout.

# Output
The application displays:
1. A scrollable interface listing MSCS courses grouped into three categories.
2. A live display of the user's favorite course based on their input.
3. A styled, user-friendly interface integrating image and text.
