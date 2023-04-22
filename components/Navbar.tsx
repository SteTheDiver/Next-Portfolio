import React, { useState } from "react";

import styled from "styled-components";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/router";

type Props = {
  toggleSidebar: () => void;
};

const Navbar = (props: Props) => {
  const router = useRouter();

  // console.log(isActive);

  return (
    <Wrapper>
      <div className="navbar-center">
        <div className="navbar-header">
          <Link href="/">
            <h1>logo</h1>
          </Link>
          <button className="btn-toggle" onClick={props.toggleSidebar}>
            <AiOutlineMenu />
          </button>
        </div>
        {/* Here we will map trought the array of obj containing all the info: id, text, path */}
        <ul className="nav-links">
          <li>
            <Link
              className={router.pathname === "/" ? "link link-active" : "link"}
              href="/"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              className={
                router.pathname === "/about" ? "link link-active" : "link"
              }
              href="/about"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              className={
                router.pathname === "/projects" ? "link link-active" : "link"
              }
              href="/projects"
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              className={
                router.pathname === "/contact" ? "link link-active" : "link"
              }
              href="/contact"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 1px 5px 5px rgba(0, 0, 0, 0.1);
  width: 100%;
  background-color: black;
  /* height: var(--nav-height); */

  .navbar-center {
    display: flex;
    width: 90vw;
    align-items: center;
    /* justify-content: space-between; */
  }
  .navbar-header {
    display: flex;
    justify-content: space-between;
    width: 100%;
  }

  .btn-toggle {
    background: transparent;
    border-color: transparent;
    font-size: 2em;
    cursor: pointer;
    color: #7b8d93;
    display: flex;
    align-items: center;

    :hover {
      color: orange;
    }
  }
  .nav-links {
    width: fit-content;
    display: none;
    flex-direction: column;
    transform: translate(100);

    li {
      margin-right: 20px;

      .link {
        color: #7b8d93;
      }

      .link-active {
        color: orange;
      }
    }
  }

  @media (min-width: 992px) {
    .btn-toggle {
      display: none;
      color: #7b8d93;
    }
    .nav-links {
      width: 30%;
      display: flex;
      flex-direction: row;
      justify-content: space-evenly;

      .link {
        font-size: 20px;
        :hover {
          color: orange;
        }
      }
    }
  }
`;

export default Navbar;
