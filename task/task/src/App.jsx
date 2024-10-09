import "./App.css";
import InputToDo from "./components/InputToDo";
import ListToDo from "./components/ListToDo";
import { Provider } from "./context/todos";
function App() {
  return (
    <Provider>
      <>
        <h1>App To dO</h1>
        <InputToDo />
        <ListToDo />
      </>
    </Provider>
  );
}

export default App;
