import React from "react";

import styled from "styled-components";

export const –°hannelLink = styled.div`
   {
    display: flex;
    justify-content: center;
    align-items: center;
    color: blue;
    font-weight: bold,
    font-size: 15px,
    font-family: "monospace",
  }
`;
export const Footer = () => {
  return (
    <–°hannelLink>
      <a href="https://github.com/MetaBogdan/" target="_blank" rel="noreferrer">
        Git Bogdan Voznyi
      </a>
    </–°hannelLink>
  );
};

export default Footer;
