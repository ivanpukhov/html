import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export const NavigationContainer = styled.div`
    display: flex;
    grid-area: nav;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 2;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    background: var(--main-bg);
    transform: translateX(-101%);

    &.open {
        transform: translateX(0);
    }

    @media (min-width: 992px) {
        position: relative;
        transform: translateX(0);
    }
`

export const NavigationSearchContainer = styled.div`
    margin-bottom: 10px;
    @media (min-width: 576px) {
        display: none;
    }
`

export const NavigationHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    min-height: 64px;
    padding: 0 20px;

    svg {
        margin-left: 15px;
        width: 32px;
    }

    @media (min-width: 576px) {
        padding: 15px;
        border: 1px solid var(--main-dark-blue);
        border-bottom: none;
        border-radius: 10px 10px 0 0;
        background: none;
    }

    @media (min-width: 992px) {
        svg {
            margin: 8px auto 0 auto;
            width: auto;
            height: 46px;
        }
    }

    color: #fff;
`

export const NavClose = styled.div`
    cursor: pointer;

    @media (min-width: 992px) {
        display: none;
    }
`

export const NavigationMenu = styled.nav`
    padding: 20px 20px 80px 20px;
    overflow: auto;
    height: inherit;

    @media (min-width: 992px) {
        overflow: unset;
        padding: 0;
    }
`

export const NavIconContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 60px;
    height: 60px;
    border-radius: 10px;
    background: var(--main-dark-blue);
    svg {
        height: 50%;
    }

    margin: 0 20px 0 0;

    @media (min-width: 992px) {
        min-width: unset;
        width: 46px;
        height: 46px;
        border-radius: 10px;
        margin: 0 0 5px 0;

        & svg {
            height: 50%;
        }
    }
`

export const NavItem = styled(NavLink)`
    display: flex;
    width: auto;
    align-items: center;
    color: #fff;
    opacity: 0.5;
    font-weight: 500;
    font-size: 1.125rem;
    text-decoration: none;
    text-transform: uppercase;

    @media (min-width: 992px) {
        flex-direction: column;
        font-size: ${props => (props.islargelabel ? '0.5rem' : '0.75rem')};
        margin: 0;
        text-align: center;
    }

    &.active,
    :hover {
        opacity: 1;

        & svg > path {
            fill: white;
        }
    }
`

export const NavItemContainer = styled.div`
    display: flex;
    align-items: center;
    padding: 10px 0;

    border-radius: ${props => (props.special ? '0 0 10px 10px' : 'unset')};

    ${NavIconContainer} {
        background: ${props => (props.special ? 'var(--main-blue)' : 'var(--main-dark-blue)')};
    }

    & > * {
        ${props => (props.special ? `opacity: 1;` : null)};
    }

    @media (min-width: 992px) {
        margin: ${props => (props.special ? '44px 0 0 0' : '0 0 25px 0')};
        background: ${props => (props.special ? 'var(--main-blue)' : 'unset')};
        padding: ${props => (props.special ? '5px 0 10px 0' : '0')};
        flex-direction: column;

        span {
        }
    }
`

export const NavSection = styled.div`
    @media (min-width: 992px) {
        border: 1px solid var(--main-dark-blue);
        padding: ${props => (props.firstColumn ? '42px 8px 0 8px' : '15px 0 0 0')};
        border-top: ${props => (props.firstColumn ? 'none' : '1px solid var(--main-dark-blue)')};
        border-radius: ${props => (props.firstColumn ? '0 0 10px 10px' : '10px')};
    }
`
