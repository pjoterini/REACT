import { useEffect, useState } from "react";

export const UseEffect = () => {
  let [active, setActive] = useState(false);

  useEffect(() => {
    return () => {
      console.log("cleanup function ran");
    };
  }, []);

  let button = (
    <button
      className="btn"
      style={{
        backgroundColor: active ? "white" : "black",
      }}
      onClick={() => {
        setActive((prev) => !prev);
      }}
    >
      Rerender
    </button>
  );

  // second example

  const [category, setCategory] = useState("posts");
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/${category}`)
      .then((res) => res.json())
      .then((json) => {
        // console.log(json);
        setData(json);
      });
  }, [category]);

  let posts = data.slice(0, 5).map((instance) => {
    return (
      <div key={instance.id}>{category === "posts" ? instance.title : ""}</div>
    );
  });
  let users = data.slice(0, 5).map((instance) => {
    return (
      <div key={instance.id}>{category === "users" ? instance.name : ""}</div>
    );
  });
  let comments = data.slice(0, 5).map((instance) => {
    return (
      <div key={instance.id}>
        {category === "comments" ? instance.name : ""}
      </div>
    );
  });

  return (
    <div className="hook">
      <div className="df">
        <p>useEffect</p>
        {button}
      </div>
      {/* second example */}
      <div>
        <button className="btn" onClick={() => setCategory("posts")}>
          posts
        </button>
        <button className="btn" onClick={() => setCategory("users")}>
          users
        </button>
        <button className="btn" onClick={() => setCategory("comments")}>
          comments
        </button>
        {category}
      </div>
      <div>
        {category === "posts" && posts}
        {category === "users" && users}
        {category === "comments" && comments}

        {/* {data.slice(0, 10).map((instance) => {
          return (
            <div key={instance.id}>
              {category === "posts" ? instance.title : ""}
              {category === "users" ? instance.name : ""}
              {category === "comments" ? instance.name : ""}
            </div>
          );
        })} */}
      </div>
    </div>
  );
};
