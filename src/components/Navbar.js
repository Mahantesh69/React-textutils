import React from 'react'
import PropTypes from 'prop-types'







export default function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid mx-2">
        <a className="navbar-brand" href="/">{props.title}</a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mx-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
            </li>
            <li className="nav-item mx-6">
              <a className="nav-link active" href="/about">About</a>
            </li>
            <li className="nav-item mx-6">
              <a className="nav-link active" href="/simple">Click me Siyaaa</a>
            </li>
            <li className="nav-item mx-6">
              <a className="nav-link active" href="/practice">Practice</a>
            </li>
            </ul>
            <div className="d-flex">
              <div className="bg-primary mx-2 rounded" onClick={() => {props.toggleMode('primary')}} style={{height:'30px',width:'30px', cursor:'pointer' }}></div>
              <div className="bg-warning mx-2 rounded" onClick={() => {props.toggleMode('warning')}} style={{height:'30px',width:'30px', cursor:'pointer' }}></div>
              <div className="bg-danger mx-2 rounded" onClick={() => {props.toggleMode('danger')}} style={{height:'30px',width:'30px', cursor:'pointer' }}></div>
              <div className="bg-success mx-2 rounded" onClick={() => {props.toggleMode('success')}} style={{height:'30px',width:'30px', cursor:'pointer' }}></div>
              <div className="bg-white mx-2 rounded" onClick={() => {props.toggleMode('white')}} style={{height:'30px',width:'30px', cursor:'pointer' }}></div>

            

            </div>
           
          
          {/* <div mx-2 className={`form-check form-switch text-${props.mode==='light'?'dark':'light'}`}>
      <input className="form-check-input me-1" onClick={()=>{props.toggleMode(null)}} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label me-4" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
    </div> */}
     <div mx-6 className={`form-check form-switch text-${props.mode==='light'?'green':'light'}`}>
      <input className="form-check-input me-1" onClick={props.toggleModeGreen} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label me-4" htmlFor="flexSwitchCheckDefault">Enable Green mode</label>
      </div>
      
    {/* <div mx-6 className={`form-check form-switch text-${props.mode==='light' || 'dark'?'Red':'dark'}`}>
      <input className="form-check-input me-1" onClick={props.toggleModeRed} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
      <label className="form-check-label me-4" htmlFor="flexSwitchCheckDefault">Enable Red mode</label> */}
    </div> 
{/* 
          <form className="d-flex " role="search">
            <input className="form-control me-2 " type="search" placeholder="Search" aria-label="Search"/>
            <button className="btn btn-outline-danger" type="submit">Search</button>
          </form> */}
        </div>
      
    
</nav>
  )
}


Navbar.propTypes={title:PropTypes.string.isRequired}

Navbar.defaultProps={title:'Set the title name here'}