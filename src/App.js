import './App.css';
import Header from './Header';
import RecommendedVideo from './RecommendedVideo';
import Sidebar from './Sidebar';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SearchPage from './SearchPage';
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path='/Search:searchTerm' >
        <div className='App__Page'>
            <Sidebar />
            <SearchPage />
          </div>
        </Route>
        <Route path='/'>
          <div className='App__Page'>
            <Sidebar />
            <RecommendedVideo />
          </div>
        </Route>
      </Switch>
    </Router>

  );
}

export default App;
