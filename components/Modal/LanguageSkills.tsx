import React from "react";

import styled from "styled-components";

const LanguageSkills = () => {
  return (
    <Wrapper>
      <header className="header">
        <h3>
          Language <span style={{ color: "orange" }}>Skills</span>
        </h3>
      </header>
      <span className="separator"></span>
      <div className="circle-container">
        <div className="circle">
          <p>Italian 100%</p>
        </div>
        <div className="circle">
          <p>English 90%</p>
        </div>
        <div className="circle">
          <p>French 30%</p>
        </div>
        <div className="circle">
          <p>Czech 20%</p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-bottom: 55px;
  line-height: 1.5rem;
  font-size: 15px;
  width: 100%;
  display: flex;
  flex-direction: column;

  .header {
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-bottom: 10px;

    h3 {
      color: white;
    }

    p {
      opacity: 0.7;
    }
  }

  .circle-container {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    float: left;

    .circle {
      height: 120px;
      width: 120px;
      padding: 10px 10px;
      border: 2.5px solid orange;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 10px 0;
    }
  }
`;

export default LanguageSkills;
