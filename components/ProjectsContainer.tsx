import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { projects } from "../utils/projects_data";
import Project from "./Project";
import {
  MdOutlineArrowBackIos,
  MdOutlineArrowForwardIos,
} from "react-icons/md";

const ProjectsContainer = (props: any) => {
  // needs to fix desktop logic
  const { children, show, infiniteLoop } = props;

  const [showItems, setShowItems] = useState(1);
  const [activeIndex, setActiveIndex] = useState(infiniteLoop ? showItems : 0);
  const [length, setLength] = useState(projects.length);

  const [isRepeating, setIsRepeating] = useState(
    infiniteLoop && children.projects > showItems
  );
  const [transitionEnabled, setTransitionEnabled] = useState(true);

  const handlePrev = (index: number) => {
    if (activeIndex == 0) {
      setActiveIndex(0);
      console.log(index);
    } else {
      setActiveIndex(activeIndex - 1);
      console.log(activeIndex);
    }
  };

  const handleNext = (index: number) => {
    if (activeIndex === projects.length - 3) {
      //to fix in order to be desktop frienly
      return;
      // setActiveIndex(0);
      // console.log(index, "index next first if");
    } else {
      setActiveIndex(activeIndex + 1);
      console.log(activeIndex);
    }
  };

  console.log(activeIndex, "active index");

  useEffect(() => {
    if (window.innerWidth < 600) {
      setShowItems(1);
    } else if (window.innerWidth > 601 && window.innerWidth < 900) {
      setShowItems(2);
    } else {
      setShowItems(3);
    }

    const interval = setTimeout(() => {
      if (activeIndex === projects.length - 1) {
        setActiveIndex(0);
        console.log(activeIndex);
      } else {
        setActiveIndex(activeIndex + 1);
        console.log(activeIndex, "active Index");
      }
    }, 6000);

    return () => {
      clearTimeout(interval);
    };
  }, [activeIndex]);

  // useEffect(() => {
  //   setLength(projects.length);
  //   setIsRepeating(infiniteLoop && projects.length > show);
  // }, [projects, infiniteLoop, show]);

  // useEffect(() => {
  //   if (isRepeating) {
  //     if (activeIndex === show || activeIndex === length) {
  //       setTransitionEnabled(true);
  //     }
  //   }
  // }, [activeIndex, isRepeating, show, length]);

  return (
    <Wrapper>
      <div className="container">
        <div className="wrapper">
          <div className="carousel-content-wrapper">
            <div
              className={`carousel-content show-${showItems}`}
              style={{
                transform: `translateX(-${activeIndex * (100 / showItems)}%)`,
                transition: !transitionEnabled ? "none" : undefined,
              }}
            >
              {projects.map((project: any, id: any) => {
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
  margin-top: 5rem;
  display: flex;
  flex-direction: column;
  width: 100%;

  .container {
    /* display: flex;
    flex-direction: column;
    justify-content: space-around;
    display: grid;
    gap: 1rem;
    grid-template-columns: 1fr 1fr 1fr; */
    /* max-width: 500px; */
    display: flex;
    width: 100%;
    position: relative;

    .wrapper {
      display: flex;
      flex-direction: row;
      width: 100%;
      overflow: hidden;
      gap: 2rem;
      /* grid-template-columns:repeat(auto-fit,minmax(300px,1fr)) ; */

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
        /* margin:0 5px; */
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

    @media (min-width: 992px) {
      /* display: flex; */
      /* flex-direction: column; */
      /* display: grid; */
      /* grid-template-columns:repeat(auto-fit,minmax(180px,1fr)) ; */
      /* flex-direction: row; */
      /* gap: 2rem; */
    }
  }

  footer {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    align-content: center;
    /* border: 1px solid red; */
    padding: 20px 0;

    .icon {
      cursor: pointer;
      font-size: 20px;
    }
  }
`;

export default ProjectsContainer;
