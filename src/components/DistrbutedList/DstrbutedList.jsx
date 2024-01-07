// DistributedList.js
import React, { useState } from "react";
import "./DistributedList.scss";
import {
  distributeTasks,
  resetTaskAssignments,
  calculateContribution,
} from "../../services/taskService";
import TaskList from "../TaskList/TaskList";

const tasks = [
  { name: "Cooking", rank: 1 },
  { name: "Washing", rank: 2 },
  { name: "Helping", rank: 3 },
];

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const DistributedList = ({ roommates }) => {
  const [taskAssignments, setTaskAssignments] = useState([]);

  const handleDistributeTasks = () => {
    const newAssignments = distributeTasks(roommates, tasks, daysOfWeek);
    setTaskAssignments(newAssignments);
  };

  const handleResetTaskAssignments = () => {
    resetTaskAssignments(setTaskAssignments);
  };

  const renderContributionList = () => {
    const contribution = calculateContribution(
      roommates,
      taskAssignments,
      daysOfWeek,
      tasks
    );

    return (
      <ul>
        {Object.entries(contribution).map(([mate, percentage]) => (
          <li key={mate}>
            {mate}: {percentage}%
          </li>
        ))}
      </ul>
    );
  };

  return (
    <div>
      <h1>Weekly Task Distribution</h1>
      <button onClick={handleDistributeTasks}>Distribute Tasks</button>
      {/* <button onClick={handleResetTaskAssignments}>Reset Tasks</button> */}
      <TaskList taskAssignments={taskAssignments} />
      <h2>Roommates Contribution:</h2>
      {renderContributionList()}
    </div>
  );
};

export default DistributedList;
