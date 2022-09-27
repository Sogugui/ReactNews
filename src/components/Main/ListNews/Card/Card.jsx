import React, { Component } from "react";

class Card extends Component {



render() {
    const {section,abstract,byline,published_date,title,short_url, multimedia}=this.props.article
    const deleteOne = this.props.deleteOne
    
    // El uso del ternario para multimedia es debido a algunos errores en la carga de imagenes por parte de la api, con esto se controla el error.
    return multimedia != null ? <article className="relative bg-slate-100 flex flex-col w-full lg:w-[48%] p-4 rounded-lg justify-between gap-5">
    
    <div onClick={()=>deleteOne} className="absolute bottom-4 right-4 flex gap-1 items-center group select-none">
      <span className="text-orange-500 text-xs font-bold bg-red-100 rounded-md px-3 py-1 scale-0 translate-x-20 group-hover:translate-x-0 group-hover:scale-100 duration-300">REMOVE</span>
      <i className="fa-solid fa-trash text-2xl text-orange-500 rotate-0 group-hover:rotate-6 duration-300 scale-100 group-hover:scale-110"></i>
    </div>

    <div className="bg-red-400 h-[30vh] w-full">
      <img src={multimedia[0].url} alt="img" className="h-full w-full object-cover" />
      {/* object cover se usa para que la imagen no se "estire" */}
    </div>
    <p className="text-xl">{title}</p>
    <div className="flex justify-between">
      <p className="">NewsSection: {section}</p>
      <p>{published_date}</p>  
    </div>
    
    <p>{abstract}</p>
    <p>Author: {byline}</p>
    <a target="_blank" rel="noreferrer" href={short_url}>Read more...{short_url}</a>
    {/* target=_blank es para que se abra la pag en otra pestaña. React pide que esté acompañado de rel=noreferrer*/}
  </article> : <div className="bg-amber-300 text-yellow-700 w-full flex justify-center items-center px-10 py-3 rounded-lg gap-3">
    <i className="fa-solid fa-triangle-exclamation text-2xl"></i>
    <h1 className="text-xl">Error, there was one News Article that could not be rendered</h1>
    <i className="fa-solid fa-triangle-exclamation text-2xl"></i>
  </div>
  }
}

export default Card;
