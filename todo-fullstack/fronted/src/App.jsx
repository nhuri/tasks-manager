import "./App.css";
import InputToDo from "./components/InputToDo";
import ListToDo from "./components/ListToDo";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

import { Provider } from "./context/todos";
import Login from "./users/Login";
function App() {
  return (
    <Provider>
      <>
        <div id="header">
          <div id="title">
            <h1>App To do</h1>
          </div>

          <Login />
        </div>

        <InputToDo />
        <ListToDo />
      </>
    </Provider>
  );
}

export default App;
