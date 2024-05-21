import React, { Component } from 'react'
import Fastnew from './Fastnew'
export default class News extends Component {
articles= [
  {
  "source": {
  "id": "cnn",
  "name": "CNN"
  },
  "author": "Zachary Cohen",
  "title": "Exclusive: US intel assessment documents Chinese spy balloon incident under Trump - CNN",
  "description": "A US military intelligence report from last year that focused on China's use of high-altitude balloons mentioned sightings in Hawaii and Florida during the Trump presidency, according to an excerpt of the report reviewed by CNN.",
  "url": "https://www.cnn.com/2023/02/06/politics/military-intelligence-report-china-balloon-trump/index.html",
  "urlToImage": "https://media.cnn.com/api/v1/images/stellar/prod/220808101326-donald-trump-0806.jpg?c=16x9&q=w_800,c_fill",
  "publishedAt": "2023-02-07T02:15:00Z",
  "content": "A US military intelligence report from last year that focused on Chinas use of high-altitude balloons mentioned sightings in Hawaii and Florida during the Trump presidency, according to an excerpt of… [+3410 chars]"
      },
      { "source": {
        "id": "bbcnews",
        "name": "BBC News"
        },
        "author": "BBC News",
        "title": "Ukraine war: Zelensky pushes EU for jets but UK says none coming soon",
        "description": "Britain's defence secretary says the UK should focus on other methods of providing air cover to Ukraine.",
        "url": "http://www.bbc.co.uk/news/live/ukpolitics64580204",
        "urlToImage": "https://m.files.bbci.co.uk/modules/bbcmorphnewswafpagemeta/5.3.0/bbc_news_logo.png",
        "publishedAt": "20230209T12:37:33.7744225Z",
        "content": "President Zelenskyhas this week been on a charm offensive tour around Europe as he seeks to convincehis allies to supply Ukraine with fighter jets in its battle with Russia.nIt started with [+1261 chars]"
        },
        {
          "source": {
          "id": "bbcnews",
          "name": "BBC News"
          },
          "author": "BBC News",
          "title": "Orca mothers make 'lifelong sacrifice' for sons",
          "description": "Rearing a son is a lifelong cost for a killer whale mother, a decadeslong study reveals.",
          "url": "http://www.bbc.co.uk/news/scienceenvironment64559047",
          "urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/12A9D/production/_128554467_20110804dke_sj20461c1.jpg",
          "publishedAt": "20230209T07:37:31.2899679Z",
          "content": "A study of orcas in the North Pacific has revealed that mothers make a \"lifelong sacrifice\" for their sons.\r\nRearing a son significantly reduced a female killer whale's chance of reproducing in the f… [+4092 chars]"
          }
          
      
  ]
  constructor(){
    super();
    
    this.state={
      articles:this.articles,
      loading:false
    }
  }
 async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=541fe823de8d4675acb58cc71bde45b9";
    let data = await fetch(url);
    let parsedata= await data.json()
    this.setState({articles:parsedata.articles})


  }
  render() {
    return (
      <>
      <div className='container my-3'>
<h1>NEWS MONKEY</h1>
<div className="row"> 
        {
        this.state.articles.map((element)=>{        //rendering using map
          return<div className='col-md-3' key={element.url}>
          <Fastnew title={element.title}  description={element.description} imageUrl={element.urlToImage} newsUrl={element.url} />
          </div>
    
              
              })}
          
          </div>
          </div>
          
          </>
        )










      
  }
}
      

      

        
 
 

