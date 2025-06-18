import { createStyles } from "antd-style";

export const useStyles = createStyles(({ css }) => ({
    Spin: css `
        display: flex;
        justify-content: center;
        padding: 2rem;
        .ant-spin-dot-item {
        background-color: #1C4122;
    }
    `,
}));