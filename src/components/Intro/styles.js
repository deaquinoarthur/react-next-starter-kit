import styled from 'styled-components'

export const Intro = styled.div.attrs({
  className: 'Intro'
})`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: #efefef;

  h1,
  p {
    text-align: center;
  }

  h1 {
    margin-bottom: 1rem;
    text-decoration: underline;
    line-height: 1.2;
    color: #002984;
  }

  p {
    margin-bottom: 3.2rem;
    color: #455a64;
  }

  img {
    width: min(40rem, 100%);
  }
`

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1.6rem;

  @media (min-width: 768px) {
    padding: 0;
  }
`
