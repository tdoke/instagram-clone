import * as React from "react";
import BaseLayout from "layouts/BaseLayout";

export interface AddPostProps {}

const AddPost: React.SFC<AddPostProps> = () => {
  return (
    <>
      <BaseLayout body={<div>Add Post</div>} />
    </>
  );
};

export default AddPost;
