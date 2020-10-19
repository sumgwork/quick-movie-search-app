import styled from "styled-components";

export const ContentStyles = styled.main`
  height: 100vh;
  overflow-y: auto;
  border: 1px solid var(--black);
  border-left: none;
  padding: 2rem;
  display: flex;
  justify-content: space-between;
  --marginBottom: 1.5rem;
  .movieTitle {
    margin-bottom: var(--marginBottom);
  }
  .movieGenre {
    display: block;
    margin-bottom: var(--marginBottom);
    font-size: 1.4rem;
  }
  .moviePlot {
    margin-bottom: var(--marginBottom);
    font-size: 1.5rem;
  }
`;

export const ImageWrapper = styled.div`
  width: 600px;
  height: 400px;
  margin-left: 2rem;
  overflow: none;
  img {
    object-fit: contain;
    width: 100%;
    height: 100%;
  }
`;

export const Property = styled.p`
  font-size: 1.5rem;
  line-height: 1.5;
  .title {
    font-weight: 700;
  }
`;
