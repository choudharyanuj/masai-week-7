import React from 'react';
import './microsoft.css';

class Nav_bar extends React.Component {
    render() {
        
    return(
            <div className = "ml-5 mr-5">
                <nav className="navbar navbar-expand-lg navbar-light">
                    <a href = "component/microsoft.js"><img className="logo_img" src="https://www.stickpng.com/assets/images/58480fd7cef1014c0b5e4943.png" ></img></a>
                    <ul className = "navbar-nav mr-auto">
                        <li className = "nav-item ml-3">Windows</li>
                        <li className = "ml-3">Office</li>
                        <li className="ml-3">Surface</li>
                        <li className="ml-3">Xbox</li>
                        <li className="ml-3">Support</li>
                    </ul>
                <ul className="navbar-nav mr-auto"> 
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            All Microsoft </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item">Software</a>
                            <a className="dropdown-item">Pc & Devices</a>
                            <a className="dropdown-item">Entertainment</a>
                            <a className="dropdown-item">Business</a>
                            <a className="dropdown-item">Developer & IT</a>
                            <a className="dropdown-item">Other</a>   
                        </div>
                    </li>
                    <img className="nav_icon" src="https://image.flaticon.com/icons/svg/126/126474.svg"></img>
                    <img className="nav_icon" src="https://image.flaticon.com/icons/svg/1170/1170678.svg"></img>
                    <img className="nav_icon" src="https://image.flaticon.com/icons/svg/346/346511.svg"></img>
                    </ul>
                </nav>
            </div>
        );
    }
}
export default Nav_bar;   