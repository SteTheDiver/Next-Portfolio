import React from "react";
import Image from "next/image";

import styled from "styled-components";
import { AiOutlineClose } from "react-icons/ai";

import css from "../assets/skills/css.svg";
import github from "../assets/skills/github.svg";
import html5 from "../assets/skills/html5.svg";
import AboutMe from "./AboutMe";
import ProgrammingSkills from "./ProgrammingSkills";
import LanguageSkills from "./LanguageSkills";
import WorkExperience from "./WorkExperience";

type ModalProps = {
  toggleModal: () => void;
};

const Modal = ({ toggleModal }: ModalProps) => {
  return (
    <Wrapper>
      <header className="modal-header">
        <button className="btn-close" onClick={toggleModal}>
          <AiOutlineClose className="modal-icon" />
        </button>
      </header>
      <section className="container">
        <div className="column-left">
          <section className="image-container">
            <Image
              src="https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
              alt=""
              height={150}
              width={150}
            />
            <div className="name-container">
              <h3 className="name">Stefano</h3>
              <h3 className="surname">Cattaneo</h3>
            </div>
            <p style={{ marginTop: "10px" }}>Frontend Developer</p>
            <a className="btn btn-download" href="">
              Download CV
            </a>
          </section>
        </div>
        <div className="column-right">
          <AboutMe />
          <ProgrammingSkills />
          <LanguageSkills />
          <WorkExperience />
        </div>
      </section>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  display: flex;
  position: absolute;
  top: 6rem;
  visibility: visible;
  background-color: #222;
  overflow-y: auto;
  height: 84vh;
  width: 70vw;
  padding: 10px;
  flex-direction: column;
  border-radius: 10px;
  animation: fadeIn 0.2s;
  max-width: 800px;

  ::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */

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

  .modal-header {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    /* margin-bottom: 20px; */
    position: sticky;
    top: 0;

    .btn-close {
      background-color: transparent;
      border: 2px solid white;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      transition: border-radius 0.2s ease-in;
      padding: 1px;

      :hover {
        border-radius: 20%;
      }

      .modal-icon {
        font-size: 15px;
        color: white;
      }
    }
  }

  .container {
    display: grid;
    padding: 0 25px;
    height: 100%;

    .column-left {
      display: flex;
      flex-direction: column;
      /* height: 100%; */
      padding-right: 25px;

      .image-container {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 20px;

        img {
          border-radius: 50%;
          object-fit: cover;
          margin-bottom: 20px;
        }

        .name-container {
          display: inline-grid;
          grid-template-columns: auto auto;
          column-gap: 5px;
          justify-items: center;
          font-size: 20px;
          text-transform: uppercase;
          letter-spacing: 1px;

          .name {
            color: white;
          }

          .surname {
            color: orange;
          }
        }

        .btn-download {
          width: 100%;
          margin-top: 20px;
          font-weight: 600;
        }
      }
    }

    .column-right {
      display: flex;
      flex-direction: column;
    }
  }

  @media (min-width: 1024px) {
    width: 60vw;
    height: 70vh;

    .container {
      display: grid;
      grid-template-columns: auto auto;
      column-gap: 25px;
      align-items: flex-start;

      .column-left {
        position: sticky;
        top: 20px;

        /* border-right: 1px dashed var(--separator-color); */
      }

      .column-right {
        border-left: 1px dashed var(--separator-color);
        padding-left: 25px;
        height: 100%;
        overflow: auto;
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */

        ::-webkit-scrollbar {
          display: none;
        }
      }
    }
  }
`;

export default Modal;
