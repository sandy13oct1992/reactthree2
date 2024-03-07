import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import CourseInput from './CourseInput';
import Button from './Button';
import ToDoList from './TodoList';

function App() {

  const [inputList, setInputList] = useState("Buy a mango")
 const [newItems, setNewItems] = useState([]);

  const itemEvents = (event) => {
    setInputList(event.target.value);
  };

 const listOfItems =() => {
 setNewItems((oldItems) =>{
  return [...oldItems, inputList];
  
 });
 setInputList("");
 }

 const deleteItems = (id) => {
  console.log("deleteItems");
 
 setNewItems((oldItems) => {
   return oldItems.filter((arrEle, index) => {
      return index!==id;
   });
 })
}
  return (
  <div>
    <h1>To Do List</h1>
    <input type ="text" placeholder='Add items' 
    value={inputList}
    onChange={itemEvents}/>
    <button onClick={listOfItems}> + </button>

    <ol>
      {/* <li> {inputList}</li> */}
      {newItems.map((itemVal,index) => {
        return(
        <ToDoList 
         key={index}
         id={index}
        text={itemVal}
        onSelect={deleteItems}
        />
        )
      })}
    </ol>
  </div>
  )
}


export default App;
