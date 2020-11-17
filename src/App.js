import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Classes from './Components/Classes/Classes';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import AdvanceGym from './Components/AdvanceGym/AdvanceGym';
import Home from './Components/Home/Home/Home';
import Pricing from './Components/Pricing/Pricing';
import Checkout from './Components/Checkout/Checkout';
import MembershipForm from './Components/MembershipForm/MembershipForm';
import Footer from './Components/Shared/Footer/Footer';
import Service from './Components/Service/Service';

const App = () => {
  return (
   <>
   <Router>
     <Switch>
     <Route exact path="/home">
         <Home></Home>
       </Route>
       <Route exact path="/pricing">
         <Pricing></Pricing>
       </Route>
       <Route path="/class">
            <Classes />
          </Route>
          <Route path="/checkout">
          <Checkout></Checkout>
          </Route>
             <Route path="/membership-form">
          <MembershipForm></MembershipForm>
          </Route>
          <Route path="/advanceGym/:title">
            <AdvanceGym />
          </Route>
          <Route path="/service">
            <Service />
            <Footer></Footer>
          </Route>
       <Route exact path="/">
         <Home></Home>
       </Route>
     </Switch>
   </Router>
   </>
  );
};

export default App;
