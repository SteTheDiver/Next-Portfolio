import React from "react";

import styled from "styled-components";

import { workExperiences } from "../../utils/jobs_data";

const WorkExperience = () => {
  return (
    <Wrapper>
      <header className="header">
        <h3 className="title">
          Working <span style={{ color: "orange" }}>Timeline</span>
        </h3>
      </header>
      <span className="separator"></span>
      <div className="timeline">
        {workExperiences.map((workExperience) => {
          const { id, from, to, company, role } = workExperience;
          return (
            <div key={id} className="work-container">
              <div className="content">
                <div className="date-container">
                  <p>
                    {from} - {to}
                  </p>
                </div>
                <div className="company-container">
                  <span>{company}</span>
                  <p>{role}</p>
                </div>
              </div>
            </div>
          );
        })}
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
    grid-template-columns: auto 140px;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    /* border: 1px solid var(--separator-color); */

    .date-container {
      padding: 0px 12px;
      margin-right: 5px;
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
        font-size: 15px;
        font-weight: 600;
      }
      p {
        font-size: 14px;
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
