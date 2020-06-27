import React from "react";
import "./Comment.css";
import { Row, Col, Avatar } from "antd";

function CreateComment(props) {
  const ownerPic = props.ownerPic;

  return (
    <div>
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
            <Avatar size={32} src={ownerPic} />
          </div>
        </Col>
        <Col style={{ width: "auto", paddingLeft: "0" }}>
          <Row justify="center">
            <div
              className="comment-layout"
              style={{ border: "1px solid #ccd0d5" }}
            >
              <input
                type="text"
                placeholder="Write a comment ..."
                style={{
                  border: "none",
                  resize: "none",
                  backgroundColor: "#F2F3F5",
                  width: "414px",
                  outline: "none",
                }}
              />
            </div>
          </Row>
        </Col>
      </Row>
    </div>
  );
}

export default CreateComment;
