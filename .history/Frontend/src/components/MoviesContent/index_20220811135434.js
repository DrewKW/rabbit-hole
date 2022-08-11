import React from 'react'
import { Column2 } from './moviesElements'
import { MoviesContainer, MoviesWrapper, MoviesRow, Column1, Column2 } from './moviesElements'

const MoviesContent = () => {
  return (
    <>
    <MoviesContainer>
    <MoviesWrapper>
    <MoviesRow>
    <Column1>
    <TextWrapper>
    <TopLine>Topline</TopLine>
    <Heading>Heading</Heading>
    <Subtitle>Subtitle</Subtitle>
    </TextWrapper>
    </Column1>
    <Column2>
    </Column2>
    </MoviesRow>
    </MoviesWrapper>
    </MoviesContainer>
    </>
  )
}

export default MoviesContent