import react, {useState} from 'react';

const AddUser = (props) => {
    const [enteredUsername, setEnteredUsername] = useState('');
    const [enteredAge, setEnteredAge] = useState(' ');
    const [error, setError] = useState('');
}

const AddUseHandler = (event) => {
    event.preventDefault();
    if(enteredUsername.trim().length===0|| eneteredAge.trim().length===0){
        setError({
            title:'Invalid Input',
            message: 'please enter a valid name and age (non-empty values)',
        });
        return
    }
}

