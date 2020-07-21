import * as React from "react";
import BaseLayout from "layouts/BaseLayout";
import { images, frameworks, Framework } from "framework-logos";
import styled from "styled-components";
import { Row, Col } from "antd";

const StyledRow = styled(Row)`
  height: 200px;
  padding: 10px;
`;

const StyledCol = styled(Col)`
  margin-top: 30px;
`;

const StyledLabel = styled.div`
 display: inline-block;
 margin-right: 40px;
 font-size: 1rem;
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

const Profile = (props: any) => {
  const { profileName } = props.match.params;
  const selectedFramework: Framework | undefined = frameworks.find(
    fmk => fmk.name === profileName
  ) || { name: "", year: 0, img: "" };

  return (
    <BaseLayout
      body={
        <div>
          <StyledRow justify="center">
            <StyledCol md={12}>
              <Row justify="space-between" align="top">
                <Col md={4}>
                  <img src={images[selectedFramework.img]} />
                </Col>
                <Col md={16}>
                  <Row>
                    <Col><StyledFrameworkName>{selectedFramework.name}</StyledFrameworkName></Col>
                  </Row>
                  <StyledNumberDashboard justify="space-between">
                    <Col>
                      <StyledLabel><StyledNumber>34k</StyledNumber>{` `}<StyledText>watch</StyledText></StyledLabel>
                      <StyledLabel><StyledNumber>4k</StyledNumber>{` `}<StyledText>star</StyledText></StyledLabel>
                      <StyledLabel><StyledNumber>5k</StyledNumber>{` `}<StyledText>fork</StyledText></StyledLabel>
                    </Col>
                  </StyledNumberDashboard>
                  <StyledDescription>
                    <Col>
                      <p>A JavaScript library for building user interfaces.</p>
                      <p>Declarative, Component-Based, Learn Once, Write Anywhere</p>
                      <p><a href='https://reactjs.org/'>Check out</a></p>
                    </Col>
                  </StyledDescription>
                </Col>
              </Row>
            </StyledCol>
          </StyledRow>
        </div>
      }
    />
  );
};

export default Profile;
