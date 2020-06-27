import React from "react";
import CreatePost from "./CreatePost";
import Post from "./Post";
import { Row, Col } from "antd";

function PostList(props) {
  const ownerName = "Nuttachat Kulthammanit";
  const ownerPicture =
    "https://scontent.fbkk22-4.fna.fbcdn.net/v/t1.0-1/cp0/c0.0.40.40a/p40x40/71561886_1609849782479256_2419419055669641216_n.jpg?_nc_cat=111&_nc_sid=dbb9e7&_nc_eui2=AeEYlVBHsRFEbq4NZ0oBnzCivfkHy8Or-D69-QfLw6v4Pv5jxDuZ6xkmQTm2LlLC0NbT_Lul-opFcW7eFar9xQMg&_nc_ohc=8E3UiSB564IAX8jEPyr&_nc_ht=scontent.fbkk22-4.fna&oh=e4b79feeb1c3f76e02bd4d3156bd1030&oe=5EB806FA";

  const postsList = props.postsList;

  return (
    <Row style={{ paddingTop: "12px" }} justify="center">
      <Col>
        <Row>
          <CreatePost
            ownerName={ownerName.split(" ")[0]}
            ownerPicture={ownerPicture}
          />
        </Row>
        {postsList.map((post) => (
          <Row key={post.id}>
            <Post
              isMine={post.isMine}
              author={post.author}
              dateTime={post.dateTime}
              caption={post.caption}
              postPicture={post.postPicture}
              ownerPicture={ownerPicture}
              commentsList={post.commentsList}
            />
          </Row>
        ))}
      </Col>
    </Row>
  );
}

export default PostList;
