import styled from 'styled-components'

export const Container = styled.main`
    display: flex;
`

export const Form = styled.form`
    gap: 2em;
    width: 20em;
    display: flex;
    margin-top: 5em;
    align-self: center;

    @media screen and (max-width: 400px) {
        width: 85%;
    }
`

export const Title = styled.h3`
    font-size: 1.5em;
`

export const Field = styled.div`
    width: 100%;
    position: relative;
    flex-direction: column;
`

export const Label = styled.label`
    font-weight: 500;
`

export const Input = styled.input`
    width: 100%;
    border: none;
    margin-top: 0.5em;
    padding-bottom: 0.5em;
    border-bottom: 1.5px solid #000000;

    :focus {
        outline: none;
    }

    ::placeholder {
        visibility: hidden;
    }
`

export const Button = styled.button`
    border: none;
    padding: 1em;
    display: flex;
    color: #ffffff;
    font-size: 1em;
    cursor: pointer;
    border-radius: 15px;
    align-items: center;
    transform: scale(0.9);
    background-color: #000000;
    transition-duration: 0.2s;
    transition-timing-function: linear;

    :hover:not(:disabled) {
        transform: scale(1);
    }

    :disabled {
        cursor: default;
        opacity: 0.5;
    }
`