import { NavBar, Icon } from "antd-mobile";
import './Header.css'

export default function Header() {
  return (
    <NavBar
      className="nav"
      mode="light"
      onLeftClick={() => console.log("onLeftClick")}
      rightContent={[
        <Icon key="0" type="ellipsis" />,
      ]}
    >
      Todo
    </NavBar>
  );
}
