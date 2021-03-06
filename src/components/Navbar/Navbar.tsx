import * as React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";
import instaImg from "./insta.png";
import Search from "components/Search/";
import Menu from "components/Menu";

const StyledRow = styled(Row)`
  height: 80px;
  border-bottom: 1px solid ${props => props.theme.color.grey.base};
`;
const StyledInstaImg = styled.div`
  background-image: url(${instaImg});
  background-size: cover;
  height: 60px;
  width: 200px;
  margin: 16px;
`;
const StyledSearchContainer = styled.div`
  margin-top: 25px;
`;
const StyledMenuContainer = styled.div`
  margin-top: 10px;
`;

export interface NavbarProps {}

const Navbar: React.SFC<NavbarProps> = () => {
  return (
    <React.Fragment>
      <StyledRow justify="center" align="middle">
        <Col md={16}>
          <Row justify="space-between" gutter={16}>
            <Col md={8}>
              <StyledInstaImg />
            </Col>
            <Col md={8}>
              <StyledSearchContainer>
                <Search />
              </StyledSearchContainer>
            </Col>
            <Col md={8}>
              <Row justify="end" align="middle">
                <Col>
                  <StyledMenuContainer>
                    <Menu />
                  </StyledMenuContainer>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </StyledRow>
    </React.Fragment>
  );
};

export default Navbar;
