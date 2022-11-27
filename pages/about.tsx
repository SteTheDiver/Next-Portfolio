import Image from "next/image";
import React, { useState } from "react";
import Modal from "../components/Modal/Modal";

import styled from "styled-components";

const about = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <Wrapper
      style={isModalOpen ? { visibility: "hidden" } : { visibility: "visible" }}
    >
      <div className="about-container">
        <div className="image-container">
          <Image
            src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
            alt=""
            height={100}
            width={350}
          />
        </div>
        <section className="about">
          <header>
            <h1>Who I am</h1>
          </header>
          <span className="separator"></span>
          <article>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus,
              doloribus adipisci voluptatum exercitationem a dolore repellendus
              reprehenderit est sequi repudiandae libero sunt quam blanditiis
              commodi veritatis quas rerum? Officia, ipsum. Lorem ipsum dolor,
              sit amet consectetur adipisicing elit. Similique enim atque rem
              rer
            </p>
          </article>
          {/* On click we have not just to show the modal, but also to hide the content under it, most likely using visibility and opacity */}
          <button className="btn btn-toggle" onClick={toggleModal}>
            Check more
          </button>
        </section>
      </div>
      {isModalOpen ? <Modal toggleModal={toggleModal} /> : null}
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
  animation: fadeIn 0.2s;
  
  @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-5%);
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  }
  
  .about-container {
    /* width: 100%; */
    max-width: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;

    .image-container {
      object-fit: cover;
      height: 100%;
      /* width: 600px; */
      margin-bottom: 20px;

      img {
        width: 100%;
        height: 100%;
        border-radius: 5px;
        filter: brightness(0.5);
      }
    }

    .about {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      width: 80%;

      h1 {
        font-size: 40px;
        color: orange;
        font-weight: 400;
        margin-bottom: 20px;
      }

      p {
        opacity: 0.5;
        line-height: 1.5rem;
      }

      .btn-toggle {
        margin-top: 20px;
        font-size: 16px;
      }
    }
  }
  @media (min-width: 850px) {
    .about-container {
      max-width: 800px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      column-gap: 50px;
      align-items: flex-start;

      .about {
        width: 100%;
      }
    }
  }
`;

export default about;
