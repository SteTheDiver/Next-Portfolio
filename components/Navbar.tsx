import React from "react";
import styled from "styled-components";
import Link from "next/link";
import { FaAlignRight } from "react-icons/fa";

export type Props = {
  isSidebarOpen: boolean;
  setSidebarOpen: Function;
};

const Navbar = (props: Props) => {
  return (
    <Wrapper>
      <div className="navbar-center">
        <div className="navbar-header">
          <Link href="/">
            <h1>logo</h1>
          </Link>
          <button
            className="btn-toggle"
            onClick={() => props.setSidebarOpen(!props.isSidebarOpen)}
          >
            <FaAlignRight />
          </button>
        </div>
        {/* Here we will map trought the array of obj containing all the info: id, text, path */}
        <ul className="nav-links">
          <li>
            <Link className="link" href="">
              Home
            </Link>
          </li>
          <li>
            <Link className="link" href="">
              Projects
            </Link>
          </li>
          <li>
            <Link className="link" href="">
              About
            </Link>
          </li>
          <li>
            <Link className="link" href="">
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
    font-size: 1em;
    cursor: pointer;
    color: #7b8d93;;
    display: flex;
    align-items: center;
  }
  .nav-links {
    width: fit-content;
    display: none;
    flex-direction: column;
    transform: translate(100);

    .link {
      color: #7b8d93;
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

      /* width: 100%; */
    }
  }
`;

export default Navbar;
