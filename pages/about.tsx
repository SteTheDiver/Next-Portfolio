import React from "react";

import styled from "styled-components";

const about = () => {
  return (
    <Wrapper>
      <div className="about-container">
        <img src="" alt="" />
        <section className="about">
          <header>
            <h1>Who I am</h1>
          </header>
          <hr />
          <article>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus,
              doloribus adipisci voluptatum exercitationem a dolore repellendus
              reprehenderit est sequi repudiandae libero sunt quam blanditiis
              commodi veritatis quas rerum? Officia, ipsum. Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Similique enim atque rem
              rerum minima temporibus nam veritatis laboriosam beatae delectus
              nihil obcaecati soluta unde magnam, iste doloremque ut corrupti
              praesentium.
            </p>
          </article>
        </section>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 100%;
  height: 100vh;
  max-height: calc(100vh - 8rem);
  display: grid;
  align-content: center;
  justify-content: center;
  justify-items: center;

  .about-container {
    width: 50%;
    display: flex;
    justify-content: space-between;
    flex-flow: row wrap;
    flex-direction: row;

    img {
      object-fit: contain;
    }

    .about {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 100%;

      h1 {
        font-size: 40px;
      }

      hr {
        color: var(--main-color);
        width: 100%;
      }

      p {
        opacity: 0.5;
      }
    }
  }
`;

export default about;
