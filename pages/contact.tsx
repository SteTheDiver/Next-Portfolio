import React from "react";
import Form from "../components/Form";
import styled from "styled-components";
import PersonalInfo from "../components/PersonalInfo";
const contact = () => {
  return (
    <Wrapper className="page">
      <div className="section-centered">
        <header>
          <h1 style={{ color: "white" }}>
            Get in<span style={{ color: "orange" }}> Touch</span>
          </h1>
        </header>
        <span className="separator"></span>
        <div className="wrapper">
          <PersonalInfo />
          <Form />
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  .section-centered {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 90vw;

    .wrapper {
      display: flex;
      flex-direction: column;
      width: 100%;
    }

    @media screen and (min-width: 1040px) {
      .wrapper {
        flex-direction: row;
      }
    }
  }
  @media screen and (min-width: 1400px) {
    .section-centered {
      max-width: 60vw;
    }
  }
  header {
    display: flex;
    justify-content: flex-start;
    width: 100%;

    h1 {
      margin-bottom: 20px;
    }
  }
`;

export default contact;
