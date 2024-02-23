import react, { useState } from 'react';
import './CourseInput.css';
const CourseInput = props =>{
    

    const formSubmitHandler = event => {
        event.preventDefault();
    

    
    props.onAddGoal(enteredValue);
}
    return(
        <form onSubmit = {formSubmitHandler}>
           <div classname="form-control">
           <label style= {{color: !isValid ? "red" : "black"}} >course goal </label>
           <input 
              style={{borderColor: !isValid ? 'red' : 'black',
               backgroundColor: !isValid ? 'salmon' : 'transparent'
               }}
           type = "text" onChange = {goalInputChangeHandler}>
           
           </input>
           </div>
           <button type= "submit">Add Goal</button>
        </form>
    )
         
    

} 
export default CourseInput;