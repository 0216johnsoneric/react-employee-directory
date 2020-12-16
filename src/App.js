import React from 'react';
import Home from './pages/Home';
import Test from './pages/Test';
import { BrowserRouter as Router, Route} from "react-router-dom";

 function App(){
     return(
         <>
         <Router>
            <Route exact path="/" component={Home} />
            <Route exact path="/test" component={Test} />
         </Router>
         </>
     )
 }

 export default App;