import React from 'react'

function Navbar() {
  return (
    <header>
        <nav className="navbar navbar-expand-lg text-white bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand  text-white" href="#">Text Changer</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  text-white me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link  text-white active" aria-current="page" href="#">Home</a>
        </li>
        
        <li className="nav-item">
          <a className="nav-link active  text-white" aria-current="true">About</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <button className="btn btn-outline-success  text-white" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>
    </header>
)
}

export default Navbar
