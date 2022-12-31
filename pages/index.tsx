import Head from "next/head";
import Image from "next/image";
import Layout, { siteTitle } from "../components/Layout";
import ProjectsContainer from "../components/ProjectsContainer";
import styles from "../styles/Home.module.css";
import css from "../assets/skills/css.svg";
import github from "../assets/skills/github.svg";
import html5 from "../assets/skills/html5.svg";

import styled from "styled-components";

export default function Home() {
  return (
    <Wrapper className="page">
      <section className="section-center">
        <div className="name-container">
          <h2 className="name">Stefano</h2>
          <h2 className="surname">Cattaneo</h2>
        </div>
        <div className="description">
          <h4>Frontend Developer</h4>
        </div>
        {/* A combination of sentences that changes and always makes sense with a set timeout function to repeat it eveynow and then */}
        {/* gear setting icon */}
        <button className="btn">Get in touch</button>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.main`
  .name-container {
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-size: 25px;
    padding-bottom: 0.5rem;
    text-transform: uppercase;

    .name {
      color: white;
    }

    .surname {
      color: orange;
    }

    h2 {
      margin: 0 10px;
      font-weight: 600;
      /* font-size: 50px; */

      @media (min-width: 980px) {
        font-size: 60px;
      }
    }
  }
  .description {
    display: flex;
    justify-content: center;
    width: 100%;
    padding-bottom: 2rem;

    h4 {
      font-size: 25px;
      font-weight: normal;
    }
  }
`;
