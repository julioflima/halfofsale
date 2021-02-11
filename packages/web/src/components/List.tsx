import {
  FiltersContainer,
  TableContainer,
  Container,
  TextContainer,
  ButtonsFilters,
} from '../../styles/components/List'

export const List = () => {
  return (
    <Container>
      <h1>List</h1>
      <FiltersContainer>
        <TextContainer>
          <input type="text" placeholder={'Search by name project.'} />
          <input type="text" placeholder={'Search by compatible board.'} />
        </TextContainer>
        <ButtonsFilters>
          <button></button>
          <button></button>
        </ButtonsFilters>
      </FiltersContainer>

      <TableContainer>
        <table>
          <thead>
            <tr>
              <th>Col1</th>
              <th>Col2</th>
              <th>Col3</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>info</td>
              <td>info</td>
              <td>info</td>
              <td>info</td>
              <td>info</td>
            </tr>
          </tbody>
        </table>
      </TableContainer>
    </Container>
  )
}
