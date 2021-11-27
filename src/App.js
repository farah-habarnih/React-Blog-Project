import {Route ,Switch} from 'react-router-dom';

import Header from './components/Header';
import Navbar from './components/Navbar';
import Login from './pages/login';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Posts from './pages/posts';
import Post from './components/post';
import Singlepost from './pages/singlepost';

function App() {

  return (
  <div>
   
  <main>
    <Switch>
    <Route path="/Home">
    <Home />
    </Route>
    <Route path="/" exact>
    <Navbar />
   <Header />
   <Post />
    </Route>
      <Route path="/Login">
        <Login />
      </Route>
      <Route path="/Signup">
        <Signup/>
      </Route>
      <Route path="/Posts">
        <Posts/>
      </Route>
      <Route path="/Single-post">
        <Singlepost />
      </Route>
    </Switch>
  </main>
  </div>
  );
}

export default App;
