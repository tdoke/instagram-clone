import * as React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";

const StyledLabel = styled.div`
  display: inline-block;
  margin-right: 40px;
  font-size: 1rem;
`;

const StyledCol = styled(Col)`
  margin-top: 30px;
`;

const StyledFrameworkName = styled.span`
  font-size: 1.5rem;
`;

const StyledNumberDashboard = styled(Row)`
  margin-top: 10px;
`;

const StyledNumber = styled.span`
  font-size: 1.4rem;
  font-weight: bold;
`;
const StyledText = styled.span`
  font-size: 1rem;
`;

const StyledDescription = styled(Row)`
  font-size: 1rem;
  margin-top: 20px;
`;

export interface HeaderProps {
  image: any;
  name: string;
}

const Header: React.SFC<HeaderProps> = ({ image, name }) => {
  return (
    <StyledCol md={12}>
      <Row justify="space-between" align="top">
        <Col md={4}>
          <img src={image} alt="" />
        </Col>
        <Col md={16}>
          <Row>
            <Col>
              <StyledFrameworkName>{name}</StyledFrameworkName>
            </Col>
          </Row>
          <StyledNumberDashboard justify="space-between">
            <Col>
              <StyledLabel>
                <StyledNumber>34k</StyledNumber>
                {` `}
                <StyledText>watch</StyledText>
              </StyledLabel>
              <StyledLabel>
                <StyledNumber>4k</StyledNumber>
                {` `}
                <StyledText>star</StyledText>
              </StyledLabel>
              <StyledLabel>
                <StyledNumber>5k</StyledNumber>
                {` `}
                <StyledText>fork</StyledText>
              </StyledLabel>
            </Col>
          </StyledNumberDashboard>
          <StyledDescription>
            <Col>
              <p>A JavaScript library for building user interfaces.</p>
              <p>Declarative, Component-Based, Learn Once, Write Anywhere</p>
              <p>
                <a href="https://reactjs.org/">Check out</a>
              </p>
            </Col>
          </StyledDescription>
        </Col>
      </Row>
    </StyledCol>
  );
};

export default Header;
