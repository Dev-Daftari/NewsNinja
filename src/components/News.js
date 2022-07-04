import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
    };
  }

  async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=c7304b2ad27d4d4ab13653b6a7ab0725";
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles})
  }

  render() {
    return (
      <div className="container my-3">
        <h2>NewNinja - Headlines for today</h2>
        <div className="row">
        {this.state.articles.map((element)=>{

          return <div className="col md-4" key = {element.url}>
            <NewsItem
              title={element.title}
              description={element.description}
              imgUrl={element.urlToImage}
              newsUrl={element.url}
            />
          </div>
        })}
          
        </div>
      </div>
    );
  }
}

export default News;
