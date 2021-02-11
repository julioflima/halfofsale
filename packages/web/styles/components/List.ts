import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  overflow: hidden;
  margin: 0 5rem;
  display: flex;
  align-items: center;
  justify-content: start;
  flex-direction: column;
  height: 100%;

  & h1 {
    font-weight: 100;
    margin-top: 1rem;
    color: ${(props) => props.theme.colors.tertiary.two};
    font-size: 1.5rem;
    border-radius: 5rem;
    padding: 0.7rem;
    width: 100%;
  }
`

export const TextContainer = styled.div`
  width: 100%;
  margin-bottom: 1rem;

  & input {
    margin: 1rem 0;
    outline: none;
    width: fit-content;
    min-width: 90%;
    height: 3rem;
    border-radius: 0.5rem;
    border: 1px solid ${(props) => props.theme.colors.secondary.three};
    padding: 0.5rem;
    border-bottom-right-radius: 0px;
    border-bottom-left-radius: 0px;
    margin-bottom: revert;
  }

  & input:nth-child(2) {
    margin: 0;
    border-top: 0px;
    border-radius: 0;
    border-bottom-right-radius: 0.5rem;
    border-bottom-left-radius: 0.5rem;
  }
`

export const TableContainer = styled.div`
  width: 100%;
  & table {
    width: 100%;
  }

  & th {
    color: ${(props) => props.theme.colors.tertiary.three};
  }

  & td {
    color: ${(props) => props.theme.colors.tertiary.three};
  }
`

export const FiltersContainer = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
`

export const ButtonsFilters = styled.div`
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  height: 100%;

  & button {
    width: 2rem;
    height: 2rem;
    border: 1px solid ${(props) => props.theme.colors.secondary.one};
    border-radius: 50%;
    background-color: transparent;
    color: ${(props) => props.theme.colors.secondary.one};
    outline: none;
    cursor: pointer;
    outline: none;
  }

  & button:hover {
    background: linear-gradient(
      225deg,
      ${(props) => props.theme.colors.primary.one + 'e0'} 0%,
      ${(props) => props.theme.colors.secondary.one + 'e0'} 100%
    );
  }
`
