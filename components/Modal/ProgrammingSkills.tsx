import React from "react";

import styled from "styled-components";
import Image from "next/image";

const ProgrammingSkills = () => {
  return (
    <Wrapper>
      <header className="header">
        <h3>
          Programming <span style={{ color: "orange" }}>Skills</span>
        </h3>
      </header>
      <span className="separator"></span>
      <section className="skills">
        {/* missing styled componetns */}
        <Image
          src="/skills/html5.svg"
          height={50}
          width={50}
          alt="HTML"
          className="image"
          title="HTML"
        />
        <Image
          src="/skills/css.svg"
          height={50}
          width={50}
          alt="CSS"
          className="image"
          title="CSS"
        />
        <Image
          src="/skills/github.svg"
          height={50}
          width={50}
          alt="Git-Hub"
          className="image"
          title="Git-Hub"
        />
        <Image
          src="/skills/react-2.svg"
          height={50}
          width={50}
          alt="React"
          className="image"
          title="React"
        />
        <Image
          src="/skills/sass-seeklogo.com.svg"
          height={50}
          width={50}
          alt="Sass"
          className="image"
          title="Sass"
        />
        <Image
          src="/skills/styled-components-1.svg"
          height={50}
          width={50}
          alt="Styled Components"
          className="image"
          style={{ backgroundColor: "white" }}
          title="Styled Components"
        />
        <Image
          src="/skills/javascript-js-seeklogo.com.svg"
          height={50}
          width={50}
          alt="JavaScript"
          className="image"
          title="JavaScript"
        />
        <Image
          src="/skills/typescript-seeklogo.com.svg"
          height={50}
          width={50}
          alt="Typescript"
          className="image"
          title="Typescript"
        />
        <Image
          src="/skills/next-js-icon-seeklogo.com.svg"
          height={50}
          width={50}
          alt="Next.js"
          className="image"
          title="Next.js"
        />
        <Image
          src="/skills/microsoft-sharepoint-seeklogo.com.svg"
          height={50}
          width={50}
          alt="css"
          className="image"
          title="SPFX"
        />
      </section>
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

  .skills {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(90px, 1fr));
    justify-items: center;
    /* flex-direction: row; */
    justify-content: flex-start;
    flex-wrap: wrap;
    row-gap: 15px;
    /* width: 100%; */

    .image {
      /* margin: 10px 20px 0 0; */
    }
  }
`;

export default ProgrammingSkills;
