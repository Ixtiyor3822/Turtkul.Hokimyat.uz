import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import ArizaBerish from './Components/Arizaberish/ArizaBerish';
import Ariza from './Components/Arizaberish/QabulQiluvchi/Ariza.jsx/Ariza';
import Arizalarim from './Components/Arizalarim/Arizalarim';
import Home from './Components/Home/Home';
import Myprofile from './Components/Myprofile/Myprofile';
import Navbar from './Components/Navbar/Navbar';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
      </div>
      <Switch>
        <Route path="/" exact render={() => <Home />} />
        <Route path='/arizaberish' exact render={() => <ArizaBerish customer={props.customer} key={props.customer.id}/>} />
        {props.customer.map((customer, index) =>{
          return <Route path={`/arizaberish/${customer.id}`} exact render={() => <Ariza customer={customer} key={index}/>} />
        })}
        <Route path='/arizalarim' exact render={() => <Arizalarim />} />
        <Route path='/myprofile' exact render={() => <Myprofile />} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
