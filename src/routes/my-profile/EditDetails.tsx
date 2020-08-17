import * as React from "react";
import { Row, Col, Input, Button } from "antd";
import styled from 'styled-components';

const FormRow = styled(Row)`
  margin-top: 4rem;
`;
const FormLabel = styled.label`
  font-size: 1.6rem;
  font-weight: 530;
`;
export interface EditDetailsProps {}

const EditDetails: React.SFC<EditDetailsProps> = () => {
  return (
    <Row justify="center">
      <Col md={14}>
        <FormRow justify="space-between" align="middle">
          <Col md={4}><FormLabel>Name</FormLabel></Col>
          <Col md={18}><Input /></Col>
        </FormRow>
        <FormRow justify="space-between" align="middle">
          <Col md={4}><FormLabel>UserName</FormLabel></Col>
          <Col md={18}><Input /></Col>
        </FormRow>
        <FormRow justify="space-between" align="middle">
          <Col md={4}><FormLabel>Website</FormLabel></Col>
          <Col md={18}><Input /></Col>
        </FormRow>
        <FormRow justify="space-between" align="middle">
          <Col md={4}><FormLabel>Bio</FormLabel></Col>
          <Col md={18}><Input /></Col>
        </FormRow>
        <FormRow justify="space-between" align="middle">
          <Col md={4}><FormLabel>Email</FormLabel></Col>
          <Col md={18}><Input /></Col>
        </FormRow>
        <FormRow justify="space-between" align="middle">
          <Col md={4}><FormLabel>Phone Number</FormLabel></Col>
          <Col md={18}><Input /></Col>
        </FormRow>
        <FormRow justify="space-between" align="middle">
          <Col md={4}></Col>
          <Col md={18}><Button type="primary">Submit</Button></Col>
        </FormRow>
      </Col>
    </Row>
  );
};

export default EditDetails;
