import React, { Component } from "react";
import axios from 'axios';
import Card from "./Card/Card";
import { v4 as uuidv4 } from 'uuid';

class ListNews extends Component {
  constructor(props){
    super(props)
    this.state={
      news:[] //en este estado vamos a cargar las 5 noticias
    }
  }

  
  componentDidMount(){
    this.getNews()
  }

  // deleteOne= 
  
  
  getNews = async()=>{
    const newsfetch = await axios.get(`https://api.nytimes.com/svc/topstories/v2/fashion.json?api-key=${process.env.REACT_APP_APIKEY}`) 
    const response = await newsfetch.data.results //slice 0,5 limita las primeras 5 noticias
    const responseSliced= response.slice(0,5)
    const allNews = [...responseSliced, ...this.props.response.news]
    this.setState({
      news:allNews
    })

    
  }
  deleteNews(i){
    const remainingNew= this.state.news.filter( (one,j)=>i!==j )
    this.setState({news:remainingNew})
  }


  render() {
    return <div className="md:px-24 lg:px-36 flex flex-wrap justify-between gap-5">
      
      {
        this.state.news.map( (article, deleteOne,index) => <Card article={article} key={uuidv4()} deleteOne={ ()=>{this.deleteOne(deleteOne)} }/>)
      }
      </div>;
  }
}

export default ListNews;
