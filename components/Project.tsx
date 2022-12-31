import React from "react";

import Image from "next/image";
import styled from "styled-components";

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

  return (
    <Image
      src={image}
      width={250}
      height={400}
      alt={title}
      style={{
        objectFit: "cover",
        cursor: "pointer",
        borderRadius: "10px",
        padding: "0 5px",
      }}
    />
  );
};

export default Project;
