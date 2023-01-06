import React, { useState } from "react";

import Image from "next/image";
import styled from "styled-components";
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

const Project = ({
  id,
  title,
  description,
  image,
  url,
  github,
}: ProjectProps) => {
  console.log(title, "title");

  return (
    <Wrapper>
      <img src={image} alt={title} />
      <div className="title-wrapper">
        <p className="title">{title}</p>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
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
`;

export default Project;
