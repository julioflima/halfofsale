import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

@media screen and (min-width: 768px) {
    ::-webkit-scrollbar-track {
      background-color: transparent;
      border-radius: 1px;
    }

    ::-webkit-scrollbar-corner {
      background-color: transparent;
    }

    ::-webkit-scrollbar {
      width: 5px;
      height: 5px;
      background-color: transparent;
    }

    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background-color: ${(props) => props.theme.colors.tertiary.seven};
      background-image: -webkit-gradient(
        linear,
        0 0,
        0 100%,
        color-stop(0.5, transparent),
        color-stop(0.5, transparent),
        to(transparent)
      ) !important;
    }
  }


button{
  user-select: none;
  user-drag: none;
}

* {
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
  color: white;
  -webkit-tap-highlight-color: #00000000;


  ::selection {
  color:  ${(props) => props.theme.colors.tertiary.two};
  background: ${(props) => props.theme.colors.primary.one + 'a0'} linear-gradient(0deg, ${(props) =>
  props.theme.colors.primary.one + 'a0'} 0%, ${(props) =>
  props.theme.colors.primary.one + 'a0'} 100%);
  }


}

html {
  height: 100%;
  width: 100%;
  position: fixed;
  overflow: hidden;
}


body {
  margin: 0;
  font-family: "Open Sans",-apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  min-height: 100%;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

#root{
  background: ${(props) => props.theme.colors.primary.one};
  overflow-y: hidden;
  min-height: 100%;
  display: flex;
  flex: 1;
  position: absolute;
}
`
