import React, { Component } from 'react'

export class Newsitem extends Component {
  
  render() {
    let {title,desciption,imageUrl,newsUrl} = this.props;
    return (
      <div>
            <div className="card" style= {{width :"18rem"}}>
                  <img src={imageUrl} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{desciption}</p>
                    <a href={newsUrl} target="_blank" rel = "noreferrer" className="btn btn-dark">Read More</a>
                </div>
             </div>
      </div>
    )
  }
}

export default Newsitem