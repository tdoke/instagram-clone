import * as React from "react";
import BaseLayout from "layouts/BaseLayout";
import TwoWayLayout from "layouts/TwoWayLayout";

export interface MyProfileProps {}

const MyProfile: React.SFC<MyProfileProps> = () => {
  return (
    <>
      <BaseLayout
        body={
          <TwoWayLayout left={<div>left</div>} right={<div>right</div>} />
        }
      />
    </>
  );
};

export default MyProfile;
