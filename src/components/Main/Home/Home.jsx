import React, { Component } from "react";
import {userContext} from "../../../context/userContext"

class Home extends Component {
  static contextType= userContext
  constructor(props){
    super(props)
    this.user=React.createRef();//Para guardar cosas
    this.state={
      user:""
    }
  }

  sendUser= ()=>{
    const context= this.context; //consumer 
    context.login(this.state.user)// Utilizamos la FN login del context y mandamos el estado (user) de home a app.js actualizando el user globalmente 
    
    this.user.current.value ="" //limpiar input
    this.setState({user:""}) //limpiar state user de componente Home
  }

  handlerChange = (event) =>{
    const user = this.user.current.value; //Leer campo por referencia
    this.setState({user})// cambia el estado de user y le pasa el valor que entra por input
  }

  render() {
    return <div><userContext.Consumer>
    {(context)=>{ return context.user.length<1 ?<div className="flex justify-center items-center h-[20vh] gap-2">
    <input ref={this.user} onChange={this.handlerChange} name="user" value={this.state.user} placeholder="Nombre Usuario" />
    <button onClick={this.sendUser}>Login</button>
  </div>:""}}
  </userContext.Consumer>
</div>
  }
}

export default Home