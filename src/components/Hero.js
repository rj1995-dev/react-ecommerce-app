import React from "react";
import styled from "styled-components";
import mainBcg from "../images/mainBcg.jpeg";
export default function Hero({ img, title, max, children }) {
  return (
    <HeroWrapper max={max} img={img}>
      <div className="banner">
        <h1 className="title">{title}</h1>
        {children}
      </div>
    </HeroWrapper>
  );
}

const HeroWrapper = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: ${props => (props.max ? "100vh" : "60vh")};
  color: var(--mainWhite);
  background: linear-gradient(var(--primaryRGBA), var(--primaryRGBA)),
    url(${props => props.img}) center/cover no-repeat;

  .title {
    padding-top: 2rem;
    font-size: 3rem;
    text-shadow: 4px 4px 2px rgba(0, 0, 0, 0.3);
    text-transform: uppercase;
    letter-spacing: var(--mainSpacing);
  }

  /* @media screen and (min-width: 360px) {
    
  } */
  /* @media only screen and (min-width: 768px) {
    width: 100%;
  
  } */

  /* Medium Devices, Desktops
  @media only screen and (min-width: 992px) {
    width: 50%;
    /* background-color: pink; */
  /* } */
`;
Hero.defaultProps = {
  img: mainBcg
};
