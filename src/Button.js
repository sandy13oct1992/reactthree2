import React, { useState } from 'react';

const Button = () => {
  const [goal, setGoal] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setGoal(inputValue);
    setIsButtonDisabled(!inputValue.trim()); // Disable the button if input is empty or contains only whitespaces
  };

  const handleAddGoalClick = () => {
    // Handle the logic for adding the goal
    if (goal.trim()) {
      // Add your logic here for adding the goal
      console.log('Goal added:', goal);
      // Clear the input field and disable the button again
      setGoal('');
      setIsButtonDisabled(true);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter your goal"
        value={goal}
        onChange={handleInputChange}
      />
      <button
        onClick={handleAddGoalClick}
        style={{ backgroundColor: isButtonDisabled ? 'lightcoral' : 'lightgreen' }}
        disabled={isButtonDisabled}
      >
        Add Goal
      </button>
    </div>
  );
};

export default Button;
