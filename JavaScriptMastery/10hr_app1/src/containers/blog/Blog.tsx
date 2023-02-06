import React from "react";
import { Article } from "../../components/article/Article";
import blog01 from "../../assets/blog01.png";
import blog02 from "../../assets/blog02.png";
import blog03 from "../../assets/blog03.png";
import blog04 from "../../assets/blog04.png";
import blog05 from "../../assets/blog05.png";
import "./blog.css";

const Blog = () => {
  return (
    <div className="gpt3__blog section__padding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it.
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container">
          <div className="gpt3__blog-container_groupA">
            <Article
              date="Sep 26, 2022"
              text="GPT3 and Open AI is the future. Let us explore how it is."
              imgUrl={blog01}
            />
          </div>
          <div className="gpt3__blog-container_groupB">
            <Article
              date="Sep 26, 2022"
              text="GPT3 and Open AI is the future. Let us explore how it is."
              imgUrl={blog02}
            />
            <Article
              date="Sep 26, 2022"
              text="GPT3 and Open AI is the future. Let us explore how it is."
              imgUrl={blog03}
            />
            <Article
              date="Sep 26, 2022"
              text="GPT3 and Open AI is the future. Let us explore how it is."
              imgUrl={blog04}
            />
            <Article
              date="Sep 26, 2022"
              text="GPT3 and Open AI is the future. Let us explore how it is."
              imgUrl={blog05}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
