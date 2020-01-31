import styled from 'styled-components'

export const Container = styled.header`
    height: 60px;
    background-color: ${ props => props.theme.colors.primary };
    color: ${ props => props.theme.colors.text };
    font-weight: bold;
    font-family: sans-serif;
    display: flex;
    align-items: center;
    padding: 0 30px;
    justify-content: space-between;
`