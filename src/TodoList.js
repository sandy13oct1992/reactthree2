import React, { useState } from 'react';

const TodoList = (props) => {

  
  return(
  <div>
    <button onClick={() => {
      props.onSelect(props.id);
    }}>cancel</button>
  <li>{props.text}</li>
  </div>
  )
};

export default TodoList;

