import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
    Container: css`
        margin: 4rem;
    `,
    Button: css `
        background-color: #1C4122;
        color: #ffffff;
    `,
    Card: css`
        background-color: #A9CFB9;
        width:100%; 
    `,
     NewClient: css `
        background-color: #1C4122;
        color: #ffffff;
        margin-bottom: 1rem;
    `,
    Typography: css`
        font-size: 2rem;
        font-weight: 300;
        margin: 1rem 0;
    `,
    CancelButton: css `
        background-color: #000000;
        color: #ffffff;
    `,
    Input: css `
        width: 100%;
    `,
    heading: css `
        font-size: 0.8rem;
        font-weight: 700;
    `,
    Pagination: css `
        text-align: center;
        margin-top: 2rem;   
    `,
    PaginationButton: css`
    `,
    CustomModal: css`
    .ant-modal-content {
      background-color: #c8dfc4 
    }

    .ant-modal-header {
      background-color: #c8dfc4
    }

    .ant-modal-title {
      color: #000;
    }
  `,
})