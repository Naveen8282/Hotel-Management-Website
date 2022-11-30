
import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter , Route } from 'react-router-dom';
import Homescreen from './screens/Homescreen';
import Bookingscreen from './screens/Bookingscreen';
import Register from './screens/Register';
import Login from './screens/Login';
import Profilescreen from './screens/Profilescreen';
import Adminscreen from './screens/Adminscreen';
import Landingscreen from './screens/Landingscreen'



function App() {
  return (
    <div className="App">
     <Navbar />
     <BrowserRouter>
      
        <Route path="/home" exact component={Homescreen}/>
        <Route path='/book/:roomid/:fromdate/:todate' exact component={Bookingscreen} />
        <Route path='/register' exact component={Register} />
        <Route path='/login' exact component={Login} />
        <Route path='/profile' exact component={Profilescreen} />
        <Route path='/admin' exact component={Adminscreen} />
        <Route path='/' exact component={Landingscreen} />
     
     </BrowserRouter>
    </div>
  );
}

export default App;
