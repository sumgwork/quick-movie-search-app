import styled from "styled-components";

export const PaginationStyles = styled.div`
  /* background: green; */
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  text-align: center;
  button {
    background: none;
    &[disabled] {
      visibility: hidden;
    }
  }
`;

export const paginationArrows = styled.button``;
