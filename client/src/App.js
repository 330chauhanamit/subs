import { useState, useEffect } from "react";
import Home from "./components/Home";
import "./App.css";
import Error from "./components/Error";
import Loading from "./components/Loading";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setDone(true);
    }, 1000);
  }, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          {!done ? <Loading /> : <Home />}
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
