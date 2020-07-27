import * as React from "react";
import BaseLayout from "layouts/BaseLayout";
import { images, frameworks, Framework } from "framework-logos";
import styled from "styled-components";
import { Row } from "antd";
import galleryImages from "gallery-images";
import Posts from "./Posts";
import Header from "./Header";

const StyledRow = styled(Row)`
  padding: 10px;
`;

const StyledSeperator = styled.div`
  &:after {
    display: block;
    margin: 0 auto;
    height: 1px;
    background-color: #d7d7d7;
    content: "";
    width: 56.5%;
  }
`;

const StyledPostGallery = styled.div`
  margin-top: 1rem;
`;

const Profile = (props: any) => {
  const { profileName } = props.match.params;
  const selectedFramework: Framework | undefined = frameworks.find(
    fmk => fmk.name === profileName
  ) || { name: "", year: 0, img: "" };

  return (
    <BaseLayout
      body={
        <>
          <StyledRow justify="center">
            <Header
              image={images[selectedFramework.img]}
              name={selectedFramework.name}
            />
          </StyledRow>
          <StyledSeperator />
          <StyledPostGallery>
            <Posts images={galleryImages} />
          </StyledPostGallery>
        </>
      }
    />
  );
};

export default Profile;
