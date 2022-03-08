import styled from "styled-components";
import { motion } from "framer-motion";
import igniteLogo from "../img/logo.svg";
// Redux and Routes
import { fetchSearch } from "../actions/gamesAction";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { fadeIn } from "../animations";
const Nav = () => {
  const dispatch = useDispatch();
  const [textInput, setTextInput] = useState("");

  const inputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitSearch = (e) => {
    e.preventDefault();
    console.log(textInput);
    dispatch(fetchSearch(textInput));
    setTextInput("");
  };

  const clearSearched = () => {
    dispatch({ type: "CLEAR_SEARCHED" });
  };
  return (
    <StyledNav variants={fadeIn} initial="hidden" animate="show">
      <StyledLogo onClick={clearSearched}>
        <img src={igniteLogo} alt="Logo" />
        <h1>Ignite</h1>
      </StyledLogo>
      <form onSubmit={submitSearch} className="search">
        <input value={textInput} onChange={inputHandler} type="text" />
        <button type="submit ">Search</button>
      </form>
    </StyledNav>
  );
};

const StyledNav = styled(motion.nav)`
  padding: 3rem 5rem;
  text-align: center;
  input {
    width: 30%;
    font-size: 1.5rem;
    padding: 0.5rem;
    border: none;
    margin-top: 1rem;
    box-shadow: 0px 0px 30px rgba(0, 0, 0, 0.2);
  }
  button {
    font-size: 1.5rem;
    border: none;
    padding: 0.5rem 2rem;
    cursor: pointer;
    background: #ff7676;
    color: white;
    border-top-right-radius: 0.2rem;
    border-bottom-right-radius: 0.2rem;
  }
  @media (max-width: 1000px) {
    padding: 3rem 3rem;
    input {
      width: 60%;
    }
  }
  @media (max-width: 500px) {
    width: 100vw;
    padding: 3rem 0.5rem;
    form {
      width: 100vw;
    }
    input {
      width: 70%;
    }
    button {
      padding: 0.5rem 1rem;
    }
  }
  @media (max-width: 400px) {
    margin-left: 3rem;
    input {
      width: 100%;
    }
    form {
      button {
        margin: 1rem 0rem;
      }
    }
  }
`;

const StyledLogo = styled(motion.div)`
  display: flex;
  justify-content: center;
  padding: 1rem;
  cursor: pointer;
  img {
    width: 1.8rem;
    height: 1.8rem;
    margin-right: 0.2rem;
  }
`;
export default Nav;
