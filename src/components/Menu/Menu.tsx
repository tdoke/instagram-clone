import * as React from "react";
import { Menu as AntMenu } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";

const { SubMenu, Item } = AntMenu;

export interface MenuProps {}

const Menu: React.SFC<MenuProps> = () => {
  return (
    <>
      <AntMenu
        onClick={() => {
          console.log("clicked on Menu Item");
        }}
        style={{ width: 256 }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
      >
        <SubMenu key="sub2" icon={<AppstoreOutlined />} title="Settings">
          <Item key="5">Add a post</Item>
          <Item key="6">Switch User</Item>
        </SubMenu>
      </AntMenu>
    </>
  );
};

export default Menu;
