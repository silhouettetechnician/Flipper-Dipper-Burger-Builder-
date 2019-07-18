import React from 'react'
import Toolbar from '../Nav/Toolbar/Toolbar'
import Aux from '../../HOC/Aux'
import classes from './Layout.css'
import SideDrawer from '../sideDrawer/SideDrawer';
class Layout extends React.Component{
    state = {
        showSideDrawer: false
    }

  sideDrawerCloser = () => {
    this.setState({showSideDrawer: false})
  }
// reusable toggle
  sideDrawerToggleHandler = () => {
    this.setState((prevState ) => {
      return { showSideDrawer: !prevState.showSideDrawer }
    })
  }

render(){
return(
    <Aux>
    <Toolbar drawerClicked={this.sideDrawerToggleHandler} />
    <SideDrawer
    open={this.state.showSideDrawer}
    closed={this.sideDrawerCloser}
    />
    <main className={classes.Content}>
        {this.props.children}
    </main>
    </Aux>
)
}
}
export default Layout