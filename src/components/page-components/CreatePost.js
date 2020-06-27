import React from "react";
import { Card, Row, Col, Avatar, Button, Divider } from "antd";
import pictureButton from "../../resources/picture-button.png";

function CreatePost(props) {
  const ownerName = props.ownerName;
  const ownerPicture = props.ownerPicture;

  return (
    <Card
      size="small"
      title="Create post"
      headStyle={{
        color: "#4b4f56",
        textAlign: "start",
        backgroundColor: "#f5f6f7",
        borderRadius: "3px",
      }}
      style={{ width: 500 }}
    >
      <Row>
        <Col>
          <Avatar size={40} src={ownerPicture} />
        </Col>
        <Col>
          <textarea
            style={{
              width: "350px",
              height: "35px",
              resize: "none",
              border: "0",
              margin: "10px 48px 13px 12px",
              padding: "0",
            }}
            placeholder={`What's on your mind, ${ownerName}?`}
          />
        </Col>
      </Row>
      <Divider style={{ margin: "10px 0 8px 0", backgroundColor: "#E9EBEE" }} />
      <Row>
        <Col>
          <Button
            style={{ backgroundColor: "#F5F6F7", border: "0" }}
            shape="round"
            icon={
              <img
                style={{ width: "20px", height: "20px" }}
                alt="picture-button"
                src={pictureButton}
              />
            }
            size={138}
          >
            &nbsp;&nbsp;Picture/Video
          </Button>
        </Col>
      </Row>
    </Card>
  );
}

export default CreatePost;
