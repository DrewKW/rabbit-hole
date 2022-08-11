import styled from "styled-components";

export const MoviesContent = styled.div`
  background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '010606')};

  @media screen and (max-width: 768px) {
      padding: 100px 0;
  }
`

export const MoviesWrapper = styled.div`
  z-index: 1;
  padding: 0 24px;
  display: grid;
  height: 860px;
  width: 100%;
  max-width: 1000px;
  margin-right: auto;
  margin-left: auto;
  justify-content: center;
`

export const MoviesRow = styled.div`
  align-items: center;
  display: grid;
  grid-auto-coluns: minmax(auto, 1fr);
  grid-template-areas: ${}
`