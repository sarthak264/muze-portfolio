import React from "react";
import styled from "styled-components";

const Img = styled.img`
  width: 100%;
`;
const Small = styled.p`
  font-size: 13px;
`;
const Caption = styled.h3`
  transition: all 0.2s ease-in-out;
  cursor: pointer;
`;
const Card = styled.div`
  cursor: pointer;
  &:hover h3 {
    transition: all 0.2s ease-in-out;
    color: #0d6efd;
  }
`;

const MusicCard = (props) => {
  return (
    <Card>
      <Img src={props.img} alt="music_portfolio" className="mb-4" />
      <Caption className="fw-bolder">{props.caption}</Caption>
      <Small className="text-muted">Release date: 1.6.2021</Small>
    </Card>
  );
};

export default MusicCard;
