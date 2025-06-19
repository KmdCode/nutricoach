import { createStyles, css } from "antd-style";

export const useStyles = createStyles({
    SearchContainer: css`
        display: flex;
        justify-content: center;
        margin: 2rem 0;
        .ant-btn {
            color:#ffffff; 
            background-color: #1C4122;
            }
    `,
    Input: css`
        max-width:400;
        width: 100%;
        color: #1C4122;
    `,

})