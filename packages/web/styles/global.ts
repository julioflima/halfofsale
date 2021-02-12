import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
*{
  margin:0;
  padding:0;
  box-sizing:border-box;
  font-family: Helvetica, 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  font-weight: 100;

  ::-webkit-scrollbar-track {
    z-index: 999;
    background-color: transparent;
    border-radius: 1px;
  }
  ::-webkit-scrollbar {
    z-index: 999;
    width: .4rem;
    height: 0;
    background-color: transparent;
  }
  ::-webkit-scrollbar-thumb {
    z-index: 999;
    border-radius: 10px;
    background-color:  transparent;
    background-image: -webkit-gradient(
      linear,
      0 0,
      0 100%,
      color-stop(0.5, ${(props) => props.theme.colors.tertiary.two + '42'}),
      color-stop(0.5, ${(props) => props.theme.colors.tertiary.two + '47'}),
      to(#e0e0e0)
    );
  }

}

body{
  background: white;
  color:${(props) => props.theme.colors.primary.one};
}

`
