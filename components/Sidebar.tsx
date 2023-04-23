import React, { FC } from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import Link from "next/link";

export type Props = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
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
        <ul className="nav-links">
          <li>
            <Link className="link" href="/" onClick={props.toggleSidebar}>
              Home
            </Link>
          </li>
          <li>
            <Link
              className="link"
              href="/projects"
              onClick={props.toggleSidebar}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link className="link" href="/about" onClick={props.toggleSidebar}>
              About
            </Link>
          </li>
          <li>
            <Link
              className="link"
              href="/contact"
              onClick={props.toggleSidebar}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.aside`
  @media (min-width: 992px) {
    display: none;
  }
  .sidebar-container {
    transform: translate(105%);
    position: fixed;
    right: 0;
    background: rgba(0, 0, 0, 1);
    display: flex;
    justify-content: center;
    align-items: flex-start;
    transition: var(--transition);
    height: 100%;
    width: 25%;
    z-index: 99;

    .nav-links {
      width: fit-content;
      flex-direction: column;
      position: relative;
      width: 100%;
      height: 100%;
      text-align: right;
      padding: 20px;

      li {
        margin-bottom: 20px;

        .link {
          font-size: 1rem;
          margin-bottom: 50px;
          color: white;

          :hover {
            color: orange;
          }
        }
      }
    }
  }

  .btn-close {
    background-color: transparent;
    display: flex;
    height: 25px;
    width: 25px;
    align-items: center;
    border-radius: 50%;
    color: #7b8d93;
    cursor: pointer;

    :hover {
      color: orange;
    }
  }
  .show-sidebar {
    opacity: 1;
    transform: translate(0%);
  }
`;

export default Sidebar;
