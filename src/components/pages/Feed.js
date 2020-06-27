import React, { useState, useEffect } from "react";
import Narbar from "../page-components/Narbar";
import PostList from "../page-components/PostList";
import axios from "axios";
import { Skeleton } from "antd";

function Feed() {
  const [postsList, setPostsList] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "http://www.mocky.io/v2/5e93e9253000004f00156cc5?mocky-delay=2000ms"
      );

      console.log(response);

      setIsLoaded(true);
      setPostsList(response.data);
    };

    fetchData();
  }, []);

  function renderPostsList() {
    let temp = (
      <div style={{ width: "500px", margin: "12px auto 0 auto" }}>
        <Skeleton
          avatar
          active
          paragraph={{ rows: Math.round(Math.random() * 10) }}
        />
        <Skeleton
          avatar
          active
          paragraph={{ rows: Math.round(Math.random() * 10) }}
        />
        <Skeleton
          avatar
          active
          paragraph={{ rows: Math.round(Math.random() * 10) }}
        />
      </div>
    );

    if (isLoaded) {
      temp = <PostList postsList={postsList} />;
    }

    return temp;
  }

  return (
    <div style={{ minHeight: "100%" }}>
      <Narbar />
      {renderPostsList()}
    </div>
  );
}

export default Feed;
