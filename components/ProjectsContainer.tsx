import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { projects } from "../utils/projects_data";
import Project from "./Project";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const ProjectsContainer = (props: any) => {

  const [showItems, setShowItems] = useState(1);
  const [activeIndex, setActiveIndex] = useState(0);
  const [length, setLength] = useState(projects.length);

  // const [isRepeating, setIsRepeating] = useState(
  //   infiniteLoop && children.projects > showItems
  // );
  // const [transitionEnabled, setTransitionEnabled] = useState(true);

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
      console.log(activeIndex);
    }
  };

  useEffect(() => {
    if (window.innerWidth < 700) {
      setShowItems(1);
    } else if (window.innerWidth > 701 && window.innerWidth < 1700) {
      setShowItems(2);
    } else {
      setShowItems(3);
    }

    const interval = setTimeout(() => {
      if (activeIndex === projects.length - 1 && window.innerWidth < 700) {
        setActiveIndex(0);
        // setShowItems(1);
        console.log(activeIndex);
      } else if (
        activeIndex === projects.length - 2 &&
        window.innerWidth > 701 &&
        window.innerWidth < 1700
      ) {
        setActiveIndex(0);
      } else if (
        activeIndex === projects.length - 3 &&
        window.innerWidth > 1701
      ) {
        setActiveIndex(0);
      } else {
        setActiveIndex(activeIndex + 1);
        console.log(activeIndex, "active Index");
      }
    }, 5000);

    return () => {
      clearTimeout(interval);
    };
  }, [activeIndex]);

  return (
    <Wrapper>
      <div className="container">
        <div className="wrapper">
          <div className="carousel-content-wrapper">
            <div
              className={`carousel-content show-${showItems}`}
              style={{
                transform: `translateX(-${activeIndex * (100 / showItems)}%)`,
              }}
            >
              {projects.map((project: any) => {
                return <Project key={project.id} {...project} />;
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
            <MdOutlineArrowBackIos
              className="icon"
              style={{ color: "white", fontSize: "20px" }}
            />
          </button>
          <button
            style={{ background: "transparent" }}
            onClick={(id: any) => handleNext(id)}
          >
            <MdOutlineArrowForwardIos
              className="icon"
              style={{ color: "white", fontSize: "20px" }}
            />
          </button>
        </div>
      </footer>
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

      overflow: hidden;
      width: 100%;
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
    }
  }
`;

export default ProjectsContainer;
