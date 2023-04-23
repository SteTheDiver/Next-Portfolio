import React from "react";

import { IoLocationSharp } from "react-icons/io5";
import { ImPhone } from "react-icons/im";
import { IoMail } from "react-icons/io5";
import { ImLinkedin } from "react-icons/im";
import styled from "styled-components";

const PersonalInfo = () => {
  return (
    <Wrapper>
      <ul>
        <li>
          <div className="info-container">
            <IoLocationSharp className="icon" />
            <span>
              <a href="#">Milan, Italy</a>
            </span>
          </div>
        </li>
        <li>
          <div className="info-container">
            <ImPhone className="icon" />
            <span>
              <a href="">+39 3403462673</a>
            </span>
          </div>
        </li>
        <li>
          <div className="info-container">
            <IoMail className="icon" />
            <span>
              <a href="#">stefano.cattaneo86@gmail.com</a>
            </span>
          </div>
        </li>
        <li>
          <div className="info-container">
            <ImLinkedin className="icon" />
            <span>
              <a
                href="http://www.linkedin.com/in/
stefano-cattaneo86" target="_blank"
              >
                @linkedin
              </a>
            </span>
          </div>
        </li>
      </ul>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  width: 100%;

  li {
    margin: 0 0 20px;
    width: 100%;
    float: left;

    .info-container {
      display: flex;
      align-items: center;
      width: 100%;
      height: auto;
      clear: both;
      float: left;
      position: relative;
      background-color: #222;
      border-radius: 10px;
      padding: 10px;

      .icon {
        color: orange;
        margin-left: 10px;

        @media screen {
        }
      }

      span {
        display: inline-block;
        padding-left: 20px;

        a {
          text-decoration: none;
          color: #fff;
          transition: all 0.3s ease;
          font-size: 1rem;
        }
      }
    }
  }
  @media screen and (min-width: 1040px) {
    width: 50%;
    padding-right: 50px;
  }
`;

export default PersonalInfo;
