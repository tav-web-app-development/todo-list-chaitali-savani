import React, { useState } from 'react';
import './App.css'; // Assuming you have a CSS file for styling

const TASKS = [
  {
    dueDate: "2024-03-30",
    completed: false,
    name: "Finish project proposal",
  },
  {
    dueDate: "2024-03-27",
    completed: false,
    name: "Meet with mentor",
  },
  {
    dueDate: "2024-03-28",
    completed: true,
    name: "Review study notes",
  },
  {
    dueDate: "2024-03-29",
    completed: false,
    name: "Practice coding exercises",
  },
  {
    dueDate: "2024-04-01",
    completed: false,
    name: "Plan weekend trip",
  },
  {
    dueDate: "2024-03-26",
    completed: true,
    name: "Attend yoga class",
  },
  {
    dueDate: "2024-03-31",
    completed: false,
    name: "Update resume",
  },
  {
    dueDate: "2024-04-02",
    completed: false,
    name: "Research career options",
  },
  {
    dueDate: "2024-04-03",
    completed: true,
    name: "Start reading new book",
  },
  {
    dueDate: "2024-04-04",
    completed: true,
    name: "Schedule dentist appointment",
  },
];


const App = () => {
  const [inputText, setInputText] = useState('');
  const [showCompleted, setShowCompleted] = useState(true);

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleCheckboxChange = (e) => {
    setShowCompleted(e.target.checked);
  };

  const filteredTasks = TASKS.filter((task) => {
    return task.name.toLowerCase().includes(inputText.toLowerCase()) &&
      (showCompleted || !task.completed);
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={inputText}
        onChange={handleInputChange}
      />
      <label>
        <input
          type="checkbox"
          checked={showCompleted}
          onChange={handleCheckboxChange}
        />
        Show completed tasks
      </label>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            &nbsp;&nbsp;&nbsp;&nbsp; 
            <th>Due Date</th>
          </tr>
        </thead>
        <tbody>
          {filteredTasks.map((task, index) => (
            <tr key={index}>
              <td>
                {task.completed ? (<del>{task.name}</del>) : (task.name)}
              </td>
              &nbsp;&nbsp;&nbsp;&nbsp; 
              <td>{task.dueDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;

