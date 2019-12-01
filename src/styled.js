import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  body {
    box-sizing: border-box;
    font-family: sans-serif;
    color: #001f3f;
    height: 100%;
  }

  html, #root {
    height: 100%;
  }
`

export const AppWrapper = styled.div`
  background-color: ${(props) => props.inputColor || '#f1f7fa'};
  padding: 3rem;
  height: 100%;
`

export const Button = styled.button`
  font-size: 1em;
  padding: 0.5rem;
  margin: 0.5rem 0;
  text-align: center;
  background-color: ${(props) => (props.disabled ? '#DDDDDD' : '#416e87')};
  cursor: pointer;
  color: white;
  border: none;
  border-radius: 0.25rem;
  outline: none;
  transtion: 0.2s;

  &:hover {
    transform: translateY(-1px);
  }

  &:active {
    transform: translateY(1px);
  }
`

export const Header = styled.h1`
  margin: 0.5rem 0;
`

export const UnorderedList = styled.ul`
  margin: 1rem 0;
  padding-left: 2.5rem;
  list-style: none;
`

export const UnorderedListItem = styled.li`
  color: ${(props) => (props.isStale ? '#FF4136' : '#001f3f')};
  opacity: ${(props) => (props.isStale ? '0.5' : '1')};

  &:before {
    content: '😼';
    transform: ${(props) =>
      props.isStale ? 'rotate(180deg) translateX(50%)' : ''};
    transition: transform 0.5s;
    display: inline-block;
    width: 2em;
  }
`

export const SettingsWrapper = styled.div`
  margin: 0 0 1rem 0;

  label {
    cursor: pointer;
    margin-right: 1.5rem;
  }
`
