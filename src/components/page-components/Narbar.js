import React from "react";
import { Row, Col, Avatar, Menu, Dropdown } from "antd";
import FakebookLogo from "../../resources/logo-fakebook.png";
import { Link } from "react-router-dom";

function Narbar() {
  const menu = (
    <Menu>
      <Menu.Item>
        <Link to="#">ดูรายชื่อเพื่อน</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="#">เปลี่ยนรหัสผ่าน</Link>
      </Menu.Item>
      <Menu.Item>
        <Link to="#">ออกจากระบบ</Link>
      </Menu.Item>
    </Menu>
  );

  const ownerName = "Nuttachai Kulthammanit";
  const ownerPicture =
    "https://scontent.fbkk22-4.fna.fbcdn.net/v/t1.0-1/cp0/c0.0.40.40a/p40x40/71561886_1609849782479256_2419419055669641216_n.jpg?_nc_cat=111&_nc_sid=dbb9e7&_nc_eui2=AeEYlVBHsRFEbq4NZ0oBnzCivfkHy8Or-D69-QfLw6v4Pv5jxDuZ6xkmQTm2LlLC0NbT_Lul-opFcW7eFar9xQMg&_nc_ohc=8E3UiSB564IAX8jEPyr&_nc_ht=scontent.fbkk22-4.fna&oh=e4b79feeb1c3f76e02bd4d3156bd1030&oe=5EB806FA";

  return (
    <div style={{ height: "42px", backgroundColor: "#4267b2" }}>
      <Row>
        <Col xs={0} sm={0} md={0} lg={2} xl={2} xxl={2}></Col>
        <Col xs={4} sm={6} md={6} lg={6} xl={6} xxl={6}>
          <Link to="/">
            <img
              alt="small-fakebook"
              src={FakebookLogo}
              style={{ height: "42px" }}
            />
          </Link>
        </Col>
        <Col xs={12} sm={12} md={12} lg={10} xl={10} xxl={10}></Col>
        <Col xs={8} sm={6} md={6} lg={6} xl={6} xxl={6}>
          <Row
            style={{ height: "100%", color: "white" }}
            justify="center"
            align="middle"
          >
            <Col xs={4} sm={4} md={4} lg={4} xl={2} xxl={3}>
              <Avatar size={24} src={ownerPicture} />
            </Col>
            <Col xs={0} sm={1} md={1} lg={1} xl={1} xxl={0}></Col>
            <Col xs={14} sm={16} md={19} lg={19} xl={17} xxl={17}>
              <Row>
                <Dropdown overlay={menu} placement="bottomLeft">
                  <strong style={{ fontSize: "12px" }}>
                    <Link style={{ color: "white" }} to="#">
                      {ownerName}
                    </Link>
                  </strong>
                </Dropdown>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col xs={0} sm={0} md={0} lg={4}></Col>
      </Row>
    </div>
  );
}

export default Narbar;
