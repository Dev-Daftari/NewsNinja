// import React, { Component } from "react";

const NewsItem = (props) => {
    let {title,description,imgUrl, newsUrl,author,date,source} = props;
    return (
      <div className="my-3">
        <div className="card">
          <img src={!imgUrl?"https://images.unsplash.com/photo-1656173460244-faad38c026e6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8NnNNVmpUTFNrZVF8fGVufDB8fHx8&auto=format&fit=crop&w=500&q=60":imgUrl} className="card-img-top" alt="..." />
          <div className="card-body text-center">
            <h5 className="card-title">{title}</h5>
            <span className="badge text-bg-primary">{source}</span>
            <p className="card-text">
              {description}
            </p>
            <p className="card-text">
                <small className="text-muted">
                    By {author?author:"Unknown"} on {new Date(date).toGMTString()}
                     </small>
            </p>
            <a href={newsUrl} target = "_blank" rel="noreferrer" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
}

export default NewsItem;
