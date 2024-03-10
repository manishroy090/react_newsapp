import React, { Component } from 'react'
import Newsitem  from './Newsitem';
export default class News extends Component{
    constructor (){
        super();
           this.articles= [
        {
            "source": {
                "id": null,
                "name": "Yahoo Entertainment"
            },
            "author": "Hamza Shaban",
            "title": "Stock market today: Stocks rise after February jobs report - Yahoo Finance",
            "description": "All eyes are on the crucial monthly jobs report that could shift the needle on timing of interest-rate cuts.",
            "url": "https://finance.yahoo.com/news/stock-market-today-stocks-rise-after-february-jobs-report-134312058.html",
            "urlToImage": "https://s.yimg.com/ny/api/res/1.2/dQ4Ex9yITvmGd7s207OTAg--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://s.yimg.com/os/creatr-uploaded-images/2024-01/c1317af0-be84-11ee-bbbb-5ac0dbae4234",
            "publishedAt": "2024-03-08T14:40:20Z",
            "content": "Stocks climbed on Friday after the February jobs report showed an uptick in the unemployment rate, bolstering investor confidence that the Federal Reserve will cut rates following its June meeting.\r\n… [+3347 chars]"
        },{
            "source": {
                "id": null,
                "name": "CNBC"
            },
            "author": "Jeff Cox",
            "title": "U.S. job growth totaled 275,000 in February but unemployment rate rises to 3.9% - CNBC",
            "description": "Nonfarm payrolls were expected to increase by 198,000 in February, according to the Dow Jones consensus estimate.",
            "url": "https://www.cnbc.com/2024/03/08/jobs-report-february-2024-us-job-growth-totaled-275000.html",
            "urlToImage": "https://image.cnbcfm.com/api/v1/image/107363787-17061085342022-09-01t184946z_946092228_rc2f8w90zj6x_rtrmadp_0_usa-economy.jpeg?v=1706108566&w=1920&h=1080",
            "publishedAt": "2024-03-08T13:31:19Z",
            "content": "Job creation topped expectations in February, but the unemployment rate moved higher and employment growth from the previous two months wasn't near as hot as initially reported.\r\nNonfarm payrolls inc… [+5239 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "",
            "title": "Anthony Joshua vs. Francis Ngannou: Fight predictions, odds, undercard, preview, expert picks, start time - CBS Sports",
            "description": "A former unified heavyweight champion takes on a former UFC heavyweight champ on Friday night in Saudi Arabia",
            "url": "https://www.cbssports.com/boxing/news/anthony-joshua-vs-francis-ngannou-fight-predictions-odds-undercard-preview-expert-picks-start-time/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2024/03/07/a74bf053-87d7-4d36-8f59-c10a0506ec0e/thumbnail/1200x675/7e876136f8ac94ecdd2eda6ce928cfd4/joshua-ngannou-presser-2.jpg",
            "publishedAt": "2024-03-08T13:30:00Z",
            "content": "Of all the unlikely developments in boxing over the past few decades, the story of Francis Ngannou just might take the cake. \r\nNgannou (0-1 in boxing, 17-3 in MMA), a former UFC heavyweight champion,… [+11586 chars]"
        },
          {
            "source": {
                "id": null,
                "name": "The Ringer"
            },
            "author": "Keith Phipps",
            "title": "The Eight Biggest Story Lines Heading Into the 2024 Oscars - The Ringer",
            "description": "Is ‘Oppenheimer’ invulnerable? What are the most likely upsets? And why is everyone being so weird about Bradley Cooper?",
            "url": "https://www.theringer.com/oscars/2024/3/8/24093916/oscars-2024-predictions-story-lines-nominations-upsets-best-picture",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/iIIOKlB6OMudk31fEElx6mdW0BU=/0x86:1200x714/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/25324709/OscarStorylines_Getty_AppleStudios_Orion_Universal_WB_FoxSearchlight_Ringer.jpg",
            "publishedAt": "2024-03-08T13:17:50Z",
            "content": "Traditionally, the Oscars race begins in the fall, when one contender debuts after the other, resulting in a pile-up of ambitious films vying to compete at the following springs Academy Awards. This … [+9435 chars]"
        },
          {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Haley Britzky",
            "title": "US military lifts 3-month grounding of V-22 Osprey fleet after deadly crash - CNN",
            "description": "The US military has lifted the grounding guidance for the military’s V-22 Osprey fleet, roughly three months after the entire fleet was grounded following a deadly Air Force Special Operations crash off the coast of Japan. The Air Force, Marine Corps and Navy…",
            "url": "https://www.cnn.com/2024/03/08/politics/v-22-osprey/index.html",
            "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/gettyimages-1674088694-restricted.jpg?c=16x9&q=w_800,c_fill",
            "publishedAt": "2024-03-08T13:06:00Z",
            "content": "The US military has lifted the grounding guidance for the militarys V-22 Osprey fleet, roughly three months after the entire fleet was grounded following a deadly Air Force Special Operations crash o… [+5488 chars]"
        },
         {
            "source": {
                "id": null,
                "name": "BBC News"
            },
            "author": null,
            "title": "New Yorkers lukewarm on National Guard deployment to deter subway crime - BBC.com",
            "description": "Some commuters told the BBC it was a good idea. Others expressed concern it might lead to profiling.",
            "url": "https://www.bbc.com/news/world-us-canada-68508331",
            "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/FA42/production/_132866046_gettyimages-2059246986.jpg",
            "publishedAt": "2024-03-08T12:43:31Z",
            "content": null
        }
    ]

        this.state = {
          articles : this.articles,
          loading:false
        }

    }
    render(){
        return (
            <div className='container my-3'>
               <h1>Kathmandu - Top Headlines</h1>
                 <div className="row">
                    {this.state.articles.map((element)=>{

                         return(
                       <div className="col-md-4">
                         <Newsitem   title={element.title} description={element.description} imgurl={element.urlToImage}  newsurl={element.url}  key={element.url}></Newsitem>
                             </div>
                         )
                    })}


                 </div>
            </div>
        )
    }
}