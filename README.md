# TaskFlow - A Web-Based Todo List App

TaskFlow is a modern and dynamic to-do list web application designed to help users manage their tasks efficiently. It allows users to create, organize, and track tasks across multiple projects with a smooth user experience. The app supports essential features like task priorities, due dates, and notes, and it offers the flexibility of having multiple projects to keep tasks organized. TaskFlow also leverages localStorage to ensure user data persists even after a page refresh, making it a reliable tool for daily productivity.

## Features

- **Multiple Projects**: Create and manage multiple projects. Each project can hold a list of tasks.
- **Task Creation**: Easily add new tasks with essential details such as title, description, due date, and priority level.
- **Task Management**: Mark tasks as complete, delete tasks, and update task details.
- **Priority & Due Date**: View tasks with different priorities and due dates. Tasks are color-coded based on priority for easy identification.
- **Task Expansion**: Expand a task to view/edit its details (description, due date, priority, etc.).
- **Persistence**: Automatically saves tasks and projects using the browser's `localStorage`, ensuring data is preserved even after a page reload.
- **User Interface**: Clean, responsive design with easy navigation between projects and tasks.

## Tech Stack

- **HTML5** for the structure
- **CSS3** for styling
- **JavaScript (ES6+)** for functionality
- **Webpack** for bundling
- **date-fns** for date manipulation
- **localStorage** for persistent data storage

## How It Works

The TaskFlow app consists of two main components: the **app logic** and the **user interface.**
- **App Logic**: The app's functionality (creating and managing tasks, updating priorities, marking tasks complete, and saving/loading data to/from localStorage) is handled by JavaScript modules. These modules are separated from the UI code to ensure clean and maintainable code.
- **User Interface**: The interface is designed to be simple and intuitive. Users can create tasks, view tasks in various projects, and interact with tasks using various options (edit, delete, mark complete).

### Local Storage Integration

TaskFlow uses `localStorage` to persist all user-created tasks and projects. On first load, the app checks for existing data in `localStorage`, and if none is found, it initializes with default values. All changes made to tasks or projects are automatically saved back to `localStorage` to maintain data across sessions.

### Data Structure Example

Each project in TaskFlow is an object that holds an array of task object.
```json
{
    "id": 1,
    "title": "Buy groceries",
    "description": "Milk, eggs, bread",
    "dueDate": "2024-11-20",
    "priority": "high",
    "completed": false 
}
```

### Handling Missing Data

In cases where there is no data in `localStorage` when the app first loads, the application gracefully handles the situation by initializing empty projects and tasks. Users can start adding tasks right away, and their data will be saved going forward.

## Future Enhancements

- **User Authentication**: Allow users to sign in and sync their tasks across different devices.
- **Task Comments**: Allow users to add comments or attach files to tasks.
- **Advanced Sorting and Filtering**: Implement advanced features for sorting and filtering tasks based on priority, due date, and completion status.
- **Notifications:**: Add notifications to alert users of upcoming due dates or overdue tasks.

## Acknowledgements
- **date-fns**: For handling date and time manipulation.
- **Webpack**: For bundling the app's assets.
