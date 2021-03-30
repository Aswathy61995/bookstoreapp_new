import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Login';
import Addbook from './Addbook';
import AddNewbook from './AddNewbook';
import Listbook from './Listbook';
import ListAllBooks from './ListAllBooks';
import GetBooksByTitle from './GetBooksByTitle';
import Home from './Home'
import Register from './Register';
import Comment from './features/comment'
import './Login.css';
import './Home.css';
import './style.css'
import 'react-notifications/lib/notifications.css';
import { NotificationContainer } from 'react-notifications';
import{
  BrowserRouter,
  Switch,
  Route,
  Link
} from 'react-router-dom'

class App extends React.Component {
 render(){
  return (
    
     <BrowserRouter>
     <div className="App">
      {/* <div>
       < Link to="/">Login</Link>
       < Link to="/home">Home</Link>
      </div>
      <div> */}
      <Switch>
          <Route path="/" exact={true}>
            <Login/>
          </Route>
          <Route path="/home" exact={true} >
            <Home/>
          </Route>
          <Route path="/listbook" exact={true} >
            <Listbook/>
          </Route>
          <Route path="/addbook" exact={true} >
            <Addbook/>
          </Route>
          <Route path="/addnewbook" exact={true} >
            <AddNewbook/>
          </Route>
          <Route path="/listAllBooks" exact={true} >
            <ListAllBooks/>
          </Route>
          <Route path="/getBooksByTitle" exact={true} >
            <GetBooksByTitle/>
          </Route>
          

          <Route path="/register" exact={true} >
            <Register/>
          </Route>
           <Route path="/comment" exact={true} >
          <Comment/>
          </Route> 
        </Switch>


      </div>
      </BrowserRouter>
      
    //</div>
  );
}
}

export default App;
