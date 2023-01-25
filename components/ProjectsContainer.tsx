import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { projects } from "../utils/projects_data";
import Project from "./Project";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";
import ProjectModal from "./ProjectModal";

export type ProjectProps = {
  id: number;
  description: string;
  title: string;
  github: string;
  stack: Stack[];
  url?: string | null;
  image: string;
};

type Stack = {
  id: number;
  title: string;
};

const ProjectsContainer = () => {
  const [showItems, setShowItems] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);
  const [length, setLength] = useState(projects.length);
  const [showModal, setShowModal] = useState(false);
  const [selectedProject, setSelectedProject] = useState<any>([]);

  console.log(showModal);

  const handlePrev = (id: number) => {
    if (activeIndex == 0) {
      setActiveIndex(0);
    } else {
      setActiveIndex(activeIndex - 1);
    }
  };

  const handleNext = (id: number) => {
    if (activeIndex === projects.length - showItems) {
      return;
    } else {
      setActiveIndex(activeIndex + 1);
    }
  };

  const handleOpenModal = (project: ProjectProps) => {
    setShowModal(true);
    setSelectedProject(project);
    console.log(showModal);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  useEffect(() => {
    if (window.innerWidth < 700) {
      setShowItems(1);
    } else if (window.innerWidth > 701 && window.innerWidth < 1700) {
      setShowItems(2);
    } else {
      setShowItems(3);
    }

    // const interval = setTimeout(() => {
    //   if (activeIndex === projects.length - 1 && window.innerWidth < 700) {
    //     setActiveIndex(0);
    //   } else if (
    //     activeIndex === projects.length - 2 &&
    //     window.innerWidth > 701 &&
    //     window.innerWidth < 1700
    //   ) {
    //     setActiveIndex(0);
    //   } else if (
    //     activeIndex === projects.length - 3 &&
    //     window.innerWidth > 1701
    //   ) {
    //     setActiveIndex(0);
    //   } else {
    //     setActiveIndex(activeIndex + 1);
    //   }
    // }, 5000);

    // return () => {
    //   clearTimeout(interval);
    // };
  }, [activeIndex]);

  return (
    <Wrapper>
      <div className="container">
        <div className="wrapper">
          <div className="carousel-content-wrapper">
            <div
              className={`carousel-content show-${showItems}`}
              style={
                showModal
                  ? { display: "none" }
                  : {
                      transform: `translateX(-${
                        activeIndex * (100 / showItems)
                      }%)`,
                    }
              }
            >
              {projects.map((project: any) => {
                //add a div for project and onCLick handler to open the modal
                return (
                  <div
                    key={project.id}
                    className="project-container"
                    onClick={() => handleOpenModal(project)}
                  >
                    <img src={project.image} alt={project.title} />
                    <div className="title-wrapper">
                      <p className="title">{project.title}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <footer>
        <div>
          <span style={{ fontSize: "15px" }}>
            0{activeIndex + 1} - 0{projects.length}
          </span>
        </div>
        <div>
          <button
            style={{ background: "transparent" }}
            onClick={(id: any) => handlePrev(id)}
          >
            <MdOutlineArrowBackIos className="icon" />
          </button>
          <button
            style={{ background: "transparent" }}
            onClick={(id: any) => handleNext(id)}
          >
            <MdOutlineArrowForwardIos className="icon" />
          </button>
        </div>
      </footer>
      {showModal ? (
        <ProjectModal
          closeModal={handleCloseModal}
          selectedProject={selectedProject}
        />
      ) : null}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  width: 100%;

  .container {
    display: flex;
    width: 100%;
    position: relative;

    .wrapper {
      display: flex;
      flex-direction: row;
      width: 100%;
      overflow: hidden;
      gap: 2rem;
      height: 100%;

      .carousel-content {
        display: flex;
        transition: all 250ms linear;
        -ms-overflow-style: none; /* hide scrollbar in IE and Edge */
        scrollbar-width: none; /* hide scrollbar in Firefox */
      }

      .carousel-content::-webkit-scrollbar,
      .carousel-content::-webkit-scrollbar {
        display: none;
      }

      .carousel-content > * {
        width: 100%;
        flex-shrink: 0;
        flex-grow: 1;
      }

      .carousel-content.show-2 > * {
        width: 50%;
      }

      .carousel-content.show-3 > * {
        width: calc(100% / 3);
      }

      .carousel-content.show-4 > * {
        width: calc(100% / 4);
      }

      .project-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-start;

        img {
          width: calc(100% - 10px);
          height: 400px;
          cursor: pointer;
          border-radius: 10px;
          object-fit: cover;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;

          &:hover + .title-wrapper {
            display: flex;
            visibility: visible;
            transform: translateY(-150%);
          }
        }

        .title-wrapper {
          height: 50px;
          min-width: max-content;
          background-color: orange;
          position: absolute;
          bottom: -50px;
          display: flex;
          justify-content: center;
          align-items: center;
          align-content: center;
          transition: all 0.3s ease-in-out;
          border-radius: 10px;

          p {
            padding: 20px;
            font-weight: 600;
            color: white;
          }
        }
      }
    }
  }

  footer {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    padding: 20px 0;

    .icon {
      cursor: pointer;
      font-size: 20px;
      color: white;
      font-weight: 600;

      &:hover {
        color: orange;
      }
    }
  }
`;

export default ProjectsContainer;
