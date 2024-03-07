import React, { useState } from 'react';

const Button = () => {
  const [goal, setGoal] = useState('');
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    setGoal(inputValue);
    setIsButtonDisabled(!inputValue.trim());
  };

  const handleAddGoalClick = () => {
    if (goal.trim()) {
      console.log('Goal added:', goal);
      setGoal('');
      setIsButtonDisabled(true);
    }
  };

  const buttonStyle = {
    backgroundColor: isButtonDisabled ? 'lightcoral' : 'red',
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
        style={buttonStyle}
        disabled={isButtonDisabled}
      >
        Add Goal
      </button>
    </div>
  );
};

export default Button;
