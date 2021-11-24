import { Provider } from "react-redux";
import Index from "./components";
import MovieInfo from "./components/singleMovie/movieInfo";
import PageNotFound from "./components/errors/PageNotFound";
import { store } from "./reduxiom/Store";
import "./style/css/mainStyle.css";
import { BrowserRouter as Router , Route , Switch , Link } from "react-router-dom";
import MoviePlayer from "./components/singleMovie/moviePlayer";
function App() {
  return (
    <div>
      <Provider store={store}>
        <Router >
        <Switch >
          <Route exact path="/" component={Index} />
          <Route exact path="/movie/:movieName" component={MovieInfo} />
          <Route path="/movie/:movieName/play" component={MoviePlayer} />
          <Route path="*" component={PageNotFound} />
        </Switch>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
