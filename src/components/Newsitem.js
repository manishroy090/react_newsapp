import React, { Component } from 'react'
export default class Newsitem extends Component{
    render(){
        let {title,description,imgurl,newsurl} = this.props;
        return(
            <div className='container'>

                <div className="card" style={{width:"18rem"}}>
                 <img className="card-img-top"  src={imgurl} alt="Card image cap"/>
                <div className="card-body">
                <h5 classname="card-title">{title}</h5>
                <p classname="card-text">{description}</p>
                <a href={newsurl} className="btn btn-primary">Go somewhere</a>
                </div>
                </div>
            </div>
        )
    }
}