import React from 'react'

export const Navbar = () => {

    let scblogo = {
            width: "120px",
            height: "50px",
            left: "10px"
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-white">
     <div className="container-fluid">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/Standard_Chartered_%282021%29.svg/1200px-Standard_Chartered_%282021%29.svg.png"
            loading="details" style={scblogo} alt = "scblogo" />
        <div className="collapse navbar-collapse" id="navbarButtonsExample">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="/#" style={{color: "rgb(25, 223, 25)"}}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">Our Products</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/#">Services</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/#">Help</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/#" style={{color : "red"}}>Logout</a>
              </li>
          </ul>
            
        </div>
      </div>
    </nav>
        </div>
    )
}

export default Navbar;