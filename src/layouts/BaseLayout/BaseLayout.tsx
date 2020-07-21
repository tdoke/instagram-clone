import * as React from "react";
import styled from "styled-components";
import Navbar from 'components/Navbar';

const HeaderWrapper = styled.div`
  width: 100vw;
`;
const BodyWrapper = styled.div`
  height: 100vh;
  background-color: #f6f6f6;
`;

export interface BaseLayoutProps {
  body: React.ReactNode;
  header?: React.ReactNode;
}

const BaseLayout: React.SFC<BaseLayoutProps> = ({ header = (<Navbar />), body }) => {
  return (
    <React.Fragment>
      <HeaderWrapper>{header}</HeaderWrapper>
      <BodyWrapper>{body}</BodyWrapper>
    </React.Fragment>
  );
};

export default BaseLayout;
