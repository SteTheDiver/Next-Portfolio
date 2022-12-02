import React from "react";

import styled from "styled-components";

const WorkExperience = () => {
  return (
    <Wrapper>
      <header className="header">
        <h3 className="title">
          Working <span style={{ color: "orange" }}>Timeline</span>{" "}
        </h3>
      </header>
      <span className="separator"></span>
      <div className="timeline">
        <div className="work-container">
          <div className="content">
            <div className="date-container">
              <p>2021 - 2023</p>
            </div>
            <div className="company-container">
              <span>XPIS - Prague</span>
              <p>React Developer</p>
            </div>
          </div>
        </div>
        <div className="work-container">
          <div className="content">
            <div className="date-container">
              <p>2021 - 2023</p>
            </div>
            <div className="company-container">
              <span>Freelance - Prague</span>
              <p>Web developer</p>
            </div>
          </div>
        </div>
        <div className="work-container">
          <div className="content">
            <div className="date-container">
              <p>2018 - 2020</p>
            </div>
            <div className="company-container">
              <span>Exapro - Prague</span>
              <p>Mentor</p>
            </div>
          </div>
        </div>
      </div>
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
      opacity: 0.7;
    }
  }

  .timeline {
    position: relative;
    /* max-width: 500px; */
    /* margin: 0 auto; */
    height: 100%;
  }

  /* The actual timeline (the vertical ruler) */
  .timeline::after {
    height: 100%;
    content: "";
    position: absolute;
    width: 2px;
    background-color: var(--separator-color);
    opacity: 0.5;
    top: 0;
    bottom: 0;
    left: 0;
    /* margin-left: -3px; */
  }

  .work-container {
    padding: 10px 20px;
    padding-right: 0;
    position: relative;
    height: fit-content;
  }

  .content {
    padding: 10px 5px;
    background-color: transparent;
    position: relative;
    border-radius: 6px;
    height: fit-content;
    display: grid;
    grid-template-columns: auto 130px;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    /* border: 1px solid var(--separator-color); */

    .date-container {
      padding: 0px 15px;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      border: 1px solid none;
      background-color: hsla(0, 0%, 100%, 0.05);
      border-radius: 50px;
    }

    .company-container {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      align-content: flex-start;

      span {
        font-family: var(--font-text);
        color: white;
        font-size: 14px;
        font-weight: 600;
      }
    }
  }

  .work-container::after {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    left: -4px;
    background-color: orange;
    top: 42px;
    border-radius: 50%;
    z-index: 1;
  }
`;

export default WorkExperience;
