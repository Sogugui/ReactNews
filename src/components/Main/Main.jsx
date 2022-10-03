import React, { Component } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from "./Home/Home"
import Form from "./Form/Form"
import ListNews from "./ListNews/ListNews"


export class Main extends Component {
  //Funciones para pintar todas las news y delete de las news
 constructor(props){
  super(props)
  
  this.state = { 
    news: []
  }
 }
  createNew(newOne){
    this.setState({news:[...this.state.news,newOne]})
  }

  deleteNew(oldOne){
    this.setState({news:this.state.news})
  }

 

  render() {




    return (
        <main>
        <Routes>
          <Route element={<Home />} path={"/home"} />
          <Route element={<Form data={(newOne)=>this.createNew(newOne)} />} path={"/form"} />
          <Route element={<ListNews data={this.state} />} path={"/list"} />
        </Routes>
      </main>
    )
  }
}

export default Main