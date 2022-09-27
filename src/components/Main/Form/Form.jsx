import React, { Component } from "react";
import { newsContext } from "../../../context/newsContext";
import {Navigate} from "react-router-dom"

class Form extends Component { 
  static contextType= newsContext
  constructor(props) {
  
  super(props)

  this.abstract = React.createRef()
  this.section = React.createRef()
  this.byline = React.createRef()
  this.published_date = React.createRef()
  this.title = React.createRef()
  this.image = React.createRef()

  this.state = {
    redirect:false,
    abstract: "",
    section:"",
    byline:"",
    published_date:"",
    title:"",
    image:""
  }
}

createNews = (e) => {
  e.preventDefault();

  const abstract= this.state.abstract
  const section=this.state.section
  const byline=this.state.byline
  const published_date= this.state.published_date
  const title=this.state.title
  const image=this.state.image
  let createNew = []
  createNew = {abstract,section,byline,published_date,title,image}; //crear noticia con todos los estados igualados a los inputs
  console.log({createNew})

  //Consumer
  const {news,addNews, check}= this.context
  // let allNews=[]
  this.setState({
    redirect:true // 
  })
  check(true)
  let allNews = [...news,...[createNew]] //concatenar noticias del estado global + state de noticias del componente form
  console.log(allNews);
  
  addNews(allNews) //enviamos las news al contexto
  createNew=[]// convierte createNew en un array vacio
  
  //vaciamos los states
  this.setState({
    abstract:"",
    section:"",
    byline:"",
    published_date:"",
    title:"",
    image:"",
  })
    //vaciamos los input
    e.target.abstract.value=""
    e.target.section.value=""
    e.target.byline.value=""
    e.target.published_date.value=""
    e.target.title.value=""
    e.target.image.value=""
    
}

handlerChange= () => {
  //Leemos campos por referencia
  const abstract=this.abstract.current.value
  const section=this.section.current.value
  const byline=this.byline.current.value
  const published_date=this.published_date.current.value
  const title= this.title.current.value
  const image= this.image.current.value
//seteamos los state de cada campo
  this.setState({abstract,section,byline,published_date,title,image})
}



render() {
  const { redirect } = this.state;
  if(redirect) {
    <Navigate to = "/list"/> //redireccionar una vez que se hace submit del formulario
  }


  return <section className="md:px-24 lg:px-36 flex justify-center items-center gap-2">
    
    {/* <h1 className="title-section">Add News Here</h1> */}

    <form  className='w-full' onSubmit={this.createNews}>

      <div className="flex bg-black/50 w-full rounded-lg">
        
        <div className="w-1/2 flex flex-col px-4 pt-2 pb-10">
          <div className="w-full">
            <label className="font-semibold" htmlFor="section">Section:</label>
            <input onChange={this.handlerChange} ref={this.section}type="text" id="section" name="section" className="w-full flex justify-between"/>
          </div>

          <div className="w-full">
            <label className="font-semibold" htmlFor="abstract">Abstract:</label>
            <textarea onChange={this.handlerChange} ref={this.abstract} type="text" id="abstract" name="abstract" rows="10" cols="50" className="w-full bg-gray-200 rounded-md px-2 py-1 outline-none flex justify-between"/>
          </div>

          <div className="w-full">
            <label className="font-semibold" htmlFor="byline">Author:</label>
            <input onChange={this.handlerChange} ref={this.byline} type="text" id="byline" name="byline" className="w-full bg-gray-200 rounded-md px-2 py-1 outline-none flex justify-between"/>
          </div>
        </div>
        
        <div className="w-1/2 flex flex-col px-4 pt-2 pb-10 gap-10">
          <div className="w-full">
            <label className="font-semibold" htmlFor="published_date">Published Date:</label>
            <input onChange={this.handlerChange} ref={this.published_date} type="text" id="published_date" name="published_date" className="w-full flex justify-between"/>
          </div>
          
          <div className="">
            <label className="font-semibold" htmlFor="title">Title:</label>
            <input onChange={this.handlerChange} ref={this.title} type="text" id="title" name="title"  className="w-full flex justify-between"/>
          </div>
          
          <div className="">
            <label className="font-semibold" htmlFor="image">Image:</label>
            <input onChange={this.handlerChange} ref={this.image}type="text" id="image" name="image"  className="w-full flex justify-between"/>
          </div>
          
            <button type="submit" className="bg-gray-200   text-orange-500 font-semibold tracking-wider">CREATE ARTICLE</button>
          
        </div>
      </div>

    </form>
    

  </section>
}
}

export default Form;
