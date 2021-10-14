import './App.css';
import ToDoList from "./components/ToDoList";
import {observer} from "mobx-react-lite";
import appStore from "./store";
import {applySnapshot} from "mobx-state-tree";

const TODOS = new Array(10).fill('').map((item, index) => {
  return {
    id: index,
    title: `Title #${index}`,
    done: 'false',
  }
})

applySnapshot(appStore, {
  todos: {
    todos: TODOS
  }
})

function App() {
  return (
    <div className="App">
      <ToDoList todos={appStore.todos} />
    </div>
  );
}

export default observer(App);
