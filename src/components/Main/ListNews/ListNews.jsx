import React, { Component } from "react";
import { newsContext } from "../../../context/newsContext";
import axios from 'axios';
import Card from "./Card/Card";
import { v4 as uuidv4 } from 'uuid';

class ListNews extends Component {
  static contextType= newsContext
  constructor(props){
    super(props)
    this.state={
      news:[] //en este estado vamos a cargar las 5 noticias

    }
  }

  
  componentDidMount(){
    this.getNews()
  }

  
  deleteOne(e){
    console.log("padre evento: ", e)
  }
  
  getNews = async()=>{ //aca se deberia pintar las noticias tanto de la API de newYork + las del form
    //consumer
    let {addNews}=this.context
    const newsfetch = await axios.get(`https://api.nytimes.com/svc/topstories/v2/fashion.json?api-key=${process.env.REACT_APP_APIKEY}`) 
    const response = await newsfetch.data.results.slice(0,5)//slice 0,5 limita las primeras 5 noticias
    this.setState({
      news: response
    })
    
    addNews(response)// envio de el fetch de noticias al context global
    
    

    
  }
  // deleteNews(i){
  //   const remainingNew= this.state.news.filter( (one,j)=>i!==j )
  //   this.setState({news:remainingNew})
  // }


  render() {
    return <div className="md:px-24 lg:px-36 flex flex-wrap justify-between gap-5">
      
      {/* <newsContext.Consumer> */}
      {
        this.state.news.map( (article,key,deleteOne, ) => (
          <Card 
          article={article} 
          key={key} 
          deleteOne={deleteOne}
          />
        ))
      }
        {/* <div>
          {(context) => {
            return <div className="flex justify-center items-center h-[20vh] gap-2">
              {context.news.map( (article,key,deleteOne, ) => (
                <div 
                  article={article} 
                  key={key} 
                  deleteOne={deleteOne}
                  />
                ))}
              </div> 
          }}
        </div>
      </newsContext.Consumer> */}
      </div>;
  }
}

export default ListNews;
