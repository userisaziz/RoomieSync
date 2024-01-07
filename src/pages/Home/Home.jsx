import React, { useState } from "react";
import FlatMates from "../../components/FlatMates/FlatMates";
import DistributedList from "../../components/DistrbutedList/DstrbutedList";

const Home = () => {
  const [numberOfRoommates, setNumberOfRoommates] = useState(0);
  const [roommates, setRoommates] = useState([]);

  // Function to handle the change in the number of roommates
  const handleNumberOfRoommatesChange = (event) => {
    const selectedNumber = parseInt(event.target.value, 10);
    setNumberOfRoommates(selectedNumber);
    setRoommates([]); // Reset the roommates array when the number changes
  };

  // Function to handle the input for each roommate
  const handleRoommateNameChange = (event, index) => {
    const newRoommates = [...roommates];
    newRoommates[index] = event.target.value;
    setRoommates(newRoommates);
  };

  return (
    <div>
      {/* Dropdown to select the number of roommates */}
      <label>
        Select the number of roommates:
        <select onChange={handleNumberOfRoommatesChange}>
          {[0, 1, 2, 3, 4, 5].map((number) => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </select>
      </label>

      {/* Input fields for entering roommate names */}
      {Array.from({ length: numberOfRoommates }).map((_, index) => (
        <div key={index}>
          <label>
            Roommate {index + 1}:
            <input
              type="text"
              value={roommates[index] || ""}
              onChange={(event) => handleRoommateNameChange(event, index)}
            />
          </label>
        </div>
      ))}

      {/* Render components with the updated roommates array */}

      <DistributedList roommates={roommates} />
    </div>
  );
};

export default Home;
