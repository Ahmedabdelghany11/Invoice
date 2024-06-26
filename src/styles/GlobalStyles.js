import {createGlobalStyle} from "styled-components"

const GlobalStyles = createGlobalStyle`
:root {
  &, &.light-mode {
    --main-color: #f1f4f9;
    --secondary-color: #fff;
    --text-color: #141625;
  }
  
  &, &.dark-mode {
    --main-color: #141625;
    --secondary-color: #1f213a;
    --text-color: #fff;
  }

  --overlay-background: rgba(0, 0, 0, 0.6);
  
  --header-color: #1f213a;

  --third-color: #868bb5;

  --logo-dark-color: #7c5df9;
  --logo-light-color: #9278ff;

  --paid-color: #40dda6;
  --paid-bg: rgb(64 221 166 / 0.2);

  --pending-color: #f78d00;
  --pending-bg: rgb(247 141 0 / 0.2);

  --draft-color: #e2e4fb;
  --draft-bg: rgb(226 228 251 / 0.2);

  --main-transition: 0.3s
}

* {
  transition: var(--main-transition);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
  transition: var(--main-transition);
}

*:disabled {
  cursor: not-allowed;
}

html {
  scroll-behavior: smooth;
  font-size: 62.5%;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  width: 100%;
  min-height: 100vh;
  font-size: 1.6rem;
  background-color: var(--main-color);
  color: var(--text-color);
  position: relative;
}

a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

a:focus-visible,
select:focus-visible,
input:focus-visible,
button:focus-visible,
textarea:focus-visible {
    border: none;
    outline: none;
}

a:focus,
select:focus,
textarea:focus,
input:focus,
input:focus {
    outline: none;
}

img,
svg,
a,
li,
button {
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;
}

img {
  max-width: 100%;
}

button {
  border: none
}

::-webkit-scrollbar {
    width: 8px;
}

::-webkit-scrollbar-track {
  background-color: var(--secondary-color);
}

::-webkit-scrollbar-thumb {
  background-color: var(--third-color);
  box-shadow: 0 0 4px 1px var(--main-color) inset;
  border-radius: 5px;
  transition: var(--main-transition);
}

::-webkit-scrollbar-thumb:hover {
  box-shadow: 0 0 6px 1px var(--main-color) inset;
}

#root {
  height: 100%;
  width: 100%;
}
`;

export default GlobalStyles;