import Home from '../Home/Home'
 import About from '../About/About'
 import Service from '../Services/Service'

import {BrowserRouter,Switch,Route,Link} from 'react-router-dom'


function App(){
    return(
        <div>
        <BrowserRouter> 
          <nav>
                <ul>
                    <li><Link to="/home">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/service">Services</Link></li>
                </ul>
          </nav>
              <Switch>
                <Route path="/home">
                   <Home/>
                </Route> 
                <Route path="/about">
                   <About/>
                </Route>
                <Route path="/service">
                   <Service/>
                </Route>  
              </Switch>
           </BrowserRouter> 
        </div>
    )
}

export default App

// <li><a href="/home">Home</a></li>
// <li><a href="/about">About</a></li>
// <li><a href="/service">Services</a></li>