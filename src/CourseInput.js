import react, { useState } from 'react';
import './CourseInput.css';
const CourseInput = props =>{
    
    const [enteredValue, setEnteredValue] = useState('');
  const [isValid, setisValid] = useState(true);

  const AddUser = event => {
      setEnteredValue(event.target.value);
  }
  if(enteredValue.trim().length===0)
    {
        setisValid(false);
        return;
    }

  

    const formSubmitHandler = event => {
        event.preventDefault();
    

    
    props.onAddGoal();
}
    return(
         <form onSubmit = {formSubmitHandler}>
    <div classname="form-control">
    <label style= {{color: !isValid ? "red" : "black"}} >course goal </label>
    <input 
       style={{borderColor: !isValid ? 'red' : 'black',
        backgroundColor: !isValid ? 'salmon' : 'transparent'
        }}
    type = "text" onChange = {AddUser}>
    
    </input>
    </div>
    <button type= "submit">Add Goal</button>
 </form>
        
    )
         
    

} 
export default CourseInput;