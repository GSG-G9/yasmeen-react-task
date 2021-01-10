import {BrowserRouter as Router   , Redirect, Route, Switch} from 'react-router-dom'
import React from 'react'
import Colors from './components/colors'
import Color from './components/color'
import './App.css';

class App extends React.Component {
  state={
  colors : ["red", "green", "blue"]
  }
  render(){
  return (
    <div className="App">
      <Router>
      <Switch>
               <Route exact path='/colors'  render={(props) => (
         <Colors Colors={this.state.colors} {...props} />
         )}/>
      <Route path="/colors/:color"  render={(props) => (
        <Color Colors={this.state.colors} {...props} />
        )} />
        <Redirect to ='/colors'/>
        </Switch>
             </Router>

    </div>
  );
}}

export default App;
