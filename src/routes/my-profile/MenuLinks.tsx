import * as React from "react";
import { history } from "routes/history";

export interface MenuLinksProps {}

const MenuLinks: React.SFC<MenuLinksProps> = () => {
  return (
    <ol>
      <li>
        <a href="#" onClick={() => history.push("/user/profile/edit/details")}>
          Edit Profile
        </a>
      </li>
      <li>
        <a href="#" onClick={() => history.push("/user/profile/edit/pwd")}>Change Password</a>
      </li>
    </ol>
  );
};

export default MenuLinks;
