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
    // <Layout isSidebarOpen={false}>
    //   <div className={styles.container}>
    //     <Head>
    //       <title>{siteTitle}</title>
    //     </Head>

    <Wrapper>
      <section className="section-center">
        <div className="name-container">
          <h2>Cattaneo</h2>
          <h2 className="surname">Stefano</h2>
        </div>
        <div className="description">
          <h4>I am a FrontEnd Developer</h4>
        </div>
        {/* A combination of sentences that changes and always makes sense with a set timeout function to repeat it eveynow and then */}
        {/* gear setting icon */}
        <button className="btn">Get in touch</button>
        {/* <section>
              <Image src={css} height={80} width={80} alt="css" />
              <Image src={github} height={80} width={80} alt="css" />
              <Image src={html5} height={80} width={80} alt="css" />
              <Image src={html5} height={80} width={80} alt="css" />
              <Image src={html5} height={80} width={80} alt="css" />
            </section> */}
      </section>
    </Wrapper>
    //   </div>
    // </Layout>
  );
}

const Wrapper = styled.main`
  width: 100%;
  height: calc(100vh - var(--nav-height));
  justify-content: center;
  display: grid;
  align-content: center;

  .section-center {
    display: flex;
    flex-direction: column;
    align-items: center;

    .name-container {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      font-size: 35px;
      padding-bottom: 0.5rem;

      .name {
      }

      .surname {
        color: orange;
      }

      h2 {
        margin: 0 10px;
        font-weight: 600;
        font-size: 50px;

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
  }

  .btn {
    background-color: orange;
    padding: 10px;
    border-radius: 4px;
    font-family: var(--font-text);
    font-size: 17px;
    font-weight: 600;
    color: white;
    cursor: pointer;
    :hover {
      background-color: white;
      color: black;
    }
  }
`;
