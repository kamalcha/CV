import React from "react";

import { ListGroup } from "react-bootstrap";

import * as Icon from 'react-feather';


import styled from "styled-components";

const Title = styled.h1`
    font-size: 40px;
`;


const Experience = () => {
  return <section id="experience">
    <div className="container">
    <Title>Experience</Title>
    <ListGroup variant="flush">
      <ListGroup.Item>
        <Icon.Bookmark size={16} /> 2014 - 2015 Product Designer at Daily Steals
      </ListGroup.Item>
      <ListGroup.Item>
        <Icon.Bookmark size={16} /> 2017 - 2019 Lead Product Designer &amp; Product Manager at 99.co
      </ListGroup.Item>
      <ListGroup.Item>
        <Icon.Bookmark size={16} /> 2020 Head of Design at Bank BRI
      </ListGroup.Item>
    </ListGroup>
      </div>
  </section>;
};

export default Experience;