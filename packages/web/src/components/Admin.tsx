import { IconBack, TableContainer, Container, IconAdmin } from '../../styles/components/Admin'

export const Admin = (props) => {
  const [, setUserScreen] = props.stateUserScreen

  return (
    <Container>
      <h1>
        <span>
          <IconBack onClick={() => setUserScreen('sign_in')} />
        </span>
        Admin
      </h1>

      <TableContainer>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Username</th>
              <th>&nbsp;</th>
              <th>&nbsp;</th>
              <th>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Julio Cesar Ferreira Lima</td>
              <td>juliolima</td>
              <td>
                <IconAdmin />
              </td>
            </tr>
          </tbody>
        </table>
      </TableContainer>
    </Container>
  )
}
