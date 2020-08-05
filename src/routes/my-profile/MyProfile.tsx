import * as React from "react";
import BaseLayout from "layouts/BaseLayout";

export interface MyProfileProps {}

const MyProfile: React.SFC<MyProfileProps> = () => {
  return (
    <>
      <BaseLayout body={<div>MYProfile</div>} />
    </>
  );
};

export default MyProfile;
