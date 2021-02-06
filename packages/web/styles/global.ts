import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family:'Work Sans', Helvetica, 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
}

body{
  background: white;
  color:${(props) => props.theme.colors.primary.one};
}

`
