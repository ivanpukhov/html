import styled from 'styled-components'

export const FilterContainer = styled.div`
    display: flex;
    justify-content: flex-end;

    svg:hover {
        fill: #fff;
    }
`

export const FilterOptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    position: absolute;
    right: 0;
    top: 0;
    background: var(--light-blue);
    color: #fff;
    padding: 15px 20px;
    border-radius: 10px;
    z-index: 1;

    svg {
        width: 15px;
        margin-left: auto;
        fill: #fff;
    }
`

export const FilterOptionsList = styled.ul`
    list-style-type: none;
    padding: 0;
    margin: 0;

    li {
        display: flex;
        width: max-content;
        margin: 10px 0;
        font-weight: 300;
    }

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

    input:checked + label {
        :before {
            content: '•';
            font-size: 2rem;
            display: flex;
            justify-content: center;
        }
    }
`
