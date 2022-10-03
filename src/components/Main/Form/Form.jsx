import React, { Component } from "react";
// import { newsContext } from "../../../context/newsContext";
import {Navigate} from "react-router-dom"

class Form extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      sendNew:false
    }
  }

//----- Funciones propias de este componente -----//

createNews = (e) => {
  e.preventDefault();
  const section = e.target.section.value;
  const abstract = e.target.abstract.value;
  const author = e.target.byline.value;
  const published_date = e.target.published_date.value;
  const title = e.target.title.value;
  const image = e.target.image.value;

  const addNews = {section,abstract,author,published_date,title,image}; 
  this.props.data(addNews) //pasamos por props la variable que contiene los valores del form
  this.setState({sendNew:true}) // seteamos a true el envio de la nueva noticia

}
 
render() {
  const { sendNew } = this.state;
  if(sendNew) {
    <Navigate to = "/list"/> //redireccionar una vez que se hace submit del formulario
  }


  return <section className="md:px-24 lg:px-36 flex justify-center items-center gap-2">
    
    {/* <h1 className="title-section">Add News Here</h1> */}

    <form  className='w-full' onSubmit={this.createNews}>

      <div className="flex bg-black/50 w-full rounded-lg">
        
        <div className="w-1/2 flex flex-col px-4 pt-2 pb-10">
          <div className="w-full">
            <label className="font-semibold" htmlFor="section">Section:</label>
            <input type="text" id="section" name="section" className="w-full flex justify-between"/>
          </div>

          <div className="w-full">
            <label className="font-semibold" htmlFor="abstract">Abstract:</label>
            <textarea type="text" id="abstract" name="abstract" rows="10" cols="50" className="w-full bg-gray-200 rounded-md px-2 py-1 outline-none flex justify-between"/>
          </div>

          <div className="w-full">
            <label className="font-semibold" htmlFor="byline">Author:</label>
            <input type="text" id="byline" name="byline" className="w-full bg-gray-200 rounded-md px-2 py-1 outline-none flex justify-between"/>
          </div>
        </div>
        
        <div className="w-1/2 flex flex-col px-4 pt-2 pb-10 gap-10">
          <div className="w-full">
            <label className="font-semibold" htmlFor="published_date">Published Date:</label>
            <input  type="text" id="published_date" name="published_date" className="w-full flex justify-between"/>
          </div>
          
          <div className="">
            <label className="font-semibold" htmlFor="title">Title:</label>
            <input type="text" id="title" name="title"  className="w-full flex justify-between"/>
          </div>
          
          <div className="">
            <label className="font-semibold" htmlFor="image">Image:</label>
            <input type="text" id="image" name="image"  className="w-full flex justify-between"/>
          </div>
          
            <button type="submit" className="bg-gray-200   text-orange-500 font-semibold tracking-wider">CREATE ARTICLE</button>
          
        </div>
      </div>

    </form>
    

  </section>
}
}

export default Form;
