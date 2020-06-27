import React from "react";
import Comment from "./Comment";
import { Row, Button, Divider } from "antd";
import { CommentOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import "./CommentList.css";
import CreateComment from "./CreateComment";

function CommentList(props) {
  const commentsList = props.commentsList;

  return (
    <div
      style={{
        width: "100%",
      }}
    >
      <Row justify="center" style={{ width: "100%" }}>
        <Link to="#" style={{ color: "#776770" }}>
          <div className="comment-button">
            <CommentOutlined />
            &nbsp;Comment
          </div>
        </Link>
      </Row>
      <Divider style={{ margin: "0 0 4px 0", backgroundColor: "#DADDE1" }} />
      {commentsList.map((comment) => (
        <Comment
          key={comment.id}
          writer={comment.writer}
          content={comment.content}
        />
      ))}
      <CreateComment ownerPic={props.ownerPicture} />
    </div>
  );
}

export default CommentList;
