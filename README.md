# insta-stories-clone

# Live URL
# https://insta-stories-clone.vercel.app/

## Installation
Clone the repository:
    ...
    -git clone https://github.com/your-username/instagram-stories-clone.git
    ...
Navigate to the project directory:
    ...
    -cd instagram-stories-clone
    ...
Install dependencies:
    ...
    -npm install
    ...
Run the app:
    ...
    -npm start
    ...
Run tests:
    ...
    -npm test
    ...

Usage:
Open the app in your browser.
    -Scroll horizontally to view the list of stories.
    -Click on a story thumbnail to view the full story.
    -Tap on the left or right side of the screen to navigate between -stories.
    -Stories will automatically advance after 5 seconds. 

# Instagram Stories Clone - React with TypeScript
This project is a simplified version of Instagram's Stories feature, built using React and TypeScript. It allows users to view a list of stories, navigate through them, and automatically advance to the next story after 5 seconds.

Features:
    -Horizontal Scrollable Story List:
    -Displays a list of user stories in a horizontally scrollable view.
    -Each story is represented by a thumbnail image.

Story Viewer:
    -Users can click on a story thumbnail to view the full story.
    -Stories automatically advance to the next one after 5 seconds.

Manual Navigation:
    -Users can manually navigate between stories by tapping on the left or right side of the screen.

Responsive Design:
    -The app is optimized for mobile devices.
    -No External Libraries:
    -Core functionality is implemented without relying on external libraries.

Smooth Transitions:
    -Transitions are used for smoother story viewing.

Unit Tests:
    -Comprehensive unit tests are written for core functionality.

# Approach
1. Planning
    *Requirements Analysis:
        -Understood the requirements and broke them into smaller tasks.
        -Focused on mobile-first design and core functionality.

    Tech Stack:
        -Chose React for the UI and TypeScript for type safety.
        -Used CSS for styling and Jest/React Testing Library for testing.

2. Project Setup
    Initialize React App:
        -Created a new React project using create-react-app with TypeScript:
            -npx create-react-app instagram-stories-clone --template typescript

Folder Structure:
    -Organized the project into folders:

        src/
        ├── assets/          # Images and other static files
        ├── utils/           # Utility functions and mock data
        ├── App.tsx          # Main application component
        ├── App.css          # Global styles
        ├── App.test.tsx     # Unit tests
        └── index.tsx        # Entry point


3. Implementation
    Mock Data:
        -Created a mockUsers array in userData.tsx to simulate user stories.
        -Each user has a name and an array of stories (image URLs).

Story List:
        -Rendered a horizontally scrollable list of story thumbnails using display: flex and overflow-x: auto.
        -Used map to iterate over mockUsers and display each user's story.

Story Viewer:
    -Implemented a modal-like component to display the full story.
    -Used useState to track the currently viewed user and story index.
    -Added a timer with setTimeout to automatically advance to the next story after 5 seconds.

Navigation:
    -Added click handlers for left and right sides of the screen to navigate between stories.
    -Used useEffect to reset the timer when the story changes.

Responsive Design:
    -Used CSS media queries to ensure the app looks good on mobile devices.
    -Set fixed dimensions for story thumbnails and viewer.

Smooth Transitions:
    -Added CSS transitions for smoother story transitions.

4. Optimization
    Lazy Loading:
        -Used React.lazy() to lazy load the story viewer component.

Image Optimization:
     -Compressed images to reduce load times.
     -Used modern image formats like WebP.

State Management:
    -Used useState and useEffect efficiently to manage component state.
    -Avoided unnecessary re-renders by memoizing components with React.memo.

Code Splitting:
    -Split the code into smaller chunks using dynamic imports.

5. Testing
    Unit Tests:
        -Wrote unit tests for core functionality using Jest and React Testing Library.
        -Tested rendering of user names, story thumbnails, and navigation.

Test Coverage:
    -Aimed for high test coverage for critical components.

6. Scalability
    Modular Code:
        -Kept components small and reusable.
        -Separated concerns by dividing the app into logical components.

TypeScript:
    -Used TypeScript interfaces to define types for users and stories.
    -Ensured type safety and better code maintainability.

Future Improvements:
    -Add backend integration to fetch stories dynamically.
    -Implement user authentication and persistence.
    -Add support for videos and interactive elements in stories.

Technologies Used
    React
    TypeScript
    CSS
    Jest
    React Testing Library