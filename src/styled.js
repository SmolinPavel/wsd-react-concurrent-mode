import styled, { createGlobalStyle, keyframes } from 'styled-components'

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

  &:active {
    transform: translateY(2px);
  }
`

const animateDelay = keyframes`
  to {
    visibility: visible;
  }
`

export const DelayedLoader = styled.span`
  animation: 0s linear 0.5s forwards ${animateDelay};
  visibility: hidden;
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
  display: flex;
  flex-wrap: wrap;

  label {
    cursor: pointer;
    margin: 1rem 1.5rem 1rem 0.5rem;
  }

  span {
    margin-left: 5px;
  }
`

export const StyledTextField = styled.input.attrs({ type: 'number' })`
  display: inline-block;
  width: 5rem;
  font-size: 1rem;
  height: 1.5rem;
  background: ${(props) => (props.checked ? 'salmon' : 'papayawhip')}
  border-radius: 3px;
  border: none;
  outline: none;
  padding: 2px 4px;
  transition: all 0.15s;
`
