import React, { Component } from "react";
import { Link } from "react-router-dom";
import { userContext } from "../../../context/userContext";

class Nav extends Component {
  render() {

    return <nav className="flex justify-between md:px-24 lg:px-36 py-3 select-none"> {/* media queries en tailwind aplicadas al padding */}
    <a href="/home" className="flex gap-2 items-center"> {/* lado izquierdo del navegador */} 
    {/* items-center es align-items:center de css */}
        <i className="fa-solid fa-house text-xl"></i> {/* Este es el icono de la casita */}
        <div className="flex gap-1">
          <span className="font-semibold">React</span>
          <span className="font-semibold text-orange-600">News</span>
        </div>
    </a>
    <div className="flex gap-10">{/* lado derecho del navegador */}
    <userContext.Consumer> 
    {(context)=>{ return  context.user ? <div className="flex gap-2 items-center">
        <i className="fa-solid fa-circle-user text-xl"></i>
        <span>Hola,{context.user}</span>
        <button onClick={context.logout}>Logout</button>
      </div>
      : null}}
    </userContext.Consumer>
      <Link to="/form" className="flex gap-2 items-center text-white font-semibold text-md">
        <i className="fa-solid fa-address-card text-xl"></i>
        <span>Form</span>
      </Link>
      <Link to="/list" className="flex gap-2 items-center text-white font-semibold text-md">
        <i className="fa-solid fa-file-lines text-xl"></i>
        <span>News</span>
      </Link>
    </div>
</nav>;
  }
}

export default Nav;
