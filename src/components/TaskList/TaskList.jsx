// TaskList.js
import React from "react";
import "./TaskList.scss"; // Import your Sass file for styling

const getWeekdayColor = (weekday) => {
  switch (weekday.toLowerCase()) {
    case "monday":
      return "#FF5733"; // Coral
    case "tuesday":
      return "#33B5E5"; // Dodger Blue
    case "wednesday":
      return "#00C851"; // Medium Sea Green
    case "thursday":
      return "#AA66CC"; // Medium Purple
    case "friday":
      return "#FFBB33"; // Saffron
    case "saturday":
      return "#3F729B"; // Steel Blue
    case "sunday":
      return "#FF4444"; // Red
    default:
      return "#FFFFFF"; // Default color (white)
  }
};

const TaskList = ({ taskAssignments }) => {
  return (
    <div className="task-list-container">
      {/* Use a class for styling */}
      <div className="table-container">
        {/* Set styling for overflow and flex properties */}
        <table className="task-table">
          <caption>Task Assignments</caption>
          <thead>
            <tr>
              <th>Week</th>
              <th>Day</th>
              <th>Roommate</th>
              <th>Task</th>
            </tr>
          </thead>
          <tbody>
            {taskAssignments.map((assignment, index) => (
              <tr
                key={index}
                style={{ backgroundColor: getWeekdayColor(assignment.day) }}
                className="table-row"
              >
                <td>{assignment.week}</td>
                <td>{assignment.day}</td>
                <td>{assignment.roommate}</td>
                <td>{assignment.task.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskList;
