import React from "react";
import "./article.css";

interface ArticleProps {
  imgUrl: string;
  date: string;
  text: string;
}

export const Article: React.FC<ArticleProps> = ({ imgUrl, date, text }) => {
  function logger() {
    console.log(imgUrl);
  }

  return (
    <div className="gpt3__blog-container_article">
      <div className="gpt3__blog-container_article-image">
        <img
          src={imgUrl}
          alt="blog image"
          onClick={() => console.log(imgUrl)}
        />
      </div>
      <div className="gpt3__blog-container_article-content">
        <div>
          <p>{date}</p>
          <h3>{text}</h3>
        </div>
        <p>Read Full Article</p>
      </div>
    </div>
  );
};
