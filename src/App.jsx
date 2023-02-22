import { Router } from "@reach/router";

import Home from "./pages/Home";
import Todo from "./pages/Todo";

function App() {
  return (
    <Router>
      <Home path="/"></Home>
      <Todo path="/todo"></Todo>
    </Router>
  );
}

export default App;
