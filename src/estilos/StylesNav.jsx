import { motion } from "framer-motion";
import styled from "styled-components";

export const Header = styled.header`
  background: white;
  position: relative;
  display: flex;
  padding: 0rem;
  justify-content: flex-start;
  align-items: center;
  z-index: 2;
`;

export const Nav = styled(motion.nav)`
  background-color: transparent;
  height: 66.7px;
  width: 100%;
  position: relative;
  top: 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;



export const SvgBox = styled(motion.div)``;


export const LinkNav = styled(motion.ul)`
  list-style-type: none;
  font-size: 1.25rem;
`;


