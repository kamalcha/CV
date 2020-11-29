import React from "react";

import { ListGroup } from "react-bootstrap";

import * as Icon from 'react-feather';


import styled from "styled-components";

const Title = styled.h1`
    font-size: 40px;
`;

const Skills = () => {
  return <section id="skills">
    <div className="container">
    <Title>Skills</Title>
    <ListGroup variant="flush">
      <ListGroup.Item>
        <Icon.Code size={16} /> HTML, CSS, JavaScript, PHP, SASS/LESS
      </ListGroup.Item>
      <ListGroup.Item>
        <Icon.Coffee size={16} /> UI/UX Design, Interaction Design, Product Management
      </ListGroup.Item>
    </ListGroup>
      </div>
  </section>;
};

export default Skills;