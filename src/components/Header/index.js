// Write your JS code here
import {Component} from 'react'
import './index.css'

class Header extends Component {
  render() {
    return (
      <nav className="nav-container">
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            className="logo"
            alt="website logo"
          />
        </div>
        <div className="card-container">
          <li className="name">Home</li>
          <li className="name">Products</li>
          <li className="name">Cart</li>
          <div className="button-container">
            <button className="button" type="button">
              Logout
            </button>
          </div>
        </div>
      </nav>
    )
  }
}

export default Header
