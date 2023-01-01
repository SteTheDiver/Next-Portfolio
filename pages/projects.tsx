import React from "react";

import styled from "styled-components";
import ProjectsContainer from "../components/ProjectsContainer";

const projects = () => {
  // if page width is 992px

  return (
    <Wrapper className="page">
      <div className="section-centered">
        <header>
          <h1 style={{ color: "white" }}>
            Personal <span style={{ color: "orange" }}>Portfolio</span>
          </h1>
        </header>
        <span className="separator"></span>

        <ProjectsContainer />
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

  }
  @media screen and (min-width:1400px) {
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
export default projects;
