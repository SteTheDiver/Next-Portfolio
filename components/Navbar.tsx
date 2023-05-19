import React, { useState } from "react";

import styled from "styled-components";
import Link from "next/link";
import { AiOutlineMenu } from "react-icons/ai";
import { useRouter } from "next/router";
import { menuLinks } from "../utils/links_data";

type Props = {
  toggleSidebar: () => void;
};

const Navbar = (props: Props) => {
  const router = useRouter();

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
        <ul className="nav-links">
          {menuLinks.map((menuLink) => {
            console.log(menuLink);

            const { id, url, link } = menuLink;
            return (
              <li key={id}>
                <Link
                  className={
                    router.pathname === url ? "link link-active" : "link"
                  }
                  href={`${url}`}
                >
                  {link}
                </Link>
              </li>
            );
          })}
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
    align-items: center;
    width: 100%;
    padding: 15px 20px;
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
    padding: 0;

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
        font-size: 1rem;
        :hover {
          color: orange;
        }
      }
    }
  }
`;

export default Navbar;
