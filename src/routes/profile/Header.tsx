import * as React from "react";
import styled from "styled-components";
import { Row, Col } from "antd";

const S = {
  Label: styled.div`
    display: inline-block;
    margin-right: 40px;
    font-size: 1rem;
  `,
  Col: styled(Col)`
    margin-top: 30px;
  `,
  FrameworkName: styled.span`
    font-size: 1.5rem;
    color: ${props => props.theme.color.grey.darkest};
  `,
  NumberDashboard: styled(Row)`
    margin-top: 10px;
  `,
  Number: styled.span`
    font-size: 1.4rem;
    color: ${props => props.theme.color.grey.darkest};
  `,
  Text: styled.span`
    font-size: 1rem;
  `,
  Description: styled(Row)`
    font-size: 1rem;
    margin-top: 20px;
  `
};

export interface HeaderProps {
  image: any;
  name: string;
}

const Header: React.SFC<HeaderProps> = ({ image, name }) => {
  return (
    <S.Col md={12}>
      <Row justify="space-between" align="top">
        <Col md={4}>
          <img src={image} alt="" />
        </Col>
        <Col md={16}>
          <Row>
            <Col>
              <S.FrameworkName>{name}</S.FrameworkName>
            </Col>
          </Row>
          <S.NumberDashboard justify="space-between">
            <Col>
              <S.Label>
                <S.Number>34k</S.Number>
                {` `}
                <S.Text>watch</S.Text>
              </S.Label>
              <S.Label>
                <S.Number>4k</S.Number>
                {` `}
                <S.Text>star</S.Text>
              </S.Label>
              <S.Label>
                <S.Number>5k</S.Number>
                {` `}
                <S.Text>fork</S.Text>
              </S.Label>
            </Col>
          </S.NumberDashboard>
          <S.Description>
            <Col>
              <p>A JavaScript library for building user interfaces.</p>
              <p>Declarative, Component-Based, Learn Once, Write Anywhere</p>
              <p>
                <a href="https://reactjs.org/">Check out</a>
              </p>
            </Col>
          </S.Description>
        </Col>
      </Row>
    </S.Col>
  );
};

export default Header;
