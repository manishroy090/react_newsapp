import React, { Component } from 'react'
import Newsitem  from './Newsitem';
export default class News extends Component{
    constructor (){
        super();
        this.state = {
          articles : [],
          loading:false,
          page:1
        }

    }

   async componentDidMount(){
    //this method will run after render
             let url ="https://newsapi.org/v2/top-headlines?country=us&apiKey=d265b71446e24a498e57f7d208f3deb7";
             let data = await  fetch(url);
             let parsedData = await  data.json();
             console.log(parsedData);
             this.setState({articles:parsedData.articles});
           

    }
    handlepreClick =() =>{
       console.log();

    }

    handleNextClick = () =>{
           console.log()
    }

    render(){
        return (
            <div className='container my-3'>
               <h1>Kathmandu - Top Headlines</h1>
                 <div className="row">
                    {this.state.articles.map((element)=>{
                
                         return(
                       <div className="col-md-4">
                         <Newsitem   title={element.title.slice(0,45)} description={element.description!=null ? element.description.slice(0,45) : ''} imgurl={element.urlToImage===null ? "https://s.yimg.com/ny/api/res/1.2/dQ4Ex9yITvmGd7s207OTAg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-01/c1317af0-be84-11ee-bbbb-5ac0dbae4234" : element.urlToImage}  newsurl={element.url}  key={element.url}></Newsitem>
                             </div>
                         )
                    })}


                 </div>
                 <div class="d-flex justify-content-center mt-4">
                 <button type="button" class="btn btn-dark" onClick="{this.handlepreClick}"> &#8592; Previous</button>
                 <button type="button" class="btn btn-dark ml-4" onClick="{this.handleNextClick}">Next&#8594;</button>
                 </div>
            </div>
        )
    }
}