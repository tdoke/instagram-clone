import * as React from "react";
import { history } from "routes/history";
import styled from "styled-components";

const StyledOL = styled.ol`
  list-style: none;

  li {
    a {
      display: block;
      text-decoration: none;
      padding: 16px 16px;
      color: ${props => props.theme.color.grey.dark};

      &:link,
      &:visited {
        background-color: #fff;
        transition: background-color 0.2s;
      }
      &:hover,
      &:active
      {
        background-color: ${props => props.theme.color.grey.lightest};
        border-left: 4px solid ${props => props.theme.color.grey.light};
      }
    }
  }
`;

export interface MenuLinksProps {}

const MenuLinks: React.SFC<MenuLinksProps> = () => {
  return (
    <StyledOL>
      <li>
        <a href="#" onClick={() => history.push("/user/profile/edit/details")}>
          Edit Profile
        </a>
      </li>
      <li>
        <a href="#" onClick={() => history.push("/user/profile/edit/pwd")}>
          Change Password
        </a>
      </li>
    </StyledOL>
  );
};

export default MenuLinks;
