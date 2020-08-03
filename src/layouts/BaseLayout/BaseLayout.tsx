import * as React from "react";
import styled from "styled-components";
import Navbar from 'components/Navbar';

const HeaderWrapper = styled.div`
  width: 100vw;
  color: ${props => props.theme.color.grey.dark};
  background-color: ${props => props.theme.color.white.base};
`;
const BodyWrapper = styled.div`
  height: 100vh;
  background-color: ${props => props.theme.color.grey.lightest};
  color: ${props => props.theme.color.grey.dark};
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
