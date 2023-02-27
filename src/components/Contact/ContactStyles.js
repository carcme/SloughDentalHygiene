import styled from "styled-components"

export const ContactStyles = styled.section`
  max-width: 750px;
  box-sizing: content-box;
  margin-left: auto;
  margin-right: auto;

  input {
    height: calc(var(--gap) * 2);
    margin-bottom: var(--gap);
  }

  input,
  textarea {
    background-color: #000;
    color: #fff;
    border: none;
    outline: 2px solid rgba(255, 255, 255, 0.15);
    border-radius: 6px;
    width: 100%;
    font-size: var(--p);
    font-weight: 700;
    font-family: "Heebo", sans-serif;
    padding: 15px;
    transition: outline 0.3s ease;

    &:focus {
      outline: 2px solid var(--primary);
    }

    &::-webkit-input-placeholder {
      color: var(--inActive);
    }

    &::-moz-placeholder {
      color: var(--inActive);
    }

    &:-ms-input-placeholder {
      color: var(--inActive);
    }

    &:-moz-placeholder {
      color: var(--inActive);
    }
  }
  textarea {
    margin-bottom: var(--gap);
  }

  .icon {
    display: inline-flex;
    align-items: center;
    &.-right {
      margin-left: var(--margin);
    }
    &.-left {
      margin-right: var(--margin);
    }
  }
  .banner__btns {
    display: flex;
    justify-content: space-between;
  }
`
