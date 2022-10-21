import styled, { css, createGlobalStyle } from 'styled-components'

export const AppContainer = styled.div`
    display: grid;
    grid-template-areas: 'nav header' 'nav content';
    grid-template-columns: 0 1fr;

    background: var(--main-bg);
    height: 100%;
    width: 100%;
    max-width: 1200px;

    @media (min-width: 992px) {
        grid-template-columns: 74px 1fr;
        grid-template-rows: auto 1fr;
        padding: 20px 0 0 20px;
    }

    & * {
        box-sizing: border-box;
        font-family: 'Montserrat';
    }
`

export const Content = styled.div`
    grid-area: content;
    background: var(--main-bg);
    color: #fff;
    margin: 0 10px 10px 10px;

    @media (min-width: 768px) {
        margin: 0 20px 20px 20px;
    }
`

export const GlobalStyle = createGlobalStyle`
    html {
        font-family: 'Montserrat', sans-serif;
        font-size: 16px;
    }

    body {
        background: var(--main-bg);
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        margin: 0;
    }

    a {
        color: white;
    }

    a:hover, a:visited, a:link, a:active {
        text-decoration: none;
    }

    .clickableSvg {
        cursor: pointer;
    }
    
    textarea {
        resize: vertical;    
    }
    
    .overflow-hidden {
        @media (max-width: 992px) {
            overflow: hidden;
        }
    }

    #root {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    :root {
        /* backgrounds */
        --main-bg: #1F354C;
        --light-blue: #345b82;
        --tint-blue: #1A2C40;
        --main-red: #fe3355;
        --main-text: #284664;
        --main-panel: rgb(15 33 51 / 30%);
        --main-blue: #2d98ff;
        --main-dark-blue: #17293A;
        --main-deep-blue: #122030;
        --main-pale-blue: #294766;
        --main-gray: #5B6E82;
        --main-dark: #0f2133;
        --separator-background: linear-gradient(90deg,rgba(94,126,155,0) 0.01%,#5f7e9c 48.96%,rgba(95,126,156,0) 100%);
        --cards-background: linear-gradient(10.22deg, #274d72 6.74%, rgba(39, 77, 114, 0.2) 120.6%);
    }

    h1, h2, h3 {
        font-weight: 600;
        margin: 0;
    }
    
    h1 {
        font-size: 1.725rem;
    
        @media (min-width: 768px) {
            font-size: 2.25rem;
        }
    }

    input[type="number"] {
        -moz-appearance: textfield;
    }
`

export const PopupMask = styled.div`
    position: absolute;
    z-index: 2;
    background: rgb(0, 0, 0);
    opacity: 0.5;
    width: 100%;
    height: 100vh;
`

export const InputStyles = ({ color }) => css`
    height: 44px;
    width: 100%;
    padding: 0 30px;
    margin: 10px 0;
    outline: none;
    border: 1px solid #294766;
    border-radius: 10px;
    background: transparent;
    color: ${color ? color : '#fff'};
    font-family: 'Montserrat';

    ::placeholder {
        color: ${color ? color : 'var(--main-gray)'};
    }
`

export const CheckboxStyles = ({ size }) => css`
    display: flex;

    input {
        position: absolute;
        z-index: -1;
        opacity: 0;
    }

    input + label {
        display: inline-flex;
        align-items: center;
        user-select: none;
        cursor: pointer;

        :before {
            content: '';
            display: inline-block;
            width: 0.875rem;

            line-height: 0.6rem;
            height: 0.875rem;
            flex-shrink: 0;
            flex-grow: 0;
            border: 1px solid #fff;
            border-radius: 4px;
            margin-right: 0.5rem;
            background-repeat: no-repeat;
            background-position: center center;
            background-size: 50% 50%;
        }
    }
    label {
        font-size: ${size === 'small' ? '0.75rem' : '1rem'};
    }

    input:checked + label {
        :before {
            content: '•';
            font-size: 2rem;
            display: flex;
            justify-content: center;
        }
    }
`

export const ScrollbarStyles = css`
    ::-webkit-scrollbar {
        width: 10px;
    }
    ::-webkit-scrollbar:horizontal {
        height: 10px;
    }

    scrollbar-width: thin;
    scrollbar-color: #274563 #16283a;

    ::-webkit-scrollbar-track:vertical {
        margin-top: 10px;
        margin-bottom: 20px;
        border-left: 4px solid #16283a;
    }

    ::-webkit-scrollbar-thumb:vertical {
        border-left: 4px solid #274563;
        background-clip: padding-box;
    }

    ::-webkit-scrollbar-track:horizontal {
        border-bottom: 6px solid transparent;
        background: #16283a;
        background-clip: padding-box;
        border-radius: 0 0 8px 8px;
    }

    ::-webkit-scrollbar-thumb:horizontal {
        background-clip: padding-box;
        border-bottom: 6px solid transparent;
        background-clip: padding-box;
        background-color: #274563;
    }

    ::-webkit-scrollbar-button {
        width: 0;
        height: 0;
        display: none;
    }

    ::-webkit-scrollbar-corner {
        background-color: transparent;
    }
`
