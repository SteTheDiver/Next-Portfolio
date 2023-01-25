import { url } from "inspector";
import React from "react";
import { AiOutlineClose, AiOutlineGithub } from "react-icons/ai";
import { MdPreview } from "react-icons/md";
import styled from "styled-components";

import { ProjectProps } from "./ProjectsContainer";

type Props = {
  closeModal: () => void;
  selectedProject: ProjectProps;
};

const ProjectModal = ({ selectedProject, closeModal }: Props) => {
  console.log(selectedProject, "selectedProject");
  const { title, description, image, github, stack, url } = selectedProject;

  return (
    <Wrapper>
      <header className="modal-header">
        <button className="btn-close" onClick={closeModal}>
          <AiOutlineClose className="modal-icon" />
        </button>
      </header>
      <h1 style={{ color: "white", textAlign: "center" }}>{title}</h1>
      <div>
        <img
          src={image}
          alt={title}
          style={{ width: "100%", height:"50%", objectFit: "contain" }}
        />
        <p>{description}</p>
        <ul>
          {stack.map((tech) => {
            return <li key={tech.id}>{tech.title}</li>;
          })}
        </ul>
      </div>
      <div>
        <a href={github}>
          <AiOutlineGithub />
        </a>
        <a href={"/"}>
          <MdPreview />
        </a>
      </div>
    </Wrapper>
  );
};

export default ProjectModal;

const Wrapper = styled.main`
  display: flex;
  position: fixed;
  /* top: 50%; */
  left: 50%;
  transform: translate(-50%, -50%);
  /* visibility: visible; */
  background-color: #222;
  overflow-y: auto;
  height: 50vh;
  width: 70vw;
  padding: 10px;
  flex-direction: column;
  border-radius: 10px;
  /* animation: fadeIn 0.2s; */

  max-width: 800px;

  ::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */

  /* @keyframes fadeIn {
    0% {
      opacity: 0;
      transform: translateY(-5%);
    }
    100% {
      transform: translateY(0%);
      opacity: 1;
    }
  } */

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
`;
