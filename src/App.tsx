import { BrowserRouter, Route, Switch } from "react-router-dom";

import { NewRoom } from "./pages/NewRoom";
import { Home } from "./pages/Home";
import { AuthContextProvider } from "./context/AuthContext";


export function App() {


  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/room/new" component={NewRoom} />
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}
