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
      fetchNews:[] //en este estado vamos a cargar las 5 noticias

    }
  }

  
  componentDidMount(){
    this.getNews()
  }

  
  getNews = async()=>{ //aca se deberia pintar las noticias tanto de la API de newYork + las del form
    //consumer
    let {addNews}=this.context
    const newsfetch = await axios.get(`https://api.nytimes.com/svc/topstories/v2/fashion.json?api-key=${process.env.REACT_APP_APIKEY}`) 
    const response = await newsfetch.data.results.slice(0,5)//slice 0,5 limita las primeras 5 noticias
    const totalNews=[...response,...this.props.data.news] 
    console.log(totalNews);
    this.setState({
      fetchNews: totalNews
    })
    
    addNews(this.state.fetchNews)// envio de el fetch de noticias al context global
   
    
    

    
  }
  deleteOne(i){
    let {addNews}=this.context
    const remainingNew= this.state.news.filter( (newOne,j)=>i!==j )

    let flatNews = remainingNew.flat(remainingNew.length)
    // this.setState({fetchNews:remainingNew})
    addNews(flatNews)
    this.setState({ fetchNews: flatNews })
  }


  render() {
    return <div className="md:px-24 lg:px-36 flex flex-wrap justify-between gap-5">
      
      {/* <newsContext.Consumer> */}
      {
        this.state.fetchNews.map( (article,key,deleteOne) => (
          <Card 
          article={article} 
          key={key} 
          deleteOne={(oldOne)=>this.deleteOne(oldOne)}
          />
        ))
      }
       
      </div>;
  }
}

export default ListNews;
