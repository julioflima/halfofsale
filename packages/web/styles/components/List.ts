import styled from 'styled-components'

import { FiEdit3, FiDownloadCloud, FiTrash, FiFilter } from 'react-icons/fi'

export const Container = styled.div`
  width: 100vw;
  margin: 0 3rem;
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
  overflow: auto;
  height: 85%;
  margin-top: 1rem;

  & table {
    width: 100%;
  }

  & tr {
    margin: 0 2rem;
    padding: 0 2rem;
    height: 1.7rem;
  }

  & th {
    font-size: 14px;
    text-align: left;
    position: sticky;
    margin-right: 1rem;
    top: 0;
    background-color: white;
    color: ${(props) => props.theme.colors.tertiary.two};
  }

  & th:nth-child(-n + 2) {
    min-width: 8rem;
  }

  & th:nth-child(n + 2) {
    width: fit-content;
  }
  & td:nth-child(3) {
    text-align: center;
  }

  & td {
    height: 2rem;
    width: fit-content;
    margin-right: 2rem;
    font-size: 12px;
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
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 1.3rem;
  }

  & button:hover {
    border: 1px solid ${(props) => props.theme.colors.quinary.one};
    transform: scale(1.2);
  }

  & button:hover svg {
    color: ${(props) => props.theme.colors.quinary.one};
  }
`

export const IconEdit = styled(FiEdit3)`
  height: auto;
  width: 1rem;
  display: inline-block;
  margin: 0 1rem;
  margin-right: 0;
  cursor: pointer;

  z-index: 5;

  & :hover {
    color: ${(props) => props.theme.colors.secondary.one};
    transform: scale(1.3);
  }
`
export const IconDownload = styled(FiDownloadCloud)`
  height: auto;
  width: 1rem;
  display: inline-block;
  margin: 0 0.5rem;
  z-index: 5;
  cursor: pointer;
  & :hover {
    color: ${(props) => props.theme.colors.quinary.one};
    transform: scale(1.3);
  }
`

export const IconDelete = styled(FiTrash)`
  height: auto;
  width: 1rem;
  display: inline-block;
  z-index: 5;
  cursor: pointer;
  & :hover {
    color: ${(props) => props.theme.colors.primary.one};
    transform: scale(1.3);
  }
`

export const IconFilter = styled(FiFilter)`
  font-size: 1.2rem;
  display: inline-block;
  padding-top: 0.2rem;
  color: ${(props) => props.theme.colors.secondary.one};
  z-index: 88888;
  & :hover {
    color: white;
  }
`
