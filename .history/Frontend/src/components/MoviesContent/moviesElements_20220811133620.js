import styled from "styled-components";

export const MoviesContent = styled.div`
  background: ${({lightBg}) => (lightBg ? '#f9f9f9' : '010606')};

  @media screen and (max-width: 770px) {
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
  grid-template-areas: ${({imgStart}) => (imgStart ? `'col2 col1'` : `'col1 col2'`)};

  @media screen and (max-width: 770px) {
    grid-template-areas: ${({imgStart}) => (imgStart ? `'col1 col2'` : `'col1 col1' 'col2 col2'`)}
}
`

export const Column1 = styled.div`
  padding: 0 17px;
  margin-bottom: 17px;
  grid-area: col1;
`

export const Column2 = styled.div`
  padding: 0 17px;
  margin-bottom: 17px;
  grid-area: col2;
`

export const TextWrapper = styled.div`
  padding-top: 0;
  padding-bottom: 70px;
  max-width: 570px;
`

export const TopLine = styled.p`
  line-height: 17px;
  margin-bottom: 17px;
  color: #01bf71;
  font-size: 17px;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 1.4px;
`

export const Heading = styled.h1`
  line-height: 1.3;
  font-weight: 700;
  color: ${}
  margin-left: auto;
  justify-content: center;

  @media screen and (max-width: 770px) {
    padding: 100px 0;
}
`