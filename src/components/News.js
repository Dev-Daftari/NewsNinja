import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  // console.log(props.country);
  const capitalise = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };
  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page}&pageSize=${props.pageSize}`;
    setLoading(true);
    let data = await fetch(url);
    props.setProgress(40);
    let parsedData = await data.json();
    props.setProgress(70);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    props.setProgress(100);
};


  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apikey}&page=${page+1}&pageSize=${props.pageSize}`;
    setPage(page+1);
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };
  useEffect(() => {
    props.category !== ''? document.title = `NewsNinja - ${capitalise(props.category)}` : document.title = `NewsNinja - Your Daily Dose Of News`;
    updateNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.country]);

  // const HandleNext = async () => {
  //   setPage(page + 1);
  //   updateNews();
  // };

  // const HandlePrev = async () => {
  //   setPage(page - 1);
  //   updateNews();
  // };

  

  return (
    <>
      <h1 className="text-center" style={{ marginTop: "65px" }}>
        {props.category === "" ? "NewsNinja" : capitalise(props.category)} - Top
        Headlines
      </h1>
      {loading && <Spinner />} 
      <InfiniteScroll
          dataLength={articles.length}
          next={fetchMoreData}
          hasMore={articles.length !== totalResults}
          loader={<Spinner/>}
        >
          <div className="container">
      <div className="row">   
        {articles
            .filter((element) => {
              if (props.search === "") return element;
              else {
                return Object.values(element)
                  .join(" ")
                  .toLowerCase()
                  .includes(props.search.toLowerCase().trim());
              }
            })
            .map((element) => {
              return (
                <div className="col-md-4" key={element.url}>
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imgUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              );
            })}
      </div>
      </div>
      </InfiniteScroll>
      {/* <div className="container d-flex justify-content-between"> // Previous , Next Buttons
        <button
          disabled={page <= 1}
          type="button"
          className="btn btn-dark"
          onClick={HandlePrev}
        >
          &larr; Previous
        </button>
        <button
          disabled={page + 1 > Math.ceil(totalResults / props.pageSize)}
          type="button"
          className="btn btn-dark"
          id="nxt"
          onClick={HandleNext}
        >
          Next &rarr;
        </button>
      </div> */}
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 9,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
