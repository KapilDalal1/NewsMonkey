import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {
  constructor() {
    super();
    this.state={
    article : [],
    loading : false
  }
}
   

  async componentDidMount(element){
    
    let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=799ef0a026c8409893e84d02bc528744"
    let data = await fetch(url);
    let parsedData = await data.json()
    console.log(parsedData)
    this.setState({article: parsedData.article})
}
  render() {
    return (
      <div className="container my-3">
        <h2>NewsMonkey</h2>
        <div className="row">
        {this.state.article.map((element) =>{
         return <div className="col-md-4" key={element.url}>
          <Newsitem title={element.title?element.title:""} desciption = {element.desciption?element.description:""} imageUrl = {element.urlToImage} newsUrl ={element.url}/>
        </div>
        })}
        </div>
        </div>
    )
  }
}

export default News