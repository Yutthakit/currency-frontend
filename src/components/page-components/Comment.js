import React from "react";
import { Row, Col, Avatar } from "antd";
import { EllipsisOutlined } from "@ant-design/icons";
import "./Comment.css";
import { Link } from "react-router-dom";

function Comment(props) {
  return (
    <Row style={{ margin: "10px 12px 10px 12px" }}>
      <Col>
        <div
          style={{
            display: "flex",
            alignItems: "start",
            width: "38px",
            height: "32px",
          }}
        >
          <Avatar size={32} src={props.writer.picture} />
        </div>
      </Col>
      <Col>
        <div className="comment-layout">
          <Link to="#" style={{ color: "#385898" }}>
            <strong>{props.writer.name}</strong>
          </Link>
          &nbsp;{props.content}
        </div>
      </Col>
      <Col>
        <EllipsisOutlined />
      </Col>
    </Row>
  );
}

export default Comment;
