import {
  BrowserRouter as Router,
    Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Home from "../pages/Home/Home";
import Review from "../pages/Review/Review";
import Schedule from "../pages/Schedule/Schedule";

const Routes = () => (
  <Router>
      <Footer/>
    <Switch>
      <Route exact path="/">
          <Redirect to="/collection" />
      </Route>
      <Route exact path="/collection" component={Home} />
      <Route exact path="/schedule" component={Schedule} />
      <Route exact path="/review" component={Review} />
    </Switch>
  </Router>
);

export default Routes;
