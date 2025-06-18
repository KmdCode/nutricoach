import { createStyles } from "antd-style";

export const useStyles = createStyles(({ css }) => ({
    CardContainer: css `
        padding: 2rem;
        display: flex;
        justify-content: center;
    `,
    Card: css `
        width: 30rem;
        background-color: #A9CFB9;
    `,
    Descriptions: css `
        font-weight: 500;
    `,
    DescriptionItem: css `
        color: #ffffff;
    `,
    Spin: css `
        display: flex;
        justify-content: center;
        padding: 2rem;
        .ant-spin-dot-item {
        background-color: #1C4122;
    }
    `,
}));