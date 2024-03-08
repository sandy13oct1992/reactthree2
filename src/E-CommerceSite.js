import react from "react";

const ECommerceSite = () => {
    const [inputList, setInputList] = useState("buy a mango");
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
       <h1>E-Commerce Site</h1>
       
       <label>Category</label>
       <select name='Category' id='category'>
         <option value='Electronic'/>
         <option value='Food' />
         <option value='Skin Care'/>
       </select>

       <label>Product name</label>
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
   

export default ECommerceSite;