import * as React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";

const Container = styled.div`
  margin-top: 4rem;
  background-color: ${props => props.theme.color.white.base};
  height: 85vh;
  border: 1px solid ${props => props.theme.color.grey.base};
`;
const LeftLayout = styled.div`
  border-right: 1px solid ${props => props.theme.color.grey.base};
  height: 85vh;
`;
const RightLayout = styled.div`
  height: 85vh;
`;

export interface TwoWayLayoutProps {
  left: React.ReactNode;
  right: React.ReactNode;
}

const TwoWayLayout: React.SFC<TwoWayLayoutProps> = ({ left, right }) => {
  return (
    <Row justify="center">
      <Col md={15}>
        <Container>
          <Row>
            <Col md={7}>
              <LeftLayout>{left}</LeftLayout>
            </Col>
            <Col>
              <RightLayout>{right}</RightLayout>
            </Col>
          </Row>
        </Container>
      </Col>
    </Row>
  );
};

export default TwoWayLayout;
