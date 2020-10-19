import styled from "styled-components";

export const SidebarStyles = styled.aside`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  max-height: var(--maxContentHeight);
  border: 1px solid var(--black);
  padding: 0.5rem 1rem;
  overflow: auto;

  input {
    width: 100%;
    height: 48px;
    border-radius: 10px;
    padding: 4px;
    margin-bottom: 1rem;
    font-size: 1.5rem;
  }

  .resultPane {
    height: calc(100vh - 140px);
    overflow-y: auto;
  }
`;
