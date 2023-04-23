import React from "react";

import styled from "styled-components";

const Form = () => {
  // add toast for message sent?

  return (
    <Wrapper>
      <form action="">
        <div className="form-details">
          <div className="input-container">
            <input type="text" name="name" required placeholder="name" />
          </div>
          <div className="input-container">
            <input type="text" name="email" required placeholder="email" />
          </div>
        </div>
        <div className="form-message">
          <div className="input-container">
            <textarea
              name="subject"
              id=""
              className="message"
              placeholder="Message"
            ></textarea>
          </div>
          <div className="submit-container">
            <input
              type="submit"
              value="Send Message"
              className="button-submit"
            />
          </div>
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  form {
    .form-details,
    .form-message {
      width: 100%;
      float: left;

      .input-container {
        width: 100%;
        height: auto;
        clear: both;
        float: left;
        background-color: #222;
        border-radius: 10px;
        margin-bottom: 20px;

        input {
          width: 100%;
          height: 38px;
          background-color: transparent;
          border: none;
          color: #a2a2a2;
          padding: 0 20px;
          outline: none;
        }

        .message {
          width: 100%;
          height: 108px;
          background-color: transparent;
          border: none;
          color: #a2a2a2;
          resize: none;
          padding: 20px;
        }
      }
    }
    .submit-container {
      width: 100%;
      height: auto;
      clear: both;
      float: left;
      position: relative;

      .button-submit {
        text-decoration: none;
        color: #fff;
        display: inline-block;
        background-color: orange;
        padding: 10px 40px;
        text-align: center;
        border-radius: 50px;
        transition: all 0.3s ease;
        border: none;
        cursor: pointer;
      }
    }
  }
  @media screen and (min-width: 1040px) {
    width: 50%;
    padding-left: 20px;

    .form-details {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }
`;

export default Form;
