import React from "react";

import styled from "styled-components";

const AboutMe = () => {
  return (
    <Wrapper>
      <header className="header">
        <h3 className="title">
          About <span style={{ color: "orange" }}>Me</span>{" "}
        </h3>
      </header>
      <span className="separator"></span>
      <p>
        Hi, my name is <span style={{ color: "white" }}>Stefano Cattaneo</span>.
        I am frontend developer and I am very passionate and dedicated to what I
        do. After a carrier in managing people I have decided to change my
        career and follow my passion.
      </p>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* margin-top: 40px; */
  line-height: 1.5rem;
  font-size: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 50px;

  .header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 10px;

    h3 {
      color: white !important;
    }

    p {
      opacity: 0.4;
    }
  }
`;

export default AboutMe;
