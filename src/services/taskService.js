// services/taskService.js

export const distributeTasks = (roommates, tasks, daysOfWeek) => {
  const newAssignments = [];

  daysOfWeek.forEach((day, dayIndex) => {
    roommates.forEach((mate, mateIndex) => {
      const taskIndex = (dayIndex + mateIndex) % tasks.length;
      const taskAssignment = {
        week: Math.floor(dayIndex / roommates.length) + 1,
        day,
        roommate: mate,
        task: tasks[taskIndex],
      };

      // Check if the task has already been assigned to the same roommate on the same day
      const isTaskAssigned = newAssignments.some(
        (assignment) =>
          assignment.day === day &&
          assignment.roommate === mate &&
          assignment.task.name === tasks[taskIndex].name
      );

      // If the task is already assigned, find a new task for the same day and roommate
      if (isTaskAssigned) {
        const availableTasks = tasks.filter(
          (t) => t.name !== tasks[taskIndex].name
        );
        const newTask = availableTasks.find(
          (t) =>
            !newAssignments.some(
              (a) =>
                a.task.name === t.name && a.day === day && a.roommate === mate
            )
        );
        taskAssignment.task = newTask;
      }

      newAssignments.push(taskAssignment);
    });
  });

  return newAssignments;
};

export const resetTaskAssignments = (setTaskAssignments) => {
  setTaskAssignments([]);
};

export const calculateContribution = (
  roommates,
  taskAssignments,
  daysOfWeek,
  tasks
) => {
  const contribution = {};

  roommates.forEach((mate) => {
    const tasksCompleted = taskAssignments.filter(
      (assignment) => assignment.roommate === mate
    ).length;
    const percentage =
      (tasksCompleted / (daysOfWeek.length * tasks.length)) * 100;
    contribution[mate] = percentage.toFixed(2);
  });

  return contribution;
};
