import * as React from "react";
import { renderRoutes } from "react-router-config";
import BaseLayout from "layouts/BaseLayout";
import TwoWayLayout from "layouts/TwoWayLayout";
import MenuLinks from "./MenuLinks";

export interface MyProfileProps {}

const MyProfile: React.SFC<MyProfileProps> = (props: any) => {
  const { routes } = props.route;
  return (
    <>
      <BaseLayout
        body={
          <TwoWayLayout left={<MenuLinks />} right={renderRoutes(routes)} />
        }
      />
    </>
  );
};

export default MyProfile;
