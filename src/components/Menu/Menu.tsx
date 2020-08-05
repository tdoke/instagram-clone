import * as React from "react";
import { Menu as AntMenu } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
import style from 'styled-components';
import { history } from "routes/history";

const S = {
  AntMenu: style(AntMenu)`
    position: relative;
    z-index: 8888;
`};
const { SubMenu, Item } = S.AntMenu;

export interface MenuProps {}

const Menu: React.SFC<MenuProps> = () => {
  return (
    <>
      <S.AntMenu
        onClick={( { key }: any) => {
          const path = key === "1" 
            ? '/user/profile/edit'
            : key === "2"
            ? '/post/new'
            : "";
          history.push(path);
        }}
        style={{ width: 256 }}
        mode="inline"
      >
        <SubMenu key="sub1" icon={<AppstoreOutlined />} title="Settings">
          <Item key="1">My Profile</Item>
          <Item key="2">Add a post</Item>
          <Item key="3">Switch User</Item>
        </SubMenu>
      </S.AntMenu>
    </>
  );
};

export default Menu;
