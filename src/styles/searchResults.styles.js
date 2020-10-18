import { FaStar } from "react-icons/fa";
import styled from "styled-components";

export const MovieList = styled.ul`
  list-style: none;
`;

export const MovieItem = styled.li`
  position: relative;
  margin: 1rem 0;
  border: 1px solid black;
  cursor: pointer;
  padding: 1rem;
  &[aria-selected="true"] {
    background: var(--yellow);
    &:hover {
      background: var(--yellow);
    }
  }
  &:hover {
    background: var(--grey);
  }
  sub {
    text-align: right;
    display: block;
  }
`;

export const StarIcon = styled(FaStar)`
  color: white;
  position: absolute;
  right: 1rem;
  top: 1rem;
`;
