import React from "react";

import styled from "styled-components";
import ProjectsContainer from "../components/ProjectsContainer";

const projects = () => {
  // if page width is 992px

  return (
    <Wrapper className="page">
      <div className="section-center">
        <header>
          <h1 style={{ color: "white" }}>
            Personal <span style={{ color: "orange" }}>Portfolio</span>
          </h1>
        </header>
        <span className="separator"></span>

        <ProjectsContainer show={1} />
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
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
