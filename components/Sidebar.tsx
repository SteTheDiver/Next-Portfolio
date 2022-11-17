import React, { FC } from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";

export type Props = {
  isSidebarOpen: boolean;
  setSidebarOpen: Function;
};

const Sidebar = (props: Props) => {
  return (
    <Wrapper>
      <div
        className={
          props.isSidebarOpen
            ? "sidebar-container show-sidebar"
            : "sidebar-container"
        }
      >
        <section className="content">
          <ul className="nav-links">
            <li>
              <Link href="">Home</Link>
            </li>
            <li>
              <Link href="">Projects</Link>
            </li>
            <li>
              <Link href="">About</Link>
            </li>
            <li>
              <Link href="">Contact</Link>
            </li>
          </ul>
        </section>
        <button
          className="btn-close"
          onClick={() => props.setSidebarOpen(!props.isSidebarOpen)}
        >
          <FaTimes />
        </button>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }
  .sidebar-container {
    /* background: green; */
    position: fixed;
    inset: 0;
    /* background: rgba(0, 0, 0, 0.7); */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: -1;
    opacity: 0;
    transition: var(--transition);
  }
  .show-sidebar {
    z-index: 99;
    opacity: 1;
  }

  .btn-close {
    background-color: transparent;
    color: red;
  }
`;

export default Sidebar;
