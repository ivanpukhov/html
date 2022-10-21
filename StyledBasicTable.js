import styled from 'styled-components'
import { ScrollbarStyles } from '../../global/StyledLayout'

export const BasicTableContainer = styled.div`
    position: relative;
`

export const TableWrapper = styled.div`
    overflow: auto;
    border-radius: 10px;
    display: grid;
    ${ScrollbarStyles};
`

export const TableRow = styled.div`
    position: relative;
    padding: 0 18px 0 30px;

    @media (min-width: 768px) {
        :first-child {
            padding-top: 10px;
        }
        :last-child {
            padding-bottom: 10px;
        }
    }

    :not(:last-child):after {
        content: '';
        position: absolute;
        background: var(--main-bg);
        bottom: 0;
        left: 30px;
        height: 1px;
        width: calc(100% - 48px);

        @media (max-width: 768px) {
            width: calc(100% - 38px);
            left: 20px;
        }
    }

    @media (max-width: 768px) {
        flex-direction: column;
        padding: 20px;
    }
`

export const TableHeaderRow = styled.div`
    padding: 0 18px 0 30px;
`

export const TableHeader = styled.div`
    background: var(--main-pale-blue);
`

export const TableHeaderCell = styled.div`
    display: flex;
    align-items: center;
    mih-height: 40px;
    color: rgb(255 255 255 / 30%);
    font-weight: 400;
    word-break: break-word;
    padding: 12px 12px 12px 0;

    :last-child {
        padding-right: 0px;
    }

    @media (max-width: 768px) {
        :not(:last-child) {
            position: absolute;
            opacity: 0;
            top: -9999px;
            clip: rect(0 0 0 0);
            width: 1px;
            height: 1px;
            margin: -1px;
        }
    }
`

export const TableBody = styled.div`
    background: var(--main-deep-blue);
    height: 100%;
    max-height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    ${ScrollbarStyles};
`

export const TableCell = styled.div`
    display: flex;
    align-items: center;
    overflow-wrap: break-word;
    text-overflow: ellipsis;
    padding: 12px 12px 12px 0;

    :last-child {
        padding-right: 0px;
    }

    .mobile-header {
        display: none;
    }

    @media (max-width: 768px) {
        position: relative;
        align-items: inherit;
        padding: 3px 0;

        width: 100% !important;
        max-width: 90%;
        padding-left: calc(33% + 10px);

        .mobile-header {
            display: block;
            position: absolute;
            left: 0;
            width: 36%;
            white-space: nowrap;
            text-overflow: ellipsis;
            overflow: hidden;
            overflow-wrap: break-word;
            color: rgb(255 255 255 / 30%);
            font-weight: 400;
        }
    }
`

export const StyledBasicTable = styled.div`
    display: grid;
    font-size: 0.875rem;
    ${ScrollbarStyles};

    .align-left {
        justify-content: left;
    }

    .align-center {
        text-align: center;
        justify-content: center;

        @media (max-width: 768px) {
            text-align: left;
            justify-content: left;
        }
    }

    .align-right {
        justify-content: flex-end;
    }

    .svg-cell {
        justify-content: flex-end;
        :hover {
            &.white-hover {
                svg {
                    fill: #fff;
                }
            }
            &.red-hover {
                svg > path {
                    stroke: var(--main-red);
                }
            }
        }

        svg {
            width: 18px;
            height: auto;

            @media (max-width: 768px) {
                width: 24px;
            }
        }

        @media (max-width: 768px) {
            position: absolute;
            padding: 0 !important;
            width: auto !important;
            right: 20px;
            top: 20px;
        }
    }

    .text-positive {
        color: #14ff64;
    }

    & svg {
        cursor: pointer;
    }

    @media (max-width: 576px) {
        font-size: 0.75rem;
    }

    .noDataRow {
        height: 140px;
        width: 100%;
        align-items: center;
        display: flex;
        justify-content: center;
        flex-direction: initial;

        div {
            display: flex;
            height: 46px;
            align-items: center;
        }

        svg {
            width: auto;
        }
    }
`
