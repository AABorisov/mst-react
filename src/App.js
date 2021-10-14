import './App.css';
import {useState} from "react";
import ToDoList from "./components/ToDoList";

const TODOS = new Array(10).fill('').map((item, index) => {
  return {
    id: index,
    title: `Title #${index}`,
    done: false,
  }
})

function App() {
  const [todos, setTodos] = useState(TODOS);

  const handleDone = (id) => {
    setTodos(prevState => prevState.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          done: !todo.done,
        }
      }
      return todo;
    }))
  }

  return (
    <div className="App">
      <ToDoList todos={todos} onDone={handleDone} />
    </div>
  );
}

export default App;
