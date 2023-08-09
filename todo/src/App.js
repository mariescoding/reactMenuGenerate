
import './App.css';
import React, {useState} from 'react';
import Todo from './pages/Todo';

function App() {

  const [input, setInput] = useState('');
  const [toDoList, setToDoList] = useState([]);

  const addToDo(){
    setToDoList([...toDoList, input])
    setInput('');
  }

  const deleteToDo(index){
    setToDoList(toDoList.filter(((_, idx) => idx !== index)))


  }



  return (
    <div className="App">

      <header className="App-header">
      
      </header>

      <div>
        <input 
        onChange = {()=>
          setInput(e.target.value)

        }
        value={input}
        >

        </input>
        <button onClick={()=>
          addToDo()
        }>
          Add
        </button>
      </div>


    </div>
  );
}

export default App;
