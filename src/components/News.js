import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {
  static defaultProps = {
    country : 'in',
    pageSize : 8,
    category : 'technology'
  }

  static propTypes = {
    country : PropTypes.string,
    category : PropTypes.string

  }



  constructor() {
    super();
    this.state={
    article : [],
    page : 1,
    loading : false,
  }
}
   

  async componentDidMount(element){
    
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=799ef0a026c8409893e84d02bc528744&page=1&pageSize=${this.props.pageSize}`
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({article: parsedData.articles, totalResults: parsedData.totalResults});
  }

  handlePrevious = async () =>{
    let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=799ef0a026c8409893e84d02bc528744&page=${this.state.page-1}&pageSize=${this.props.pageSize}`
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData)
      this.setState({
        page : this.state.page - 1,
        article : parsedData.articles,
        loading: false,
      })
  }
  
      handleNext = async () =>{
        if(!(this.state.page > Math.ceil(this.state.totalResults/this.props.pageSize))){
       }
      let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=799ef0a026c8409893e84d02bc528744&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
      this.setState({loading:true})
      let data = await fetch(url);
      let parsedData = await data.json();
        this.setState({
          page : this.state.page + 1,
          article : parsedData.articles,
          loading : false,
        })
      
      }
    
        
  render() {
   
    return (
      <div className="container my-3">
        <h1 className='text-center'>NewsMonkey</h1>
        {this.state.loading && <Spinner/>}
        <div className="row">
        {!this.state.loading && this.state.article.map((element) =>{
         return <div className="col-md-4" key={element.url}>
          <Newsitem title={element.title?element.title:""} desciption = {element.desciption?element.description:""} imageUrl = {element.urlToImage} newsUrl ={element.url} author={element.author} date={element.publishedAt} source = {element.source.name}/>
        </div>
        })}
        </div>
        <div className="container d-flex justify-content-between">
        <button type="button" disabled={this.state.page<=1} className="btn btn-dark" onClick={this.handlePrevious}>Previous Page</button>
        <button type="button" disabled={this.state.page > Math.ceil(this.state.totalResults/this.props.pageSize)} className="btn btn-dark" onClick={this.handleNext}>Next Page</button>
        </div>
        </div>
    )
  }
}

export default News