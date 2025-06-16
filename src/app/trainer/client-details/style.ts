import { createStyles } from "antd-style";

export const useStyles = createStyles(({ css }) => ({
  container: css`
    max-width: 100%;
    padding: 2rem;
    font-family: sans-serif;
  `,
  clientDetails: css`
    background: #ffffff;
    padding: 1.5rem;
    border: 1px solid #e0e0e0;
    border-radius: 8px;
    margin-bottom: 2rem;
  `,
  fullWidthMealCard: css`
    width: 100%;
    margin-bottom: 2rem;
    background: #ffffff;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
  `,
  itemList: css`
    list-style: disc;
    padding-left: 2rem;
    font-size: 0.95rem;
  `,
}));
