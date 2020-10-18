import styled from "styled-components";

export const PaginationStyles = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  button {
    background: none;
    &[disabled] {
      visibility: hidden;
    }
  }
`;

export const paginationArrows = styled.button``;
