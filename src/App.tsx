import { BrowserRouter, Route, Switch } from "react-router-dom";
import { AuthContextProvider } from "./context/AuthContext";

import { Room } from "./pages/Room";
import { Home } from "./pages/Home";
import { NewRoom } from "./pages/NewRoom";

export function App() {
  return (
    <BrowserRouter>
      <AuthContextProvider>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/room/new" exact component={NewRoom} />
          <Route path = "/room/:id" component = {Room}/>
        </Switch>
      </AuthContextProvider>
    </BrowserRouter>
  );
}
