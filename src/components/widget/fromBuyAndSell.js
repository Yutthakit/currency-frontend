import React from "react";
import { Modal } from "antd";

class FromBuyAndSell extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            
        }

    }
  // handleOk = e => {
  //   console.log(e);
  //   this.setState({
  //     visible: false,
  //   });
  // };

  // handleCancel = e => {
  //   console.log(e);
  //   this.setState({
  //     visible: false,
  //   });
  // };

  render() {
    return (
      <>
        <Modal
          title="Basic Modal"
          visible={this.state.visible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Form
            {...layout}
            name="basic"
            initialValues={{
              remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          > 
            <div>
                {{ }}
            </div>
            <Form.Item
              label="invest"
              name="invest"
              rules={[
                {
                  required: true,
                  initialValue: Number,
                  message: "Please input number your value for invest!",
                },
              ]}
            >
              <Input />
            </Form.Item>
            <Form.Item {...tailLayout}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
          ]}
        />
        {/* </Modal> */}
      </>
    );
  }
}

export default FromBuyAndSell;
