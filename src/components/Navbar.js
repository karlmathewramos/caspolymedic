import { Component } from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";

class Navbar extends Component {
  // create a set state for clicking the hamburger state 
  state = {clicked: false} ; // this is a variable
  // this is a function that changes the state variable 
  handleClick = () => {
    this.setState({clicked: !this.state.clicked})
  }
  render() {
    return (
      <nav className="NavbarItems">
        {/* the logo on the top left */}
        <Link to="/" style={{ textDecoration: 'none' }}>
        <h1 className="navbar-logo">
          <i className="fa-solid fa-square-plus"></i> C.A.S Polymedic
        </h1>
       </Link>
        

        {/* to show hamburger icon when reducing window size or be in mobile*/}
        <div className = "menu-icons" onClick={this.handleClick}>
          {/* this is setting a state where if it is clicked it will show an x instead it will show the hamburger icon*/}
          <i className= {this.state.clicked ? "fas fa-times" : "fas fa-bars"}></i>
          
        </div>

        {/* this is to make the class name be dynamic when being clicked for our css page */}
        <ul className = {this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {/* we are using an array to code our links instead of individualy adding them all */}
          {MenuItems.map((item,index) =>{
            return(
              <li key = {index}> {/* index means to go through all the items in the array */}
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}> {/* we access the item's icon variable */}
                  </i> {item.title} {/* we access the item's title*/}
                </Link>
              </li>
            )
          })}
          
        </ul>
      </nav>
    );
  }
}

// this allows us to use this file in other files
export default Navbar;
