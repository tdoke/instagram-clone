import * as React from "react";
import { renderRoutes } from "react-router-config";
import BaseLayout from "layouts/BaseLayout";
import { images, frameworks, Framework } from "framework-logos";
import styled from "styled-components";
import { Row } from "antd";
import galleryImages from "gallery-images";
import Header from "./Header";

const S = {
  Row: styled(Row)`
    padding: 10px;
  `,
  Seperator: styled.div`
    &:after {
      display: block;
      margin: 0 auto;
      height: 1px;
      background-color: #d7d7d7;
      content: "";
      width: 56.5%;
    }
  `,
  PostGallery: styled.div`
    margin-top: 1rem;
  `
};

const Profile = (props: any) => {
  const { profileName } = props.match.params;
  const { routes } = props.route;
  const selectedFramework: Framework | undefined = frameworks.find(
    fmk => fmk.name === profileName
  ) || { name: "", year: 0, img: "" };

  return (
    <BaseLayout
      body={
        <>
          <S.Row justify="center">
            <Header
              image={images[selectedFramework.img]}
              name={selectedFramework.name}
            />
          </S.Row>
          <S.Seperator />
          <S.PostGallery>
            {renderRoutes(routes, { images: galleryImages })}
          </S.PostGallery>
        </>
      }
    />
  );
};

export default Profile;
