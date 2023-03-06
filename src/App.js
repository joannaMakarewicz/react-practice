import "./App.scss";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import ToDoList from "./pages/ToDoList/ToDoList";
import Home from "./pages/Home/Home";

function App() {
  return (
      <Router>
        <Routes>
          <Route path="/" element={<Navigate to="react-practice" />} />
          <Route path="/react-practice" element={<Home />} />
          <Route path="/toDoList" element={<ToDoList />} />
        </Routes>
      </Router>
  );
}

export default App;
