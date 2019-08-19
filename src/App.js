import React from 'react';
import { BrowserRouter as Browser, Switch, Route} from 'react-router-dom'
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Checkout from './containers/Checkout/Checkout';
import Orders from './containers/Orders/Orders'

import './App.css';

class App extends React.Component{
  render(){
  return (
    <div>
      <Browser> 
      <Switch>
      <Layout>
        <Route path='/orders' component={Orders} />
        <Route path='/checkout' component={Checkout} />
        <Route exact path='/' component={BurgerBuilder} />
      </Layout>
      </Switch>
      </Browser>
    </div>
  );
}
}
export default App;
