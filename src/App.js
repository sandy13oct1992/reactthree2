import logo from './logo.svg';
import './App.css';
// import CourseInput from './CourseInput';
import Button from './Button';


function App() {
  // const [enteredValue, setEnteredValue] = useState('');
  // const [isValid, setisValid] = useState(true);

  // const AddUser = event => {
  //     setEnteredValue(event.target.value);
  // }
  // if(enteredValue.trim().length===0)
  //   {
  //       setisValid(false);
  //       return;
  //   }
  return (

    <div >
      <Button/>
      {/* <CourseInput onAddGoal = {AddUser}></CourseInput> */}
    </div>
  );
}

export default App;
