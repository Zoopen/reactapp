import React from "react";
import { TabBar } from "antd-mobile";
import './footer.css'
import { withRouter } from "react-router-dom";

class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {location, history} = this.props;
    return (
      <div className="footer">
        <TabBar
          unselectedTintColor="#949494"
          tintColor="#33A3F4"
          barTintColor="white"
        >
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat",
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat",
                }}
              />
            }
            title="代办"
            key="todo"
            selected={location.pathname === "/todo"}
            onPress={() => {
              history.replace("/todo")
            }}
          ></TabBar.Item>
          <TabBar.Item
            icon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat",
                }}
              />
            }
            selectedIcon={
              <div
                style={{
                  width: "22px",
                  height: "22px",
                  background:
                    "url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat",
                }}
              />
            }
            title="笔记"
            key="note"
            selected={location.pathname === "/note"}
            onPress={() => {
              history.replace("/note")
            }}
          ></TabBar.Item>
        </TabBar>
      </div>
    );
  }
}


export default withRouter(Footer);